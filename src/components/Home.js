import { useState } from "react";
import styled from "styled-components";
import Recipi from "./Recipi";

function Home() {
  const [query, setQuery] = useState("");
  const [recipes, setrecipes] = useState([]);

  const APP_ID = "5af5786c";
  const APP_KEY = "1484d975c1dcc0db4c4dd780e39dab87";

  const url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`;

  const geT = async () => {
    const res = await fetch(url);

    const data = await res.json();
    setrecipes(data.hits);
    console.log(data);
    setQuery("");
  };

  const onSubmit = (e) => {
    e.preventDefault();
    geT();
  };
  const onChange = (e) => {
    setQuery(e.target.value);
  };

  return (
    <Container>
      <h1>Search your recipi</h1>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="search food"
          autoComplete="off"
          onChange={onChange}
          value={query}
        />
        <input type="submit" value="search" />
      </form>

      {/* <Recipe>
            {recipes !== [] && recipes.map(recipe => 
            
               <Recipi recipe{...recipe}/>
            )}
            </Recipe>    */}

      {/* {recipes.map(recipe => {
                <Recipi title={recipe.recipe.label} calories={recipe.recipe.calories}
                image={recipe.recipe.image}
                />
            })} */}
      <Box>
        {recipes.map((recipe, i) => (
          <Recipi
            key={i}
            title={recipe.recipe.label}
            url={recipe.recipe.url}
            image={recipe.recipe.image}
            ingredients={recipe.recipe.ingredients}
          />
        ))}
      </Box>
    </Container>
  );
}

export default Home;
const Container = styled.div`
  h1 {
    font-size: 3rem;
    letter-spacing: 0.1rem;
    font-style: italic;
    color: #40b48e;
    // text-shadow: 0 0.2rem 5rem rgb(119, 115, 115);
    text-transform: uppercase;
    margin: 4rem 0;
  }
  input[type="text" i] {
    background: rgba(115, 115, 115, 0.01);
    box-shadow: -10px -10px 20px rgba(0, 0, 0, 0.12),
      10px 10px 20px rgba(0, 0, 0, 0.25);
    border-radius: 14px;
    border: none;
    padding: 1em 2em 1em 3em;
    outline: none;
    color: #fff;
  }

  input[type="submit" i] {
    border: none;
    background: #4a4946;
    color: #ffffff9e;
    padding: 1em 2em 1em 2em;
    border-radius: 8px;
    margin-left: 0.5em;
    cursor: pointer;
  }
  @media only screen and (max-width: 768px) {
    h2 {
      font-size: unset;
    }
  }
  @media only screen and (max-width: 320px) {
    form {
      diplay: flex;
    }
    input[type="submit" i] {
      margin-top: 1em;
    }
    h2 {
      font-size: small;
    }
    h1 {
      font-size: 2em;
    }
  }
`;

const Box = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  // margin: 6em;

  @media only screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    margin: 2rem;
  }

  @media only screen and (max-width: 320px) {
    margin: 1rem;
  }
  @media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
    grid-template-columns: 1fr 1fr;
  }
`;
