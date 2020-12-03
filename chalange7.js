let mouse = 1;
let cat1 = 3;
let cat2 = -3;
function catAndMouse(mouse, cat1, cat2) {
        let distance1 = (cat1 - mouse);
        let distance2 = (cat2 - mouse);
        if (distance1 > distance2) {
                return "cat1";
        } else if (distance1 < distance2){
                return "cat2";
        } else {
        return "os gatos trombam e o rato foge";
        }
        
}
console.log(catAndMouse(mouse, cat1, cat2));