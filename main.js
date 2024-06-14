const botoes = document.querySelectorAll(".botao");
const conteudo = document.querySelectorAll(".aba-conteudo")
const contador = document.querySelectorAll(".contador")
const tempoObjetivo1 = new Date( 2025, 4, 1);
const tempoObjetivo2 = new Date( 2026, 2, 21);
const tempoObjetivo3 = new Date( 2025, 11, 2);
const tempoObjetivo4 = new Date( 2026, 0, 2);

contador[0].textContent= "hello."
for (let i = 0; i < botoes.length; i++){
    botoes[i].onclick = function(){
        for (let j = 0; j < botoes.length; j++){
            botoes[j].classList.remove("ativo")
            conteudo[j].classList.remove("ativo")
        }
        botoes[i].classList.add("ativo")
        conteudo[i].classList.add("ativo")
    }
}
