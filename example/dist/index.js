// /Users/vincent/canvas-processor/example/node_modules/canvas-processor/dist/index.js
var k = (m) => {
  if (m) {
    const j = m.getImageData(0, 0, m.canvas.width, m.canvas.height), { data: f } = j;
    for (let b = 0;b < f.length; b += 4)
      f[b] = f[b + 1] = f[b + 2] = 0;
    m.putImageData(j, 0, 0);
  }
};

// src/index.ts
function makeShadow(canvas) {
  const context = canvas.getContext("2d");
  k(context);
}
export {
  makeShadow
};
