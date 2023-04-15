import '../sass/main.scss';
import React from 'react';

import newProducts1 from '../assets/new-products-1.png'
import newProducts2 from '../assets/new-products-2.png'
import newProducts3 from '../assets/new-products-3.jpg'
import newProducts4 from '../assets/new-products-4.jpg'

const newProduct = [
  {
    id: 1,
    img: newProducts1,
    alt: "Elden Ring Vinyl",
    title: "Elden Ring",
    description: "Official Vinyl",
    type: "Vinyl",
    price: "£34.99",
  },
  {
    id: 2,
    img: newProducts2,
    alt: "Digimon World: Next Order",
    title: "Digimon World: Next Order",
    description: "Standard Edition",
    type: "PC Download",
    price: "£39.99",
  },
  {
    id: 3,
    img: newProducts3,
    alt: "One Piece Odyssey",
    title: "One Piece Odyssey",
    description: "Deluxe Edition",
    type: "PC Download",
    price: "£69.99",
  },
  {
    id: 4,
    img: newProducts4,
    alt: "Tales of Symphonia Remastered",
    title: "Tales of Symphonia Remastered",
    description: "Chosen Edition",
    type: "XBOX ONE / XBX",
    price: "£44.99",
  },
]

export default newProduct;