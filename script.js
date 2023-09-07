const video = document.getElementById('video');
const text = document.querySelector('.container-text p');
const image1Link = document.getElementById('image1Link');
const image2Link = document.getElementById('image2Link');
const image3Link = document.getElementById('image3Link');
const image4Link = document.getElementById('image4Link');

const videos = ['./video/impulso_jett.mp4', './video/dash-jett.mp4', './video/smoke-jett.mp4', './video/ult-jett.mp4'];
const texts = [
    "Q - CORRENTE ASCENDENTE\n\nINSTANTANEAMENTE impele Jett\nbem alto no ar.",
    "E - BRISA DE IMPULSO\n\nATIVE para preparar uma rajada\nde vento por tempo limitado.\nREPITA a habilidade para lançar\nJett na direção do movimento\natual dela. Se estiver parada, Jett\nserá lançada para a frente. A\ncarga de Brisa de Impulso é\nredefinida a cada dois abates.",
    "C - ERUPÇÃO DAS BRUMAS\n\nLança INSTANTANEAMENTE um\nprojétil que se expande numa\nbreve nuvem que obscurece a\nvisão ao bater numa superfície.\nSEGURE o botão da habilidade\npara curvar a fumaça na direção\nda sua mira.",
    "X - TORMENTA DE AÇO\n\nEQUIPE um conjunto de facas de\narremesso altamente precisas.\nDISPARE para lançar uma única\nfaca contra o alvo. As facas são\nrecarregadas ao matar um\noponente. Use o DISPARO\nALTERNATIVO para jogar todas as\nfacas restantes contra o alvo,\nporém elas não são recarregadas\nao matar um oponente."
];

function convertNewlinesToBreaks(text) {
    return text.replace(/\n/g, '<br>');
}

function changeVideoAndText(index) {
    video.src = videos[index];
    text.innerHTML = convertNewlinesToBreaks(texts[index]);
    video.load();
    video.play();
}


image1Link.addEventListener('click', () => {
    changeVideoAndText(0);
});

image2Link.addEventListener('click', () => {
    changeVideoAndText(1);
});

image3Link.addEventListener('click', () => {
    changeVideoAndText(2);
});

image4Link.addEventListener('click', () => {
    changeVideoAndText(3);
});
