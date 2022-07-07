import React from "react";
import Star from "./Star";
// import PropTypes from "prop-types";
// import UserModel from "../models/UserModel";

export default function Stars(props) {
  const { count } = props;
    

  function showStar(cnt) { // функция отрисовки нужного количества звёзд

    const count = cnt;
    const arrStars = [];
       
    if ((count <= 0) || (count > 5)) return;

    for (let i = 0; i < count; i++) {
      arrStars.push(<Star />);
    }

    const show = arrStars.map((item, index) => <div key ={index}>{item}</div>);
      
  return show;
  };
  
  return ( // отрисовка всех звёзд
    <ul className="card-body-stars u-clearfix">
      <li>
      {showStar(count)} 
      </li>     
    </ul>
  );
};

Stars.defaultProps = {
  count: 0
  };

/*
ShopItemFunc.propTypes = {
  itemArray: PropTypes.arrayOf(UserModel).isRequired
}
*/