import "../../index.css";
import * as React from "react";
import { Typography, InputBase, Grid } from "@material-ui/core";
import { IResultProps } from "./interface";

export default class ResultComponent extends React.Component<IResultProps> {
  // constructor(props: any) {
  //   super(props);
  // }

  render() {
    return (
      <Grid
        container
        className={this.props.className + " result-grid"}
        spacing={0}
        alignItems="center"
        item={true}
        md={4}
        lg={3}
        xl={3}
      >
        <Grid item xs={12}>
          <InputBase
            value={this.props.resultObj.expressionValue}
            multiline={true}
            readOnly
          />
          {/* <TextField value={this.props.resultObj.expressionValue} /> */}
        </Grid>
        <Grid item xs={2}>
          <Typography
            paragraph={true}
            align="center"
            variant="h2"
            component="h2"
          >
            =
          </Typography>
        </Grid>
        <Grid item xs={10}>
          <Typography
            paragraph={true}
            variant="h2"
            component="h2"
            align="right"
            className="word-wrap"
          >
            {this.props.resultObj.result}
          </Typography>
        </Grid>
      </Grid>
    );
  }
}
