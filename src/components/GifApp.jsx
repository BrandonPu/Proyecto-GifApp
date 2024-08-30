import { useGif } from "../hooks/useGif"
import { BuscarGif } from "./BuscarGif"
import { ContenedorGif } from "./ContenedorGif"

//funtional component
export const GifApp = () => {

  const { handleGetGif, arregloGifs } = useGif()

  //PROPS = Es una funcion o constante que va al funcional components
  return (
    <>
      <BuscarGif handleGetGif={handleGetGif} />
      <ContenedorGif arregloGifs={arregloGifs} />
    </>
  )
}
