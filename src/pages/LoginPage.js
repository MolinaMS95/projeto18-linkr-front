import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import Forms from "../components/Forms";
import { ThreeDots } from "react-loader-spinner";
import Swal from "sweetalert2";
import { UserContext } from "../App";

export default function Login() {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const [disabled, setDisabled] = useState(false);
  const navigate = useNavigate();
  const { userData, setUserData } = useContext(UserContext);
  const loginUrl = "https://linkr-api-kcil.onrender.com/signin";

  useEffect(() => {
    if (userData !== null) {
      navigate("/");
    }
  });

  function handleForm(event) {
    setForm({ ...form, [event.target.name]: event.target.value });
  }

  function login(event) {
    event.preventDefault();
    setDisabled(true);
    axios
      .post(loginUrl, form)
      .then((response) => {
        setUserData(response.data);
        saveUser(response.data);
        navigate("/hoje");
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: error.response.data.message,
          footer: `Error status ${error.response.status}`,
        });
        setDisabled(false);
      });
  }

  function saveUser(object) {
    const user = JSON.stringify(object);
    localStorage.setItem("user", user);
  }

  return (
    <Body>
      <TitleContainer>
        <div>
          <h1>linkr</h1>
          <p>save, share and discover the best links on the web</p>
        </div>
      </TitleContainer>
      <FormContainer>
        <Forms submit={login} isDisabled={disabled}>
          <input
            type="email"
            name="email"
            onChange={handleForm}
            placeholder="e-mail"
            disabled={disabled}
            required
          />
          <input
            type="password"
            name="password"
            onChange={handleForm}
            placeholder="password"
            disabled={disabled}
            required
          />
          <button type="submit">
            {disabled ? (
              <ThreeDots
                height="80"
                width="80"
                radius="9"
                color="#FFFFFF"
                ariaLabel="three-dots-loading"
                wrapperStyle={{}}
                wrapperClassName=""
                visible={true}
              />
            ) : (
              "Log In"
            )}
          </button>
        </Forms>
        <SignUpLink to="/cadastro">First time? Create an account!</SignUpLink>
      </FormContainer>
    </Body>
  );
}

const Body = styled.div`
  display: flex;
  flex-direction: column;
  @media (min-width: 612px) {
    flex-direction: row;
  }
`;

const TitleContainer = styled.div`
  width: 100%;
  background-color: #151515;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  display: flex;
  justify-content: center;
  @media (min-width: 612px) {
    width: 67%;
    height: 100vh;
  }

  div {
    width: 64%;
    margin-top: 10px;
    margin-bottom: 27px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  h1 {
    font-family: "Passion One";
    font-weight: 700;
    font-size: 76px;
    color: #ffffff;
  }

  p {
    font-family: "Oswald";
    font-weight: 700;
    font-size: 23px;
    color: #ffffff;
  }
`;

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media (min-width: 612px) {
    width: 36%;
    height: 100vh;
  }
`;

const SignUpLink = styled(Link)`
  font-family: "Lato";
  font-size: 17px;
  color: #ffffff;
  text-decoration: underline;
  margin-top: 18px;
`;
