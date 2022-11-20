import SearchDog from "./components/SearchDog";
import DogsList from "./components/DogsList";
import { BreedsProvider } from "./context/BreedsProvider";
import { ImagesBreedsProvider } from "./context/ImagesBreedsProvider";

function App() {
  return (
    <BreedsProvider>
      <ImagesBreedsProvider>
        <header className="py-2 d-flex p-3 bg-info">
          <img
            src="/src/assets/img/logo-perro2.png"
            height="100"
            width="140"
            alt=""
          />

          <h1 className="m-4">Dogs Photo App</h1>
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
