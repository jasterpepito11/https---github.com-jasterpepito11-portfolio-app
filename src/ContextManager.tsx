import {createContext} from "react";
import { ThemeContextProps } from "./models/ThemeContextProps";
//put here all future contexts
//need to set the type of your expected value here, error if you set it to null


export const ThemeContext = createContext(ThemeContextProps);