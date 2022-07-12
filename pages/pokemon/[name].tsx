import React from "react";
import { Button, Htag, Tag, } from "../../Components/index";
import { withLoyout } from "../../Layout/Layout";

import Link from "../../node_modules/next/link";


function Pokemon({ pokemon }): JSX.Element {
    return (
      <>
        <Htag tag="h1">{pokemon.name}</Htag>
        <img src={pokemon.sprites.other.dream_world.front_default} alt={pokemon.name}></img>
        <div>
        <Tag size="m" color="green">HP: {pokemon.stats[0].base_stat}/XP: {pokemon.base_experience}</Tag>
        <Tag size="m" color="grey">weight: {pokemon.weight}</Tag>
        <Tag size="m" color="grey">height: {pokemon.height}</Tag>
        <Htag tag="h3">{pokemon.abilities.map((ability, index) => {
                      return (<Tag size="m" color="orange" key={index}>ability: {ability.ability.name}</Tag>)
                    })}
        </Htag>
        </div>
        <Link href="/">
        <a><Button appearance="primary">Go back</Button>
        </a>
        </Link>
        
        </>
        )
  };
  
  export default withLoyout(Pokemon);


  export async function getServerSideProps (context) {
    const { name } = context.query;
    const response = await  fetch(`${process.env.NEXT_PUBLIC_DOMAIN}/pokemon/${name}`);
    const pokemon = await response.json();
  
  
    return {
      props: { pokemon }
    }
  };