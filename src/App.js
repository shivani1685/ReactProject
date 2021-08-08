import React, { useContext } from "react";
import "./App.css";
import FirstStep from "./components/FirstStep";
import SecondStep from "./components/SecondStep";
import ThirdStep from "./components/ThirdStep";
import { Stepper, StepLabel, Step } from "@material-ui/core";
import { multiStepContext } from "./StepContext";

function App() {
  const {currentStep} = useContext(multiStepContext);

  function showStep(step) {
    switch (step) {
      case 1:
        return <FirstStep />;
      case 2:
        return <SecondStep />;
      case 3:
        return <ThirdStep />;
    }
  }
  return (
    <div>
      <Stepper activeStep={currentStep - 1} orientation="horizontal">
        <Step>
          <StepLabel>Step 1: Add Generatiors</StepLabel>
        </Step>
        <Step>
          <StepLabel>Step 2: Generatior Details</StepLabel>
        </Step>
        <Step>
          <StepLabel>Step 3: Review & confrim</StepLabel>
        </Step>
      </Stepper>
      {showStep(currentStep)}
     {/* {finalData.length > 0 ?  <DisplayData /> : ""} */}
    </div>
  );
}
export default App;
