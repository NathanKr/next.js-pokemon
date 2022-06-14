import Link from "next/link";
import React, { useEffect, useState } from "react";
import styles from "../../styles/Pokemons.module.css";

interface IPokemon {
  id: number;
  name: string;
  image: string;
}

const url = "https://jherr-pokemon.s3.us-west-1.amazonaws.com/index.json";

const Pokemons = () => {
  const [pokemons, setPokemons] = useState<IPokemon[]>([]);
  useEffect(getPokemons, []);

  function getPokemons(): void {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setPokemons(data));
  }

  const elems = pokemons.map((pokemon) => (
    <div key={pokemon.id}>
      <Link href={`/pokemons/${pokemon.id}`}>
        <div>
          {/* might use Image of next */}
          <img src={pokemon.image} alt="" />
          <h5>{pokemon.name}</h5>
        </div>
      </Link>
    </div>
  ));

  return (
    <div className={styles.Pokemons}>
      <main className={styles.gridPokemons}>{elems}</main>
    </div>
  );
};

export default Pokemons;
