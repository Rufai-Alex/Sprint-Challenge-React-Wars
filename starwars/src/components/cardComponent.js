import React from 'react';
import styled from 'styled-components';

const DIV = styled.div`
  font-size: 25px;

`
const H1 = styled.h1`
  font-size: 50px;
  font-family: sans-serif;
	color: royalblue;
	padding: 12px 0;
`;
const Card = (props) => {
    return (
        <DIV>
            <H1>{props.ster.name}</H1>
            <h3>Height :{props.ster.height}</h3>
            <h3>Mass: {props.ster.mass} </h3>
            <h3>Skin Colour: {props.ster.skin_color} </h3>

        </DIV>
    )

}
export default Card;