import { atom } from "recoil";

const isNightModeState = atom({
  key: "isNightModeState",
  default: false,
});

export default isNightModeState;
