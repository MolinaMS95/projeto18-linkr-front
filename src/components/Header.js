import axios from 'axios';
import { useContext, useState } from 'react';
import { DebounceInput } from 'react-debounce-input';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { refreshContext, UserContext } from '../App';
import magnifier from '../constants/magnifier.svg';
import { AiOutlineDown } from 'react-icons/ai';
import { searchURL } from '../constants/urls';

export default function Header() {
    // const {userData} = useContext(UserContext);
    const [refresh, setRefresh] = useContext(refreshContext);
    const navigate = useNavigate();
    const [foundUsers, setFoundUsers] = useState([]);

    const localhost = 'http://localhost:4000';
    const API_URL = 'https://linkr-api-kcil.onrender.com';

    const token = 'aaaaa';

    function handleSearchBar(e) {
        if (e.target.value.length < 3) return;

        const config = {headers: {'Authorization': 'Bearer ' + token}};
        const url = searchURL + e.target.value;

        axios.get(url, config)
            .then(({data}) => setFoundUsers(data))
            .catch(() => navigate('/'));

        setTimeout(() => {
            setFoundUsers([]);
        }, 3000);
    }

    function navigateToUserPosts(id) {
        navigate('/user/' + id);
        setFoundUsers([]);
        setRefresh(!refresh);
    }

    function Options({id, username, pictureurl}) {
        return (
            <div key={id}>
                <img src={pictureurl} alt=''></img>
                <span onClick={() => navigateToUserPosts(id)}>{username}</span>
            </div>
        );
    }

    return (
        <HeaderStyles>
            <section>
                <h1 onClick={() => navigate('/')}>linkr</h1>
                <div>
                    <DebounceInput
                        placeholder='Search for people'
                        minLength={3}
                        debounceTimeout={300}
                        onChange={handleSearchBar}
                    />
                    <div>
                        {foundUsers.map(Options)}
                    </div>
                </div>
                <div>
                    <AiOutlineDown/>
                    <img src={'a'} alt='Profile picture'/>
                </div>
            </section>
            <div>
                <DebounceInput
                    placeholder='Search for people'
                    minLength={3}
                    debounceTimeout={300}
                    onChange={handleSearchBar}
                />
                <div>
                    {foundUsers.map(Options)}
                </div>
            </div>
        </HeaderStyles>
    );
}

const HeaderStyles = styled.header`
    position: fixed;
    top: 0;
    z-index: 10;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    &>section {
        width: 100%;
        height: 72px;
        padding: 0 17px;
        background-color: #151515;
        display: flex;
        justify-content: space-between;
        align-items: center;

        h1 {
            font-family: 'Passion One', cursive;
            font-weight: 700;
            font-size: 49px;
            line-height: 54px;
            letter-spacing: 0.05em;
            color: #FFFFFF;
        }

        &>div:nth-of-type(1) {
            width: 563px;

            input {
                position: relative;
                z-index: 1;
                width: 100%;
            }

            &>div {
                position: absolute;
                top: calc(45px + 13.5px - 8px);
                padding-left: 17px;
                width: 563px;
                border-bottom-left-radius: 8px;
                border-bottom-right-radius: 8px;
                background-color: #E7E7E7;
                display: flex;
                flex-direction: column;
                row-gap: 16px;

                div {
                    height: 39px;
                    display: flex;
                    align-items: center;
                    column-gap: 12px;

                    img {
                        width: 39px;
                        height: 39px;
                        border-radius: 50%;
                        object-fit: cover;
                    }

                    span {
                        font-family: 'Lato', sans-serif;
                        font-weight: 400;
                        font-size: 19px;
                        line-height: 23px;
                        color: #515151;
                    }
                }

                div:first-of-type {
                    margin-top: 22px;
                }

                div:last-of-type {
                    margin-bottom: 22px;
                }
            }
        }

        &>div:nth-of-type(2) {
            display: flex;
            align-items: center;
            column-gap: 10px;

            svg {
                font-size: 20px;
            }

            img {
                width: 53px;
                height: 53px;
                border-radius: 50%;
                object-fit: cover;
            }
        }
    }

    &>div {
        width: 100%;
        height: 65px;
        background-color: #333333;
        display: none;
        justify-content: center;
        align-items: center;

        input {
            position: relative;
            z-index: 1;
            width: calc(100% - 2*10px);
        }

        &>div {
            position: absolute;
            top: calc(72px + 10px + 45px - 8px);
            padding-left: 17px;
            width: calc(100% - 2*10px);
            border-bottom-left-radius: 8px;
            border-bottom-right-radius: 8px;
            background-color: #E7E7E7;
            display: flex;
            flex-direction: column;
            row-gap: 16px;

            div {
                height: 39px;
                display: flex;
                align-items: center;
                column-gap: 12px;

                img {
                    width: 39px;
                    height: 39px;
                    border-radius: 50%;
                    object-fit: cover;
                }

                span {
                    font-family: 'Lato', sans-serif;
                    font-weight: 400;
                    font-size: 19px;
                    line-height: 23px;
                    color: #515151;
                }
            }

            div:first-of-type {
                margin-top: 22px;
            }

            div:last-of-type {
                margin-bottom: 22px;
            }
        }
    }

    input {
        height: 45px;
        padding-left: 17px;
        padding-right: calc(21px + 2*17px);
        border: 0;
        border-radius: 8px;
        background-color: #FFFFFF;
        background-image: url(${magnifier});
        background-repeat: no-repeat;
        background-position: top 50% right 17px;
        outline: 0;
        font-family: 'Lato', sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 19px;
        line-height: 23px;
        color: #515151;

        &::placeholder {
            font-family: 'Lato', sans-serif;
            font-weight: 400;
            font-size: 19px;
            line-height: 23px;
            color: #C6C6C6;
        }
    }

    @media (max-width: 820px) {
        section {
            &>div:nth-of-type(1) {
                width: calc(100% - 109.76px - 83px - 2*9.62px);

                &>div {
                    width: calc(100% - 2*17px - 109.76px - 83px - 2*9.62px);
                }
            }
        }
    }

    @media (max-width: 475px) {
        &>section {
            &>div:nth-of-type(1) {
                display: none;
            }

            &>div:nth-of-type(2) {
                column-gap: 5px;

                svg {
                    width: 16px;
                }

                img {
                    width: 41px;
                    height: 41px;
                }
            }
        }

        &>div {
            display: flex;
        }
    }
`;