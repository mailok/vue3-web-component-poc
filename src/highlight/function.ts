type Props = {
  error: boolean;
  dashed: boolean;
  size: "xs" | "sm";
  hover: boolean;
};

const SIZE = {
  xs: `outline-1`,
  sm: `outline-2`,
};

const STATUS = {
  normal: `outline-violet-700`,
  errored: "outline-red-500",
};

function computeHighlight(props?: Partial<Props>) {
  const type = props?.hover ? "hover:outline" : "outline";
  let size = props?.size === "sm" ? SIZE.sm : SIZE.xs;
  const color = props?.error ? STATUS.errored : STATUS.normal;
  let style = props?.dashed ? "outline-dashed" : "";
  style = props?.dashed && props?.hover ? `hover:outline-dashed` : style;

  return `${type} ${style} ${size} ${color}`;
}

export default computeHighlight;
