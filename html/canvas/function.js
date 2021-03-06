var backGroundLayer;

var stage = acgraph.create('container');
stage.suspend();
stage.layer().zIndex(100);

backGroundLayer = stage.layer().zIndex(-1);
var backGround = acgraph.rect(0, 0, 600, 700).stroke(null).fill(null);
backGroundLayer.addChild(backGround);
var paletteFill = ['#5F8C3F', '#CB9226', '#515523', '#F2AD33', '#8B0F01'];
var paletteStroke = [
  '#43622c',
  '#8e661b',
  '#393b19',
  '#a97924',
  '#610b01'
];

var path = stage.path().stroke(null).fill('#261F19');
path.moveTo(485.951882, 734.499241);
var x = 485.951882;
var y = 734.499241;
path.curveTo(
  -40.580205 + x,
  -52.121902 + y,
  -31.195722 + x,
  -87.179286 + y,
  (x = -40.791857 + x),
  (y = -103.681028 + y)
);
path.curveTo(
  -9.596135 + x,
  -16.501742 + y,
  -1.307747 + x,
  -33.545971 + y,
  (x = -0.839426 + x),
  (y = -54.079031 + y)
);
path.curveTo(
  0.468321 + x,
  -20.53306 + y,
  64.082687 + x,
  -74.623382 + y,
  (x = 62.679965 + x),
  (y = -111.182789 + y)
);
path.curveTo(
  -1.402722 + x,
  -36.559407 + y,
  -19.178759 + x,
  -75.625028 + y,
  (x = -23.388047 + x),
  (y = -98.161381 + y)
);
path.curveTo(
  -4.209288 + x,
  -22.536352 + y,
  0.854058 + x,
  -45.590466 + y,
  (x = -0.677617 + x),
  (y = -59.088914 + y)
);
path.curveTo(
  -1.531675 + x,
  -13.498448 + y,
  -12.145917 + x,
  -71.646471 + y,
  (x = -1.386855 + x),
  (y = -105.181152 + y)
);
path.lineTo((x = 14.226256 + x), (y = -63.103744 + y));
path.curveTo(
  0.468322 + x,
  -0.500124 + y,
  -9.01697 + x,
  -22.517967 + y,
  (x = -7.484175 + x),
  (y = -13.021408 + y)
);
path.curveTo(
  0.766398 + x,
  4.74828 + y,
  -12.834564 + x,
  57.175491 + y,
  (x = -19.915455 + x),
  (y = 69.983996 + y)
);
path.curveTo(
  -7.080891 + x,
  12.808505 + y,
  -1.64172 + x,
  58.998157 + y,
  (x = -1.794976 + x),
  (y = 66.271287 + y)
);
path.curveTo(
  -0.153256 + x,
  7.27313 + y,
  1.725104 + x,
  30.518199 + y,
  (x = 0.193429 + x),
  (y = 31.019723 + y)
);
path.curveTo(
  -1.531675 + x,
  0.501524 + y,
  5.596143 + x,
  26.54129 + y,
  (x = -0.935522 + x),
  (y = 26.042815 + y)
);
path.curveTo(
  -6.531665 + x,
  -0.498475 + y,
  -46.695749 + x,
  -36.560806 + y,
  (x = -46.776093 + x),
  (y = -63.103744 + y)
);
path.curveTo(
  -0.080344 + x,
  -26.542938 + y,
  -4.081456 + x,
  -56.587147 + y,
  (x = -10.29074 + x),
  (y = -68.111979 + y)
);
path.curveTo(
  -6.209284 + x,
  -11.524832 + y,
  -22.919725 + x,
  -49.580814 + y,
  (x = -23.388047 + x),
  (y = -50.082337 + y)
);
path.curveTo(
  0.468322 + x,
  0.501523 + y,
  -2.338243 + x,
  17.529518 + y,
  (x = -2.806565 + x),
  (y = 17.027995 + y)
);
path.curveTo(
  0.468322 + x,
  0.501523 + y,
  20.113158 + x,
  35.564354 + y,
  (x = 20.58148 + x),
  (y = 50.082337 + y)
);
path.curveTo(
  0.468322 + x,
  14.517983 + y,
  9.33823 + x,
  48.569275 + y,
  (x = 3.548659 + x),
  (y = 60.097156 + y)
);
path.curveTo(
  -5.789571 + x,
  11.527881 + y,
  49.920906 + x,
  58.620367 + y,
  (x = 55.389218 + x),
  (y = 73.121861 + y)
);
path.curveTo(
  5.468312 + x,
  14.501494 + y,
  4.531668 + x,
  37.562701 + y,
  (x = 7.999984 + x),
  (y = 50.0642 + y)
);
path.curveTo(
  3.468316 + x,
  12.501499 + y,
  20.435541 + x,
  57.600585 + y,
  (x = 15.903872 + x),
  (y = 70.102083 + y)
);
path.curveTo(
  -4.531669 + x,
  12.501498 + y,
  -12.339346 + x,
  16.526471 + y,
  (x = -11.871024 + x),
  (y = 18.027992 + y)
);
path.curveTo(
  0.468322 + x,
  1.501521 + y,
  2.531673 + x,
  5.248469 + y,
  (x = -8.17822 + x),
  (y = 29.43677 + y)
);
path.curveTo(
  -10.709893 + x,
  24.188301 + y,
  -41.743807 + x,
  43.214895 + y,
  (x = -41.275486 + x),
  (y = 43.716417 + y)
);
path.curveTo(
  0.468321 + x,
  0.501522 + y,
  -13.564506 + x,
  9.516343 + y,
  (x = -14.032828 + x),
  (y = 9.014821 + y)
);
path.curveTo(
  0.468322 + x,
  0.501522 + y,
  -45.373371 + x,
  -60.600327 + y,
  (x = -55.195789 + x),
  (y = -82.135033 + y)
);
path.curveTo(
  -9.822418 + x,
  -21.534706 + y,
  -25.016939 + x,
  -14.501494 + y,
  (x = -39.516967 + x),
  (y = -36.0362 + y)
);
path.curveTo(
  -14.500027 + x,
  -21.534706 + y,
  -60.116672 + x,
  -86.666225 + y,
  (x = -59.64835 + x),
  (y = -106.197637 + y)
);
path.curveTo(
  0.468322 + x,
  -19.531413 + y,
  32.274943 + x,
  -26.544339 + y,
  (x = 38.356396 + x),
  (y = -39.064223 + y)
);
path.curveTo(
  6.081453 + x,
  -12.519885 + y,
  4.757952 + x,
  -22.536104 + y,
  (x = 14.581493 + x),
  (y = -41.065868 + y)
);
path.curveTo(
  9.823541 + x,
  -18.529765 + y,
  7.144805 + x,
  -32.572356 + y,
  (x = 4.806561 + x),
  (y = -50.100474 + y)
);
path.curveTo(
  -2.338243 + x,
  -17.528117 + y,
  -3.016983 + x,
  -33.539378 + y,
  (x = -2.548661 + x),
  (y = -33.037855 + y)
);
path.curveTo(
  0.468323 + x,
  0.501524 + y,
  -7.015852 + x,
  14.524578 + y,
  (x = -7.484174 + x),
  (y = 14.023055 + y)
);
path.curveTo(
  0.468322 + x,
  0.501523 + y,
  1.402721 + x,
  5.508357 + y,
  (x = 3.742087 + x),
  (y = 20.032935 + y)
);
path.curveTo(
  2.339366 + x,
  14.524578 + y,
  -0.242039 + x,
  48.56103 + y,
  (x = -10.80655 + x),
  (y = 47.067504 + y)
);
path.curveTo(
  -5.282255 + x,
  -0.746763 + y,
  -15.932171 + x,
  -44.407504 + y,
  (x = -30.251329 + x),
  (y = -56.944957 + y)
);
path.curveTo(
  -14.319158 + x,
  -12.537453 + y,
  -9.348338 + x,
  -44.698155 + y,
  (x = -7.266877 + x),
  (y = -44.204876 + y)
);
path.curveTo(
  2.081461 + x,
  0.493279 + y,
  -16.693452 + x,
  -1.508365 + y,
  (x = -17.161774 + x),
  (y = -2.009889 + y)
);
path.curveTo(
  0.234161 + x,
  0.250762 + y,
  6.512757 + x,
  38.917759 + y,
  (x = 20.557457 + x),
  (y = 56.462065 + y)
);
path.curveTo(
  14.0447 + x,
  17.544306 + y,
  23.855527 + x,
  49.965849 + y,
  (x = 27.154158 + x),
  (y = 57.725664 + y)
);
path.curveTo(
  6.597263 + x,
  15.51963 + y,
  -18.242115 + x,
  29.549279 + y,
  (x = -18.710437 + x),
  (y = 29.047755 + y)
);
path.curveTo(
  0.468322 + x,
  0.501524 + y,
  -19.17876 + x,
  12.519884 + y,
  (x = -25.259091 + x),
  (y = 5.008234 + y)
);
path.curveTo(
  -6.08033 + x,
  -7.51165 + y,
  -27.307696 + x,
  -34.524538 + y,
  (x = -30.001175 + x),
  (y = -39.036194 + y)
);
path.curveTo(
  -2.693479 + x,
  -4.511656 + y,
  -17.694574 + x,
  14.500095 + y,
  (x = -30.323557 + x),
  (y = 1.980211 + y)
);
path.curveTo(
  -12.628982 + x,
  -12.519884 + y,
  -30.889211 + x,
  -22.536103 + y,
  (x = -31.291934 + x),
  (y = -48.08399 + y)
);
path.curveTo(
  -0.402723 + x,
  -25.547887 + y,
  -1.661749 + x,
  -60.575598 + y,
  (x = -1.193426 + x),
  (y = -60.074074 + y)
);
path.curveTo(
  0.468323 + x,
  0.501524 + y,
  -12.435554 + x,
  -5.533088 + y,
  (x = -12.903878 + x),
  (y = -6.034611 + y)
);
path.curveTo(
  0.468324 + x,
  0.501523 + y,
  5.075419 + x,
  23.712784 + y,
  (x = 3.742088 + x),
  (y = 39.06752 + y)
);
path.curveTo(
  -1.333331 + x,
  15.354736 + y,
  -0.666665 + x,
  23.709487 + y,
  (x = 1.999996 + x),
  (y = 35.064231 + y)
);
path.curveTo(
  4.274887 + x,
  15.53282 + y,
  28.306569 + x,
  56.54123 + y,
  (x = 42.48534 + x),
  (y = 57.070782 + y)
);
path.curveTo(
  14.178771 + x,
  0.529552 + y,
  25.211605 + x,
  17.542708 + y,
  (x = 24.743281 + x),
  (y = 17.041185 + y)
);
path.curveTo(
  0.234162 + x,
  0.250762 + y,
  -24.899296 + x,
  3.379084 + y,
  (x = -39.669942 + x),
  (y = -5.619424 + y)
);
path.curveTo(
  -14.770646 + x,
  -8.998508 + y,
  -40.178438 + x,
  -47.123813 + y,
  (x = -49.492923 + x),
  (y = -53.380458 + y)
);
path.curveTo(
  -9.314485 + x,
  -6.256645 + y,
  -21.041928 + x,
  -63.308342 + y,
  (x = -17.807772 + x),
  (y = -70.057566 + y)
);
path.curveTo(
  3.234156 + x,
  -6.749224 + y,
  -2.822923 + x,
  -5.607796 + y,
  (x = -10.40768 + x),
  (y = -20.108679 + y)
);
path.curveTo(
  -7.584757 + x,
  -14.500883 + y,
  6.607777 + x,
  76.092341 + y,
  (x = 18.038359 + x),
  (y = 89.658399 + y)
);
path.curveTo(
  11.430581 + x,
  13.566057 + y,
  30.099188 + x,
  42.104765 + y,
  (x = 39.466559 + x),
  (y = 51.494554 + y)
);
path.curveTo(
  18.734742 + x,
  18.779578 + y,
  53.211659 + x,
  22.533054 + y,
  (x = 59.873399 + x),
  (y = 22.032931 + y)
);
path.curveTo(
  6.66174 + x,
  -0.500123 + y,
  13.886887 + x,
  5.506709 + y,
  (x = 18.097296 + x),
  (y = 15.023052 + y)
);
path.curveTo(
  4.21041 + x,
  9.516343 + y,
  -6.18748 + x,
  13.975202 + y,
  (x = -3.128946 + x),
  (y = 20.037881 + y)
);
path.curveTo(
  3.058534 + x,
  6.062679 + y,
  27.225125 + x,
  33.350177 + y,
  (x = 32.388579 + x),
  (y = 54.098159 + y)
);
path.curveTo(
  5.163454 + x,
  20.747982 + y,
  21.394949 + x,
  46.177232 + y,
  (x = 20.193936 + x),
  (y = 51.672917 + y)
);
path.curveTo(
  -1.201013 + x,
  5.495685 + y,
  51.015832 + x,
  35.559866 + y,
  (x = 58.009172 + x),
  (y = 59.647538 + y)
);
path.curveTo(
  6.99334 + x,
  24.087671 + y,
  29.858448 + x,
  40.609228 + y,
  (x = 44.66763 + x),
  (y = 89.788345 + y)
);
path.curveTo(
  1.546077 + x,
  100.090479 + y,
  -4.054839 + x,
  100.719667 + y,
  (x = -2.800875 + x),
  (y = 204.35786 + y)
);

stage.addChild(drawLeaves(395, 160, 200, 100, -30, 10, 0.4, 2));
stage.addChild(drawLeaves(495, 140, 150, 100, -30, 200, 0.4, 2));
stage.addChild(drawLeaves(455, 130, 50, 50, -30, 50, 0.4, 2));
stage.addChild(drawLeaves(110, 150, 50, 100, -30, 100, 0.4, 2));
stage.addChild(drawLeaves(150, 160, 250, 50, -30, 100, 0.4, 2));
stage.addChild(drawLeaves(250, 150, 250, 50, -30, 100, 0.4, 2));
stage.addChild(drawLeaves(310, 170, 250, 50, -30, 100, 0.4, 2));
stage.addChild(drawLeaves(210, 150, 300, 100, -30, 300, 0.1, 2.3));
stage.addChild(drawLeaves(110, 180, 300, 100, -30, 50, 0.4, 2));
stage.addChild(drawLeaves(110, 150, 300, 100, -30, 50, 0.4, 2));
stage.addChild(drawLeaves(100, 220, 300, 100, -30, 150, 0.4, 2));
stage.addChild(drawLeaves(200, 300, 300, 150, -30, 50, 0.2, 2));
stage.addChild(drawLeaves(200, 500, 300, 150, -30, 5, 0.2, 2));
stage.addChild(drawLeaves(440, 550, 200, 150, -30, 15, 0.2, 2));
stage.resume();

function drawLeaf(x, y, angle, scaleX, scaleY, fill, stroke) {
  var path = acgraph.path();
  path.fill(fill).stroke(stroke, 1, 'none', 'round', 'round');
  var size = 18;
  path
    .moveTo(x, y)
    .curveTo(
      x + size / 2,
      y - size / 2,
      x + (3 * size) / 4,
      y + size / 4,
      x + size,
      y
    )
    .curveTo(
      x + (3 * size) / 4,
      y + size / 3,
      x + size / 3,
      y + size / 3,
      x,
      y
    );
  path.scale(scaleX, scaleY, x, y);
  path.rotate(angle, x, y);
  return path;
}

function drawLeaves(x, y, rx, ry, angle, count, scaleMin, scaleMax) {
  var layer = acgraph.layer();
  for (var i = 0; i < count; i++) {
    var scale =
      Math.round(Math.random() * (scaleMax - scaleMin) * 100) / 100 +
      scaleMin;
    var ang = Math.round(Math.random() * 360 * 100) / 100;
    var cos = Math.cos((ang * Math.PI) / 180);
    var sin = Math.sin((ang * Math.PI) / 180);
    var rRatio =
      1 -
      (Math.log(Math.random() + 0.05) - Math.log(0.05)) /
      (Math.log(1.05) - Math.log(0.05));
    var R =
      (rx * ry) / Math.sqrt(ry * ry * cos * cos + rx * rx * sin * sin);
    var px = R * rRatio * Math.cos(((ang + angle) * Math.PI) / 180);
    var py = R * rRatio * Math.sin(((ang + angle) * Math.PI) / 180);
    var lAngle = Math.round(Math.random() * 360 * 100) / 100;
    var index = Math.floor(Math.random() * 5);
    var fill = paletteFill[index];
    var stroke = paletteStroke[index];
    layer.addChild(
      drawLeaf(x + px, y + py, lAngle, scale, scale, fill, stroke)
    );
  }
  return layer;
}