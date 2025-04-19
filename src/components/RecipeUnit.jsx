import { unit, servings, defaultServing } from "./Recipe";
import { useStore } from "@nanostores/solid";
import { formatQuantity } from "format-quantity";

const RecipeUnit = ({ met, us }) => {
  const unitSignal = useStore(unit);
  const servingsSignal = useStore(servings);
  const [metricValue, metricUnit] = met;
  const [usValue, usUnit] = us;
  function trunc(num) {
    return Math.floor(num * 100) / 100;
  }
  const measurement = (value, defaultServing, servings, unit) => {
    return (
      formatQuantity(trunc((value / defaultServing) * servings), true) + unit
    );
  };

  return (
    <>
      {unitSignal() == "Metric"
        ? measurement(
            metricValue,
            defaultServing.get(),
            servingsSignal(),
            metricUnit,
          )
        : measurement(usValue, defaultServing.get(), servingsSignal(), usUnit)}
    </>
  );
};

export default RecipeUnit;
