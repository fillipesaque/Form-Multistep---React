import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import { FiSend } from "react-icons/fi";
import "./App.css";
// components
import UseForm from "./components/useForm/UseForm";
import ReviewForm from "./components/reviewForm/ReviewForm";
import Steps from "./components/steps/Steps.jsx";
import Thanks from "./components/thanks/Thanks";
// hook
import formPosition from "./components/hooks/formPosition.jsx";
import { useState } from "react";

const formTemplate = {
  name: "",
  email: "",
  review: "",
  comment: "",
};

function App() {
  const [data, setData] = useState(formTemplate);

  const updateFieldHandler = (key, value) => {
    setData((prev) => {
      return { ...prev, [key]: value };
    });
  };

  const formComponents = [
    <UseForm data={data} updateFieldHandler={updateFieldHandler} />,
    <ReviewForm data={data} updateFieldHandler={updateFieldHandler} />,
    <Thanks data={data} />,
  ];
  const { currentStep, currentComponent, changeStep, isLastStep, isFirstStep } =
    formPosition(formComponents);

  return (
    <>
      <div className="app">
        <div className="header">
          <h2>Deixe sua Avaliaçao</h2>
          <p>
            Ficamos felizes com sua compra , utilize o formulario abaixo para
            avaliar o produto
          </p>
        </div>
        <div className="form-container">
          <Steps currentStep={currentStep} />
          <form onSubmit={(e) => changeStep(currentStep + 1, e)}>
            <div className="inputs-container">{currentComponent}</div>
            <div className="actions">
              {!isFirstStep && (
                <button
                  type="button"
                  onClick={() => changeStep(currentStep - 1)}
                >
                  <GrFormPrevious />
                  <span>Voltar</span>
                </button>
              )}
              {!isLastStep ? (
                <button type="submit">
                  <span>Avançar</span>
                  <GrFormNext />
                </button>
              ) : (
                <button type="button">
                  <span>Enviar</span>
                  <FiSend />
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default App;
