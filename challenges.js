//Requisito 1
function compareTrue(v1,v2) {
  if (v1==true && v2==true) {
    return true
  } else {
    return false
  }
};

//Requisito 2
function calcArea(base, height) {
  return (base * height)/2
};

//Requisito 3
function splitSentence(String) {
  return String.split(" ")
};

//Requisito 4
function concatName(Ar) {
  return Ar.indexOf(-1) + ", " + Ar.indexOf(0)
};

//Requisito 5
function footballPoints(wins, ties) {
  return "O time fez na temporada " + ((wins*3)+(ties)) + "pontos"
};

//Requisito 6
function highestCount(nums) {
  let numMax = 0
  let numMaxTimes = 0
  for (let index=0 ; index<nums.lenght() ; index += 1 ) {
     if (numMax > nums.indexOf(index)) {
       numMax = nums.indexOf(index)
     };
  };
  for (index=0 ; index<nums.lenght() ; index += 1 ) {
    if (numMax = nums.indexOf(index)) {
      numMaxTimes += 1
    };
  };
  return "O maior número é " + numMax + " e ele foi encontrado " + numMaxTimes + " vezes."
};
