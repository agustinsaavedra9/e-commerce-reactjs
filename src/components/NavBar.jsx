import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Cart from './Cart';
export default function NavBar(props) {
  

  return (

    <nav className='navbar'>
      <ul className='title-nav'>
        <li>
        <Link style={{ textDecoration: 'none' , color: 'inherit'}}  to={"/"}>DeTodo SHOP</Link> 
        </li>
        {props.products.map((element) => {
          return (<Link className='buttons'
          to={"/"+element.category}>{element.category}</Link>);
        })}
        <li>
          <Cart></Cart>
        </li>
      </ul>
    </nav>
  )
}
