import React, {useEffect, useState} from "react";
import { useParams } from "react-router-dom";
const PersonajeDetails = () => {
    const params =useParams();
    const[currentCharacter, setCurrentCharacter] = useState ({});
    const{id} = params;
    
 const getCharacterDetail = async (id) => {
  try {
   
    const response  = await fetch(`https://www.swapi.tech/api/people/${id}`)
 if(response.ok){
    const data = await response.json()
    setCurrentCharacter(data.result);
 }

  } catch (error) {
    console.log(error);
  }
    
 };
 useEffect(() => {
    getCharacterDetail(id);
}, []);
    return (
      <>
      {currentCharacter ? (
      <div className="card mb-3 m-3 bg-dark" style={{MaxWidth: "540px"}}>
  <div className="row g-0">
    <div className="col-md-4">
      <img src= {`https://starwars-visualguide.com/assets/img/characters/${currentCharacter?.uid}.jpg`} className="img-fluid rounded-start" alt="..."/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">
        {currentCharacter?.properties?.name}</h5>
        <p className="card-text text-white"> "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
        
      
      
      
       

      </div>
      
       
    </div>
  </div>
 
        <div className="h4 pb-2 mb-4 text-danger border-bottom border-white text d-flex gap-5 mt-4">
    
</div>
<div className="text d-flex mt-2 gap-5 text-danger m-3 justify-content-center text-white">
<p>Name: {currentCharacter?.properties?.name}</p>
        <p>Birth Year: {currentCharacter?.properties?.birth_year}</p>
        <p>Gender: {currentCharacter?.properties?.gender}</p>
        <p>Height: {currentCharacter?.properties?.height}</p>
        <p>Skin Color: {currentCharacter?.properties?.skin_color}</p>
        <p>Eye Color: {currentCharacter?.properties?.eye_color}</p>
        </div>
</div>
) : ( 
  <>cargando</>
  
 
)}
</>






    );
};
export default PersonajeDetails;
