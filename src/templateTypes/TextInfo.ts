export type TextInfo = {
  id: string;
  text: string;
  color: string;
  size: string;
  x?: number;
  y?: number;
  width?: number;
  transitionIn?: string;
  highlightRanges?: { start: number; end: number }[];
};
