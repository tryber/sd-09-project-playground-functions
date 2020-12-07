function techList(tecnologia, name) {
    let resultado = [];
    if (tecnologia.length !== 0){
        for (let i in tecnologia) {
            let objeto = {
            tech: tecnologia[i],
            nome: name
            }
        resultado.push(objeto);
        }
        return resultado
    }

    return 'Vazio!' 
}


  console.log(techList(['HTML'], "Lucas"))