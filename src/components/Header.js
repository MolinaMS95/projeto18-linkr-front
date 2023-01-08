import styled from 'styled-components';
import headerButton from '../constants/headerButton.svg';
import magnifier from '../constants/magnifier.svg';

export default function Header() {
    return (
        <HeaderStyles>
            <h1>linkr</h1>
            <input type='text' placeholder='Search for people'/>
            <div>
                <img src={headerButton} alt=''/>
                <img src='https://static.displate.com/857x1200/displate/2021-04-09/b7b4d3e3a40c4dc0f212353ed79d997b_833c168276525a73bf78ff480e6a7578.jpg' alt='Profile picture'/>
            </div>
        </HeaderStyles>
    );
}

const HeaderStyles = styled.header`
    position: fixed;
    top: 0;
    z-index: 10;
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

    input {
        width: 563px;
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

    div {
        display: flex;
        column-gap: 10px;

        img:nth-of-type(2) {
            width: 53px;
            height: 53px;
            border-radius: 50%;
            object-fit: cover;
        }
    }

    @media (max-width: 820px) {
        input {
            width: calc(100% - 2*17px - 109.76px - 86px - 2*9.62px);
        }

        @media (max-width: 375px) {
            div {
                column-gap: 5px;
            }

            div img:nth-of-type(2) {
                width: 41px;
                height: 41px;
            }
        }
    }
`;