let filtroArtista = document.querySelector("#filtrar-artistas");
let filtroMaterial =  document.getElementById("materiais");
let filtroRegiao = document.getElementById("regioes");

// Filtro Regioes
filtroRegiao.addEventListener('change', function() {

	let artistas = document.querySelectorAll(".col-md-4");

	if(this.value){
		
		for (let i = 0; i < artistas.length; i++) {
			let artista = artistas[i];
			let tgRegiao = artista.querySelector(".regiao");
			let nome = tgRegiao.textContent;

			let expressao = new RegExp(this.value, "i");

			if (!expressao.test(nome)){
				artista.classList.add("d-none");
			} else {
				artista.classList.remove("d-none");
			}

			if (this.value == 'todos') {
				artista.classList.remove("d-none");
			}
		}
	}else{
		for (let i = 0; i < artistas.length; i++) {
			artista = artistas[i];
			artista.classList.remove('d-none');
		}
	}

	filtroMaterial.selectedIndex = 0
});


// Filtro MAteriais
filtroMaterial.addEventListener('change', function() {

	let artistas = document.querySelectorAll(".col-md-4");

	if(this.value){
		
		for (let i = 0; i < artistas.length; i++) {
			let artista = artistas[i];
			let tgMaterial = artista.querySelector(".material");
			let nome = tgMaterial.textContent;

			let expressao = new RegExp(this.value, "i");

			if (!expressao.test(nome)){
				artista.classList.add("d-none");
			} else {
				artista.classList.remove("d-none");
			}

			if (this.value == 'todos') {
				artista.classList.remove("d-none");
			}
		}
	}else{
		for (let i = 0; i < artistas.length; i++) {
			artista = artistas[i];
			artista.classList.remove('d-none');
		}
	}
	filtroRegiao.selectedIndex = 0
});


// Filtro input nome artistas
filtroArtista.addEventListener("input", function() {

	let artistas = document.querySelectorAll(".col-md-4");

	if(this.value.length > 0){

		for (let i = 0; i < artistas.length; i++) {
			let artista = artistas[i];
			let tgTitulo = artista.querySelector(".card-title");
            let nome = tgTitulo.textContent;
            

			let expressao = new RegExp(this.value, "i"); // Expressão Regular(fazer buscas) (o "i" representa um parametro que da a caracteristica de procurar tanto letras maiusculas quanto minusculas)

			if (!expressao.test(nome)) {
                artista.classList.add("d-none"); 
			}else{
                artista.classList.remove("d-none"); 
			}
        }

	}else{
		for (let i = 0; i < artistas.length; i++) {
			artista = artistas[i];
			artista.classList.remove('d-none');
		}
	}

});