import React, { useState } from "react";
import App from "./App";
import styles from "./StepContext.module.css";
import {
  Container,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
export const multiStepContext = React.createContext();

const StepContext = () => {
  const [currentStep, setStep] = useState(1);
  const [userData, setUserData] = useState([]);
  const [finalData, setFinalData] = useState([]);
  const useStyles = makeStyles((theme) => ({
    grow: {
      flexGrow: 1,
    },
    IconButton: {
      fontSize: "14px",
    },
    title: {
      display: "none",
      [theme.breakpoints.up("sm")]: {
        display: "block",
      },
    },
    inputRoot: {
      color: "inherit",
    },

    sectionDesktop: {
      display: "none",
      [theme.breakpoints.up("md")]: {
        display: "flex",
      },
    },
    sectionMobile: {
      display: "flex",
      [theme.breakpoints.up("md")]: {
        display: "none",
      },
    },
  }));
  const classes = useStyles();
  //save data

  const saveData = () => {
      setFinalData((finalData) => [...finalData, userData]);      
  };
  return (
    <div>
      <div className={styles.topheader}>
        <AppBar position="static">
          <Toolbar>
            <Typography className={classes.title} variant="h6" noWrap>
              TARGET EXTENSION #1888
            </Typography>

            <div className={classes.grow} />
            <div className={classes.sectionDesktop}>
              <IconButton color="inherit" className={styles.svgIcon}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M14 10H2v2h12v-2zm0-4H2v2h12V6zM2 16h8v-2H2v2zm19.5-4.5L23 13l-6.99 7-4.51-4.5L13 14l3.01 3 5.49-5.5z" />
                </svg>
                Project List
              </IconButton>
              <IconButton color="inherit" className={styles.svgIcon}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-1 9H9V9h10v2zm-4 4H9v-2h6v2zm4-8H9V5h10v2z" />
                </svg>{" "}
                Documents
              </IconButton>
              <IconButton color="inherit" className={styles.svgIcon}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M18 17H6v-2h12v2zm0-4H6v-2h12v2zm0-4H6V7h12v2zM3 22l1.5-1.5L6 22l1.5-1.5L9 22l1.5-1.5L12 22l1.5-1.5L15 22l1.5-1.5L18 22l1.5-1.5L21 22V2l-1.5 1.5L18 2l-1.5 1.5L15 2l-1.5 1.5L12 2l-1.5 1.5L9 2 7.5 3.5 6 2 4.5 3.5 3 2v20z" />
                </svg>{" "}
                Incoices
              </IconButton>
            </div>
            <div className={styles.drpProjectContainer}>
              <FormControl className={styles.drpProjectInner}>
                <InputLabel id="drpProjectLabel">
                  Project # 1888101-88
                </InputLabel>
                <Select
                  className={styles.drpProject}
                  variant="outlined"
                  id="drpProject"
                  value=""
                  displayEmpty
                >
                  <MenuItem value={"Project # 1888101-88"}>
                    Project # 1888101-88
                  </MenuItem>
                </Select>
              </FormControl>
            </div>
          </Toolbar>
        </AppBar>
      </div>
      <Container maxWidth="lg">
        <div className={styles.pageContent}>
          <div className={styles.gridLeft}>
            <multiStepContext.Provider
              value={{
                currentStep,
                setStep,
                userData,
                setUserData,
                finalData,
                setFinalData,
                saveData,
              }}
            >
              <App />
            </multiStepContext.Provider>
          </div>
          <div className={styles.gridRight}>
            <Typography variant="h6" component="h5">
              Title
            </Typography>
            <Typography variant="body1" gutterBottom>
              Consectetur adipisicing elit. Quos blanditiis tenetur
            </Typography>
          </div>
        </div>
      </Container>
    </div>
  );
};
export default StepContext;
