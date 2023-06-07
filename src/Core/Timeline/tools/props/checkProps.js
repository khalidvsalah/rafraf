import props from "./props.js";

export default function checkProps(w) {
  this.results = [];

  if (!w) {
    let x, y, o, p, d, sx, sy, t;

    let element = this.elements;
    let c = window.getComputedStyle(element);
    let ph = element.parentNode.clientHeight;

    x = this.ps["x"] || false;
    y = this.ps["y"] || false;

    sx = this.ps["sx"] || false;
    sy = this.ps["sy"] || false;

    t = this.ps["t"] || false;

    o = this.ps["opacity"] || false;
    p = this.ps["pointer"] || false;
    d = this.ps["display"] || false;

    if (x || y || sx || sy) {
      this.results.push({
        name: "transform",
        element: element,
        cb: props["transform"](x, y, sx, sy, c),
      });
    }

    t &&
      this.results.push({
        name: "top",
        element: element,
        cb: props["top"](t, c, ph),
      });

    p &&
      this.results.push({
        name: "pointerEvents",
        element: element,
        cb: props["pointer"](p),
      });

    d &&
      this.results.push({
        name: "display",
        element: element,
        cb: props["display"](d),
      });

    o &&
      this.results.push({
        name: "opacity",
        element: element,
        cb: props["opacity"](o, c),
      });
  } else {
    for (let i = 0; i < this.keys.length; i++) {
      let ks = this.keys[i];
      let sP = +this.elements[0][this.keys[i]];

      this.results.push({
        name: ks,
        cb: (() => {
          let V = {
            s: sP ? sP : this.props[ks][0],
            e: this.props[ks][1],
          };
          V.lerp = this.props[ks][1] - this.props[ks][0];

          return (e) => V.s + V.lerp * e;
        })(),
      });
    }
  }
}
