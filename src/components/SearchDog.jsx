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
    console.log(option);
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
                <option value="0">Seleccione una Raza</option>
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
                <option value="">Seleccione Sub-Raza</option>
                
                {
                  idSubBreed == "australian" &&
                    (
                      Object.entries(breeds.australian).map((subBreed, index) => {
                      
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

                {
                  idSubBreed == "buhund" &&
                    (
                      Object.entries(breeds.buhund).map((subBreed, index) => {
                      
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

                {
                  idSubBreed == "bulldog" &&
                    (
                      Object.entries(breeds.bulldog).map((subBreed, index) => {
                      
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

                {
                  idSubBreed == "bullterrier" &&
                    (
                      Object.entries(breeds.bullterrier).map((subBreed, index) => {
                      
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

                {
                  idSubBreed == "cattledog" &&
                    (
                      Object.entries(breeds.cattledog).map((subBreed, index) => {
                      
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

                {
                  idSubBreed == "collie" &&
                    (
                      Object.entries(breeds.collie).map((subBreed, index) => {
                      
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

                {
                  idSubBreed == "corgi" &&
                    (
                      Object.entries(breeds.corgi).map((subBreed, index) => {
                      
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

                {
                  idSubBreed == "dane" &&
                    (
                      Object.entries(breeds.dane).map((subBreed, index) => {
                      
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

                {
                  idSubBreed == "deerhound" &&
                    (
                      Object.entries(breeds.deerhound).map((subBreed, index) => {
                      
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

                {
                  idSubBreed == "elkhound" &&
                    (
                      Object.entries(breeds.elkhound).map((subBreed, index) => {
                      
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

                {
                  idSubBreed == "finnish" &&
                    (
                      Object.entries(breeds.finnish).map((subBreed, index) => {
                      
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

                {
                  idSubBreed == "frise" &&
                    (
                      Object.entries(breeds.frise).map((subBreed, index) => {
                      
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

                {
                  idSubBreed == "greyhound" &&
                    (
                      Object.entries(breeds.greyhound).map((subBreed, index) => {
                      
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

                {
                  idSubBreed == "hound" &&
                    (
                      Object.entries(breeds.hound).map((subBreed, index) => {
                      
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

                {
                  idSubBreed == "mastiff" &&
                    (
                      Object.entries(breeds.mastiff).map((subBreed, index) => {
                      
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

                {
                  idSubBreed == "mountain" &&
                    (
                      Object.entries(breeds.mountain).map((subBreed, index) => {
                      
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

                {
                  idSubBreed == "ovcharka" &&
                    (
                      Object.entries(breeds.ovcharka).map((subBreed, index) => {
                      
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

                {
                  idSubBreed == "pinscher" &&
                    (
                      Object.entries(breeds.pinscher).map((subBreed, index) => {
                      
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

                {
                  idSubBreed == "pointer" &&
                    (
                      Object.entries(breeds.pointer).map((subBreed, index) => {
                      
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

                {
                  idSubBreed == "poodle" &&
                    (
                      Object.entries(breeds.poodle).map((subBreed, index) => {
                      
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

                {
                  idSubBreed == "retriever" &&
                    (
                      Object.entries(breeds.retriever).map((subBreed, index) => {
                      
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

                {
                  idSubBreed == "ridgeback" &&
                    (
                      Object.entries(breeds.ridgeback).map((subBreed, index) => {
                      
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

                {
                  idSubBreed == "schnauzer" &&
                    (
                      Object.entries(breeds.schnauzer).map((subBreed, index) => {
                      
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

                {
                  idSubBreed == "segugio" &&
                    (
                      Object.entries(breeds.segugio).map((subBreed, index) => {
                      
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

                {
                  idSubBreed == "setter" &&
                    (
                      Object.entries(breeds.setter).map((subBreed, index) => {
                      
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

                {
                  idSubBreed == "sheepdog" &&
                    (
                      Object.entries(breeds.sheepdog).map((subBreed, index) => {
                      
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

                {
                  idSubBreed == "spaniel" &&
                    (
                      Object.entries(breeds.spaniel).map((subBreed, index) => {
                      
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

                {
                  idSubBreed == "springer" &&
                    (
                      Object.entries(breeds.springer).map((subBreed, index) => {
                      
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

                {
                  idSubBreed == "terrier" &&
                    (
                      Object.entries(breeds.terrier).map((subBreed, index) => {
                      
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

                {
                  idSubBreed == "waterdog" &&
                    (
                      Object.entries(breeds.waterdog).map((subBreed, index) => {
                      
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

                {
                  idSubBreed == "wolfhound" &&
                    (
                      Object.entries(breeds.wolfhound).map((subBreed, index) => {
                      
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
