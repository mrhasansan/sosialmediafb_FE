import React from "react";
import { Col, Row, Label, Input, Button, DropdownItem, InputGroup, InputGroupText } from "reactstrap";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useState } from "react";
import { API_URL } from "../helper";
import Axios from "axios";
import { loginAction } from "../actions/userAction";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const [inputusername, setInputUsername] = useState("");
  const [inputpassword, setInputPassword] = useState("");
  const [visible, setVisible] = useState("password");

  const onVisibility = () => {
    if (visible == "password") {
      setVisible("text");
    } else if (visible == "text") {
      setVisible("password");
    }
  };

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onBtnLogin = () => {
    Axios.post(API_URL + `/users/login`, {
      username: inputusername,
      password: inputpassword,
    })
      .then((response) => {
        console.log(response.data);
        dispatch(loginAction(response.data));
        localStorage.setItem("socialmediafb", response.data.token);
        navigate("/", { replace: true });
      })
      .catch((error) => {
        if (!error.response.data.success) {
          alert(error.response.data.message);
        }
        console.log("check error", error);
      });
  };
  return (
    <Row style={{ background: "#F0F2F5" }} className="m-3 p-4 ">
      <Col xs="12" md="6">
        <p className="h1" style={{ color: "#1A77F2" }}>
          Facebook
        </p>
        <p className="h4"> Facebook helps you connect and share with the people in your life.</p>
      </Col>
      <Col xs="12" md="6" style={{ background: "#FFFFFF" }} className="rounded">
        <InputGroup>
          <Input md={4} placeholder="input username" type="text" className="my-3" onChange={(e) => setInputUsername(e.target.value)} />
        </InputGroup>
        <InputGroup>
          <Input placeholder="input password" type={visible} md={4} onChange={(e) => setInputPassword(e.target.value)} />
          <InputGroupText className="bg-transparent " onClick={onVisibility}>
            {visible == "password" ? <AiOutlineEye size={26} /> : <AiOutlineEyeInvisible size={26} />}
          </InputGroupText>
        </InputGroup>

        <Col className="justify-content-center my-4">
          <Button className="w-100 " style={{ background: "#192D71" }} onClick={onBtnLogin}>
            Sign In
          </Button>
          <Label className="mt-2">Forgotten password?</Label>
          <DropdownItem divider className="m-0" />
        </Col>

        <Col className="justify-content-center my-3 ">
          <Link to="/register">
            <Button style={{ background: "#192D71" }}>Create new account</Button>
          </Link>
        </Col>
      </Col>
    </Row>
  );
}

export default Login;
