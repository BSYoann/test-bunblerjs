import { Circle, Dom, List, SVG, Timeline } from "@svgdotjs/svg.js";

interface LoaderOptions {
  size?: number;
  dotColor?: string;
  ringColor?: string;
}

export function createAwesomeLoader(
  selector: string | HTMLElement | Dom,
  options: LoaderOptions = {}
) {
  const defaultOptions: LoaderOptions = {
    size: 200,
    dotColor: "grey",
    ringColor: "black",
  };
  const { size, dotColor, ringColor } = { ...defaultOptions, ...options };
  const canvas = SVG()
    .addTo(selector)
    .size(size, size)
    .viewbox(-size / 8, -size / 8, size / 4, size / 4);

  const circle = new Circle({
    r: 3,
    cx: 0,
    cy: -20,
    // @ts-ignore
    fill: dotColor,
  });

  const timeline = new Timeline();

  // @ts-ignore
  const ring = canvas.circle(40).center(0, 0).fill("none").stroke({
    color: ringColor,
    opacity: 0.5,
    width: 6,
  });

  // @ts-ignore
  const list = new List<Circle>([circle.clone(), circle.clone(), circle.clone()])
    // @ts-ignore
    .timeline(timeline)
    .addTo(canvas);

  list.forEach((c: Circle, i: number) => {
    c.animate(1000, i * 150, "absolute")
      // @ts-ignore
      .ease("<>")
      .transform({ rotate: 360, origin: [0, 0] }, true)
      .loop();
  });
}

console.log("HELLO!");

export default { createAwesomeLoader };
