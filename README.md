<h2>Motivation</h2>
Play with data fetching according to <a href='https://www.youtube.com/watch?v=kdXKz1UWc3E'>this</a>


<h2>rendering</h2>
<h3>client side rendering</h3>
the view is created on the client e.g. <p>in PokemonDetails : the json is fetched from the AWS server and rendered on the client. We wait on the client for the data to come - we use fetch and useEffect and after we get the json we render it</p>
<p>the same is in Pokemons : we fetch the json from the AWS server and render on the client</p>



<h2>json to interface</h2>
https://jherr-pokemon.s3.us-west-1.amazonaws.com/pokemon/1.json

http://json2ts.com/

 export interface Stat {
        name: string;
        value: number;
    }

    export interface RootObject {
        name: string;
        type: string[];
        stats: Stat[];
        image: string;
    }


<h2>open issues</h2>
<ul>
<li>Why using the class nesting as i am use to is not working here</li>
<li>Can i center once all pages </li>
</ul>

<h2>Future</h2>
<ul>
<li>use Image instead of img</li>
</ul>