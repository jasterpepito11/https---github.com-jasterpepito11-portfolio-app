import { DarkModeSwitch } from "../components/SwitchComponent/DarkmodeSwitch";

export enum THEME {
    DARK = 'dark',
    LIGHT = 'light'
}

export default function DarkModeToggler(){

    return <>
        <div className="flex flex-col items-center justify-center pl-6">
            <DarkModeSwitch />
        </div>
    </>

}