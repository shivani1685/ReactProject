import React, { useContext, useState } from "react";
import { Redirect } from "react-router";
import styles from "./main.module.css";
import {
  Button,
  Grid,
  Typography,
  FormGroup,
} from "@material-ui/core";
import { multiStepContext } from "../StepContext";
const ThirdStep = () => {
  const {
    setStep, 
    finalData,
  } = useContext(multiStepContext);

  const [redirect, setRedirect] = useState(null);
  const [checked, setChecked] = React.useState(true);
  const handleChange = (event) => {
    setChecked(event.target.checked);
  };
  
  var Obj = {
    arrayOne: [],
    arrayTwo: [],
  };
  const handleSubmit = () => {
    Obj.arrayOne.push(finalData);
    setRedirect(<Redirect to="/displayData" />);
    let allData= Obj.arrayOne;
    localStorage.setItem("newData",JSON.stringify(allData));

    console.log("arrayObj", JSON.parse(localStorage.getItem("newData")));
  };
  return (
    <div>
      {redirect}
      <div className={styles.contentWrapper}>
        <Typography variant="title1" gutterBottom className={styles.stepTitle}>
          TItle
        </Typography>
        <Typography
          variant="title1"
          gutterBottom
          className={styles.stepsubTitle}
        >
          Genterator Information Summary
        </Typography>

        {finalData.map((data) => (
          <ul key={data.facilityMode} className={styles.displayList}>
            <li>
              <Grid item xs={12}>
                <Typography variant="subtitle2" gutterBottom>
                  Genterating Facility Operating Mode:
                </Typography>
                <Typography variant="body1" gutterBottom>
                  {localStorage.getItem("drpFacility")}
                </Typography>
              </Grid>
            </li>
            <li>
              <Grid item xs={12}>
                <Typography variant="subtitle2" gutterBottom>
                  Genterating Facility Method
                </Typography>
                <Typography variant="body1" gutterBottom>
                  {localStorage.getItem("drpFacility")}
                </Typography>
              </Grid>
            </li>
            <li>
              <Grid item xs={12}>
                <Typography variant="subtitle2" gutterBottom>
                Genterator/Invertor Modal
                </Typography>
                <Typography variant="body1" gutterBottom>
                  {data.generatorName}
                </Typography>
              </Grid>
            </li>
            <li>
              <Grid item xs={12}>
                <Typography variant="subtitle2" gutterBottom>
                  Genterator/Invertor SOftware Version
                </Typography>
                <Typography variant="body1" gutterBottom>
                  {data.softwareVersion}
                </Typography>
              </Grid>
            </li>
            <li>
              <Grid item xs={12}>
                <Typography variant="subtitle2" gutterBottom>
                  Gross Nameplate Rating
                </Typography>
                <Typography variant="body1" gutterBottom>
                  {data.nameplateRating}
                </Typography>
              </Grid>
            </li>
            <li>
              <Typography variant="subtitle2" gutterBottom>
                Prime Mover Type:
              </Typography>
              <Typography variant="body1" gutterBottom>
                {data.moverType}
              </Typography>
            </li>
          </ul>
        ))}
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <FormGroup>
              
              <label className={styles.terms}>
                <input
                  type="checkbox"
                  name="terms"
                  onChange={(e) => handleChange(e)}
                />{" "}
                I Agree to the <span>terms & conditions</span>
              </label>
            </FormGroup>
          </Grid>
          <Grid item xs={8}>
            <Button
              className={styles.btnNoOutline}
              color="primary"
              onClick={() => setStep(2)}
            >
              Back
            </Button>
          </Grid>
          <Grid item xs={4}>
            <Button
              variant="outlined"
              className={styles.btnOutline}
            >
              Save
            </Button>
            {!checked ? (
              <Button
                disabled
                variant="filled"
                className={[styles.btnPrimary, styles.btnDisable].join("")}
              >
                Submit
              </Button>
            ) : (
              <Button
                variant="outlined"
                className={styles.btnPrimary}
                onClick={handleSubmit}
              >
                Submit
              </Button>
            )}
          </Grid>
        </Grid>
      </div>
    </div>
  );
};
export default ThirdStep;
