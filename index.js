let mensaje = prompt ("Vamos a ver cuanto sabes de capitales, para empezar el juego debes ingresar tu nombre");
alert(`Bienvenide ${mensaje}`);

let colombia = prompt("¿Capital de Colombia?");
while(colombia != "bogota"){
    alert("Mmm nos falta estudiar un poco... Pero intentemos de nuevo");
    colombia = prompt("¿Capital de Colombia?");
}
alert(`Felicitaciones ${mensaje}, continuemos con el siguiente`);

let chile = prompt("¿Capital de Chile?");
while(colombia != "santiago de chile"){
    alert("Mmm nos falta estudiar un poco... Pero intentemos de nuevo");
    colombia = prompt("¿Capital de Chile?");
}
alert(`Felicitaciones ${mensaje}, continuemos con el siguiente`);

let uruguay = prompt("¿Capital de Uruguay?");
while(colombia != "montevideo"){
    alert("Mmm nos falta estudiar un poco... Pero intentemos de nuevo");
    colombia = prompt("¿Capital de Uruguay?");
}
alert(`Felicitaciones ${mensaje}. Uno mas y estas listo para tu próximo viaje`);

let Venezuela = prompt("¿Capital de Venezuela?");
while(colombia != "caracas"){
    alert("Mmm nos falta estudiar un poco... Pero intentemos de nuevo");
    colombia = prompt("¿Capital de Venezuela?");
}
alert(`${mensaje} has pasado todas las pruebas. ¿Cuál será tu próximo destino?`);