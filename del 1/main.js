function Color(r, g, b) {
  this.r = r;
  this.g = g;
  this.b = b;
}

Color.prototype.rgb = function () {
  return `rgb(${this.r}, ${this.g}, ${this.b})`;
};

Color.prototype.hex = function () {
  return `#${this.r.toString(16) + this.g.toString(16) + this.b.toString(16)}`;
};

Color.prototype.rgba = function (a) {
  return `rgba(${this.r}, ${this.g}, ${this.b}, ${a})`;
};

const handleReset = () => {
  document.documentElement.style.setProperty(`--bg-color`, `#fff`);
  updateResult();
};

const handleRGB = () => {
  const color = new Color(150, 180, 230);
  document.documentElement.style.setProperty(`--bg-color`, color.rgb());
  updateResult();
};

const handleHEX = () => {
  const color = new Color(150, 180, 230);
  document.documentElement.style.setProperty(`--bg-color`, color.hex());
  updateResult();
};

const handleRGBA = () => {
  const color = new Color(150, 180, 230);
  document.documentElement.style.setProperty(`--bg-color`, color.rgba(0.5));
  updateResult();
};

const updateResult = () => {
  const div = document.querySelector('#result');
  div.innerHTML = document.documentElement.style.getPropertyValue('--bg-color');
};
