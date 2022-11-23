import { useState } from "react";
import useBreeds from "../hooks/useBreeds";
import useImagesBreeds from "../hooks/useImagesBreeds";

const SearchDog = () => {
  const { breeds } = useBreeds();
  const [search, setSearch] = useState({
    breed: "",
    subBreed: "",
  });

  const subBreeds = [
    "shepherd",
    "boston",
    "english",
    "french",
    "staffordshire",
    "australian",
    "border",
    "cardigan",
    "great",
    "scottish",
    "norwegian",
    "lapphund",
    "bichon",
    "italian",
    "afghan",
    "basset",
    "blood",
    "ibizan",
    "plott",
    "walker",
    "bull",
    "tibetan",
    "bernese",
    "swiss",
    "caucasian",
    "miniature",
    "german",
    "germanlonghair",
    "medium",
    "standard",
    "toy",
    "chesapeake",
    "curly",
    "flatcoated",
    "golden",
    "rhodesian",
    "giant",
    "gordon",
    "irish",
    "shetland",
    "blenheim",
    "brittany",
    "cocker",
    "japanese",
    "sussex",
    "welsh",
    "american",
    "bedlington",
    "cairn",
    "dandie",
    "fox",
    "kerryblue",
    "lakeland",
    "norfolk",
    "norwich",
    "patterdale",
    "russell",
    "sealyham",
    "silky",
    "westhighland",
    "wheaten",
    "yorkshire",
    "spanish",
  ];

  const { getImagesBreeds, getImagesBreedsBySubBreed } = useImagesBreeds(); //desestructuramos para tener la funcion de obtenerimagenes

  const [alert, setAlert] = useState("");

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
              >
                <option value="">Seleccione una Raza</option>
                {Object.keys(breeds).map((breed) => (
                  <option key={breed} value={breed}>
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
                {subBreeds.map((subBreed) => (
                  <option key={subBreed} value={subBreed}>
                    {subBreed.charAt(0).toUpperCase() + subBreed.slice(1)}
                  </option>
                ))}
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
            {search && (
              <h1 className="text-info">
                {search.breed.charAt(0).toUpperCase() + search.breed.slice(1)}{" "}
                {search.subBreed.charAt(0).toUpperCase() +
                  search.subBreed.slice(1)}
              </h1>
            )}
          </div>

          <div className="d-flex justify-content-center">
            {search.breed != "" && (
              <a
                className="btn btn-info text-white"
                href="http://127.0.0.1:5173/"
              >
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
