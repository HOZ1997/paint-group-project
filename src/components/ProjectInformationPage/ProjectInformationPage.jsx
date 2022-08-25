import React, { useState } from "react";
import { useSelector } from "react-redux";
import LanguageToggleButton from "../LanguageToggleButton/LanguageToggleButton";

// Basic functional component structure for React with default state
// value setup.
function ProjectInformationPage(props) {
  // Using hooks we're creating local state for a "heading" variable with
  // a default value of 'Functional Component'
  const store = useSelector((store) => store);
  const [heading, setHeading] = useState(
    "Project Information"
  );

  return (
    <div className="projectInformationPage">
      <LanguageToggleButton />
      {store.language === "english" ? (
        <div className="projectInformationInputsEnglish">
          <h2>{heading}</h2>
          <p>
            {/* ask "Who is this project for?" and create a dropdown  */}
          </p>
          <p>
            <strong>Client Address:</strong>
          </p>
          <p>
            <strong>City:</strong>
          </p>
          <p>
            <strong>State:</strong>
          </p>
          <p>
            <strong>Zip Code:</strong>
          </p>
          <p>
            <strong>Primary Phone:</strong>
          </p>
          <p>
            <strong>Email:</strong>
          </p>
          <p>
            <strong>Paint ID:</strong>
          </p>
          <p>
            <strong>Project Location ID:</strong>
          </p>
          <p>
            <strong>Project Status ID:</strong>
          </p>
          <p>
            <strong>Language ID:</strong>
          </p>
          <p>
            <strong>Photo:</strong>
          </p>
          <p>
            <strong>Estimate:</strong>
          </p>
          <p>
            <strong>Estimated Startdate:</strong>
          </p>
          <p>
            <strong>Notes:</strong>
          </p>
          <p>
            <strong>Downpayment Amount:</strong>
          </p>
          <p>
            <strong>Current Date:</strong>
          </p>
        </div>
      ) : (
        <div className="projectInformationInputsSpanish">
          <h2>{heading}</h2>
          <p>
            <strong>Nombre del Cliente:</strong>
          </p>
          <p>
            <strong>
              Dirección del Cliente:
            </strong>
          </p>
          <p>
            <strong>Ciudad:</strong>
          </p>
          <p>
            <strong>Estado:</strong>
          </p>
          <p>
            <strong>Código Postal:</strong>
          </p>
          <p>
            <strong>Teléfono Principal:</strong>
          </p>
          <p>
            <strong>Email:</strong>
          </p>
          <p>
            <strong>ID de Pintura:</strong>
          </p>
          <p>
            <strong>
              ID de Ubicación del Proyecto:
            </strong>
          </p>
          <p>
            <strong>
              ID de Estatus del Proyecto:
            </strong>
          </p>
          <p>
            <strong>ID de Idioma:</strong>
          </p>
          <p>
            <strong>Foto:</strong>
          </p>
          <p>
            <strong>Estimado:</strong>
          </p>
          <p>
            <strong>
              Fecha de Inicio Estimada:
            </strong>
          </p>
          <p>
            <strong>Notas:</strong>
          </p>
          <p>
            <strong>
              Monto de Pago Inicial:
            </strong>
          </p>
          <p>
            <strong>Fecha Actual:</strong>
          </p>
        </div>
      )}
    </div>
  );
}

export default ProjectInformationPage;
