import useImagesBreeds from "../hooks/useImagesBreeds"

const DogsList = () => {

  
  const {imagesBreeds}  = useImagesBreeds();

  return (
    <div className="row">
        {imagesBreeds.map(image => (
            <img key={image} src={image} className="p-3 w-25" height={320}/>
        ))}

    </div>
  )
}

export default DogsList