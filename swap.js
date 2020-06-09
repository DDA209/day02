// var var1 = 25;
// var var2 = 30;



function swap(var1, var2) {
    var tableau = [var1, var2];
    Array.prototype.reverse(tableau);
    return tableau;
}

// function swap(var1, var2) {
//     var temp = var1;
//     var1 = var2;
//     var2 = temp;
//     return tableau = [var1, var2];
// }






console.log("var1 = " + swap(25, 30)[0] + " var2 = " + swap(25, 30)[1]);
