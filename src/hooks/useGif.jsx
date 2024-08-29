import { useState } from "react"
import { reqGif } from "../service/gif"

export const useGif = () => {

  const [arregloGifs, setArregloGifs] = useState([])
  
  const handleGetGif = async() => {
      await reqGif().then((arregloGifs)=>{
        setArregloGifs(arregloGifs)
      })

  }

  //retorno del hook
  return {
    handleGetGif,
    arregloGifs
  }
}
