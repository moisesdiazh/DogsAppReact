import { useState } from "react";
import useBreeds from "../hooks/useBreeds";
import useImagesBreeds from "../hooks/useImagesBreeds";

const SearchDog = () => {
  const { breeds } = useBreeds();
  const [search, setSearch] = useState({
    breed: "",
    subBreed: "",
  });

  const { getImagesBreeds, getImagesBreedsBySubBreed } = useImagesBreeds(); //desestructuramos para tener la funcion de obtenerimagenes

  const [alert, setAlert] = useState("");

  const [idSubBreed, setIdSubBreed] = useState(); //yt

  const handleSubmit = (e) => {
    e.preventDefault();

    if (search.breed == "") {
      setAlert("El campo de raza es obligatorio.");
      return;
    }
    setAlert("");
    getImagesBreeds(search);
    getImagesBreedsBySubBreed(search);
  };


  //yt
  const handleLoadSubBreed = (e) => {
    const option = e.target.value;
    // console.log(option);
    setIdSubBreed(option);
  } 

  return (
    <>
      <div className="row py-4">
        <form onSubmit={handleSubmit}>
          {alert && <p className="text-danger">{alert}</p>}
          <div className="row" id="formdiv" name="formdiv">
            <div className="form-group col-md-4 col-lg-4">
              <label htmlFor="breed" className="py-2">
                Raza
              </label>
              <select
                className="form-control"
                id="breed"
                name="breed"
                value={search.breed}
                onChange={(e) =>
                  setSearch({ ...search, [e.target.name]: e.target.value })
                }
                onClick={handleLoadSubBreed}
              >
                <option value="">Seleccione una Raza</option>
                {Object.keys(breeds).map((breed, index) => (
                  <option key={index} value={breed}>
                    {breed.charAt(0).toUpperCase() + breed.slice(1)}
                  </option>
                ))}
              </select>
            </div>

            <div className="form-group col-md-4 col-lg-4">
              <label htmlFor="subBreed" className="py-2">
                Sub-Raza
              </label>
              <select
                className="form-control"
                id="subBreed"
                name="subBreed"
                value={search.subBreed}
                onChange={(e) =>
                  setSearch({ ...search, [e.target.name]: e.target.value })
                }
              >
                {/* condicionales para los select */}
                
                    
                <option value="">Seleccione Sub-Raza</option>
                    
                
                {
                  idSubBreed &&
                    (
                      Object.entries(breeds[idSubBreed]).map((subBreed, index) => {
                      
                      return (
                        <>
                          <option key={index} value={subBreed[1]}>
                          
                            {subBreed[1].charAt(0).toUpperCase() + subBreed[1].slice(1)}
      
                          </option>
                        </>
                        
                        )
                      })
                    )
                }
                
              </select>
            </div>

            <div className="form-group col-md-4 col-lg-4 my-4">
              <button
                className="btn btn-info my-3 text-white px-4"
                type="submit"
              >
                Buscar
              </button>
            </div>
          </div>
        </form>
      </div>

      <div className="column titleDogs d-flex justify-content-center mb-5">
        <div className="d-flex flex-column">
          <div>
            {search.breed != "" && (
              <h1 className="dogtitle text-info mx-3">
                {search.breed.charAt(0).toUpperCase() + search.breed.slice(1)}{" "}
              </h1>
            )}
          </div>

          <div className="d-flex justify-content-center">
            {search.breed != "" && (
              

                <a href="https://stirring-sfogliatella-d9ff2d.netlify.app/" className="btn btn-info text-white">
                  Limpiar Filtros
                </a>
              
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchDog;
