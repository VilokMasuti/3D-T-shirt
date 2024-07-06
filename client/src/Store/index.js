import { proxy } from "valtio";
const state = proxy({
  intro: true,
  color: "#FB8C00",
  isLogoTexture: true,
  isFullTexture: false,
  logoDecal: "./krish.png",
  fullDecal: "./threejs.png",
});

export default state;
