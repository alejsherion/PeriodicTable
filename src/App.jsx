import "./App.css";
import data from "./data/periodic-table-json-data.json";
import Element from "./components/Element";
import ElementSelected from "./components/ElementSelected";
import { useState } from "react";

function App() {
  const [elementSelected, setElementSelected] = useState(null);

  const handleElementClick = (element) => setElementSelected(element);

  return (
    <div className="App">
      <div className="periodic-table">
        <h1 className="title">PERIODIC TABLE OF ELEMENTS</h1>
        {data.elements.map((element) => (
          <Element
            key={element.number}
            element={element}
            handleElement={handleElementClick}
          />
        ))}
        {elementSelected ? <ElementSelected element={elementSelected} /> : null}
      </div>
    </div>
  );
}

export default App;
