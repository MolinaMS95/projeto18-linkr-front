import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import Forms from "../components/Forms";
import { ThreeDots } from "react-loader-spinner";
import Swal from "sweetalert2";

export default function SignUp() {
  const [form, setForm] = useState({
    email: "",
    password: "",
    username: "",
    picture: "",
  });
  const [disabled, setDisabled] = useState(false);
  const navigate = useNavigate();
  const signUpUrl = "https://linkr-api-kcil.onrender.com/signup";

  function handleForm(event) {
    setForm({ ...form, [event.target.name]: event.target.value });
  }

  function createAccount(event) {
    event.preventDefault();
    setDisabled(true);
    axios
      .post(signUpUrl, form)
      .then(() => navigate("/login"))
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

  return (
    <Body>
      <TitleContainer>
        <div>
          <h1>linkr</h1>
          <p>save, share and discover the best links on the web</p>
        </div>
      </TitleContainer>
      <FormContainer>
        <Forms submit={createAccount} isDisabled={disabled}>
          <input
            name="email"
            type="email"
            placeholder="e-mail"
            onChange={handleForm}
            disabled={disabled}
            required
          />
          <input
            name="password"
            type="password"
            placeholder="password"
            onChange={handleForm}
            disabled={disabled}
            required
          />
          <input
            name="username"
            placeholder="username"
            onChange={handleForm}
            disabled={disabled}
            required
          />
          <input
            name="picture"
            type="url"
            onChange={handleForm}
            placeholder="picture url"
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
              "Sign Up"
            )}
          </button>
        </Forms>
        <LoginLink to="/login">Switch back to login</LoginLink>
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

const LoginLink = styled(Link)`
  font-family: "Lato";
  font-size: 17px;
  color: #ffffff;
  text-decoration: underline;
  margin-top: 18px;
`;
