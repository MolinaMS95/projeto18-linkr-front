import styled from "styled-components";
import { Link} from "react-router-dom";
import axios from 'axios';

export default function HashtagList(){

    const arrayTest = ["phyton", "c", "javascript", "c#", "c++", "react", "sql", "node", "material", "assembly"]

    return(
        <Container>
            {arrayTest.map(language => (
                
                <Link to={`/hashtag/${language}`}>
                    <h1 key={language.id}># {language}</h1>
                </Link>
            ))   }
        </Container>
    )
}

const Container = styled.div`

    h1{
        margin: 0px;
        padding: 0px;
        padding-left: 16px;
        padding-top: 8px;
        color: white;
        font-family: Lato;
        font-size: 19px;
        font-weight: 700;
    }
`