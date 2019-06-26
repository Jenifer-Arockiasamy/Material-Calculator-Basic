import { EnumLabel, EnumLabelTypes } from "./enumerations";

export class KeypadListJson {
  getKeypadList() {
    return [
      {
        id: 1,
        value: EnumLabel.Clear,
        type: EnumLabelTypes.Event,
        className: ""
      },
      {
        id: 2,
        value: EnumLabel.AllClear,
        type: EnumLabelTypes.Event,
        className: ""
      },
      {
        id: 3,
        value: EnumLabel.Percent,
        type: EnumLabelTypes.Event,
        className: ""
      },
      {
        id: 4,
        value: EnumLabel.Delete,
        type: EnumLabelTypes.Operator,
        className: "operator"
      },
      {
        id: 5,
        value: EnumLabel.Seven,
        type: EnumLabelTypes.Numeric,
        className: ""
      },
      {
        id: 6,
        value: EnumLabel.Eight,
        type: EnumLabelTypes.Numeric,
        className: ""
      },
      {
        id: 7,
        value: EnumLabel.Nine,
        type: EnumLabelTypes.Numeric,
        className: ""
      },
      {
        id: 8,
        value: EnumLabel.Add,
        type: EnumLabelTypes.Operator,
        className: "operator"
      },
      {
        id: 9,
        value: EnumLabel.Four,
        type: EnumLabelTypes.Numeric,
        className: ""
      },
      {
        id: 10,
        value: EnumLabel.Five,
        type: EnumLabelTypes.Numeric,
        className: ""
      },
      {
        id: 11,
        value: EnumLabel.Six,
        type: EnumLabelTypes.Numeric,
        className: ""
      },
      {
        id: 12,
        value: EnumLabel.Sub,
        type: EnumLabelTypes.Operator,
        className: "operator"
      },
      {
        id: 13,
        value: EnumLabel.One,
        type: EnumLabelTypes.Numeric,
        className: ""
      },
      {
        id: 14,
        value: EnumLabel.Two,
        type: EnumLabelTypes.Numeric,
        className: ""
      },
      {
        id: 15,
        value: EnumLabel.Three,
        type: EnumLabelTypes.Numeric,
        className: ""
      },
      {
        id: 16,
        value: EnumLabel.Div,
        type: EnumLabelTypes.Operator,
        className: "operator"
      },
      {
        id: 17,
        value: EnumLabel.Decimal,
        type: EnumLabelTypes.Event,
        className: ""
      },
      {
        id: 18,
        value: EnumLabel.Zero,
        type: EnumLabelTypes.Numeric,
        className: ""
      },
      {
        id: 19,
        value: EnumLabel.Equals,
        type: EnumLabelTypes.Action,
        className: ""
      },
      {
        id: 20,
        value: EnumLabel.Mul,
        type: EnumLabelTypes.Operator,
        className: "operator"
      }
    ];
  }
}
