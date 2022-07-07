import React from 'react'
import "./Header.css"
const Header = () => {
  console.log("HEADER");
  return (
    <header>
        <h1>Rick and Morty Search</h1>
    </header>
  )
}

export default React.memo(Header)

// font-family: 'Dongle', sans-serif;
// font-family: 'Montserrat', sans-serif;
// font-family: 'Poppins', sans-serif;
// font-family: 'Roboto', sans-serif;