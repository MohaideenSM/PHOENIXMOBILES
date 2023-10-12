import React from 'react'
import '../src/Navigation.css'
function Navigation() {
  return (
    <div>
         <div className="nav_main">
        <button className="nav_item" onClick={() => console.log("new mobiles")}>
          New Mobiles
        </button>
        <button className="nav_item" onClick={() => console.log("Old Mobiles")}>
          Old Mobiles
        </button>
        <button className="nav_item" onClick={() => console.log("Cases")}>
          Cases
        </button>
        <button className="nav_item" onClick={() => console.log("Charger")}>
          Charger
        </button> 
        <button className="nav_item" onClick={() => console.log("Cable")}>
          Cable
        </button>
        <button className="nav_item" onClick={() => console.log("HeadPhones")}>
          HeadPhones
        </button>
        <button
          className="nav_item"
          onClick={() => console.log("Bluetooth HeadPhones")}
        >
          Bluetooth HeadPhones
        </button>
        <button className="nav_item" onClick={() => console.log("accessories")}>
        Accessories
        </button>
        <button className="nav_item" onClick={() => console.log("Others")}>
          Others
        </button>

      </div>
    </div>
  )
}

export default Navigation