import { createContext, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import HashtagPage from "./pages/Hashtag";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import { createGlobalStyle } from "styled-components";
import "./constants/font.css";
import UserPostsPage from './pages/UserPostsPage.js';

export const UserContext = createContext();

export default function App() {
  const localUser = JSON.parse(localStorage.getItem("user"));
  const [userData, setUserData] = useState(localUser);
  const [refresh, setRefresh] = useState(false);
 
  return (
    <>
      <GlobalStyle />
      <UserContext.Provider value={{userData, setUserData}}>
        <BrowserRouter>
          <Routes>
            <Route path="/home" element={<HomePage set={setUserData} refresh={refresh} setRefresh={setRefresh}/>} />
            <Route path="/hashtag" element={<HashtagPage/>} />
            <Route path="/hashtag/:hashtag" element={<HashtagPage/>} />
            <Route path="/" element={<LoginPage />} />
            <Route path="/cadastro" element={<SignUpPage />} />
            <Route path='/user/:id' element={<UserPostsPage refresh={refresh}/>}/>
          </Routes>
        </BrowserRouter>
      </UserContext.Provider>
    </>
  );
}

const GlobalStyle = createGlobalStyle`
  *{
    color: white;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;
  }
  body{
    background-color: #333333;
    font-family: "Lato", sans-serif;
  }
`;
