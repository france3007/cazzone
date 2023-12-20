import React, { useState, useEffect } from "react";
import { getAllAste } from "../utils/APIRoutes";

export default function Asta() {
  const [aste, setAste] = useState([]);

  const fetchData = async () => {
    try {
        console.log("sto funzionando")
      const response = await fetch(getAllAste);
      const data = await response.json();
      console.log(data)
      setAste(data);
    } catch (error) {
      console.error('Errore durante il recupero dei prodotti:', error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <h4>Queste sono le aste</h4>
      <ul>
        {aste.map((asta) => (
            <div>
              <p>{asta.nomeProdotto}</p>
              <p>{asta.prezzoPartenza}</p>
              <p>{asta.prezzoCorrente}</p>
              <p>{asta.datainizio}</p>
              <p>{asta.dataFine}</p>
            </div>
          ))}
      </ul>
    </div>
  );
  
}


