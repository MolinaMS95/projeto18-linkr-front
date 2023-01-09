import HashtagList from "./HashtagList.js"
import styled from "styled-components";
import axios from 'axios';
import {useEffect, useState } from "react";
import Swal from "sweetalert2";

export default function TrendingSidebar (){

    const [hashtag, setHashtag] = useState([]);
    useEffect(() => {
        getHashtagList();
        console.log(hashtag)
    }, []);
    function getHashtagList() {
        console.log("oi");
        setHashtag([]);
        axios
        .get("http://localhost:4000/hashtag")
        .then((data) => {
            console.log(data)
            setHashtag(data.data);
        })
        .catch((data) => {
            Swal.fire(
            "An error occured while trying to fetch the hashtag, please refresh the page"
            );
            console.log(data);
        });
    }

    return (
        <Container>
            <p>trending</p>
            <Line></Line>
            <HashtagList hashtagList={hashtag}/>
        </Container>
    )
}

const Container = styled.div`
    margin-top: 115px;
    width: 301px;
    height: 100%;
    border: none;
    border-radius: 16px;
    background-color: #171717;
    padding-bottom: 30px;

    p{
        margin: 0px;
        padding: 9px 0px 12px 16px;
        color: white;
        display: flex;
        font-family: Oswald;
        font-size: 27px;
        font-weight: 700;
    }

`

const Line = styled.div`
    width: 100%;
    height: 1px;
    background-color: #484848;
`