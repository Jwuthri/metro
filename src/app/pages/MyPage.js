
import React, {lazy} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
// import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { Button } from "react-bootstrap";
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

import PropTypes from 'prop-types';
import clsx from 'clsx';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import ErrorIcon from '@material-ui/icons/Error';
import InfoIcon from '@material-ui/icons/Info';
import { amber, green } from '@material-ui/core/colors';
import SnackbarContent from '@material-ui/core/SnackbarContent';
import WarningIcon from '@material-ui/icons/Warning';

import {Form, InputGroup, Col, Row} from "react-bootstrap";
import { RemarksUIProvider } from "../modules/ECommerce/pages/products/product-remarks/RemarksUIContext";
import { Remarks } from "../modules/ECommerce/pages/products/product-remarks/Remarks";
// const Remarks = lazy(() =>
//     import("../modules/ECommerce/pages/products/product-remarks/Remarks")
// );
import Input from '@material-ui/core/Input';
const variantIcon = {
  success: CheckCircleIcon,
  warning: WarningIcon,
  error: ErrorIcon,
  info: CheckCircleIcon,
};

const useStyles = makeStyles(theme => ({
  button: {
    marginTop: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  actionsContainer: {
    marginBottom: theme.spacing(2),
  },
  resetContainer: {
    padding: theme.spacing(3),
  },
  success: {
    backgroundColor: green[600],
  },
  error: {
    backgroundColor: theme.palette.error.dark,
  },
  info: {
    backgroundColor: theme.palette.primary.main,
  },
  warning: {
    backgroundColor: amber[700],
  },
  icon: {
    fontSize: 20,
  },
  iconVariant: {
    opacity: 0.9,
    marginRight: theme.spacing(1),
  },
  message: {
    display: 'flex',
    alignItems: 'center',
  },
}));



function MySnackbarContentWrapper(props) {
  const classes = useStyles();
  const { className, message, onClose, variant, ...other } = props;
  const Icon = variantIcon[variant];

  return (
      <SnackbarContent
          className={clsx(classes[variant], className)}
          aria-describedby="client-snackbar"
          message={
            <span id="client-snackbar" className={classes.message}>
          <Icon className={clsx(classes.icon, classes.iconVariant)} />
              {message}
        </span>
          }
          action={[
            <IconButton key="close" aria-label="Close" color="inherit" onClick={onClose}>
              <CloseIcon className={classes.icon} />
            </IconButton>,
          ]}
          {...other}
      />
  );
}


export function MyPage() {
  const classes = useStyles();

  const [activeStep, setActiveStep] = React.useState(0);
  const [steps, setSteps] = React.useState([
    { operationName: "operation1", data: [
        {duration: 1, quantity: 199, product: "titi"},
        {duration: 5, quantity: 199, product: "tutu"}
      ]
    },
    { operationName: "operation2", data: [
        {duration: 3, quantity: 199, product: "toto"}
      ]
    },
    { operationName: "operation2", data: [
        {duration: 2, quantity: 199, product: "tata"}
      ]
    },
  ])
  const [open, setOpen] = React.useState(false);

  function handleClick() {
    setOpen(true);
  }

  function handleClose(event, reason) {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  }

  function handleNext() {
    setActiveStep(prevActiveStep => prevActiveStep + 1);
  }

  function handleBack() {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  }

  function handleReset() {
    setActiveStep(0);
  }

  return (
      <div className={classes.root}>
        <Stepper activeStep={activeStep} orientation="vertical">
          <Step key={0}>
            <StepLabel>
              <Input
                  placeholder="Task"
                  // className={classes.input}
                  inputProps={{
                    'aria-label': 'Description',
                  }}
              />

            </StepLabel>
            <StepContent>
              <Typography>
                <RemarksUIProvider currentProductId={1}>
                  <Remarks />
                </RemarksUIProvider>
              </Typography>
              <div className={classes.actionsContainer}>
                <div>
                  <Button
                      variant="contained"
                      color="primary"
                      disabled={activeStep === 0}
                      onClick={handleBack}
                      className={classes.button}
                  >
                    Back
                  </Button>
                  <Button
                      onClick={handleNext}
                      className={classes.button}
                  >
                    Next
                  </Button>
                </div>
              </div>
            </StepContent>
          </Step>

          {steps.map((items, index) => (
              <Step key={index}>
                <StepLabel>
                  {/*{items.operationName}*/}
                  <Input
                      placeholder={items.operationName}
                      // className={classes.input}
                      inputProps={{
                        'aria-label': 'Description',
                      }}
                  />

                </StepLabel>
                <StepContent>
                  <Typography>
                    <Form>
                      <Form.Row>
                        <Form.Group as={Col} md="4" controlId="validationCustom01"> Product </Form.Group>
                        <Form.Group as={Col} md="4" controlId="validationCustom01"> Quantity </Form.Group>
                      </Form.Row>
                    </Form>
                    {items.data.map((k, v) => (
                        <Form>
                          <Form.Row>

                            <Form.Group as={Col} md="4" controlId="validationCustom01">
                              <Form.Control
                                  required
                                  type="text"
                                  placeholder="produit"
                                  defaultValue={k.product}
                              />
                            </Form.Group>

                            <Form.Group as={Col} md="4" controlId="validationCustom01">
                              <Form.Control
                                  required
                                  type="text"
                                  placeholder="quantity"
                                  defaultValue={k.quantity}
                              />
                            </Form.Group>

                          </Form.Row>
                        </Form>

                    ))}


                  </Typography>
                  <div className={classes.actionsContainer}>
                    <div>
                      <Button
                          variant="contained"
                          color="primary"
                          disabled={activeStep === 0}
                          onClick={handleBack}
                          className={classes.button}
                      >
                        Back
                      </Button>
                      <Button
                          onClick={handleNext}
                          className={classes.button}
                      >
                        {activeStep === steps.length ? 'Finish' : 'Next'}
                      </Button>
                      {/*{activeStep === steps.length && (*/}
                          <Button aria-label="Add" className={classes.button}>
                            <AddIcon />
                          </Button>
                      {/*)}*/}

                    </div>
                  </div>
                </StepContent>
              </Step>
          ))}
        </Stepper>
        {activeStep === steps.length + 1 && (
            <Paper square elevation={0} className={classes.resetContainer}>
              <Typography>All steps completed - you&apos;re finished</Typography>
              <Button
                  variant="contained"
                  color="primary"
                  onClick={handleReset}
                  className={classes.button}>
                reset
              </Button>
              <Button

                  onClick={handleClick}
                  className={classes.button}>
                Save
              </Button>

              <Snackbar
                  anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                  }}
                  open={open}
                  autoHideDuration={6000}
                  onClose={handleClose}
              >
                <MySnackbarContentWrapper
                    onClose={handleClose}
                    variant="info"
                    message="Task has been saved"
                />
              </Snackbar>
            </Paper>
        )}
      </div>
  );
}

