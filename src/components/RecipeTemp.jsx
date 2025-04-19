import { unit } from "./Recipe";
import { useStore } from "@nanostores/solid";

const RecipeTemp = ({ temp }) => {
  const unitSignal = useStore(unit);
  const cToF = (celsius) => (celsius * 9) / 5 + 32;
  return (
    <>
      {unitSignal() == "Metric"
        ? temp + <>&deg;</> + "C"
        : cToF(temp) + <>&deg;</> + "F"}
    </>
  );
};

export default RecipeTemp;
