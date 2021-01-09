import React, { useState, useEffect } from "react";
import { API_URL } from "../config/credentials";
import { Container } from "../components/common";
import styled from "@emotion/styled";

function Reciepes() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    const response = await fetch(API_URL);
    const data = await response.json();
    setRecipes(data.hits);
  };

  return (
    <Container>
      <ListOfRecipes>
        {recipes.map((r: any, id) => (
          <R key={id}>
            <p>
              <b>label: </b>
              {r.recipe.label}
            </p>

            <p>
              <b>calories: </b>
              {r.recipe.calories}
            </p>
          </R>
        ))}
      </ListOfRecipes>
    </Container>
  );
}

export default Reciepes;

const ListOfRecipes = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
`;

const R = styled.div`
  border: 1px solid #000;
  box-shadow: 2px 2px 0 0 #1ca1f3;
  padding: 0 25px;
  border-radius: 5px;
  margin: 5px;
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-items: center;
`;
