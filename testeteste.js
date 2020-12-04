let arraytech = ["React", "Jest", "HTML", "CSS", "JavaScript"];
let name = "Felipe";
function techList(arraytech, name) {
  // seu código aqui
  let arrayTech = [];
  arraytech.sort();
  for (let index = 0; index < arraytech.length; index += 1) {
    arrayTech.push({
      tech: arraytech[index],
      name,
    });   
  }
  if (arrayTech.length === 0) {
    return 'Vazio!';
  }
  return arrayTech;
}
console.log(techList(arraytech, name));
