// let arraytech = ["React", "Jest", "HTML", "CSS", "JavaScript"];
// let name = "Felipe";
// let object = {};
// function techList(arraytech, name) {
//   // seu código aqui
//   let arraysort = arraytech.sort;
  
//   for (let index = 0; index < arraytech.length; index ++) {
//     object.push = ({
//       tech:arraysort[index],
//       name,
//     });
//   }
//   return object
// }
// object.push = ({
//   tech:arraytech[0],
//   name,
// });
// object.push = ({
//   tech:arraytech[1],
//   name,
// });
// object.push = ({
//   tech:arraytech[2],
//   name,
// });

// console.log(table.object);


//EXEMPLO DO COLEGUINHA
let tech = ["React", "Jest", "HTML", "CSS", "JavaScript"];
let name = "Felipe";
function techList(tech, name) {
  let arrayTech = [];
  tech.sort();
  for (let index = 0; index < tech.length; index += 1) {
    arrayTech.push({
      tech: tech[index],
      name,
    });
    console.log((arrayTech)+(index));
  }
  if (arrayTech.length === 0) {
    return 'Vazio!';
  }
  return arrayTech;
}
console.table(techList(tech, name));
let a = 2;
let b = 4;
console.log(a + "-" + b);
    
