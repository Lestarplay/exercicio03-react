import React, { useState } from 'react'

function ToggleTema(){
   const[isDark,setlsDark]= useState(false);

   const toggleTheme = () => {
    setlsDark(!isDark);
   }

   return (
    <div style={{backgroundColor:isDark?'black':'white',color:isDark?'white':'black'}}>
        <p>{isDark?'Tema Escuro':'Tema Claro'}</p>
        <button onClick={toggleTheme}>
         Alternar para {isDark ?'Claro':'Escuro'}
        </button>
    </div>
   )

}

export default ToggleTema