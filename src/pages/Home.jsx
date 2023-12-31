import { Cart, FlexContent, Hero, Sales, Stories } from "../components";

import {
  heroapi,
  popularsales,
  toprateslaes,
  highlight,
  sneaker,
  story,
} from "../data/data.js";

const Home = () => {
  return (
    <>
      <Cart />
      <main className="flex overflow-hidden flex-col gap-16 relative">
        <Hero heroapi={heroapi} />
        <Sales endpoint={popularsales} ifExists />
        <FlexContent endpoint={highlight} ifExists />
        <Sales endpoint={toprateslaes} />
        <FlexContent endpoint={sneaker} />
        <Stories story={story} />
      </main>
    </>
  );
};

export default Home;
