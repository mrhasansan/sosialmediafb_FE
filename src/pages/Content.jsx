import React, { useState, useEffect } from "react";
import { Container, Card, CardHeader, Flex, Avatar, Box, Text, IconButton, CardBody, Image, Button, Heading, CardFooter, Input, Textarea, Divider, Select } from "@chakra-ui/react";
import { API_URL } from "../helper";
import { BiStore, BiLike, BiShare, BiChat } from "react-icons/bi";
import { BsThreeDotsVertical } from "react-icons/bs";
import Axios from "axios";
import { FaGlobeAmericas } from "react-icons/fa";
import { InputGroup } from "reactstrap";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { CgCloseO } from "react-icons/cg";

function Content() {
  const [description, setDescription] = useState("");
  const [numlike, setNumlike] = useState(0);
  const [comment, setComment] = useState("");
  const [selecImg, setSelectImg] = useState(null);
  const [upload, setUpload] = useState([]);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { username, profile, phone, fullname, bio } = useSelector((state) => {
    return {
      username: state.userReducer.username,
      profile: state.userReducer.profile,
      phone: state.userReducer.phone,
      fullname: state.userReducer.fullname,
      bio: state.userReducer.bio,
    };
  });

  const onBtnSave = async () => {
    try {
      let token = localStorage.getItem("socialmediafb");
      const formData = new FormData(); //constructur js untuk pengambilan file data
      formData.append("images", selecImg);
      let res = await Axios.post(API_URL + `/content/imgstatus`, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (res.data.success) {
        alert(res.data.message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const upContent = () => {
    Axios.post(API_URL + `/content/status`, {
      username,
      numlike,
      description,
      comment,
      selecImg,
    })
      .then((response) => {
        console.log(response.data);
        alert("update postingan berhasil");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <Container className="my-3" style={{ background: "#FFFFFF", borderRadius: "10px" }}>
        <Text as="b" className="my-3 h5 d-flex justify-content-between ">
          <p>Buat Postingan</p>
          <Link to="/">
            <CgCloseO size={28} />
          </Link>
        </Text>

        <Divider className="my-3" />

        <Flex flex="1" gap="4" alignItems="center" flexWrap="wrap">
          <Avatar name="Segun Adebayo" src={API_URL + profile} />

          <Box>
            <Heading size="sm">{username}</Heading>
            <FaGlobeAmericas size={18} />
          </Box>
        </Flex>

        <Textarea
          type="text"
          placeholder="Description..."
          onChange={(event) => {
            setDescription(event.target.value);
          }}
          className="my-3"
        />

        <InputGroup className="align-items-end">
          <Input type="file" onChange={(e) => setSelectImg(e.target.files[0])} />
          <Button type="button" onClick={onBtnSave}>
            Save
          </Button>
        </InputGroup>

        <Button onClick={upContent} className="w-100 my-3">
          Kirim
        </Button>
      </Container>
    </div>
  );
}

export default Content;
