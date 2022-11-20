import { useState, useEffect, createContext } from "react";
import axios from "axios";

const BreedsContext = createContext();

const BreedsProvider = ({ children }) => {


  const [breeds, setBreeds] = useState([]); //definimos el state para luego pasar las razas al provider

  const getBreeds = async () => { //obtenemos la lista de razas
    try {
      const url = "https://dog.ceo/api/breeds/list/all";

      const { data } = await axios(url);
      setBreeds(data.message);

    } catch (e) {
      console.log(e);
    }
  };


  useEffect(() => { //un useEffect para que solamente se ejecute una vez el llamado
    getBreeds();
  }, []);

  return (
    <BreedsContext.Provider value={{breeds}}>
        
        {children}
    
    </BreedsContext.Provider>
    
    )
};

export { BreedsProvider };

export default BreedsContext;
