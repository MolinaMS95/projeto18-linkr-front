import styled from "styled-components";
import axios from "axios";
import ClipLoader from "react-spinners/ClipLoader";
import Swal from "sweetalert2";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { UserContext } from "../App";
import { useNavigate } from "react-router-dom";
import { postsURL } from "../constants/urls.js";
import { hashtagURL } from "../constants/urls.js";
import "../constants/font.css";
import TrendingSidebar from "../components/TrendingSidebar.js";
import Header from "../components/Header.js";
import Post from "../components/Post.js";
import Publish from "../components/Publish.js";

export default function HashtagPage(props) {

  // const userData = useContext(UserContext);
  // const navigate = useNavigate();
  const [posts, setPosts] = useState([]);
  const [loadingPosts, setLoadingPosts] = useState(true);

  const params = useParams().hashtag
  let hashtagName = "timeline"
  if (params) {
    hashtagName = params
  }
  
  useEffect(() => {
    if (!params){
      getPosts()
    }else {
      getHashtag(hashtagName)
    }
  }, []);

  function getPosts() {
    console.log("post");
    setPosts([]);
    setLoadingPosts(true);
    axios
      .get(postsURL, {
        headers: {
          Authorization: `Bearer 14b85cfe-b788-4f45-b58a-a6e4589b0f82`,
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

  function getHashtag(hashtag) {
    console.log("post");
    setPosts([]);
    setLoadingPosts(true);
    axios
      .get(hashtagURL, {
        body: {hashtag},
        headers: {
          Authorization: `Bearer 14b85cfe-b788-4f45-b58a-a6e4589b0f82`,
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
      <Header />
      <ContentBox>
        <TimelineColumn>
          <Title>{hashtagName}</Title>
          {!params && <Publish getPosts={getPosts} />}
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
            return <Post postData={data} />;
          })}
        </TimelineColumn>
        <TrendingSidebar />
      </ContentBox>
    </Container>
  );
}

const Container = styled.div`

  margin-top: 72px;
  width: 100vw;
  height: 100vh;
  background: #333333;

  @media (max-width: 475px) {
    margin-top: calc(72px + 65px);
  }
`;

const ContentBox = styled.div`
    display: flex;
    justify-content: center;
`

const TimelineColumn = styled.div`
      flex-direction: column;
      align-items: center;
      padding-right: 2%;
`

const Title = styled.p`
  padding: 60px 0px 8px 5px;
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