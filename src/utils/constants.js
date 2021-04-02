import React from "react";
import { GiVideoCamera, GiDiamondHard, GiPhotoCamera } from "react-icons/gi";
export const links = [
  {
    id: 1,
    text: "home",
    url: "/",
  },
  {
    id: 2,
    text: "Our Story",
    url: "/about",
  },
  // {
  //   id: 3,
  //   text: "equipment rentals",
  //   url: "/products",
  // },
  // {
  //   id: 4,
  //   text: "services",
  //   url: "/services",
  // },
  // {
  //   id: 5,
  //   text: "slider",
  //   url: "/slider",
  // },
  {
    id: 6,
    text: "slide",
    url: "/slide",
  },
];

export const services = [
  {
    id: 1,
    icon: <GiVideoCamera />,
    title: "mission",
    text:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit autem unde numquam nisi",
  },
  {
    id: 2,
    icon: <GiDiamondHard />,
    title: "vision",
    text:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit autem unde numquam nisi",
  },
  {
    id: 3,
    icon: <GiPhotoCamera />,
    title: "history",
    text:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit autem unde numquam nisi",
  },
];

export const products_url = "https://my-films-api.herokuapp.com/products";

export const single_product_url = `https://single-product-api.herokuapp.com/`;
