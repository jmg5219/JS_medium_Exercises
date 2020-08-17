//This is where my scripts will go...


function madlib(name,subject){
    return name+"'s"+" favorite subject in school is "+subject+".";
}
let name = "";
let subject ="";
console.log('Madlib:',madlib('Ryan','Art'));
//------------------------------------------------------------------------
function tipAmount(total,los){
    if (los === 'good'){
        return (total*0.20);
    }else if (los === 'fair'){
        return (total*0.15);
    }else if (los === 'bad'){
        return (total*0.10);
    }
}
console.log('Tip Calculator:',tipAmount(100,'good'));
//------------------------------------------------------------------------
function totalAmount(total,los){
    if (los === 'good'){
        return total = total + (total*0.20);
    }else if (los === 'fair'){
        return total = total + (total*0.15);
    }else if (los === 'bad'){
        return total = total + (total*0.10);
    }
}
console.log('Tip Calculator2:',totalAmount(100,'good'));
//------------------------------------------------------------------------
function printNumbers(start,end){
    arr = [];
    while(start<=end-1){
        start = start + 1;
        arr.push(start);
    }
    return arr;
}
console.log('Print Numbers:',printNumbers(0,10));
//------------------------------------------------------------------------
function printSquare(size){
    // Create one dimensional array 
    var arr = new Array(size); 
    // Loop to create 2D array using 1D array 
    for (var i = 0; i < arr.length; i++) { 
        arr[i] = new Array(size); 
    } 
    var h = 0; 
    // Loop to initilize 2D array elements. 
    for (var i = 0; i < size; i++) { 
        for (var j = 0; j < size; j++) { 
            arr[i][j] = "*"; 
            
        } 
        
    } 
    return arr;
}
console.log('Print Square:',printSquare(5));
//------------------------------------------------------------------------
function printBox(size){
    // Create one dimensional array 
    var arr = new Array(size); 
    // Loop to create 2D array using 1D array 
    for (var i = 0; i < arr.length; i++) { 
        arr[i] = new Array(size); 
    } 
    var h = 0; 
    // Loop to initilize 2D array elements. 
    for (var i = 0; i < size; i++) { 
        for (var j = 0; j < size; j++) { 
            if (i===0 || i ===size-1 || j ===0 || j ===size-1){
                arr[i][j] = "*"; 
            } else {
                arr[i][j] = " "; 
            }
        } 
    } 
    return arr;
}
console.log('Print Box:',printBox(5));
//------------------------------------------------------------------------