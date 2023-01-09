import styled from "styled-components";
import HashtagList from "./HashtagList.js"

export default function TrendingSidebar (){

    return (
        <Container>
            <p>trending</p>
            <Line></Line>
            <HashtagList />
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