function catAndMouse(mouse,cat1,cat2) {
    let mCat1= mouse-cat1; 
    let mCat2= mouse-cat2; 
    if( mCat1 < mCat2){
      return "cat1";
    } else if ( mCat1 > mCat2){
      return "cat2";
    } else {
      return "os gatos trombam e o rato foge"
    }
  }
  catAndMouse (10,5,3)