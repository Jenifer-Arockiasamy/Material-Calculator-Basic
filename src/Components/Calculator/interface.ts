export interface IAppState {
  expressionValue: any;
  result: number;
  errorMsg: string;
}

export interface IResultProps {
  resultObj: {
    expressionValue: string;
    result: number;
    errorMsg: string;
  };
  className: string;
}

export interface IKeypadState {
  keypadList: Array<object>;
}

export interface IKeypadProps {
  expressionValue: string;
  onSelectValue: any;
  className: string;
}
