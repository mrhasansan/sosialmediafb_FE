import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./pages/Login";
import Landing from "./pages/Landing";
import Register from "./pages/Register";
import { API_URL } from "./helper";
import { useDispatch } from "react-redux";
import { loginAction } from "./actions/userAction";
import { useEffect, useState } from "react";
import Axios from "axios";
import VerificationPage from "./pages/VerificationPage";
import Profil from "./pages/Profil";
import Content from "./pages/Content";
import Home from "./pages/Home";

function App() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  const keepLogin = () => {
    let getLocalStorage = localStorage.getItem("socialmediafb");
    console.log(getLocalStorage);
    if (getLocalStorage) {
      Axios.get(API_URL + `/users/keep`, {
        headers: {
          Authorization: `Bearer ${getLocalStorage}`,
        },
      })
        .then((res) => {
          dispatch(loginAction(res.data));
          setLoading(false);
          localStorage.setItem("socialmediafb", res.data.token);
        })
        .catch((err) => {
          console.log(err);
          setLoading(false);
        });
      // loading dimatikan ketika berhasil mendapatkan respon
    } else {
      setLoading(false);
    }
  };
  useEffect(() => {
    keepLogin();
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/verification" element={<VerificationPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Landing />} />
        <Route path="/profile" element={<Profil />} />
        <Route path="/content" element={<Content />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
