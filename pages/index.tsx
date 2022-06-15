import type { NextPage } from "next";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <div>
      <Link href='/pokemons'>
        <a>Click here to navigate to pokemons page</a>
      </Link>
    </div>
  );
};

export default Home;
