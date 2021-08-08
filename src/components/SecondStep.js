import React, { useContext } from "react";
import styles from "./main.module.css";
import {
  Grid,
  FormControl,
  TextField,
  Button,
  InputLabel,
  Typography
} from "@material-ui/core";
import { multiStepContext } from "../StepContext";

const SecondStep = () => {
  const { setStep, userData, setUserData, saveData } = useContext(multiStepContext);
  return (
    <div className={styles.contentWrapper}> 
      <Typography variant="title1" gutterBottom className={styles.stepTitle}>
        StandBy Generator Information
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <FormControl className={styles.gridRow} variant="filled">
            <InputLabel id="">
            GENERATOR/INVERTER MODEL (NAME/NUMBER) 
            </InputLabel>
            <br></br>
            <TextField
              value={userData["generatorName"]}
              onChange={(e) =>
                setUserData({ ...userData, generatorName: e.target.value })
              }
              varient="filled"
              color="secondary"
            />
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <FormControl className={styles.gridRow} variant="filled">
            <InputLabel id="">
            GENERATOR/INVERTER SOFTWARE VERSION (NUMBER) 
            </InputLabel>
            <br></br>
            <TextField
              value={userData["softwareVersion"]}
              onChange={(e) =>
                setUserData({ ...userData, softwareVersion: e.target.value })
              }
              varient="filled"
              color="secondary"
            />
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <FormControl className={styles.gridRow} variant="filled">
            <InputLabel id="">
            GROSS NAMEPLATE RATING 
            </InputLabel>
            <br></br>
            <TextField
              value={userData["nameplateRating"]}
              onChange={(e) =>
                setUserData({ ...userData, nameplateRating: e.target.value })
              }
              varient="filled"
              color="secondary"
            />
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <FormControl className={styles.gridRow} variant="filled">
            <InputLabel id="">
            PRIME MOVER TYPE 
            </InputLabel>
            <br></br>
            <TextField
              value={userData["moverType"]}
              onChange={(e) =>
                setUserData({ ...userData, moverType: e.target.value })
              }
              varient="filled"
              color="secondary"
            />
          </FormControl>
        </Grid>
        <Grid item xs={9}>
          <Button className={styles.btnNoOutline}
            color="primary"
            onClick={() => setStep(1)}
          >
           Back
          </Button>
        </Grid>
        <Grid item xs={3} >
        <Button variant="outlined" className={styles.btnOutline} onClick={saveData}>
           Save
          </Button> 
         
          <Button variant="filled"
          className={styles.btnPrimary}
            onClick={() => setStep(3)}
          >
            Next
          </Button>
          
        </Grid>
      </Grid>
      <div></div>
    </div>
  );
};
export default SecondStep;
