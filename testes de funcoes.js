function concatName(array) {
    let empty= [];
    firstLast = empty.concat(array[array.length - 1] + ', ' + array[0]);
    console.log(firstLast);
    }
    concatName(['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']);