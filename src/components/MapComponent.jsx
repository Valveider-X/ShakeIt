import React, { useEffect, useRef, useState } from 'react'
import {Map, TileLayer, Marker} from "leaflet"


 function MapComponent() {
  /* const map = L.map("map", {
    center: [40.425460, -3.704720], //sitio madriz
    zoom: 13,

  })
 } */

    const [map, setMap] =useState(null)
    //const mapInit = useRef(false) 


    useEffect(()=>{
      //para iniciar mapa
      //todo sale el mapa como quiere con cuadras intercambiadas
        //iniciando mapa
           /*  mapInit.current = true */
            const cocktailMap = L.map("map", {
                center: [40.425460, -3.704720], //sitio madriz
                zoom: 13,

            })
            //console.log(cocktailMap); //! Console (running)

            setMap(cocktailMap)
          const tileLayer = new TileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>',
            subdomains: ['a', 'b', 'c']
        })
        //console.log(tileLayer); //! Console

        cocktailMap.addLayer(tileLayer)
      
    },[])

    const bars = [
      {
        name:"1862 Dry Bar",
        lat:40.425460,
        lng:-3.704720,
        description:"Especializados en coctelería clásica, con una gran variedad de cócteles inspirados en recetas originales de antes de la Ley Seca.",
      },
      {
        name: "The Dash",
        lat: 40.434930,
        lng: -3.703790,
        description: "Coctelería en Chamberí con cócteles clásicos y de autor, destacando por sus ingredientes de alta calidad."
      },
    ]

    useEffect(()=>{
      //este para las marcas
      //TODO NO ME ESTÁ FUNCIONANDO
      if (map){
        bars.forEach((bar)=>{
          const marker = new Marker([bar.lat, bar.lng]).addTo(map)
          //console.log(marker) //! CONSOLE
          marker.bindPopup(`${bar.name}<br>${bar.description}`)
        })
      }
    }, [map, bars])

  return (
    <div id="map" 
    style={{ 
      height: 500, 
      width: 800, 
      border: '1px solid black',
    overflow: "hidden",
  position: "relative",
}}
>
<Map options/>
</div>
  )
}
 
export default MapComponent