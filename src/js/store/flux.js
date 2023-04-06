const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      user: "Jesus",
      algo: "agregado",
      lastname: "Rodriguez",
      todoList: ["tarea de prueba"],
      personajesSwapi: [],
      planetasSwapi: [],
      favorites: [],
    },


    actions: {
      functionDemo: () => console.log("me ejecuto en el flux"),
      fetchCharacters: async () => {
        try {
          const store = getStore();
          const localPersonajes= JSON.parse(
            localStorage.getItem("personajes")
          );
          if(localPersonajes){
            setStore({...store,personajesSwapi: localPersonajes});
            return;
          }
          for (let index=1; index <=15; index++){
          const response = await fetch(`https://www.swapi.tech/api/people/${index}`);
          if (response.ok) {
            const data = await response.json();
            localStorage.setItem(
              "personaje",
              JSON.stringify(data)
            );
            setStore({ ...store, personajesSwapi: [...store.personajesSwapi, data.result] });
          }
        }
        } catch (error) {
          console.log(error);
        }
      },
      fetchPlanets: async () => {
        try {
          
          const store = getStore();
          const localPlanetas= JSON.parse(localStorage.getItem("planetas"));
          if(localPlanetas){
            setStore({...store,planetasSwapi: localPlanetas});
            return;
          };
          for (let index=2; index <=15; index++){
          const response = await fetch(`https://www.swapi.tech/api/planets/${index}`);
          if (response.ok) {
            const data = await response.json();
            
            localStorage.setItem(
              "planeta",
              JSON.stringify(data)
            );
            setStore({ ...store, planetasSwapi: [...store.planetasSwapi, data.result] });
            
          }
        
        }
        } catch (error) {
          console.log(error);
        }
      },
      
      updateFavorites: (item) => {
        const store = getStore();
      const favorite =  store.favorites.some((fav) => fav._id === item._id)
     if (favorite) {
      const newFavorite = store.favorites.filter((fav)=> fav._id !== item._id)
      setStore({...store, favorites: newFavorite})
     }else{
      setStore({...store, favorites:[...store.favorites, item]});
      
     }
     console.log(store.favorites)
            }

      
    },
   
  };
};

export default getState;
