import React from "react";
import { Row, Col, Container, Input } from "reactstrap";
import { Tab, TabList, Tabs, Card, CardHeader, Flex, Avatar, Box, CardBody, IconButton, Image, Text, Heading, CardFooter, Button, Divider, Stack } from "@chakra-ui/react";
import { MdOutlineOndemandVideo, MdOutlineHistory, MdUpdate, MdVideoCameraFront } from "react-icons/md";

import { FaUserFriends, FaBookOpen, FaYoutube, FaPhotoVideo } from "react-icons/fa";
import { HiUserGroup } from "react-icons/hi";
import { BiStore, BiLike, BiShare, BiChat } from "react-icons/bi";
import { BsThreeDotsVertical } from "react-icons/bs";
import { RiVideoAddFill } from "react-icons/ri";

function Landing() {
  return (
    <>
      <Row className="mx-3 p-5">
        <Col md="3" style={{ background: "#F0F2F5", height: "1000px" }}>
          <ul className="list-unstyled mx-3">
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
          <Container style={{ background: "#FFFFFF", borderRadius: "10px" }}>
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
            <Input placeholder="Apa yang anda pikirkan" />
            <Divider orientation="horizontal" />
            <Button colorScheme="whiteAlpha" className="w-50" style={{ color: "black" }}>
              <RiVideoAddFill className="mx-2" />
              <p> Video</p>
            </Button>
            <Button colorScheme="whiteAlpha" className="w-50" style={{ color: "black" }}>
              <FaPhotoVideo className="mx-2" />
              <p>Foto</p>
            </Button>
          </Container>
          <Container className="my-3" style={{ background: "#FFFFFF", borderRadius: "10px" }}>
            <Card maxW="md">
              <CardHeader>
                <Flex spacing="4">
                  <Flex flex="1" gap="4" alignItems="center" flexWrap="wrap">
                    <Avatar name="Segun Adebayo" src="https://bit.ly/sage-adebayo" />

                    <Box>
                      <Heading size="sm">Segun Adebayo</Heading>
                      <Text>Creator, Chakra UI</Text>
                    </Box>
                  </Flex>
                  <IconButton variant="ghost" colorScheme="gray" aria-label="See menu" icon={<BsThreeDotsVertical />} />
                </Flex>
              </CardHeader>
              <CardBody>
                <Text>With Chakra UI, I wanted to sync the speed of development with the speed of design. I wanted the developer to be just as excited as the designer to create a screen.</Text>
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
        <Col md="3" style={{ background: "#F0F2F5" }}>
          Ini tiga
        </Col>
      </Row>
    </>
  );
}

export default Landing;
