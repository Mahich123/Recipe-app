import React from "react";
import styled from "styled-components";

function Ingredients({ ingredients }) {
  return (
    <Container>
      {/* {
                ingredients.map((element) => {
                  return (    */}
      <ul>
        {ingredients.map((element, i) => (
          <li key={i}>{element.text}</li>
        ))}
      </ul>
    </Container>
  );
}

export default Ingredients;
const Container = styled.div`
  li {
    list-style: none;
    display: flex;
    flex-direction: column;
    text-align: left;
    margin-bottom: 0.5em;
  }
  background: #b5b5b5;
  margin-top: 0.3em;
`
