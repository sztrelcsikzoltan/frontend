import React from 'react';
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';

function Section(props) {
    // console.log(props);
    return (
        
            <Wrap backgroundImg = { props.backgroundImg } >
                <Fade bottom>
                    <ItemText>
                        <h1>{props.title}</h1>
                        <p>{props.description}</p>
                    </ItemText>
                </Fade>
                <Buttons>
                    <Fade bottom>
                        <ButtonGroup>
                            <LeftButton>
                                {props.leftBtnText}
                            </LeftButton>

                            {props.rightBtnText && 
                            <RightButton>
                            {props.rightBtnText}
                            </RightButton>
                            }
                        </ButtonGroup>
                    </Fade>
                    <DownArrow src="./images/down-arrow.png"/>
                </Buttons>

            </Wrap>
    )
}

export default Section

const Wrap = styled.div`
    width: 100vw;
    height: 100vh;
    background-size: contain;  // instead of 'cover' to get a responsive image according to width and height
    background-position: center;
    background-repeat: no-repeat;
    background-image: url('/images/tesla-s-model.jpg');
    display: flex;
    flex-direction: column;
    justify-content: space-between; // vertical alignment
    align-items: center; // horizontal alignment
    /* from the elements of the props object it selects the backgroundImg element !  */
    background-image: ${props => `url("/images/${props.backgroundImg}")`};
    /* background-image: url("/images/{props.backgroundImg}"); // this does not work ?? */
    min-width: 100%;
    // margin-top: 30px;
`
const ItemText = styled.div`
    padding-top: 10vh;
    text-align: center;
`
const ButtonGroup = styled.div`
    display: flex;
    margin-bottom: 30px;

    @media (max-width: 768px) // for small size media set the direction to columns (below each other)
    {
        flex-direction: column;
    }
`

const LeftButton = styled.div`
    background-color: rgba(23, 26, 32, 0.8);
    height: 40px;
    width: 256px;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100px;
    opacity: 0.85;
    text-transform: uppercase;
    font-size: 12px;
    cursor: pointer;
    margin: 8px;
    border: 2px solid black;
`

const RightButton = styled(LeftButton)`
    background: white;
    opacity: 0.65;
    color: black;
`

const DownArrow = styled.img`
    margin-top: 20px;
    height: 40px;
    overflow-x:hidden; // remove horizontal scrollbar if any
    animation: animateDown infinite 1.5s;
`
const Buttons = styled.div``
