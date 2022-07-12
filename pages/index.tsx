import React, { useState } from "react";
import { Button, Htag, P, Tag, } from "../Components/index";
import { Litag } from "../Components/Litag/Litag";
import { withLoyout } from "../Layout/Layout";
import { PokemonMain } from "../Layout/PokemonMain/PokemonMain";
import Link from "../node_modules/next/link";

function Home({ PokemonList }): JSX.Element {
  
  return (
    <>
      <Htag tag="h1">PokeDex</Htag>
      <Button appearance="ghost" arrow="right">Button</Button>
      <P size="l">dddd</P>
      <P size="m">dddd</P>
      <P size="s">dddd</P>
      <Tag size="m" color="primary">primary</Tag>
      <Tag size="m" color="green">green</Tag>S
      <Tag size="m" color="grey">grey</Tag>
      
      <PokemonMain>
        {PokemonList.map(pokemon => {
        return (
          <Litag  key={pokemon.id} type={pokemon.types[0].type.name}>
            <Link href={{
              pathname:'/pokemon/[name]',
              query:{ name: pokemon.name }
              }}>
              <a>
                <div>
                <img src={pokemon.image} alt={pokemon.name}></img>
                <p>
                    {pokemon.types.map(types => {
                      return (<Tag size="s" color="primary" key={pokemon.id}>{types.type.name}</Tag>)
                    })}
                  </p>
                  <Tag size="m" color="red">{pokemon.name}</Tag>
                </div>
              </a>
            </Link>
          </Litag>
        )
      })}</PokemonMain>
    </>
  )
};

export default withLoyout(Home);

export async function getServerSideProps () {
  
  const  traerPokemon = (num: number, pokeIndex: number) => {
  return  fetch(`${process.env.NEXT_PUBLIC_DOMAIN}/pokemon/${num}`)
  .then(response => response.json())
  .then(data => data)};

  let arrayPokemon = [];

  for (let i = 1; i <= 33; i+=1){
    let data = await traerPokemon(i)
    arrayPokemon.push(data)
  }
  let PokemonList = arrayPokemon.map(pokemon => {
    return ({
      id: pokemon.id,
      name: pokemon.name,
      image: pokemon.sprites.other.dream_world.front_default,
      types: pokemon.types,
    });
  });
  return {
    props: { PokemonList }
  }
};