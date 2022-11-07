import "./Stats.css";
import React from "react";
import Card from "./Card/Card"
import data from "./datos1"

function Stats() {
    return (
      <div className="App">
        <div className="pokeCard">
          {data.map((pokeDatos) => (
            <Card
              key={pokeDatos.data}
              name={pokeDatos.name}
              image={pokeDatos.image}
              id={pokeDatos.id}
              color={pokeDatos.color}
              secondary_color={pokeDatos.secondary_color}
              main_type={pokeDatos.main_type}
              secondary_type={pokeDatos.secondary_type}
              description={pokeDatos.description}
              weight={pokeDatos.weight}
              height={pokeDatos.height}
              main_ability={pokeDatos.main_ability}
              secondary_ability={pokeDatos.secondary_ability}
              HP={pokeDatos.stats.HP}
              ATK={pokeDatos.stats.ATK}
              DEF={pokeDatos.stats.DEF}
              SATK={pokeDatos.stats.SATK}
              SDEF={pokeDatos.stats.SDEF}
              SPD={pokeDatos.stats.SPD}
            />
          ))}
        </div>
      </div>
    );
  }

  export default Stats;