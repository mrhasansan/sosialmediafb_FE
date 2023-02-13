import React from "react";
import { Button } from "@chakra-ui/react";
import { useLocation, useNavigate } from "react-router-dom";
import { API_URL } from "../helper";
import Axios from "axios";

function VerificationPage() {
  const navigate = useNavigate;
  const location = useLocation();
  console.log(location);

  const confirmBtn = () => {
    let token = location.search.split("=")[1];
    Axios.patch(
      API_URL + `/users/verified`,
      {},
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    )
      .then((res) => {
        console.log(res.data);
        alert(res.data.message);
        navigate("/login", { replace: true });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      <p className="h1 my-3"> Verifie your acount!</p>
      <Button style={{ background: "#FFFFFF", borderRadius: "5px" }} onClick={confirmBtn}>
        VERIFIED
      </Button>
    </div>
  );
}

export default VerificationPage;
