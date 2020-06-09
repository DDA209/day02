function firstReverse(str) {
    arr = str.split("") // transforme la chaine en array
    console.log("texte en array : " + arr);
    var long = str.lenght; 
    console.log("contenu de string : " + str);
    console.log("longueur de string : " + long);
    var resArr;
    for ( i = long; i >=0 ; i-- ){
        resArr = resArr, arr[i];
    }
    return resArr
}

console.log(firstReverse("konexio"));