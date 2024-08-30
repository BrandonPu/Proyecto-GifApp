import { useState } from "react"
import { useGif } from "../hooks/useGif"

//funtional component
export const GifApp = () => {

  const [categoria, setCategoria] = useState("")
  const { handleGetGif, arregloGifs } = useGif()


  return (
    <>

      <div className="container d-fex flex-row justify-content-center alig-items-center mt-3 w-50">
        <form className="d-flex" onSubmit={(e) => { handleGetGif(categoria, e) }}>
          <input className="form-control m-2" type="text" onChange={(e) => { setCategoria(e.target.value) }} />
          <input className="btn btn-success" type="submit" value="Buscar Gif" />
        </form>
      </div>

      <div className="d-flex flex-wrap justify-content-center align-items-center" style={{ gap: '10px' }}>
        {arregloGifs.map(({ id, url }) => {
          return (
            <img className="w-25" key={id} src={url} />
          )
        })}
      </div>
    </>
  )
}
