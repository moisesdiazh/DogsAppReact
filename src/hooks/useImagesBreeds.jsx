import { useContext } from "react";
import ImagesBreedsContext from "../context/ImagesBreedsProvider";


const useImagesBreeds = () => {

    return useContext(ImagesBreedsContext)
}

export default useImagesBreeds