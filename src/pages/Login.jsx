import React from "react";
import { Col, Row, Label, Input, Button, DropdownItem, InputGroup, InputGroupText } from "reactstrap";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useState } from "react";
import { FormControl, FormLabel, FormHelperText, FormErrorMessage, Tooltip } from "@chakra-ui/react";
import { API_URL } from "../helper";
import Axios from "axios";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [visible, setVisible] = useState("password");

  const isError = username === "";
  const onBtnLogin = () => {
    alert(`password ${password} dan username ${username}`);
  };

  const onVisibility = () => {
    if (visible == "password") {
      setVisible("text");
    } else if (visible == "text") {
      setVisible("password");
    }
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
        <FormControl>
          <Input placeholder="input username" type="text" md={4} className="my-3" onChange={(e) => setUsername(e.target.value)} />
          {!isError ? <FormHelperText>Enter the email you'd like to receive the newsletter on.</FormHelperText> : <FormErrorMessage>Email is required.</FormErrorMessage>}
        </FormControl>
        <InputGroup>
          <Input placeholder=" input password" type={visible} md={4} onChange={(e) => setPassword(e.target.value)} />
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
          <Button style={{ background: "#192D71" }}>Create new account</Button>
        </Col>
      </Col>
    </Row>
  );
}

export default Login;
