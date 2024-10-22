import { useState, useEffect } from "react";
import PropTypes from "prop-types";

const Pokemon = ({ avatar, name }) => {
  return (
    <figure>
      <img src={avatar} alt={name} />
      <figcaption>{name}</figcaption>
    </figure>
  );
};

const AjaxHooks = () => {
  const [pokemons, setPokemons] = useState([]);
  
  /*
  useEffect(() => {
    fetch(url)
        .then(res => res.json())
        .then(json => {
            json.results.forEach( el => {
                fetch(el.url)
                .then(res => res.json())
                    .then(json => {
                        let pokemon = {
                            id: json.id,
                            name: json.name,
                            avatar: json.sprites.front_default,
                            };
                            setPokemons((pokemons)=>[...pokemons, pokemon])
                            })
            })
        })
  },[]) 
  */
 let url = "https://pokeapi.co/api/v2/pokemon/";
 
 useEffect(() => {
    const getPokemons = async(url) => {
      let res = await fetch(url);
      let json = await res.json();
      json.results.forEach(async(el) => {
        let res = await fetch(el.url);
        let json = await res.json();
        let pokemon = {
          id: json.id,
          name: json.name,
          avatar: json.sprites.front_default,
        }
        setPokemons((pokemons) => [...pokemons, pokemon]);
      });
    }
    getPokemons(url);

  },[])
 

  return (
    <div>
      <h2>14. HOOKS - AJAX</h2>
      {pokemons.length === 0 ? (
        <h3>Cargando...</h3>
      ) : (
        pokemons.map((pokemon) => (
          <Pokemon
            key={pokemon.id}
            name={pokemon.name}
            avatar={pokemon.avatar}
          />
        ))
      )}
    </div>
  );
};

Pokemon.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default AjaxHooks;
