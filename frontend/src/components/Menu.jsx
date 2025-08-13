import React from 'react'
import {data} from '../Pages/restApi.json'

const Menu = () => {
  return (
    <>
      <section className='menu' id='menu'>
        <div className="container">
            <div className="heading_section">
                <h1 className="heading">POPULAR DISHES</h1>
                <p>Our menu features a delightful variety of dishes that bring together rich flavors, fresh ingredients, and a touch of culinary artistry. 
                  From sizzling starters to mouthwatering mains and indulgent desserts, each plate is crafted to satisfy your cravings and leave you coming back for more.</p>
            </div>
            <div className="dishes_container">
                {
                    data[0].dishes.map(element => (
                        <div className="card" key={element.id}>
                                <img src={element.image} alt={element.title} />
                                <h3>{element.title}</h3>
                                <button>{element.category}</button>
                        </div>
                    ))
                }   
            </div>
        </div>
      </section>
    </>
  )
}

export default Menu