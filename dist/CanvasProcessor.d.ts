/// <reference lib="dom" />
/// <reference lib="dom.iterable" />
export type CanvasProcessor = (ctx: OffscreenCanvasRenderingContext2D) => Promise<OffscreenCanvasRenderingContext2D | void> | OffscreenCanvasRenderingContext2D | void;
