import { Canvas, useFrame } from "@react-three/fiber"
import Experience from "./Experience/Experience"
import { useEffect } from "react"

function App() {

  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const identificator = urlParams.get("id") ? Number(urlParams.get("id")) : 1;

  console.log("identificator:", identificator);

  const colors = [
    {'scale': 1.0, color: 'red'},
    {'scale': 1.2, color: 'blue'},
    {'scale': 1.4, color: 'green'},
    {'scale': 1.6, color: 'mediumpurple'},
]

  const object = {
    height: window.innerHeight,
    width: window.innerWidth,
    left: window.screenLeft,
    top: window.screenTop,
    color: colors[identificator-1].color,
    scale: colors[identificator-1].scale,
  };

  useEffect(() => {
    localStorage.setItem(identificator, JSON.stringify(object))
  }, [])

  return (
    <>
      <Canvas
        dpr={[1, 2]}
      >
        <Experience identificator={identificator}/>
      </Canvas>
    </>
  )
}

export default App
