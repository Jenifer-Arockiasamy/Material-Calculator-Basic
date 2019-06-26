import * as React from "react";
import "../../index.css";
import { Button, Grid } from "@material-ui/core";
import { EnumLabelTypes } from "./enumerations";
import { KeypadListJson } from "./keypadListJson";
import { IKeypadState, IKeypadProps } from "./interface";

export default class KeypadComponent extends React.Component<
  IKeypadProps,
  IKeypadState
> {
  numberPattern = /^[0-9\b]+$/;
  // constructor(props: any) {
  //   super(props);
  // }
  obj_list: any = new KeypadListJson();
  state = {
    keypadList: this.sortList()
  };

  checkDeviceOrientation() {
    if (
      window.matchMedia("(orientation: landscape)").matches &&
      window.innerWidth < 920 // To check orientation type and small device (sm) screen size
    ) {
      return true;
    }
    return false;
  }

  sortList() {
    const value = this.obj_list.getKeypadList();
    if (this.checkDeviceOrientation()) {
      return value.sort(function(a: any, b: any) {
        // Sort by type(operators, numbers and Events) in descending order
        if (a.type > b.type) {
          return -1;
        }
        if (a.type < b.type) {
          return 1;
        }
        if (a.type === b.type) {
          // If type equal Sort values in descending order
          if (a.value > b.value) {
            return -1;
          }
          if (a.value < b.value) {
            return 1;
          }
          return 0;
        }
      });
    }
    return value;
  }

  reorderList() {
    this.setState({
      keypadList: this.sortList()
    });
  }

  componentDidMount() {
    window.addEventListener("resize", this.reorderList.bind(this));
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.reorderList.bind(this));
  }

  isDisabled = (type: any) => {
    if (type === EnumLabelTypes.Operator && !this.props.expressionValue) {
      return true;
    }
    return false;
  };

  getColumnSpan() {
    if (this.checkDeviceOrientation()) {
      return 2;
    }
    return false;
  }

  render() {
    const props = this.props;
    const thisObj = this;
    return (
      <Grid
        className={this.props.className + " keypad"}
        container
        item={true}
        spacing={0}
        md={4}
        lg={3}
        xl={3}
        justify="center"
      >
        {this.state.keypadList.map(function(keypadItem: any, index: any) {
          return (
            <Grid
              item
              key={keypadItem.id}
              className={keypadItem.className}
              xs={3}
              sm={thisObj.getColumnSpan()}
            >
              <Button
                key={keypadItem.id}
                name={keypadItem.value.toString()}
                // className={` ${
                //   keypadItem.type === EnumLabelTypes.Operator ? "operator" : ""
                // }`}
                disabled={thisObj.isDisabled(keypadItem.type)}
                onClick={props.onSelectValue}
              >
                <span>{keypadItem.value}</span>
              </Button>
            </Grid>
          );
        })}
      </Grid>
    );
  }
}
