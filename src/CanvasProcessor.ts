// To recognize dom types (see https://bun.sh/docs/typescript#dom-types):
/// <reference lib="dom" />
/// <reference lib="dom.iterable" />

export type CanvasProcessor = (ctx: OffscreenCanvasRenderingContext2D | CanvasRenderingContext2D) => Promise<OffscreenCanvasRenderingContext2D | void> | OffscreenCanvasRenderingContext2D | void;
