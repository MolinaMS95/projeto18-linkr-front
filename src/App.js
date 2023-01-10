import { createContext, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import HashtagPage from "./pages/Hashtag";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import { createGlobalStyle } from "styled-components";
import "./constants/font.css";
import Header from './components/Header.js';
import UserPostsPage from './pages/UserPostsPage.js';

export const UserContext = createContext();
export const refreshContext = createContext();

export default function App() {
  const localUser = JSON.parse(localStorage.getItem("user"));
  const [userData, setUserData] = useState(localUser);
  const refreshState = useState(false);
 
  return (
    <>
      <GlobalStyle />
      <UserContext.Provider value={{userData, setUserData}}>
      <refreshContext.Provider value={refreshState}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage set={setUserData}/>} />
            <Route path="/hashtag" element={<HashtagPage/>} />
            <Route path="/hashtag/:hashtag" element={<HashtagPage/>} />
            <Route path='/user/:id' element={<UserPostsPage refresh={refreshState[0]}/>}/>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/cadastro" element={<SignUpPage />} />
          </Routes>
        </BrowserRouter>
      </refreshContext.Provider>
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
