import React from "react";
import "./Card.css";

 
  


function Card(props) {
  return (
    <div
      key={props.data}
      className="newCard"
      style={{ backgroundColor: props?.color }}
    >
      <div className="cardHeader">
        <div className="cardTitle">
          <img className="flechaIzq" src="./Images/arrow-left.svg"></img>
          <h2 className="nombre">{props.name}</h2>
        </div>
        <div className="cardId">
          <h4 className="id">#{props.id}</h4>
        </div>
      </div>
      <div className="imgContainer">
        <div className="cardImg">
          <img className="cardImage" src={props.image}></img>
        </div>
      </div>

      
      <div className="main">
        <div className="type">
        
          <button
            className="main_type"
            style={{ backgroundColor: props?.color }}
          >
            {props.main_type}
          </button>
          <button
            className="secondary_type"
            style={{ backgroundColor: props?.secondary_color }}
          >
            {props.secondary_type}
          </button>
        </div>
        <div className="aboutTitle">
          <h3 className="about" style={{ color: props?.color }}>
            About
          </h3>
        </div>
        <div className="gridContainer1">
          <div className="container1">
            <div className="weights">
              <img className="weightImage" src="./Images/weight.svg"></img>
              <p className="weightProp">{props.weight}</p>
            </div>
          </div>

          <div className="container2">
            <div className="heights">
              <img className="heightImage" src="./Images/height.svg"></img>
              <p className="heightProp">{props.height}</p>
            </div>
          </div>

          <div className="container3">
            <div className="abilities">
              <p className="main_ability">{props.main_ability}</p>
              <p className="secondary_ability">{props.secondary_ability}</p>
            </div>
          </div>
        </div>
        <div className="gridContainer2">
          <div className="weight">
            <p>Weight</p>
          </div>
          <div className="height">
            <p>Height</p>
          </div>
          <div className="ability">
            <p>Moves</p>
          </div>
        </div>
        <div classname="description">
          <p className="desc">{props.description}</p>
        </div>
        <div classname="baseStats">
          <h3 className="stats" style={{ color: props?.color }}>
            Base Stats
          </h3>
        </div>
        <div className="progressContainer">
        <div className="progress1" style={{ color: props?.color}}>
          <p className="stats1">
            HP:{" "}{"|"}{" "}{"0"}{props.HP}{" "}
            <progress max="200" value={props.HP} >
              47/68
            </progress>
          </p>
        </div>
        <div className="progress1" style={{ color: props?.color }}>
          <p>
            ATK:{" "}{"|"}{" "}{"0"}{props.ATK}{" "}
            <progress max="200" value={props.ATK}>
              47/68
            </progress>
          </p>
        </div>
        <div className="progress1" style={{ color: props?.color }}>
          <p>
            DEF:{" "}{"|"}{" "}{"0"}{props.DEF}{" "}
            <progress max="200" value={props.DEF}>
              47/68
            </progress>
          </p>
        </div>
        <div className="progress1" style={{ color: props?.color }}>
          <p>
            SATK:{" "}{"|"}{" "}{"0"}{props.SATK}{" "}
            <progress max="200" value={props.SATK}>
              47/68
            </progress>
          </p>
        </div>
        <div className="progress1" style={{ color: props?.color }}>
          <p>
            SDEF:{" "}{"|"}{" "}{"0"}{props.SDEF}{" "}
            <progress max="200" value={props.SDEF}>
              47/68
            </progress>
          </p>
        </div>
        <div className="progress1" style={{ color: props?.color }}>
          <p>
            SPD:{" "}{"|"}{" "}{"0"}{props.SPD}{" "}
            <progress max="200" value={props.SPD}>
              47/68
            </progress>
          </p>
        </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
