function compareTrue(bool1, bool2) {
  bool1 = true;
  bool2 = true;
  if ((bool1 === true) && (bool2 === true)) {
    return true;
  }
  return false;
}
compareTrue();

function calcArea(base, height) {
  base = 3;
  height = 4;
  return (base * height) / 2;
}
calcArea();
