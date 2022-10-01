import React, { Fragment, useState } from "react";
import ElementData from "./ElementData";
import "./ElementSelected.css";

const ElementSelected = ({ element }) => {
	const [referenceSelected, setReferenceSelected] = useState(null);
	const selectData = (name, value) => setReferenceSelected({ name, value });

	return (
		<Fragment>
			<div
				className="element-selected"
				style={{
					color: element.appearance ? "black" : "#aaa",
					background: element["cpk-hex"] ? `#${element["cpk-hex"]}` : "",
				}}
			>
				<strong onClick={() => selectData("symbol", element.symbol)}>{element.symbol}</strong>
				<small onClick={() => selectData("atomic number", element.number)} className="selected-number">{element.number}</small>
				<small onClick={() => selectData("name", element.name)} className="selected-name">{element.name}</small>
				<small onClick={() => selectData("atomic mass", element.atomic_mass)} className="selected-atomicmass">{element.atomic_mass}</small>
				<small onClick={() => selectData("electronegativity", element.electronegativity_pauling)} className="selected-electronegativity">
					{element.electronegativity_pauling}
				</small>
				<small onClick={() => selectData("electron configuration semantic", element.electron_configuration_semantic)} className="selected-elect-semantic-config">
					{element.electron_configuration_semantic}
				</small>
				<small onClick={() => selectData("ionization energies", element.ionization_energies[0])} className="selected-ionization">{element.ionization_energies[0]}</small>
			</div>

			<ElementData element={element} referenceSelected={referenceSelected}/>
		</Fragment>
	);
};

export default ElementSelected;
