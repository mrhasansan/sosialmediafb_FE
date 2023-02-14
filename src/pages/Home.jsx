import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { Row, Col, Container } from "reactstrap";
import { Tab, TabList, Tabs, Image, Button, Text, Card, CardHeader, Flex, Avatar, Heading, Box, CardBody, IconButton, CardFooter, AvatarBadge, Divider } from "@chakra-ui/react";
import { MdOutlineOndemandVideo, MdOutlineHistory, MdUpdate, MdVideoCameraFront } from "react-icons/md";
import { FaUserFriends, FaBookOpen, FaYoutube, FaPhotoVideo, FaHome, FaUserCircle } from "react-icons/fa";
import { HiUserGroup, HiOutlineAcademicCap, HiOutlineRss, HiOutlineMailOpen } from "react-icons/hi";
import { BiStore, BiLike, BiShare, BiChat, BiTimeFive, BiOutline } from "react-icons/bi";
import { BsThreeDotsVertical } from "react-icons/bs";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import Axios from "axios";
import { API_URL } from "../helper";
function Home() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { username, profile, phone, fullname, bio, email } = useSelector((state) => {
    return {
      username: state.userReducer.username,
      profile: state.userReducer.profile,
      phone: state.userReducer.phone,
      fullname: state.userReducer.fullname,
      bio: state.userReducer.bio,
      email: state.userReducer.email,
    };
  });

  return (
    <>
      <Navbar />
      <Row className="my-4 pt-5 d-flex justify-content-start mx-5 px-5 " style={{ background: "#FFFFFF" }}>
        <Avatar name="Profile" size="2xl" className="my-3" src={API_URL + profile} />
        <Text as="b" className="d-flex justify-content-start">
          {username}
        </Text>
        {bio}
        <Divider />
      </Row>
      <Row className="my-4 p-5 d-flex justify-content-center " style={{ background: "#F0F2F5" }}>
        <Col md="4" style={{ background: "#FFFFFF" }}>
          <Text className="h4 d-flex justify-content-start pt-2">Intro</Text>
          <div className="py-2">
            <Button style={{ background: "#F0F2F5" }} className="w-100 " onClick={() => navigate(`/profile`)}>
              Tambahkan Biografi
            </Button>
          </div>

          <ul className="list-unstyled mx-3">
            <li className="d-flex my-3 align-items-center">
              <div>
                <FaUserCircle size={24} className="me-2" color="#8190A3" />
              </div>
              <div className="mx-3">{fullname}</div>
            </li>
            <li className="d-flex my-3 align-items-center">
              <div>
                <HiOutlineMailOpen size={24} className="me-2" color="#8190A3" />
              </div>
              <div className="mx-3">{email}</div>
            </li>
            <li className="d-flex my-3 align-items-center">
              <div>
                <HiOutlineAcademicCap size={24} className="me-2" color="#8190A3" />
              </div>
              <div className="mx-3">Purwadhika School</div>
            </li>
            <li className="d-flex my-3 align-items-center">
              <div>
                <FaHome size={24} className="me-2" color="#8190A3" />
              </div>
              <div className="mx-3">Surabaya,Indonesia</div>
            </li>
            <li className="d-flex my-3 align-items-center">
              <div>
                <BiTimeFive size={24} className="me-2" color="#8190A3" />
              </div>
              <div className="mx-3">Sejak November 2022</div>
            </li>
            <li className="d-flex my-3 align-items-center">
              <div>
                <HiOutlineRss size={24} className="me-2" color="#8190A3" />
              </div>
              <div className="mx-3">Diikuti oleh 102 orang</div>
            </li>
          </ul>
          <div className="pt-3">
            <Button style={{ background: "#F0F2F5" }} className="w-100 ">
              Edit Perincian
            </Button>
          </div>
          <div className="pt-3">
            <Button style={{ background: "#F0F2F5" }} className="w-100 ">
              Tambahkan Hobi
            </Button>
          </div>
          <div className="py-3">
            <Button style={{ background: "#F0F2F5" }} className="w-100 ">
              Tambahkan Unggulan
            </Button>
          </div>
        </Col>
        <Col md="6" style={{ background: "#F0F2F5" }}>
          <Container style={{ background: "#FFFFFF", borderRadius: "10px" }} className="p-3">
            <Tabs>
              <TabList className="d-flex justify-content-around">
                <Tab>
                  <FaBookOpen className="me-2" />
                  <p>Cerita</p>
                </Tab>
                <Tab>
                  <FaYoutube className="me-2" />
                  <p> Reels</p>
                </Tab>
                <Tab>
                  <MdVideoCameraFront className="me-2" />
                  <p> Forum</p>
                </Tab>
              </TabList>
            </Tabs>
          </Container>
          <Container className="my-3 p-3 d-flex justify-content-center" style={{ background: "#FFFFFF", borderRadius: "10px" }}>
            <Card maxW="md">
              <CardHeader>
                <Flex spacing="4">
                  <Flex flex="1" gap="4" alignItems="center" flexWrap="wrap">
                    <Avatar name="Segun Adebayo" src="https://bit.ly/sage-adebayo" />
                    <Box>
                      <Heading size="sm">Hasansan</Heading>
                      <Text>Chemistry lLovers</Text>
                    </Box>
                  </Flex>
                  <IconButton variant="ghost" colorScheme="gray" aria-label="See menu" icon={<BsThreeDotsVertical />} />
                </Flex>
              </CardHeader>
              <CardBody>
                <Text> Belajar di Purwadhika harus bekerja keras agar bisa lulus</Text>
              </CardBody>
              <Image objectFit="cover" src="https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" alt="Chakra UI" />
              <CardFooter
                justify="space-between"
                flexWrap="wrap"
                sx={{
                  "& > button": {
                    minW: "136px",
                  },
                }}
              >
                <Button flex="1" variant="ghost" leftIcon={<BiLike />}>
                  Like
                </Button>
                <Button flex="1" variant="ghost" leftIcon={<BiChat />}>
                  Comment
                </Button>
                <Button flex="1" variant="ghost" leftIcon={<BiShare />}>
                  Share
                </Button>
              </CardFooter>
            </Card>
          </Container>
          <Container className="my-3 p-3 d-flex justify-content-center" style={{ background: "#FFFFFF", borderRadius: "10px" }}>
            <Card maxW="md">
              <CardHeader>
                <Flex spacing="4">
                  <Flex flex="1" gap="4" alignItems="center" flexWrap="wrap">
                    <Avatar name="Segun Adebayo" src="https://bit.ly/sage-adebayo" />
                    <Box>
                      <Heading size="sm">Hasan</Heading>
                      <Text>Chemistry Lovers</Text>
                    </Box>
                  </Flex>
                  <IconButton variant="ghost" colorScheme="gray" aria-label="See menu" icon={<BsThreeDotsVertical />} />
                </Flex>
              </CardHeader>
              <CardBody>
                <Text> Belajar di Purwadhika harus bekerja keras agar bisa lulus</Text>
              </CardBody>
              <Image objectFit="cover" src="https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" alt="Chakra UI" />
              <CardFooter
                justify="space-between"
                flexWrap="wrap"
                sx={{
                  "& > button": {
                    minW: "136px",
                  },
                }}
              >
                <Button flex="1" variant="ghost" leftIcon={<BiLike />}>
                  Like
                </Button>
                <Button flex="1" variant="ghost" leftIcon={<BiChat />}>
                  Comment
                </Button>
                <Button flex="1" variant="ghost" leftIcon={<BiShare />}>
                  Share
                </Button>
              </CardFooter>
            </Card>
          </Container>
        </Col>
      </Row>
    </>
  );
}

export default Home;
