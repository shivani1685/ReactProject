import React, { useContext } from "react";
import {
  Grid,
  FormControl,
  Button,
  InputLabel,
  Typography,
} from "@material-ui/core";
import { multiStepContext } from "../StepContext";
import styles from "./main.module.css";

const FirstStep = () => {
  const { setStep, userData, setUserData } = useContext(multiStepContext);

  let drpFacilityMode = ["Isolated Operation", "Isolated Operation 2"];
  let drpFacilityMethed = ["Peak Saving/Demand Management", "Peak Saving/Demand Management"];
  const handleDropdownModeChange = (data) => {
    let drpFacilityNew = data;
    setUserData({ ...userData, drpFacilityNew: data });
    localStorage.setItem("drpFacility", drpFacilityNew);
    console.log(localStorage.getItem("drpFacility"));
  };
  const handleDropdownMethodChange= (data) => {
    let drpFacilityMethedNew = data;
    setUserData({ ...userData, drpFacilityMethedNew: data });
    localStorage.setItem("drpFacilityMethed", drpFacilityMethedNew);
    console.log( localStorage.getItem("drpFacilityMethed"));
  };
  
  return (
    <div className={styles.contentWrapper}>
      <Typography variant="title1" gutterBottom className={styles.stepTitle}>
        StandBy Generator Information
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <FormControl className={styles.gridRow}>
            <InputLabel id="" style={{"marginLeft":"0px"}}>
              Specify the genterating facility operating Mode:
            </InputLabel>
          </FormControl>         
        </Grid>
        <Grid item xs={12}>
        <select className={styles.drpFacilityMode}
              id="drpFacilityMode"
              value={drpFacilityMode}
              onChange={({ target: { value } }) =>
                handleDropdownModeChange(value)
              }
            >
              {drpFacilityMode.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
        </Grid>
       
        <Grid item xs={12}>
          <FormControl className={styles.gridRow} variant="filled">
            <InputLabel id="demo-simple-select-label">
              How will this generating facility be operated?
            </InputLabel>
          </FormControl>
        </Grid>
        <Grid item xs={12}>
        <select className={styles.drpFacilityMode}
              id="drpFacilityMethed"
              value={drpFacilityMethed}
              onChange={({ target: { value } }) =>
              handleDropdownMethodChange(value)
              }
            >
              {drpFacilityMethed.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
        </Grid>
        <Grid item xs={12}>
          <Button className={styles.btnNoOutline}>
            Cancel
          </Button>
        
          <Button className={styles.btnPrimary}
            variant="contained"
            onClick={() => setStep(2)}
          >
            Next
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};
export default FirstStep;
