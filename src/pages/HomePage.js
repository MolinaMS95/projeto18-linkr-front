import styled from "styled-components";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { UserContext } from "../App";
import "../constants/font.css";
import Post from "../components/Post.js";
import Publish from "../components/Publish.js";
import { postsURL } from "../constants/urls.js";
import ClipLoader from "react-spinners/ClipLoader";
import Swal from "sweetalert2";
import Header from "../components/Header";

export default function HomePage(props) {
  const {userData} = useContext(UserContext);
  const [posts, setPosts] = useState([]);
  const [loadingPosts, setLoadingPosts] = useState(true);
  useEffect(() => {
    getPosts();
  }, []);
  function getPosts() {
    setPosts([]);
    setLoadingPosts(true);
    axios
      .get(postsURL, {
        headers: {
          Authorization: `Bearer ${userData}`,
        },
      })
      .then((data) => {
        setPosts(data.data);
        setLoadingPosts(false);
      })
      .catch((data) => {
        Swal.fire(
          "An error occured while trying to fetch the posts, please refresh the page"
        );
        console.log(data);
      });
  }
  return (
    <Container>
      <Header/>
      <Title>timeline</Title>
      <Publish getPosts={getPosts} />
      {loadingPosts && (
        <Padding>
          <ClipLoader
            color={"#FFFFFF"}
            loading={loadingPosts}
            size={150}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </Padding>
      )}
      {!loadingPosts && posts.length === 0 && (
        <Padding>There are no posts yet</Padding>
      )}
      {posts.map((data) => {
        return <Post key={data.id} postData={data} />;
      })}
    </Container>
  );
}

const Container = styled.div`
  margin-top: 72px;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #333333;
  @media (max-width: 475px) {
    margin-top: calc(72px + 65px);
  }
`;
const Title = styled.p`
  padding: 30px 0px 30px 16px;
  font-family: "Oswald", sans-serif;
  font-size: 34px;
  font-weight: 700;
  align-self: center;
  width: 100%;
  max-width: 611px;
`;
const Padding = styled.div`
  padding-top: 30px;
`;
