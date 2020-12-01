function compareTrue(bool1, bool2) {
  bool1 = true;
  bool2 = true;
  if (bool1 === true && bool2 === true) {
    return true;
  }
  return false;
}
compareTrue();

function calcArea(base, height) {
  return (base * height) / 2;
}

function splitSentence(nomeCompleto) {
  nomeCompleto = 'Renan de Oliveira Costa';
  return nomeCompleto.split([' ']);
}
splitSentence();
