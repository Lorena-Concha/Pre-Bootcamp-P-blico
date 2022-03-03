var arr = [9,12,9];

function like(pos,id){
    let valor = arr[pos] + 1;
    arr[pos] = valor;
    document.getElementById(id).textContent = valor + ' like(s)';
}

function saludar(nombre){
    console.log('Hola '+nombre);
}

function siempreHambriento(arr){
    let contador = 0;
    for(i=0;i<arr.length;i++){
        if (arr[i]==='comida'){
            console.log('delicioso');
            contador ++;
        }
    }
    if (contador===0){
        console.log('Tengo Hambre');
    }
}

//siempreHambriento([3.14,'comida','pastel',true,'comida']); 
//siempreHambriento([4,1,5,7,2]);

function highPass(arr,cutoff){
    var filteredArr=[];
    for (i=0;i<arr.length;i++){
        if (arr[i]>cutoff){
            filteredArr.push(arr[i]);
        }
    }
    return filteredArr;
}
//var result = highPass([6,8,3,10,-2,5,9],5);
//console.log(result);

function betterThanAverage(arr){
    var sum = 0;
    for (i = 0; i<arr.length; i++){
        sum = sum + arr[i];
    }
    let avg = sum / arr.length;
    var count = 0;
    for (i = 0; i<arr.length; i++){
        if (arr[i]>avg){
            count++;
        }
    }
    return count;
}
//var result = betterThanAverage([6,8,3,10,-2,5,9]);
//console.log(result);

function reverse(arr){
    let arrTemp=[];
    for (i = arr.length - 1;i >= 0;i--){
        arrTemp.push(arr[i]);
    }
    arr = arrTemp;
    return arr;
}
//var result = reverse(['a','b','c','d','e']);
//console.log(result);

function fibonacci(n){
    var fibArr=[0,1];
    for (i=2;i<n;i++){
        fibArr[i] = fibArr[i-1] + fibArr[i-2];
    }
    return fibArr;
}
var result = fibonacci(10);
console.log(result);