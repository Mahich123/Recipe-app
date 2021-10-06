import React from "react";
import styled from "styled-components";
import Ingredients from "./Ingredients";

function Recipi({ title, url, image, ingredients }) {
  return (
    <Container>
      <Box>
        <h2>{title}</h2>
        {/* <p>{calories}</p> */}
        <img src={image} alt="" />
        <Info>
          <a href={url} rel="noreferrer" target="_blank">
            INFO
          </a>
          <p>Ingredients</p>
          <Ingredients ingredients={ingredients} />
        </Info>
      </Box>
    </Container>
  );
}

export default Recipi;

const Container = styled.div`
  width: 30rem;
  margin: 3rem;
  display: flex;
  flex-direction: column;
  // grid-template-columns: 1fr 1fr;
  background-color: #6a6969;
  padding: 2rem;
  position: relative;
  border-radius: 0.5rem;
  // box-shadow: 2rem 3rem 5rem #aaa;

  // h1 {
  //     color: #83774d;
  //     margin: 4rem 0;
  // }
  img {
    border-radius: 0.5rem;
    object-fit: cover;
  }
  h2 {
    border-radius: 3em;
    font-weight: 100;
    font-family: cursive;
    color: #f9f3df;
    background: #a2cdcd;
  }
  a {
    text-decoration: none;
    color: white;
    background: #212121;
    padding: 0.5em 0 0.5em 0;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 6px;
    margin-top: 0.2em;
  }

  @media only screen and (max-width: 768px) {
    width: 16rem;
    margin: 0rem;
    padding: 1rem;
    margin-bottom: 1em;
  }
  @media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
    width: 19rem;
  }
`;

const Box = styled.div`
  display: flex;
  flex-direction: column;

  @media only screen and (max-width: 320px) {
    margin: none;
  }
`;
const Info = styled.div`
  display: flex;
  flex-direction: column;

  p {
    font-family: monospace;
    /* font-weight: bold; */
    font-size: 1.5em;
  }
`;
