import "../styles/recipes.css";
import { useStore } from "@nanostores/solid";

import { atom } from "nanostores";

export const unit = atom("Metric");
export const defaultServing = atom(1);
export const servings = atom(1);

const Recipe = (props) => {
  defaultServing.set(props.defaultServing);
  servings.set(props.defaultServing);

  const toggleUnit = () => {
    unit.set(unitSignal() === "Metric" ? "US" : "Metric");
    console.log(unit.get(), unitSignal());
  };
  const unitSignal = useStore(unit);
  const servingsSignal = useStore(servings);

  const incrementServings = () => {
    servings.set(servingsSignal() + 1);
  };
  const decrementServings = () => {
    if (servingsSignal() > 1) {
      servings.set(servingsSignal() - 1);
    }
  };

  return (
    <div className="recipeConfigurator">
      <p>
        <b>Recipe Adjuster</b>
      </p>
      <p>
        Unit: <button onClick={toggleUnit}>{unitSignal()}</button>
      </p>
      <p>
        Servings: <button onClick={decrementServings}>-</button>
        {servingsSignal}
        <button onClick={incrementServings}>+</button>
      </p>
    </div>
  );
};

export default Recipe;
