import {GlobalStyle} from "./GlobalStyle"
import styled from "styled-components"

import qr from "./assets/images/image-qr-code.png"


const Page = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
`

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 20px;
    padding: 15px;
    background: white;
    width: 300px;
    box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.2);
    text-align: center;
`
const Image = styled.img`
    width: 100%;
    border-radius: 10px;
`

const BoldText = styled.p`
    color: hsl(218, 44%, 22%);
    font-weight: 800;
    font-size: 1.2rem;
`

const LightText = styled.p`
    color: hsl(220, 15%, 55%);
    font-size: 0.85rem;
    font-weight: 400;
`
const TextContainer = styled.div`
    padding: 0px 5px;

    > * {
        margin: 15px;
    }
`

const App = () => {
    return (
        <>
            <GlobalStyle />
            <Page>
                <Container>
                    <Image src={qr} />
                    <TextContainer>
                        <BoldText>Improve your front-end skills by building projects</BoldText>
                        <LightText>Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</LightText>
                    </TextContainer>
                </Container>
            </Page>
        </>
    )
}

export default App
