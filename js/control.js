function cerrar(div) {
		document.getElementById(div.id).parentElement.hidden = true;
	}

		function calcular() {
		let peso = document.getElementById('peso').value
		let altura = document.getElementById('altura').value

		let resultado = peso / (altura * altura) * 10000;
		resultado = resultado.toFixed(2)
		document.getElementById('modalResultado').hidden= false

		let res = document.getElementById('resultado')
		res.hidden = false
		res.innerHTML = "<p>Tu IMC ES: </p><p>" +resultado+"</p>"
		
		if(resultado < 18.5){
			res.innerHTML += 'Peso inferior';
		} else{ 
			if(resultado < 24.9){
				res.innerHTML += 'Normal'
			} else {
				if(resultado < 29.9){
					res.innerHTML += 'Sobrepeso'
				} else{
					res.innerHTML += 'Obesidad'
				}
			}
		}
	}