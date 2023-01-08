import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';
import { UserContext } from '../App.js';
import heart from '../constants/heart.svg';

export default function UserPostsPage() {
    // const userData = useContext(UserContext);
    const navigate = useNavigate();
    const [user, setUser] = useState({});
    const {id} = useParams();

    const loaded = (Object.keys(user).length !== 0);

    const posts = (loaded) ? user.posts : [];

    function request() {
        const url = 'http://localhost:4000/user/' + id;

        axios.get(url)
            .then(({data}) => setUser(data))
            .catch(() => navigate('/'));
    }

    useEffect(request, []);

    return (
        <UserPostsPageStyles>
            <section>
                <div>
                    <img src={user.pictureurl} alt=''/>
                    <h1>{user.username}’s posts</h1>
                </div>
                <div>
                    <aside>
                        <img src={user.pictureurl} alt='Profile picture'/>
                        <div>
                            <img src={heart} alt='Like'/>
                            <span>13 likes</span>
                        </div>
                    </aside>
                    <section>
                        <span>{user.username}</span>
                        <p>aaaa</p>
                        <div>
                            <div>
                                <p>aaaaaaaaaaaaaaa</p>
                                <p>aaaaaaaaaaaaaaa</p>
                                <a>aaaaaaaaaaaaaaa</a>
                            </div>
                            <img src='' alt=''/>
                        </div>
                    </section>
                </div>
                <div>
                    <aside>
                        <img src={user.pictureurl} alt='Profile picture'/>
                        <div>
                            <img src={heart} alt='Like'/>
                            <span>13 likes</span>
                        </div>
                    </aside>
                    <section>
                        <span>{user.username}</span>
                        <p>aaaa</p>
                        <div>
                            <div>
                                <p>aaaaaaaaaaaaaaaa</p>
                                <p>aaaaaaaaaaaaaaaa</p>
                                <a>aaaaaaaaaaaaaaaa</a>
                            </div>
                            <img src='' alt=''/>
                        </div>
                    </section>
                </div>
            </section>
            <aside>
                <span>trending</span>
                <hr/>
                <section>
                    <span># aaaaaaaa</span>
                    <span># aaaaaaaa</span>
                    <span># aaaaaaaa</span>
                    <span># aaaaaaaa</span>
                </section>
            </aside>
        </UserPostsPageStyles>
    );
}

const UserPostsPageStyles = styled.main`
    margin-top: calc(53px + 72px);
    width: 100%;
    display: flex;
    justify-content: center;

    &>section {
        &>div:nth-of-type(1) {
            display: flex;
            column-gap: 18px;

            img {
                width: 50px;
                height: 50px;
                border-radius: 50%;
            }

            h1 {
                font-family: 'Oswald', sans-serif;
                font-weight: 700;
                font-size: 43px;
                line-height: 64px;
                color: #FFFFFF;
            }
        }
    }
`;