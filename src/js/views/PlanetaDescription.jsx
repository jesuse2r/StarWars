import React,{useEffect,useState} from "react";
import { useParams } from "react-router-dom";

const PlanetaDescription = () => {
    const [currentPlanet, setCurrentPlanet] = useState({})
    const params = useParams()
    const {id} = params;
   
    const fetchPlanetDetail = async (id) => {
       try { 
        const response = await fetch(`https://www.swapi.tech/api/planets/${id}`)
        if (response.ok){
            const data = await response.json();
          setCurrentPlanet(data.result)
        }
       } catch (error) {
        console.log(error)
        
       }
       


    };
useEffect(()=> {
    fetchPlanetDetail(params.id)
}, []);

return(
  <>
  {currentPlanet ? (
  <div className="card mb-3 m-3 bg-dark" style={{MaxWidth: "540px"}}>
<div className="row g-0">
<div className="col-md-4">
  <img src= {`https://starwars-visualguide.com/assets/img/planets/${currentPlanet?.uid}.jpg`}
  
   className="img-fluid rounded-start" alt="..."/>
</div>
<div className="col-md-8">
  <div className="card-body">
    <h5 className="card-title">
    {currentPlanet?.properties?.name}</h5>
    <p className="card-text text-white"> "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
    
  
  
  
   

  </div>
  
   
</div>
</div>

    <div className="h4 pb-2 mb-4 text-danger border-bottom border-white text d-flex gap-5 mt-4">

</div>
<div className="text d-flex mt-2 gap-5 text-danger m-3 justify-content-center  text-white">
<p>Name: {currentPlanet?.properties?.name}</p>
    <p>Climate: {currentPlanet?.properties?.climate}</p>
    <p>Population: {currentPlanet?.properties?.population}</p>
    <p>Orbital Period: {currentPlanet?.properties?.orbital_period}</p>
    <p>Rotation Period: {currentPlanet?.properties?.rotation_period}</p>
    <p>Diameter: {currentPlanet?.properties?.diameter}</p>
    </div>
</div>
) : ( 
<>cargando</>


)}
</>

 
    
  
  
  
  
  
  

)
}
export default PlanetaDescription;