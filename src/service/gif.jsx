const api_key = "ZRHZZTKFY9LNRghHeYFVT4ru1IfXXwa0"
const categoria = "Messi"
const limit = 10

export const reqGif = async() => {
  try {
     const resp = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=${api_key}&q=${categoria}&limit=${limit}`)
     const {data} = await resp.json()

    //return data.images.original.url
    const arregloGifs = data.map((gif)=> ({
        id: gif.id,
        url: gif.images.original.url
     }))

    return arregloGifs

  } catch (err) {
    console.log(err)
  }
}

