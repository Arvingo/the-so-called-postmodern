export type TextInfo = {
  id: string;
  text: string;
  color: string;
  size: string;
  x?: number;
  y?: number;
  width?: number;
  font?: string;
  opacity?: number;
  fontWeight?: string;
  transitionIn?: string;
  transitionOut?: string;
  highlightRanges?: { start: number; end: number; color?: string }[];
  boldRanges?: { start: number; end: number }[];
};
