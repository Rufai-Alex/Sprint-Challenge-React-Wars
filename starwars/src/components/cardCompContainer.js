import React, { useEffect, useState } from "react";
import Card from "./cardComponent";
import axios from "axios";

const CardContainer = () => {
  const [ster, setSter] = useState([]);

  useEffect(() => {
    axios
      .get("https://cors-anywhere.herokuapp.com/https://swapi.co/api/people")
      .then(response => {
        console.log(response.data.results);
        setSter(response.data.results);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);
  return (
    <div>
      {ster.map((ster, index) => {
        console.log(ster.name);
        return <Card key={index} ster={ster} />;
      })}
    </div>
  );
};
export default CardContainer;
