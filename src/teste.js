function catAndMouse(mouse, cat1, cat2) {
  let cat = 0 ;
  if (cat1 < cat2) {
    cat = cat1;
  } else {
      cat = cat2;
  }
  if (cat1 === cat2) {
    return "os gatos trombam e o rato foge"
  }
  return cat
}

catAndMouse(3,2,3);