function compareTrue(bool1, bool2) {
  bool1 = true;
  bool2 = false;
  if ((bool1 === true) && (bool2 === true)) {
    return true;
  }
  else {
    return false;
  }
}
console.log(compareTrue());
