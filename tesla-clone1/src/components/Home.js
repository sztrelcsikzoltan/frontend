import React from 'react'
import styled from "styled-components"
import Section from './Section'

function Home() {
    return (
        <div>
            <Container>
                <Section 
                    title = "Model S"
                    description = "Order Online for Touchless Delivery"
                    backgroundImg="tesla-s-model.jpg"
                    leftBtnText = "Custom order"
                    rightBtnText = "Existing inventory"
                />
                <Section
                    title = "Model Y"
                    description = "Order Online for Touchless Delivery"
                    backgroundImg="tesla-y-model.jpg"
                    leftBtnText = "Custom order"
                    rightBtnText = "Existing inventory"
                />
                <Section
                    title = "Model 3"
                    description = "Order Online for Touchless Delivery"
                    backgroundImg="tesla-3-model.jpg"
                    leftBtnText = "Custom order"
                    rightBtnText = "Existing inventory"
                />
                <Section
                    title = "Model X"
                    description = "Order Online for Touchless Delivery"
                    backgroundImg="tesla-x-model.jpg"
                    leftBtnText = "Custom order"
                    rightBtnText = "Existing inventory"
                />
                <Section
                    title = "Model Z"
                    description = "Order Online for Touchless Delivery"
                    backgroundImg="tesla-z-model.jpg"
                    leftBtnText = "Custom order"
                    rightBtnText = "Existing inventory"
                />
                <Section
                    title = "Lowest Cost Solar Panels in America"
                    description = "Money-back guarantee"
                    backgroundImg="solarpanel.jpg"
                    leftBtnText = "Order now"
                    rightBtnText = "Learn More"
                />
                <Section
                    title = "Solar for New Roofs"
                    description = "Solar Roof Costs Less"
                    backgroundImg="solarroof.jpg"
                    leftBtnText = "Order now"
                    rightBtnText = "Learn More"
                />
                <Section
                    title = "Accessories"
                    description = ""
                    backgroundImg="charger.jpg"
                    leftBtnText = "Shop now"
                />

            </Container>
        </div>
    )
}

export default Home

const Container = styled.div`
    height: 100vh;
`

