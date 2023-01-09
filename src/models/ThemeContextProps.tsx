import { Dispatch, SetStateAction} from "react";

export const ThemeContextProps  = {
    theme: 'light',
    toggleTheme: (): void => {
      throw new Error('setContext function must be overridden');
    },
}
export type Context = {
    theme: string;
    toggleTheme: Dispatch<SetStateAction<Context>>;
};