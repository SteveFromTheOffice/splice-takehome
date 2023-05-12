import {useState} from "react";
import {evaluate} from "mathjs";

import style from "./Calculator.module.scss";

function Calculator() {
  const [theme, setTheme] = useState("light");
  const [query, setQuery] = useState("");
  const [value, setValue] = useState("");

  const handleOnClick = (key) => {
    setQuery((state) => {
      return state + key;
    });
  };

  const backSpaceEquation = () => {
    setQuery((state) => {
      return state.slice(0, -1);
    });
  };

  const calculateResult = () => {
    try {
      const calculatedResult = evaluate(query);
      setQuery("");
      setValue(calculatedResult.toLocaleString());
    } catch (error) {
      setValue("Error");
    }
  };

  const clearEquation = () => {
    setQuery("");
    setValue("");
  };

  const flipEquation = () => {
    setValue((state) => {
      return state * -1;
    });
  };

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div className={style.calculator}>
      <input type="checkbox" checked={theme === "dark"} onChange={toggleTheme} />
      <input type="text" value={query} />
      <input type="text" value={value} />
      <button onClick={clearEquation}>C</button>
      <button onClick={flipEquation}>+/-</button>
      <button onClick={() => handleOnClick("%")}>%</button>
      <button onClick={() => handleOnClick("/")}>÷</button>
      <button onClick={() => handleOnClick(7)}>7</button>
      <button onClick={() => handleOnClick(8)}>8</button>
      <button onClick={() => handleOnClick(9)}>9</button>
      <button onClick={() => handleOnClick("*")}>×</button>
      <button onClick={() => handleOnClick(4)}>4</button>
      <button onClick={() => handleOnClick(5)}>5</button>
      <button onClick={() => handleOnClick(6)}>6</button>
      <button onClick={() => handleOnClick("-")}>-</button>
      <button onClick={() => handleOnClick(1)}>1</button>
      <button onClick={() => handleOnClick(2)}>2</button>
      <button onClick={() => handleOnClick(3)}>3</button>
      <button onClick={() => handleOnClick("+")}>+</button>
      <button onClick={() => handleOnClick(".")}>.</button>
      <button onClick={() => handleOnClick(0)}>0</button>
      <button onClick={backSpaceEquation}>&#9003;</button>
      <button onClick={calculateResult}>=</button>
    </div>
  );
}

export default Calculator;
