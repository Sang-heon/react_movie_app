import React from "react";
import PropTypes from "prop-types";

const foodInfo = [
  {
    id: 1,
    name: "kimchi",
    image:  "https://image.auction.co.kr/itemimage/1b/45/1c/1b451c3fa6.jpg" 
  },
  {
    id: 2,
    name: "samgeopsal",
    image:  "https://pds.joins.com/news/component/htmlphoto_mmdata/201702/27/117f5b49-1d09-4550-8ab7-87c0d82614de.jpg"
  },
  {
    id: 3,
    name: "doncasu",
    image:  "https://post-phinf.pstatic.net/MjAyMDA0MTZfMjY3/MDAxNTg2OTk5MzYwOTMw.YZk3XJCkJqOrZmSzXTGfnXcfoj5CoLQfY9kEBhBmlyYg.WdEgjt1SmPLlCfi8nmVMB79FymTDi3ApEfQJrGF57Acg.JPEG/1.jpg?type=w1200"
  },
  {
    id: 4,
    name: "gimbap",
    image:  "https://craftlog.com/m/i/5805364=s1280=h960.webp"
  },
]

function Food({name, picture}) {
  return (
    <div>
      <h1>I love {name}</h1>
      <img src={picture} alt={name} width="200"/>
    </div>
  )
}

Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired
}

function renderFood(dish) {
  return <Food key={dish.id} name={dish.name} picture ={dish.image}></Food>
}

function App() {
  return (
    <div>
      {foodInfo.map(renderFood)}
    </div>
  );
}

export default App;
