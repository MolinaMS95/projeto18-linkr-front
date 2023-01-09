import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import headerButton from '../constants/headerButton.svg';
import magnifier from '../constants/magnifier.svg';

export default function Header() {
    const navigate = useNavigate();

    function handleInput(e) {
        console.log(e);
    }

    return (
        <HeaderStyles>
            <section>
                <h1 onClick={() => navigate('/')}>linkr</h1>
                <div>
                    <input type='text' placeholder='Search for people'/>
                    <div>
                        {/* <div>
                            <img src='https://static-cse.canva.com/blob/759754/IMAGE1.jpg' alt=''></img>
                            <span>João Avatares</span>
                        </div>
                        <div>
                            <img src='http://s2.glbimg.com/h3Duok3KWVA8yaIOzZZIESkNLC4DKPsVVGWWhNMHhpNIoz-HdGixxa_8qOZvMp3w/e.glbimg.com/og/ed/f/original/2013/08/02/imagem_para_sexta_51.jpg' alt=''></img>
                            <span>João Amongus</span>
                        </div> */}
                    </div>
                </div>
                <div>
                    <img src={headerButton} alt=''/>
                    <img src='https://static.displate.com/857x1200/displate/2021-04-09/b7b4d3e3a40c4dc0f212353ed79d997b_833c168276525a73bf78ff480e6a7578.jpg' alt='Profile picture'/>
                </div>
            </section>
            <div>
                <input type='text' placeholder='Search for people'/>
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
            border-radius: 8px;
            background-color: #E7E7E7;

            input {
                width: 100%;
            }

            &>div {
                position: absolute;
                width: 563px;

                div {
                    display: flex;
                    align-items: center;

                    img {
                        width: 40px;
                        height: 40px;
                        border-radius: 50%;
                        object-fit: cover;
                    }

                    /* span {

                    } */
                }
            }
        }

        &>div:nth-of-type(2) {
            display: flex;
            column-gap: 10px;

            img:nth-of-type(1) {
                width: 20px;
            }

            img:nth-of-type(2) {
                width: 53px;
                height: 53px;
                border-radius: 50%;
                object-fit: cover;
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

        ::placeholder {
            font-family: 'Lato', sans-serif;
            font-weight: 400;
            font-size: 19px;
            line-height: 23px;
            color: #C6C6C6;
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
            width: calc(100% - 2*10px);
            height: 45px;
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

                img:nth-of-type(1) {
                    width: 16px;
                }

                img:nth-of-type(2) {
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