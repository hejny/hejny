import { Vector } from "xyzt";
import { Color } from "../color/Color";
import { createParticlesDrawingEffect } from "./createParticlesDrawingEffect";

export const starryEffect = createParticlesDrawingEffect({
    generatePosition(cursorPosition) {
        const distance = Math.random() * 30;
        const rotation = Math.random() * Math.PI * 2;
        return cursorPosition.add(Vector.fromPolar(rotation, distance));
    },
    generateSize() {
        return Math.random() * 5 + 3;
    },
    generateColor() {
        return Color.fromString('#feeac4' /* <- [🎨] */);
    },
    generateLivetime() {
        return Math.random() * 2000 + 100;
    },
    generateDistance() {
        return Math.random() * 100 + 50;
    },
})