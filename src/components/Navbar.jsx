import React from "react";
import { Nav, NavItem, NavLink } from "reactstrap";
import { BsFacebook } from "react-icons/bs";
import { ImSearch } from "react-icons/im";
import { AiFillHome, AiOutlinePlusCircle } from "react-icons/ai";
import { MdOutlineOndemandVideo } from "react-icons/md";
import { BiStore, BiHelpCircle } from "react-icons/bi";
import { FaUsers, FaFacebookMessenger, FaUserCog } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdNotificationsNone, MdSettings } from "react-icons/md";
import { Avatar, Spinner, AvatarBadge, MenuButton, Menu, MenuList, MenuItem, MenuDivider } from "@chakra-ui/react";
import { logoutAction } from "../actions/userAction";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { GoSignOut } from "react-icons/go";
import Axios from "axios";
import { API_URL } from "../helper";

function Navbar(props) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { username } = useSelector((state) => {
    return {
      username: state.userReducer.username,
    };
  });

  return (
    <div>
      <Nav className="d-flex justify-content-between fixed-top p-0" style={{ background: "#FFFFFF" }}>
        {props.loading ? <Spinner /> : username && !props.loading}
        <NavItem>
          <NavLink active href="#">
            <BsFacebook size={28} />
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#">
            <ImSearch size={28} />
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/home">
            <AiFillHome size={28} />
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#">
            <MdOutlineOndemandVideo size={28} />
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#">
            <BiStore size={28} />
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#">
            <FaUsers size={28} />
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#">
            <GiHamburgerMenu size={28} />
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/content">
            <AiOutlinePlusCircle size={28} />
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#">
            <FaFacebookMessenger size={28} />
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#">
            <MdNotificationsNone size={28} />
          </NavLink>
        </NavItem>
        <Menu>
          <MenuButton type="button">
            <Avatar size="md" name={username}>
              <AvatarBadge boxSize="1em" bg="green.500" />
            </Avatar>
          </MenuButton>
          <MenuList>
            <MenuItem>
              <NavLink style={{ color: "black" }} onClick={() => navigate(`/profile`)} className="ps-0">
                <FaUserCog className="d-inline m-0" size={24} />
                <span className="m-2"> {username}</span>
              </NavLink>
            </MenuItem>
            <MenuDivider />
            <MenuItem>
              <NavLink style={{ color: "black" }} className="ps-0">
                <MdSettings className="d-inline" size={24} />
                <span className="m-2">Pengaturan/Privasi</span>
              </NavLink>
            </MenuItem>
            <MenuItem>
              <NavLink style={{ color: "black " }} className="ps-0">
                <BiHelpCircle className="d-inline m-0" size={24} />
                <span className="m-2">Bantuan</span>
              </NavLink>
            </MenuItem>
            <MenuItem onClick={() => dispatch(logoutAction())}>
              <NavLink style={{ color: "black" }} className="ps-0">
                <GoSignOut className="d-inline m-0" size={24} />
                <span className="m-2">Logout</span>
              </NavLink>
            </MenuItem>
          </MenuList>
        </Menu>
      </Nav>
    </div>
  );
}

export default Navbar;
