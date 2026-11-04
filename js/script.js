function saludar() {
    let nombre = document.getElementById("nombre").value;
<<<<<<< HEAD
    alert(`Hola ${nombre}`);
    document.getElementById("resultado").value = `Hola, ${nombre}`;    
}

function registrar() {
    let nombre = document.getElementById("nombre2").value;
    let programa = document.getElementById("programa2").value;
    alert(`Aprendiz: ${nombre}\nPrograma: ${programa}`);
    document.getElementById("resultado11").value = `${nombre} - ${programa}`;
    document.getElementById("resultado22").innerText = `Nombre: ${nombre} | Programa: ${programa}`;
    document.getElementById("resultado33").innerHTML = `<p style="color: blue;">
    <strong>Aprendiz:</strong> ${nombre}<br>
    <strong>Programa:</strong> ${programa}</p>`;
    document.getElementById("resultado44").textContent = `El aprendiz ${nombre} esta inscrito en ${programa}.`;
}

function calcularOperaciones() {
    let n1=parseInt(document.getElementById("valorUno").value);
    let n2=parseInt(document.getElementById("valorDos").value);
    
    document.getElementById("resultado_suma").innerText= `Resultado suma: ${n1+n2}`;
    
    document.getElementById("resultado_resta").innerText= `Resultado resta: ${n1-n2}`;

    document.getElementById("resultado_multiplicacion").innerText= `Resultado multiplicacion: ${n1*n2}`;

    document.getElementById("resultado_division").innerText= `Resultado division: ${n1/n2}`;
   
}

=======
    alert('Hola ${nombre}');
    document.getElementById("resultado").value = 'Hola, ${nombre}';    
}
>>>>>>> 54832e37cd9c03e09e2706831abac46672c03515
