import { capitalizeFirstLetter } from "../common/common";
import './ElementData.css'

const ElementData = ({element, referenceSelected}) => {
    return (
        <div className="element-data">
            {
                referenceSelected ?
                    <div className="reference">
                        <strong>[{referenceSelected.value}]</strong>
                        <span>{referenceSelected.name.toUpperCase()}</span>
                    </div>
                    : null
            }

            <div className="element-category">
                <span
                    style={{
                        background: element["cpk-hex"] ? `#${element["cpk-hex"]}` : "",
                    }}
                    className="square"
                ></span>
                <div style={{ marginLeft: "30px" }}>
                    {capitalizeFirstLetter(element.category)}
                </div>
            </div>
            <div className="element-discoveredby">
                <strong>Discovered by:</strong> {element.discovered_by}
            </div>
            <div className="element-appearance">
                <strong>Appearance :</strong>{" "}
                {element.appearance
                    ? capitalizeFirstLetter(element.appearance)
                    : "Unknown"}
            </div>
        </div>
    );
}

export default ElementData;