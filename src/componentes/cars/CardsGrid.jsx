import { Cards } from "./Cards";
import data from "../data/data.json";

export function CardsGrid() {
  return (
    <ul className="">
      {data.map((card) => (
        <Cards key={card.id} card={card} />
      ))}
    </ul>
  );
}
