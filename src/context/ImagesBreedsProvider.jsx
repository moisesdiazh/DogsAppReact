import { useState, useEffect, createContext } from "react";
import axios from "axios";

const ImagesBreedsContext = createContext();

const ImagesBreedsProvider = ({ children }) => {

  const [imagesBreeds, setImagesBreeds] = useState([]);

  const getImagesBreeds = async (info) => {
    try {

        const url = `https://dog.ceo/api/breed/${info.breed}/images`;

        const {data} = await axios(url);
        setImagesBreeds(data.message);
        console.log(data.message);
    } catch (err) {
        console.log(err);
    }
  };

  return (
    <ImagesBreedsContext.Provider value={{getImagesBreeds, imagesBreeds}}>
      {children}
    </ImagesBreedsContext.Provider>
  );
};

export { ImagesBreedsProvider };

export default ImagesBreedsContext;
