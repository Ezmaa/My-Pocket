import React from "react";
import styled, { keyframes } from "styled-components";
import { useWindowSize } from '../../utils/useWindowSize';


function Background() {
   
    const {width, height} = useWindowSize()


    const moveBg = keyframes`
    0%{
        transform: translate(0, 0);
    }
    50%{
        transform: translate(${width}px, ${height / 2}px);
    }
    100%{
        transform: translate(0, 0);
    }
    `

    const BackgroundStyled = styled.div`
    width: 70vh;
    height: 70vh;
    position: absolute;
    border-radius: 50%;
    margin-left: -37vh;
    margin-top: -37vh;
    background: linear-gradient(180deg, #0988e8 0%, #0988e8 100%);
    filter: blur(400px);
    animation: ${moveBg} 15s alternate linear infinite;
`;

    return (
        <BackgroundStyled>

        </BackgroundStyled>
    )
}

export default Background