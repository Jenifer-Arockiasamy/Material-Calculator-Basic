import * as React from "react";
import "./index.css";
import { Container } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import KeypadComponent from "./Components/Calculator/KeypadComponent";
import ResultComponent from "./Components/Calculator/ResultComponent";
import { EnumLabel } from "./Components/Calculator/enumerations";
import { IAppState } from "./Components/Calculator/interface";

const useStyles = (theme: any) => ({
  root: {
    flexGrow: 1,
    margin: "auto",
    height: "100%",
    maxWidth: "100%",
    display: "flex",
    flexDirection: "column" as "column",

    [theme.breakpoints.only("xs")]: {
      margin: 0,
      padding: 0,
      display: "block"
    },
    [theme.breakpoints.only("sm")]: {
      margin: 0,
      padding: 0,
      display: "block"
    }
  },

  calc: {
    margin: "auto",
    display: "flex",
    flexDirection: "column" as "column",
    alignItems: "center",

    [theme.breakpoints.only("xs")]: {
      height: "100%"
    },
    [theme.breakpoints.only("sm")]: {
      height: "100%"
    }
  },

  result: {
    "&.result-grid": {
      paddingRight: theme.spacing(2)
    },

    [theme.breakpoints.only("xs")]: {
      height: "35%",
      "&.result-grid .MuiGrid-item h2": {
        fontSize: "3.75rem"
      },
      "@media (orientation: landscape)": {
        "&.result-grid .MuiInputBase-input": {
          fontSize: "1.5rem"
        },
        "&.result-grid .MuiGrid-item h2": {
          fontSize: "2rem"
        }
      }
    },
    [theme.breakpoints.only("sm")]: {
      height: "40%",
      "&.result-grid": {
        paddingRight: theme.spacing(4)
      },
      "@media (orientation: portrait)": {
        "&.result-grid .MuiInputBase-input": {
          fontSize: "4rem"
        },
        "&.result-grid .MuiGrid-item h2": {
          fontSize: "6rem"
        }
      }
    }
  },

  keypad: {
    "&.MuiGrid-item": {
      textAlign: "center" as "center"
    },

    [theme.breakpoints.only("xs")]: {
      height: "65%"
    },
    [theme.breakpoints.up("xs")]: {
      "&.keypad .MuiButton-label": {
        fontSize: "25px"
      },
      "@media (orientation: landscape)": {
        "&.keypad .MuiButton-label": {
          fontSize: "16px"
        }
      }
    },
    [theme.breakpoints.up("sm")]: {
      height: "60%",
      "@media (orientation: portrait)": {
        "&.keypad .MuiButton-label": {
          fontSize: "45px"
        }
      }
    },
    [theme.breakpoints.up("md")]: {
      height: "65%",
      "&.keypad .MuiButton-label": {
        fontSize: "20px"
      }
    }
  }
});

class App extends React.Component<any, IAppState> {
  numberPattern = /^[0-9\b]+$/;
  decimalPattern = /^[0-9.\b]+$/;
  constructor(props: any) {
    super(props);
    this.state = {
      expressionValue: "",
      result: 0,
      errorMsg: ""
    };
  }

  onSelectValue = (event: any) => {
    // event.persist();
    const value = event.target.textContent;
    switch (value) {
      case EnumLabel.Equals:
        this.calculate();
        break;
      case EnumLabel.Percent:
        // this.calculate();
        this.onClickPercent();
        break;
      case EnumLabel.Delete:
        this.onClickUndo();
        break;
      case EnumLabel.Zero.toString():
        // To Check Octal Literals
        const expressionValue = this.state.expressionValue;
        const lastChar = expressionValue.charAt(expressionValue.length - 1);
        if (lastChar && !isNaN(lastChar)) {
          this.arithmeticExpression(value);
        }
        break;
      case EnumLabel.AllClear:
        this.onClickAllClear();
        break;
      default:
        this.arithmeticExpression(value);
        break;
    }
  };

  arithmeticExpression(value: any) {
    const expressionValue = this.state.expressionValue;
    const decimalvalue = expressionValue.substring(
      expressionValue.lastIndexOf("."),
      expressionValue.length
    );
    const lastChar = expressionValue.charAt(expressionValue.length - 1);
    const decimalPattern = /^((\.\d+\.))/;
    if (
      (isNaN(lastChar) && isNaN(value) && expressionValue.length > 0) ||
      decimalPattern.test(decimalvalue + value)
    ) {
      this.setState({ errorMsg: "Invalid Expression" });
    } else {
      if (lastChar === EnumLabel.Div && value === 0) {
        const msg: any = "Can't Divide by Zero";
        this.setState({
          result: msg,
          errorMsg: ""
        });
      } else {
        this.setState({
          expressionValue: expressionValue + value,
          errorMsg: ""
        });
      }
    }
  }

  calculate = () => {
    if (
      this.numberPattern.test(
        this.state.expressionValue.charAt(this.state.expressionValue.length - 1)
      )
    ) {
      let resultantValue = this.evaluateExpression();
      // let numericValue = Number.isInteger(resultantValue)
      //   ? resultantValue
      //   : Number(parseFloat(resultantValue).toFixed(6));
      this.setState({ result: resultantValue, errorMsg: "" });
    }
  };

  evaluateExpression() {
    // var splitUp = this.state.expressionValue.match(/[^\d()]+|[\d.]+/g);
    // console.log(splitUp);
    return eval(this.state.expressionValue);
  }

  onClickPercent = () => {
    let percent = 0;
    if (
      this.numberPattern.test(
        this.state.expressionValue.charAt(this.state.expressionValue.length - 1)
      )
    ) {
      let calculatedValue = this.evaluateExpression();
      if (!isNaN(calculatedValue)) {
        // if (!this.state.result || this.state.result === 0) {
        percent = calculatedValue / 100;
        //   //this.decimalPattern.test(this.state.expressionValue) ? this.state.expressionValue : 0;
        // } else {
        //   percent = this.state.result / 100;
        // }
        this.setState({
          result: percent, //Number.isInteger(percent) ? percent : Number(percent.toFixed(6)),
          expressionValue: percent && percent !== 0 ? percent.toString() : "",
          errorMsg: ""
        });
      }
    }
  };

  onClickAllClear = () => {
    this.setState({
      expressionValue: "",
      result: 0,
      errorMsg: ""
    });
  };

  onClickUndo = () => {
    this.setState({
      expressionValue: this.state.expressionValue.slice(0, -1),
      errorMsg: ""
    });
  };

  render = () => {
    const { classes } = this.props;
    return (
      <Container className={classes.root} fixed maxWidth={false}>
        <div className={classes.calc}>
          <ResultComponent resultObj={this.state} className={classes.result} />
          <KeypadComponent
            className={classes.keypad}
            expressionValue={this.state.expressionValue}
            onSelectValue={this.onSelectValue}
          />
        </div>
      </Container>
    );
  };
}

export default withStyles(useStyles)(App);
