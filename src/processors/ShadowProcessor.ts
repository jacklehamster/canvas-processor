import { CanvasProcessor } from "../CanvasProcessor";

export const shadowProcessor: CanvasProcessor = context => {
  if (context) {
    const imageData = context.getImageData(0, 0, context.canvas.width, context.canvas.height);
    const { data } = imageData;
    for (let i = 0; i < data.length; i += 4) {
      data[i] = data[i + 1] = data[i + 2] = 0;
    }
    context.putImageData(imageData, 0, 0);
  }
}
