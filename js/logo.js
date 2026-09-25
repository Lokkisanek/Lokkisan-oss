const LOGO_UNIT = 11;
const LOGO_GAP = 3;
const TRACE_W = 2;
const TRACE_GAP = 2;

const b = (x, y, w = 1, h = 1) => ({ t: "b", x, y, w, h });
const h = (x, y, l) => ({ t: "h", x, y, l });
const v = (x, y, l) => ({ t: "v", x, y, l });

const GLYPHS = {
  L: {
    w: 5,
    s: [
      b(0, 0), b(0, 1), b(0, 2), b(0, 3),
      b(0, 4, 4, 1),
      h(0, 1, 1), h(0, 3, 1),
      v(1, 1, 2),
    ],
  },
  O: {
    w: 5,
    s: [
      b(1, 0, 3, 1),
      b(0, 1), b(0, 2), b(0, 3),
      b(4, 1), b(4, 2), b(4, 3),
      b(1, 4, 3, 1),
      h(0, 0, 1), h(4, 0, 1),
      h(0, 4, 1), h(4, 4, 1),
      h(1, 0, 3),
    ],
  },
  K: {
    w: 5,
    s: [
      b(0, 0), b(0, 1), b(0, 2), b(0, 3), b(0, 4),
      b(2, 2),
      b(3, 0), b(4, 0),
      b(3, 4), b(4, 4),
      b(3, 1, 2, 1),
      b(3, 3, 2, 1),
      h(0, 1, 1), h(0, 3, 1),
      h(2, 2, 2),
    ],
  },
  I: {
    w: 4,
    s: [
      b(0, 0, 4, 1),
      b(1, 1), b(2, 1), b(1, 2), b(2, 2), b(1, 3), b(2, 3),
      b(0, 4, 4, 1),
      h(1, 1, 2), h(1, 3, 2),
      v(2, 1, 2),
    ],
  },
  S: {
    w: 5,
    s: [
      b(1, 0, 3, 1),
      b(0, 1), b(0, 2),
      b(1, 2, 3, 1),
      b(4, 3), b(4, 4),
      b(0, 4, 3, 1),
      h(0, 1, 1), h(4, 3, 1),
      h(1, 0, 3), h(0, 4, 3),
    ],
  },
  A: {
    w: 6,
    s: [
      b(2, 0, 2, 1),
      b(1, 1), b(4, 1),
      b(0, 2), b(5, 2),
      b(0, 3), b(5, 3),
      b(0, 4, 6, 1),
      b(1, 2, 4, 1),
      h(0, 2, 1), h(5, 2, 1),
      h(2, 0, 2),
      v(1, 1, 1), v(4, 1, 1),
    ],
  },
  N: {
    w: 5,
    s: [
      b(0, 0), b(0, 1), b(0, 2), b(0, 3), b(0, 4),
      b(4, 0), b(4, 1), b(4, 2), b(4, 3), b(4, 4),
      b(1, 1), b(2, 2), b(3, 3),
      h(0, 1, 1), h(0, 3, 1),
      h(4, 1, 1), h(4, 3, 1),
      h(1, 1, 3),
    ],
  },
  ".": {
    w: 2,
    s: [b(0, 4), h(0, 3, 1)],
  },
  lowercase: {
    m: {
      w: 5,
      s: [
        b(0, 3), b(0, 4),
        b(2, 3), b(2, 4),
        b(4, 3), b(4, 4),
        b(1, 2), b(3, 2),
        h(0, 3, 1), h(2, 3, 1), h(4, 3, 1),
      ],
    },
    a: {
      w: 4,
      s: [
        b(1, 2, 2, 1),
        b(0, 3), b(3, 3),
        b(1, 4, 2, 1),
        b(0, 2),
        h(0, 2, 1), h(3, 3, 1),
      ],
    },
    t: {
      w: 4,
      s: [
        b(1, 1, 2, 1),
        b(1, 2), b(1, 3), b(1, 4),
        b(2, 4, 2, 1),
        h(1, 2, 1),
        v(2, 2, 2),
      ],
    },
    y: {
      w: 4,
      s: [
        b(0, 2), b(0, 3),
        b(3, 2), b(3, 3),
        b(1, 4, 2, 1),
        h(0, 2, 1), h(3, 2, 1),
      ],
    },
    s: {
      w: 4,
      s: [
        b(1, 2, 2, 1),
        b(0, 3), b(3, 4),
        b(1, 4, 2, 1),
        b(0, 2),
        h(0, 2, 1), h(3, 4, 1),
      ],
    },
    o: {
      w: 4,
      s: [
        b(1, 2, 2, 1),
        b(0, 3), b(3, 3),
        b(1, 4, 2, 1),
        h(0, 2, 1), h(3, 2, 1),
        h(1, 2, 2),
      ],
    },
    n: {
      w: 4,
      s: [
        b(0, 2), b(0, 3), b(0, 4),
        b(3, 2), b(3, 3), b(3, 4),
        b(1, 3), b(2, 4),
        h(0, 2, 1), h(3, 2, 1),
      ],
    },
    l: {
      w: 3,
      s: [
        b(0, 1), b(0, 2), b(0, 3), b(0, 4),
        b(0, 4, 3, 1),
        h(0, 2, 1),
      ],
    },
    i: {
      w: 2,
      s: [
        b(0, 1),
        b(0, 3), b(0, 4),
        h(0, 2, 1),
      ],
    },
    e: {
      w: 4,
      s: [
        b(0, 3), b(0, 4),
        b(1, 2, 2, 1),
        b(3, 3), b(3, 4),
        b(1, 4, 2, 1),
        h(0, 3, 1), h(3, 3, 1),
        h(1, 2, 2),
      ],
    },
  },
};

function shapeToSvg(shape, ox, oy, u) {
  const fill = "url(#logoGrad)";
  if (shape.t === "b") {
    const pad = 0.5;
    return `<rect x="${ox + shape.x * u + pad}" y="${oy + shape.y * u + pad}" width="${shape.w * u - pad * 2}" height="${shape.h * u - pad * 2}" fill="${fill}"/>`;
  }
  if (shape.t === "h") {
    const y = oy + shape.y * u;
    const x1 = ox + shape.x * u;
    const x2 = x1 + shape.l * u;
    const y2 = y + TRACE_W + TRACE_GAP;
    return `<rect x="${x1}" y="${y}" width="${x2 - x1}" height="${TRACE_W}" fill="${fill}"/><rect x="${x1}" y="${y2}" width="${x2 - x1}" height="${TRACE_W}" fill="${fill}"/>`;
  }
  if (shape.t === "v") {
    const x = ox + shape.x * u;
    const y1 = oy + shape.y * u;
    const y2 = y1 + shape.l * u;
    const x2 = x + TRACE_W + TRACE_GAP;
    return `<rect x="${x}" y="${y1}" width="${TRACE_W}" height="${y2 - y1}" fill="${fill}"/><rect x="${x2}" y="${y1}" width="${TRACE_W}" height="${y2 - y1}" fill="${fill}"/>`;
  }
  return "";
}

function renderWord(text, options = {}) {
  const { scale = 1, lowercaseMap = false, yOffset = 0 } = options;
  const u = LOGO_UNIT * scale;
  const gap = LOGO_GAP * scale;
  let x = 0;
  let shapes = "";

  for (const char of text) {
    let glyph;
    if (lowercaseMap && char >= "a" && char <= "z") {
      glyph = GLYPHS.lowercase[char];
    } else {
      glyph = GLYPHS[char.toUpperCase()] || GLYPHS[char];
    }
    if (!glyph) continue;

    for (const shape of glyph.s) {
      shapes += shapeToSvg(shape, x, yOffset, u);
    }
    x += (glyph.w + gap) * u;
  }

  return { shapes, width: x - gap * u };
}

function buildLogoSvg() {
  const primary = renderWord("LOKKISAN");
  const secondary = renderWord("matyas.online", {
    scale: 0.52,
    lowercaseMap: true,
    yOffset: 6.5 * LOGO_UNIT,
  });

  const totalWidth = Math.max(primary.width, secondary.width) + 16;
  const totalHeight = 6.5 * LOGO_UNIT + 6 * LOGO_UNIT * 0.52 + 16;

  return `<svg class="logo-svg" viewBox="0 0 ${totalWidth} ${totalHeight}" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <defs>
      <linearGradient id="logoGrad" gradientUnits="userSpaceOnUse" x1="0" y1="0" x2="${totalWidth}" y2="0">
        <stop offset="0%" stop-color="#d4ff00"/>
        <stop offset="20%" stop-color="#00ee99"/>
        <stop offset="45%" stop-color="#55aadd"/>
        <stop offset="70%" stop-color="#8866dd"/>
        <stop offset="100%" stop-color="#dd4499"/>
        <animateTransform attributeName="gradientTransform" type="translate"
          values="0 0;${totalWidth} 0;0 0" dur="5s" repeatCount="indefinite"/>
      </linearGradient>
    </defs>
    ${primary.shapes}
    ${secondary.shapes}
  </svg>`;
}

function initLogo() {
  const container = document.querySelector(".logo");
  if (!container) return;
  container.innerHTML = buildLogoSvg();
}
