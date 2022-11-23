import useImagesBreeds from "../hooks/useImagesBreeds";

const DogsList = () => {
  const { imagesBreeds } = useImagesBreeds();

  return (
    <div className="row mx-5">
      {imagesBreeds.map((image, index) => (
        <div className="col-md-4 col-lg-4">
          <div className="work-box">
            <a href={image}>
              <div className="work-img">
                <img
                  key={index}
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
