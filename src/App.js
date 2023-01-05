import { createContext, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import { createGlobalStyle } from "styled-components";
import "./constants/font.css";

export const UserContext = createContext();

export default function App() {
  const [userData, setUserData] = useState(0);
 
  return (
    <>
      <GlobalStyle />
      <UserContext.Provider value={userData}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage set={setUserData} />} />
          </Routes>
        </BrowserRouter>
      </UserContext.Provider>
    </>
  );
}

const GlobalStyle = createGlobalStyle`
  *{
    color: white;
    box-sizing: border-box;
    text-decoration: none;
  }
  body{
    background-color: #333333;
    font-family: "Lato", sans-serif;
  }
`;
