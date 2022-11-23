import SearchDog from "./components/SearchDog";
import DogsList from "./components/DogsList";
import { BreedsProvider } from "./context/BreedsProvider";
import { ImagesBreedsProvider } from "./context/ImagesBreedsProvider";
import logo from '../public/img/logo-perro2.png';

function App() {
  return (
    <BreedsProvider>
      <ImagesBreedsProvider>
        <header className="py-2 d-flex p-3 bg-info">

          <a className="text-decoration-none" href="https://stirring-sfogliatella-d9ff2d.netlify.app/">
            <img
              src={logo}
              height="100"
              width="140"
              alt=""
            />
          </a>

          <h1 className="m-4"><a className="text-white text-decoration-none" href="https://stirring-sfogliatella-d9ff2d.netlify.app/">Dogs Photo App</a></h1>
        </header>

        <div className="container px-4">
          <SearchDog />
          <DogsList />
        </div>
      </ImagesBreedsProvider>
    </BreedsProvider>
  );
}

export default App;
