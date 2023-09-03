import React from 'react'
import Styled, { styled } from 'styled-components'
function Section() {
  return (
    <Wrap>
    <ItemText>
        <h1>Model S</h1>
        <p>Order Online for Touchless Delivery</p>
    </ItemText>
    <ButtonGroup>
        <LeftButton>
            Custom Order
        </LeftButton>
        <Rightbutton>
        Exisiting Inventory
        </Rightbutton>
    </ButtonGroup>


    </Wrap>
  )
}

export default Section

const Wrap = Styled.div`
width: 100vw;
height : 100vw;
background-size:cover;
background-position:center;
background-repeat:no-repeat;
background-image:url('/images/model-s.jpg')
`

const ItemText = styled.div`
padding-top: 15vh;
text-align: center;

`
const ButtonGroup = styled.div`

`

const LeftButton = styled.div`

`
const Rightbutton = styled(LeftButton)`
`