const musicas = [
    {
        nome: "Let Go",
        artista: "Ark Patrol",
        src: "Músicas/Ark Patrol - Let Go (ft. Veronika Redd) [Heroic]_Ts5ZiojkOe4.mp3",
    },
    {
        nome: "Lovely",
        artista: "Billie Eilish",
        src: "Músicas/Billie Eilish, Khalid - lovely (Official Music Video)_V1Pl8CzNzCw.mp3",
    },
    {
        nome: "Idfc",
        artista: "Blackbear",
        src: "Músicas/Blackbear - _Idfc_ (Acoustic) OFFICIAL VERSION_-N89TPQdX2o.mp3",
    },
    
    {
        nome: "I hate u, i love u ",
        artista: "Olivia o'brien",
        src: "Músicas/gnash - i hate u, i love u ft. olivia o'brien (music video)_BiQIc7fG9pA.mp3",
    },
    {
        nome: "Beliver",
        artista: "Imagine Dragons",
        src: "Músicas/Imagine Dragons - Believer (Official Music Video)_7wtfhZwyrcc.mp3",
    },
    {
        nome: "Bones",
        artista: "Imagine Dragons",
        src: "Músicas/Imagine Dragons - Bones (Official Music Video)_TO-_3tck2tg.mp3",
    },
    {
        nome: "Enemy",
        artista: "Imagine Dragons x J.I.D ",
        src: "Músicas/Imagine Dragons x J.I.D - Enemy (from the series Arcane League of Legends)_D9G1VOjN_84.mp3",
    },
    {
        nome: "Good 4 u",
        artista: "Olivia Rodrigo",
        src: "Músicas/Olivia Rodrigo - good 4 u (Official Video)_gNi_6U5Pm_o.mp3",
    },
    {
        nome: "Set Fire to the Rain",
        artista: "Adele",
        src: "Músicas/Set Fire to the Rain_uJdu4Lfy8aI.mp3",
    },
    {
        nome: "Señorita",
        artista: "Shawn Mendes, Camila Cabello",
        src: "Músicas/Shawn Mendes, Camila Cabello - Señorita_Pkh8UtuejGw.mp3",
    },
];


let musicaAtualIndex = 0;
const audio = document.getElementById("audio");
const nomeDaMusica = document.getElementById("nome-da-musica");
const nomeDoArtista = document.getElementById("nome-do-artista");


atualizarInformacoesDaMusica();


function atualizarInformacoesDaMusica() {
    nomeDaMusica.textContent = musicas[musicaAtualIndex].nome;
    nomeDoArtista.textContent = musicas[musicaAtualIndex].artista;
    audio.src = musicas[musicaAtualIndex].src;
}


document.getElementById("next-button").addEventListener("click", tocarProximaMusica);


function tocarProximaMusica() {
    musicaAtualIndex = (musicaAtualIndex + 1) % musicas.length;
    atualizarInformacoesDaMusica();
    audio.play();
}


document.getElementById("play-pause-button").addEventListener("click", togglePlayPause);

a
function togglePlayPause() {
    if (audio.paused) {
        audio.play();
        document.getElementById("play-pause-button").textContent = "Pausar";
    } else {
        audio.pause();
        document.getElementById("play-pause-button").textContent = "Play";
    }
}


document.getElementById("prev-button").addEventListener("click", tocarMusicaAnterior);

r
function tocarMusicaAnterior() {
    musicaAtualIndex = (musicaAtualIndex - 1 + musicas.length) % musicas.length; s
    atualizarInformacoesDaMusica();
    audio.play();
}
