import { createContext, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import HashtagPage from "./pages/Hashtag";
import { createGlobalStyle } from "styled-components";
import "./constants/font.css";
import Header from './components/Header.js';
import UserPostsPage from './pages/UserPostsPage.js';

export const UserContext = createContext();

export default function App() {
  const [userData, setUserData] = useState(0);
 
  return (
    <>
      <GlobalStyle />
      <UserContext.Provider value={userData}>
        <BrowserRouter>
          <Header/>
          <Routes>
            <Route path="/" element={<HomePage set={setUserData}/>} />
            <Route path="/hashtag" element={<HashtagPage/>} />
            <Route path="/hashtag/:hashtag" element={<HashtagPage/>} />
            <Route path='/user/:id' element={<UserPostsPage/>}/>
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
