// create your App component here
import React, { useState, useEffect } from "react"

function App(){
  const [isLoaded, setIsLoaded] = useState(false)
  const [dogImage, setDogImage] = useState("")

  useEffect(() => {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((res) => res.json())
      .then((data) => {
        setDogImage(data.message)
        setIsLoaded(true)
      })
  }, [])

  if (!isLoaded) return <p>Loading...</p>

  return <img src={dogImage} alt="A Random Dog" />
}

export default App