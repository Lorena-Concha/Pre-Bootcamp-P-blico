window.onload = function(){
	
}
function sumar(a,b){
	var numero = 0;
	//var texto = "";
	var sum = a + b;
	var texto = 'El resultado de la suma es: ';
	alert(texto+sum);console.log(texto+sum);
	return sum;
}
function arreglos(){
	var arreglo = [9,5,6,7,8,9,3];
	var arreglo2 = ['Hola','Chao', 'Hi','Good Bye'];
	for (var i = 0; i < arreglo.length; i++ ){
		console.log(arreglo[i]);
	}
	console.log();
}

function test(){
	alert('Mensaje de prueba');
}
function validarTotal(total){
	var resultado = false;
	if (total>10){
		resultado = true;
	}else{
		resultado= false;
	}
	alert(resultado);
}