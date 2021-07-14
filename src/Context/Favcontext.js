import React, { useState,createContext } from 'react'
    export const FavContext = createContext()
export const Favcontext = props => {
    const [fav,setFav]=useState([])
    return (   
         <FavContext.Provider value={[fav,setFav]} >
             {props.children}
         </FavContext.Provider>
       
            
    )
}

