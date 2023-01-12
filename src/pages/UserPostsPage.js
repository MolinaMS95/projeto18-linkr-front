import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';
import { refreshContext, UserContext } from '../App.js';
import { AiOutlineHeart } from "react-icons/ai";
import Header from '../components/Header.js';
import { followURL, hashtagURL, userPostsURL } from '../constants/urls.js';
import Post from '../components/Post.js';
import BeatLoader from 'react-spinners/BeatLoader.js';
import Swal from 'sweetalert2';

export default function UserPostsPage() {
    const {userData} = useContext(UserContext);
    const [refresh, setRefresh] = useContext(refreshContext);
    const navigate = useNavigate();
    const [user, setUser] = useState({});
    const {id: userid} = useParams();
    const [disabled, setDisabled] = useState(false);
    const [hidden, setHidden] = useState(true);
    const [isFollower, setIsFollower] = useState(false);

    const loaded = (Object.keys(user).length !== 0);

    const posts = (loaded) ? user.posts : [];

    const config = {headers: {'Authorization': 'Bearer ' + userData.token}};

    useEffect(request, [refresh]);

    function request() {
        const url = userPostsURL + userid;

        axios.get(url, config)
            .then(generalHandle)
            .catch(() => navigate('/'));
    }

    function generalHandle({data}) {
        setUser(data);
        setHidden(data.requesterid === Number(userid));
        setIsFollower(data.boolFollowing === '1');
        setDisabled(false);
    }

    function like(postid) {
        console.log(postid, userid);
    }

    function UserPost({id: postid, url, content, numberOfLikes, hashtags}) {
        if (hashtags[0] === null) hashtags.pop();

        function PostHashtag({id: hashtagid, name}) {
            return (
                <span
                    key={hashtagid}
                    onClick={() => navigate('/hashtag/' + name)}
                > #{name}</span>
            );
        }

        function navigateWithLink() {
            window.open(url, '_blank');
        }

        return (
            <div key={postid}>
                <aside>
                    <img src={user.pictureurl} alt='Profile picture'/>
                    <div>
                        <AiOutlineHeart
                            onClick={() => like(postid)}
                            alt='Like'
                        />
                        <span>{(numberOfLikes === null) ? 0 : numberOfLikes}</span>
                    </div>
                </aside>
                <section>
                    <span>{user.username}</span>
                    <p>{content}{hashtags.map(PostHashtag)}</p>
                    <div onClick={navigateWithLink}>
                        <div>
                            <p>aaaaaaaa aaaaaaaa</p>
                            <p>aaaaaaaa aaaaaaaa</p>
                            <a>{url}</a>
                        </div>
                        <img src='http://cbissn.ibict.br/images/phocagallery/galeria2/thumbs/phoca_thumb_l_image03_grd.png' alt=''/>
                    </div>
                </section>
            </div>
        );
    }

    const hashtagsArray = [
        {id: 1, name: 'a'},
        {id: 2, name: 'b'},
        {id: 3, name: 'c'}
    ];

    function Hashtag({id, name}) {
        return (
            <span
                key={id}
                onClick={() => navigate('/hashtag/' + name)}
            >
                #{name}
            </span>
        );
    }

    function handleButtons() {
        setIsFollower(!isFollower);
        setDisabled(false);
        setRefresh(!refresh);
    }

    function follow() {
        if (disabled) return;

        setDisabled(true);

        axios.put(followURL + userid, {}, config)
            .then(handleButtons)
            .catch(followError);
    }

    function followError() {
        Swal.fire({
            title: 'Error!',
            text: 'It was not possible to execute the operation.',
            icon: 'error',
            confirmButtonText: 'Ok'
        });

        setDisabled(false);
    }

    return (
        <UserPostsPageStyles hidden={hidden} isFollower={isFollower}>
            <Header/>
            <section>
                <div>
                    <img src={user.pictureurl} alt=''/>
                    <h1>{user.username}’s posts</h1>
                </div>
                {posts.map(UserPost)}
            </section>
            <div>
                <button onClick={follow} disabled={disabled}>
                    {
                        disabled ? (
                            <BeatLoader/>
                        ) : (
                            isFollower ? 'Unfollow' : 'Follow'
                        )
                    }
                </button>
                <aside>
                    <span>trending</span>
                    <hr/>
                    <section>
                        {hashtagsArray.map(Hashtag)}
                    </section>
                </aside>
            </div>
        </UserPostsPageStyles>
    );
}

const UserPostsPageStyles = styled.main`
    margin-top: calc(53px + 72px);
    width: 100%;
    display: flex;
    justify-content: center;
    column-gap: 25px;

    &>section {
        &>div:nth-of-type(1) {
            margin-left: 18px;
            margin-bottom: 41px;
            display: flex;
            align-items: center;
            column-gap: 18px;

            img {
                width: 50px;
                height: 50px;
                border-radius: 50%;
                object-fit: cover;
            }

            h1 {
                font-family: 'Oswald', sans-serif;
                font-weight: 700;
                font-size: 43px;
                line-height: 64px;
                color: #FFFFFF;
            }
        }

        &>div:nth-of-type(n + 2) {
            margin-bottom: 16px;
            width: 611px;
            border-radius: 16px;
            background-color: #171717;
            display: flex;

            aside {
                padding-top: 17px;
                width: 86px;
                display: flex;
                flex-direction: column;
                align-items: center;
                flex-shrink: 0;

                &>img {
                    margin-bottom: 18px;
                    width: 50px;
                    height: 50px;
                    border-radius: 50%;
                    object-fit: cover;
                }

                div {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    row-gap: 4px;

                    svg {
                        font-size: 20px;
                    }

                    span {
                        font-family: 'Lato', sans-serif;
                        font-weight: 400;
                        font-size: 11px;
                        line-height: 13px;
                        text-align: center;
                        color: #FFFFFF;
                    }
                }
            }

            section {
                width: 100%;
                padding: 20px 20px 20px 0;

                &>span {
                    font-family: 'Lato', sans-serif;
                    font-weight: 400;
                    font-size: 19px;
                    line-height: 23px;
                    color: #FFFFFF;
                }

                &>p {
                    margin: 7px 0px;
                    font-family: 'Lato', sans-serif;
                    font-weight: 400;
                    font-size: 17px;
                    line-height: 20px;
                    color: #B7B7B7;

                    span {
                        font-weight: 700;
                    }
                }

                &>div {
                    width: 100%;
                    border: 1px solid #4D4D4D;
                    border-radius: 11px;
                    display: flex;

                    div {
                        padding: 24px 10px 0 20px;
                        width: 100%;

                        p:nth-of-type(1) {
                            margin-bottom: 5px;
                            font-family: 'Lato', sans-serif;
                            font-weight: 400;
                            font-size: 16px;
                            line-height: 19px;
                            color: #CECECE;
                        }

                        p:nth-of-type(2) {
                            font-family: 'Lato', sans-serif;
                            font-weight: 400;
                            font-size: 11px;
                            line-height: 13px;
                            color: #9B9595;
                        }

                        a {
                            font-family: 'Lato', sans-serif;
                            font-weight: 400;
                            font-size: 11px;
                            line-height: 13px;
                            color: #CECECE;
                        }
                    }

                    img {
                        width: 155px;
                        height: 155px;
                        border-top-right-radius: 11px;
                        border-bottom-right-radius: 11px;
                        object-fit: cover;
                        flex-shrink: 0;
                    }
                }
            }
        }
    }

    &>div {
        margin-top: 16px;
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        row-gap: 60px;

        button {
            width: 112px;
            height: 31px;
            border: none;
            border-radius: 5px;
            background-color: ${({isFollower}) => isFollower ? '#FFFFFF' : '#1877F2'};
            display: flex;
            justify-content: center;
            align-items: center;
            font-family: 'Lato', sans-serif;
            font-weight: 700;
            font-size: 14px;
            line-height: 17px;
            color: ${({isFollower}) => isFollower ? '#1877F2' : '#FFFFFF'};
            flex-shrink: 0;
            visibility: ${({hidden}) => hidden ? 'hidden' : 'visible'};
        }

        aside {
            padding-top: 9px;
            padding-bottom: 30px;
            width: 301px;
            border-radius: 16px;
            background-color: #171717;

            &>span {
                margin-left: 16px;
                font-family: 'Oswald', sans-serif;
                font-weight: 700;
                font-size: 27px;
                line-height: 40px;
                color: #FFFFFF;
            }

            hr {
                margin-top: 12px;
                margin-bottom: 22px;
                height: 1px;
                border: none;
                background-color: #484848;
            }

            section {
                padding-left: 16px;
                display: flex;
                flex-direction: column;
                row-gap: 10px;

                span {
                    font-family: 'Lato', sans-serif;
                    font-weight: 700;
                    font-size: 19px;
                    line-height: 23px;
                    letter-spacing: 0.05em;
                    color: #FFFFFF;
                }
            }
        }
    } 

    @media (max-width: 1000px) {
        &>div {
            display: none;
        }
    }

    @media (max-width: 641px) {
        padding: 0 15px;

        &>section {
            width: 100%;

            &>div:nth-of-type(n + 2) {
                width: 100%;
            }
        }
    }

    @media (max-width: 475px) {
        padding: 0;

        &>section {
            margin-top: 10px;

            &>div:nth-of-type(1) {
                margin-bottom: 19px;

                img {
                    width: 40px;
                    height: 40px;
                }

                h1 {
                    font-size: 33px;
                    line-height: 49px;
                }
            }

            &>div:nth-of-type(n + 2) {
                width: 100%;
                border-radius: 0px;

                aside {
                    padding-top: 9px;
                    width: 70px;

                    &>img {
                        margin-bottom: 16px;
                        width: 40px;
                        height: 40px;
                    }

                    div {
                        row-gap: 10px;

                        svg {
                            font-size: 17px;
                        }

                        span {
                            font-size: 9px;
                            line-height: 11px;
                        }
                    }
                }

                section {
                    span {
                        font-size: 17px;
                        line-height: 20px;
                    }

                    &>p {
                        font-size: 15px;
                        line-height: 18px;
                    }
                    &>div {
                        div {
                            padding: 7px 5px 0 11px;

                            p:nth-of-type(1) {
                                font-size: 11px;
                                line-height: 13px;
                            }

                            p:nth-of-type(2) {
                                font-size: 9px;
                                line-height: 11px;
                            }

                            a {
                                font-size: 9px;
                                line-height: 11px;
                            }
                        }

                        img {
                            width: 95px;
                            height: 115px;
                        }
                    }
                }
            }
        }
    }
`;