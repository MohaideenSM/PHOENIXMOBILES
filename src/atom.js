import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist({
  key: "recoil-persist",
  storage: localStorage,
});
const menuLayout = atom({
  key: "menuLayout",
  default: false,
});

const selectedMenu = atom({
  key: "selectedMenu",
  default: null,
  effects_UNSTABLE: [persistAtom],
});
const sliderOpen = atom({
  key: "sliderOpen",
  default: false,
});
export { menuLayout, selectedMenu, sliderOpen };
