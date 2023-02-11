import React from "react";
import { Nav, NavItem, NavLink } from "reactstrap";
import { BsFacebook } from "react-icons/bs";
import { ImSearch } from "react-icons/im";
import { AiFillHome, AiOutlinePlusCircle } from "react-icons/ai";
import { MdOutlineOndemandVideo } from "react-icons/md";
import { BiStore } from "react-icons/bi";
import { FaUsers, FaFacebookMessenger } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdNotificationsNone } from "react-icons/md";
import { Avatar, Spinner } from "@chakra-ui/react";
import { logoutAction } from "../actions/userAction";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

function Navbar(props) {
  const dispatch = useDispatch();

  const { username } = useSelector((state) => {
    return {
      username: state.userReducer.username,
    };
  });
  return (
    <div>
      <Nav className="d-flex justify-content-between fixed-top" style={{ background: "#FFFFFF" }}>
        {props.loading ? <Spinner /> : username && !props.loading}
        <NavItem>
          <NavLink active href="#">
            <BsFacebook size={28} />
            {username}
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#">
            <ImSearch size={28} />
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#">
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
          <NavLink href="#">
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
        <NavItem>
          <NavLink href="#">
            <Avatar size="sm" />
          </NavLink>
        </NavItem>
      </Nav>
    </div>
  );
}

export default Navbar;
