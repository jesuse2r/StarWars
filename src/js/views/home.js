import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import "../../styles/index.css";
import { useNavigate } from "react-router-dom";
export const Home = () => {
  const { store, actions } = useContext(Context);
  const navigate = useNavigate();

  console.log(store.personajesSwapi);

  return (
    <div className="text-center mt-5 container  ">
      <h2 className="text-dark text-left text-start">Personajes</h2>
      
      <div className="carrusel">
        <div className="d-flex gap-5">
          

          {store.personajesSwapi.map((personaje) => {
            return (
              <div className="card" key={personaje._id} style={{ minWidth: "18rem" }}>
                <img
                  src={`https://starwars-visualguide.com/assets/img/characters/${personaje.uid}.jpg`}
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title"> {personaje.properties.name}</h5>
                  <p className="card-text">
                    Gender: {personaje.properties.gender}
                  </p>
                  <p className="card-text">
                    Eye Color:{personaje.properties.eye_color}
                  </p>
                  <p className="card-text">
                    Hair Color: {personaje.properties.hair_color}
                  </p>
                  <div className="d-flex justify-content-between">
                  <button
                    className="btn btn-outline-dark"
                    onClick={() => navigate(`/personaje/${personaje.uid}`)}
            
                  >
                    Learn More!
                  </button>
                  <button className="btn btn-outline-danger"
                  onClick={()=>(actions.updateFavorites(personaje))}>
               
                  {
                    store.favorites.some((fav) => fav._id === personaje._id)
                    ? <i className="fas fa-heart btn-end"></i>
                    : <i className="far fa-heart btn-end"></i>
                  }
                  
                   
                  </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <h2 className="mt-5  text-dark text-start "> Planetas </h2>
      <div className="carrusel">
        <div className="d-flex gap-5">
          {store.planetasSwapi.map((planeta) => {
            return (
              <div className="card" key={planeta._id}style={{ minWidth: "18rem" }}>
                <img
                  src={`https://starwars-visualguide.com/assets/img/planets/${planeta.uid}.jpg`}
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">{planeta.properties.name}</h5>
                  <p className="card-text">
                    Population: {planeta.properties.population}
                  </p>
                  <p className="card-text"> Terrain: {planeta.properties.terrain}</p>
                  <p className="card-text">Climate: {planeta.properties.climate}</p>
                
                 <div className="d-flex justify-content-between">
                  <button
                    className="btn btn-outline-dark"
                    onClick={() => navigate(`/planeta/${planeta.uid}`)}
                  >
                    Learn More!
                  </button>
                  <button className="btn btn-outline-danger"
                  onClick={()=>(actions.updateFavorites(planeta))}>
               
                  {
                    store.favorites.some((fav) => fav._id === planeta._id)
                    ? <i className="fas fa-heart btn-end"></i>
                    : <i className="far fa-heart btn-end"></i>
                  }
                  
                   
                  </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
