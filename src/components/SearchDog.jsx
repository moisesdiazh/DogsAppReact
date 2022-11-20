import {useState} from "react";
import useBreeds from "../hooks/useBreeds";
import useImagesBreeds from "../hooks/useImagesBreeds";

const SearchDog = () => {

  const {breeds} = useBreeds();
  const [search, setSearch] = useState({
    name: '',
    // subName: ''
  });

  const {getImagesBreeds} = useImagesBreeds(); //desestructuramos para tener la funcion de obtenerimagenes 

  const [alert, setAlert] = useState('');

  const handleSubmit = (e) => {

    e.preventDefault();

    // if(search.name.includes('')){
    //   setAlert("El campo de raza es obligatorio.");
    //   return;
    // }
    // setAlert('');
    getImagesBreeds(search);
  };




  return (
    <>
      <div className="row py-4">
        <form onSubmit={handleSubmit}>
          {/* {alert && <p className="text-danger">{alert}</p>} */}
          <div className="row" id="formdiv" name="formdiv">

            <div className="form-group col-md-4 col-lg-4">
              <label htmlFor="breed" className="py-2">
                Raza
              </label>
              <select 
                className="form-control" 
                id="breed" 
                name="breed"
                value={search.name} 
                onChange={e => setSearch({...search.name, [e.target.name] : e.target.value})}
              >
                <option value=''>Seleccione una Raza</option>
                {Object.keys(breeds).map(breed => (
                  <option key={breed} value={breed}>
                    {breed.charAt(0).toUpperCase() + breed.slice(1)}
                  </option>
                ))}
              </select>
            </div>

            {/* <div className="form-group col-md-4 col-lg-4">
              <label htmlFor="subBreed" className="py-2">
                Sub-Raza
              </label>
              <select 
                className="form-control" 
                id="subBreed" 
                name="subBreed"
                value={search.subName} 
                onChange={e => setSearch({...search.subName, [e.target.subName] : e.target.value})}
              >
                <option>Boxer</option>
                <option>Terrier</option>
                <option>American</option>


              </select>
            </div> */}

            <div className="form-group col-md-4 col-lg-4 my-4">
              <button className="btn btn-info my-3 text-white px-4" type="submit">
                Buscar
              </button>
            </div>

          </div>
        </form>
      </div>
    </>
  );
};

export default SearchDog;
