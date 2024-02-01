import { shadowProcessor } from "canvas-processor";


export function makeShadow(canvas: HTMLCanvasElement) {
  const context = canvas.getContext("2d");
  shadowProcessor(context!);
}
