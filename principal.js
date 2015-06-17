var banners = ["Frase 1", "Frase 2"];
var bannerAtual = 0;

function trocaBanner() {
	bannerAtual = (bannerAtual + 1) % 2;
	document.querySelector('#mensagem').textContent = banners[bannerAtual];
}

setInterval(trocaBanner, 2000);