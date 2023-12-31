
import { GifItem } from "./gifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";

export const GifGrid = ({category}) => {

  const {images, isLoading} = useFetchGifs(category)

  return (
    <>
        <h3>{category}</h3>
        {
          isLoading && (<h2>Cargandoooo....</h2>)
        }

        <div className="card-grid">
          {
            images.map( (image)=> (

              <GifItem 
              key={image.id}
              {...image}
              />

            ))
          }
        </div>
    
    </>
  )
}
