import React, { useState, useEffect } from "react";
import { Avatar, Button, Container, Divider, Input, InputGroup, Text, Textarea } from "@chakra-ui/react";
import Axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import { API_URL } from "../helper";
import { CgCloseO } from "react-icons/cg";
import { Link, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

function Profil() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  // console.log("params", id); // cek params router dalam bnetuk objek

  const { username, profile, phone, fullname, bio } = useSelector((state) => {
    return {
      username: state.userReducer.username,
      profile: state.userReducer.profile,
      phone: state.userReducer.phone,
      fullname: state.userReducer.fullname,
      bio: state.userReducer.bio,
    };
  });

  const [selecImg, setSelectImg] = useState(null);
  const [fullnameinput, setFullnameInput] = useState("");
  const [bioinput, setBioInput] = useState("");

  const onBtnSave = async () => {
    try {
      let token = localStorage.getItem("socialmediafb");
      const formData = new FormData(); //constructur js untuk pengambilan file data
      formData.append("images", selecImg);
      formData.append("data", JSON.stringify({ fullnameinput, bioinput }));
      let res = await Axios.patch(API_URL + `/users/profile`, formData, {
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

  return (
    <form>
      <Container className="my-4 ">
        <h1> params Id : {id}</h1>;
        <Text as="b" fontSize="xl" className="d-flex justify-content-between">
          <p> Edit Profile</p>
          <Link to="/">
            <CgCloseO size={28} />
          </Link>
        </Text>
        <Divider />
        <Text as="b" fontSize="xl" className="d-flex justify-content-start py-3">
          <p>FullName</p>
        </Text>
        <InputGroup>
          <Input placeholder="Input Fullname" onChange={(e) => setFullnameInput(e.target.value)} />
        </InputGroup>
        <Text as="b" fontSize="xl" className="d-flex justify-content-start py-3">
          <p>Foto Profile</p>
        </Text>
        <Avatar name="Profile" size="2xl" className="my-3" src={API_URL + profile} />
        <InputGroup className="align-items-end">
          <Input type="file" onChange={(e) => setSelectImg(e.target.files[0])} />
          <Button type="button" onClick={onBtnSave}>
            Save
          </Button>
        </InputGroup>
        <Text as="b" fontSize="xl" className="d-flex justify-content-start py-3">
          <p>Bio</p>
        </Text>
        <InputGroup>
          <Textarea placeholder="Ceritakan tentang diri Anda...." onChange={(e) => setBioInput(e.target.value)} />
        </InputGroup>
        <div className=" d-flex justify-content-center py-3">
          <img src="https://static.xx.fbcdn.net/rsrc.php/v3/y7/r/alK0zaYLJgf.png?_nc_eui2=AeE0zWoSQpPvCvphFP01PR2LZL8hx3oBInNkvyHHegEicwk10BpmDHJQw1eKTKxXNQYMkX2i4hd9W2C3HrLZN4LV" alt="" style={{ width: "334px", height: "192px" }} />
        </div>
        <Text className="p-3 d-flex justify-content-center">Unggulkan foto dan cerita favorit Anda di sini untuk dilihat semua teman.</Text>
        <Button className="w-100" onClick={onBtnSave}>
          Update Profile
        </Button>
      </Container>
    </form>
  );
}

export default Profil;
