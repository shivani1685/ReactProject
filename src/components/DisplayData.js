import React from "react";
import styles from "../StepContext.module.css";
import { makeStyles } from "@material-ui/core/styles";
import {
  Button,
  Grid,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Container,
} from "@material-ui/core";

const DisplayData = () => {
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
  const objData = JSON.parse(localStorage.getItem("newData"));
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
            <div className={styles.innerWrapper}>
              <div className={styles.success}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="50"
                  height="50"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                </svg>
              </div>
              <Typography
                variant="h5"
                gutterBottom
                className={styles.stepsubTitle}
              >
                Success
              </Typography>
              <Typography
                variant="body1"
                gutterBottom
                className={styles.stepTitle}
              >
                ThankYou! We have received your Information. An email
                confrimation has been sent to joe.doe@utiltiy.com.
              </Typography>
            </div>
            <div>
            {objData.map((data, i) => (
                <ul key={data.drpFacilityMethedNew} className={styles.displayList}>
                  <li>
                    <Grid item xs={12}>
                      <Typography variant="subtitle2" gutterBottom>
                        Genterating Facility Operating Mode:
                      </Typography>
                      <Typography variant="body1" gutterBottom>
                      {data[i].drpFacilityMethedNew}
                      </Typography>
                    </Grid>
                  </li>
                  <li>
                    <Grid item xs={12}>
                      <Typography variant="subtitle2" gutterBottom>
                        Genterating Facility Method
                      </Typography>
                      <Typography variant="body1" gutterBottom>
                      {data[i].drpFacilityNew}
                      </Typography>
                    </Grid>
                  </li>
                  <li>
                    <Grid item xs={12}>
                      <Typography variant="subtitle2" gutterBottom>
                        Genterator/Invertor Modal
                      </Typography>
                      <Typography variant="body1" gutterBottom>
                        {data[i].generatorName}
                      </Typography>
                    </Grid>
                  </li>
                  <li>
                    <Grid item xs={12}>
                      <Typography variant="subtitle2" gutterBottom>
                        Genterator/Invertor SOftware Version
                      </Typography>
                      <Typography variant="body1" gutterBottom>
                        {data[i].softwareVersion}
                      </Typography>
                    </Grid>
                  </li>
                  <li>
                    <Grid item xs={12}>
                      <Typography variant="subtitle2" gutterBottom>
                        Gross Nameplate Rating
                      </Typography>
                      <Typography variant="body1" gutterBottom>
                        {data[i].nameplateRating}
                      </Typography>
                    </Grid>
                  </li>
                  <li>
                    <Typography variant="subtitle2" gutterBottom>
                      Prime Mover Type:
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                      {data[i].moverType}
                    </Typography>
                  </li>
                </ul>
              ))}
            </div>
            <Grid container>
              <Grid item xs={8} className={styles.alnCenter}>
                <Button
                  className={styles.btnPrimary}
                  color="primary"
                >
                  Done
                </Button>
              </Grid>
            </Grid>
          </div>

          <div className={styles.gridRight}>
            <Typography variant="h6" component="h5">
              Title
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
              consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua. Ut enim ad minim veniam, quis
              nostrud exercitationtur.
            </Typography>
          </div>
        </div>
      </Container>
    </div>
  );
};
export default DisplayData;
