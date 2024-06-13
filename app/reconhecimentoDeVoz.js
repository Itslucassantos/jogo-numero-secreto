const elementoChute = document.querySelector('#chute')

window.SpeechRecognition = window.SpeechRecongnition || webkitSpeechRecognition;

var recognition = new SpeechRecognition();
// Quando falar no audio a linguagem entendida vai ser o portugues
recognition.lang = 'pt-Br'

recognition.start();

/* Quando recognition comecar pega o resultado dele*/
recognition.addEventListener('result', onSpeak)

function onSpeak(event) {
  chute = event.results[0][0].transcript
  exibeChuteNaTela(chute)
  verificaSeOChutePossuiUmValorValido(chute)
}

function exibeChuteNaTela(chute) {
  elementoChute.innerHTML = `
  <div>Você disse:</div>
  <span class="box">${chute}</span>
  `
}

// Depois de falar um numero e encerrar, liga mais uma vez o reconhecimento de voz para continuar
recognition.addEventListener('end', () => recognition.start())
