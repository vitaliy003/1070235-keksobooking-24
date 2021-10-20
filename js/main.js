function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;}
getRandomInt(-5, 5);

function getRandomFixed(min, max, fixed) {
  if (min<0) {min=0;}
  if (max<min) {max=min;}
  if (fixed<0) {fixed=0;}
  return parseFloat(Math.floor(Math.random() * (max - min)).toFixed(fixed));
}
getRandomFixed(-5, 45, 7);
