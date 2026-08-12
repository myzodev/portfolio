import gsap from "gsap";
import { CustomEase } from "gsap/CustomEase";

gsap.registerPlugin(CustomEase);

export const CURTAIN_EASE = CustomEase.create("curtain", "0.62, 0.01, 0.2, 1");

export const REVEAL_EASE = CustomEase.create("reveal", "0.19, 1, 0.22, 1");

export const SWEEP_EASE = CustomEase.create("sweep", "0.33, 0, 0.12, 1");

export const SOFT_EASE = CustomEase.create("soft", "0.33, 1, 0.68, 1");
