import { Unit } from "../KeyMap";
import { BasicStats, ICalculatedStats } from "./stats";

/**
 * @deprecated
 */
export interface IFieldDisplay {
  canShow?: (stats: BasicStats) => boolean;
  text: Displayable;
  value?: number | Displayable | ((stats: ICalculatedStats) => number | Displayable);
  fixed?: number;
  formula?: (stats: BasicStats) => any[];
  formulaText?: JSX.Element | ((stats: BasicStats) => JSX.Element)
  variant?: string | ((stats: BasicStats) => string);
  unit?: string
}
