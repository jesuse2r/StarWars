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
          for (let index=1; index <=15; index++){
          const response = await fetch(`https://www.swapi.tech/api/people/${index}`);
          if (response.ok) {
            const data = await response.json();
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
          for (let index=1; index <=15; index++){
          const response = await fetch(`https://www.swapi.tech/api/planets/${index}`);
          if (response.ok) {
            const data = await response.json();
            console.log(data);
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
