import React, { useState, useEffect } from "react";
import { Row, Col, Container, Input } from "reactstrap";
import { Tab, TabList, Tabs, Card, CardHeader, Flex, Avatar, Box, CardBody, IconButton, Image, Text, Heading, CardFooter, Button, Divider, Stack, AvatarBadge } from "@chakra-ui/react";
import { MdOutlineOndemandVideo, MdOutlineHistory, MdUpdate, MdVideoCameraFront } from "react-icons/md";
import { FaUserFriends, FaBookOpen, FaYoutube, FaPhotoVideo } from "react-icons/fa";
import { HiUserGroup } from "react-icons/hi";
import { BiStore, BiLike, BiShare, BiChat } from "react-icons/bi";
import { BsThreeDotsVertical } from "react-icons/bs";
import { RiVideoAddFill } from "react-icons/ri";
import { SlPresent } from "react-icons/sl";
import Navbar from "../components/Navbar";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Axios from "axios";
import { API_URL } from "../helper";

function Landing() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const time = Date.now();

  const { username } = useSelector((state) => {
    return {
      username: state.userReducer.username,
    };
  });
  const [upload, setUpload] = useState([]);
  useEffect(() => {
    Axios.get(API_URL + "/content").then((response) => {
      setUpload(response.data);
    });
  }, []);
  return (
    <>
      <Navbar />
      <Row className="my-4 p-5  " style={{ overflowY: "scroll" }}>
        <Col md="3" style={{ background: "#F0F2F5" }}>
          <ul className="list-unstyled mx-3">
            <li className="d-flex my-3 align-items-center">
              <div>
                <Avatar className="me-2" color="#8190A3" />
              </div>
              <div className="m-3">{username}</div>
            </li>
            <li className="d-flex my-3 align-items-center">
              <div>
                <FaUserFriends size={24} className="me-2" color="#8190A3" />
              </div>
              <div className="mx-3">Teman</div>
            </li>
            <li className="d-flex my-3 align-items-center">
              <div>
                <MdUpdate size={24} className="me-2" color="#8190A3" />
              </div>
              <div className="mx-3">Update</div>
            </li>
            <li className="d-flex my-3 align-items-center">
              <div>
                <HiUserGroup size={24} className="me-2" color="#8190A3" />
              </div>
              <div className="mx-3">Grup</div>
            </li>
            <li className="d-flex my-3 align-items-center">
              <div>
                <BiStore size={24} className="me-2" color="#8190A3" />
              </div>
              <div className="mx-3">Market place</div>
            </li>
            <li className="d-flex my-3 align-items-center">
              <div>
                <MdOutlineOndemandVideo size={24} className="me-2" color="#8190A3" />
              </div>
              <div className="mx-3">Watch</div>
            </li>
            <li className="d-flex my-3 align-items-center">
              <div>
                <MdOutlineHistory size={24} className="me-2" color="#8190A3" />
              </div>
              <div className="mx-3">Kenangan</div>
            </li>
          </ul>
        </Col>
        <Col md="6" style={{ background: "#F0F2F5" }} className="mb-3">
          <Container style={{ background: "#FFFFFF", borderRadius: "10px" }} className="my-3">
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
            <Stack direction="row">
              <Image boxSize="150px" objectFit="cover" src="https://bit.ly/dan-abramov" alt="Dan Abramov" />
              <Image boxSize="150px" objectFit="cover" src="https://bit.ly/dan-abramov" alt="Dan Abramov" />
              <Image boxSize="150px" objectFit="cover" src="https://bit.ly/dan-abramov" alt="Dan Abramov" />
            </Stack>
          </Container>

          <Container style={{ background: "#FFFFFF", borderRadius: "10px" }} className="my-3 pt-3">
            <Link to="/content">
              <Button className="w-100 my-3"> Apa yang anda pikirkan, {username} ?</Button>
            </Link>

            <Divider orientation="horizontal" />
            <Link to="/content">
              <Button className="w-50" style={{ color: "black" }}>
                <RiVideoAddFill className="mx-2" />
                <p>Video</p>
              </Button>
            </Link>
            <Link to="/content">
              <Button className="w-50 my-3" style={{ color: "black" }}>
                <FaPhotoVideo className="mx-2" />
                <p>Foto</p>
              </Button>
            </Link>
          </Container>
          {upload.map((val, key) => {
            return (
              <Container className="my-3 py-3 " style={{ background: "#FFFFFF", borderRadius: "10px" }}>
                <Card>
                  <CardHeader>
                    <Flex spacing="4">
                      <Flex flex="1" gap="4" alignItems="center" flexWrap="wrap">
                        <Avatar name="Segun Adebayo" src="https://bit.ly/sage-adebayo" />

                        <Box>
                          <Heading size="sm">{val.username}</Heading>

                          <Text>{val.createdate}</Text>
                        </Box>
                      </Flex>
                      <IconButton variant="ghost" colorScheme="gray" aria-label="See menu" icon={<BsThreeDotsVertical />} />
                    </Flex>
                  </CardHeader>
                  <CardBody>
                    <Text>{val.description}</Text>
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
                    <Divider />
                    <Button flex="1" variant="ghost" leftIcon={<BiLike />}>
                      Like
                      <p className="m-2">{val.numlike}</p>
                    </Button>
                    <Button flex="1" variant="ghost" leftIcon={<BiChat />}>
                      Comment
                    </Button>
                    <Button flex="1" variant="ghost" leftIcon={<BiShare />}>
                      Share
                    </Button>
                    <Divider />
                  </CardFooter>
                </Card>
                <Container className="my-3" style={{ background: "#F0F2F5", borderRadius: "10px" }}>
                  <Link className="d-flex justify-content-start">{val.username}</Link>
                  <Text className="d-flex justify-content-start">{val.comment}</Text>
                </Container>
              </Container>
            );
          })}
        </Col>
        <Col md="3" style={{ background: "#F0F2F5" }}>
          <Container>
            <Text as="b" className=" d-flex my-3 align-items-center">
              Ulang Tahun
            </Text>
            <ul className="list-unstyled mx-3">
              <li className="d-flex my-3 align-items-center">
                <div>
                  <SlPresent size={24} className="me-2" color="#8190A3" />
                </div>
                <div className="me-3">Selena</div>
              </li>
              <li className="d-flex my-3 align-items-center">
                <div>
                  <SlPresent size={24} className="me-2" color="#8190A3" />
                </div>
                <div className="me-3">Nindy</div>
              </li>
              <li className="d-flex my-3 align-items-center">
                <div>
                  <SlPresent size={24} className="me-2" color="#8190A3" />
                </div>
                <div className="me-3">Yogi</div>
              </li>
            </ul>
            <Divider className="my-2" />
          </Container>
          <Container>
            <Text as="b" className="d-flex my-3 align-items-center">
              Kontak
            </Text>
            <ul list-unstyled mx-3>
              <li className="d-flex my-3 align-items-center">
                <div>
                  <Avatar size="sm" className="me-2" color="#8190A3" />
                </div>
                <div className="mx-3">Halim</div>
              </li>
              <li className="d-flex my-3 align-items-center">
                <div>
                  <Avatar size="sm" className="me-2" color="#8190A3" />
                </div>
                <div className="mx-3">Fauzi</div>
              </li>

              <li className="d-flex my-3 align-items-center">
                <div>
                  <Avatar size="sm" className="me-2" color="#8190A3" />
                </div>
                <div className="mx-3">Mustofa</div>
              </li>
            </ul>
          </Container>
        </Col>
      </Row>
    </>
  );
}

export default Landing;
