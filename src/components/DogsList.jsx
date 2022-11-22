import useImagesBreeds from "../hooks/useImagesBreeds";

const DogsList = () => {
  const { imagesBreeds } = useImagesBreeds();

  return (
    <div className="row">
      {imagesBreeds.map((image) => (
        <div className="col-md-4 col-lg-4">
          <div className="work-box">
            <a href={image}>
              <div className="work-img">
                <img
                  key={image}
                  src={image}
                  className="img-fluid p-4"
                  height={370}
                  width={350}
                />
              </div>
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DogsList;
