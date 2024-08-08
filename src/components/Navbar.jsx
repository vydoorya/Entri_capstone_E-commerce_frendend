import React from 'react';

const Navbar = () => {
   const navLinks = [
    {
        path: "/",
        element: "Home"
    },
    {
        path: "/about",
        element: "About us"
    },
    {
        path: "/product",
        element: "Our Product"
    },
    {
        path: "/cart",
        element: "Cart"
    }
   ]; 

   return (
    <ul className="flex justify-between shadow-lg p-5">
        {
        navLinks.map((link, i) => (
            <li key={i}>
                {link.element}
            </li>
        ))}
    </ul>
  );
}

export default Navbar;
