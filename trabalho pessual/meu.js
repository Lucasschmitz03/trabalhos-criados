let apagar1 = document.querySelector('.apagar1')
let acertou1 = document.querySelector('.certo1')
let apagar2 = document.querySelector('.apagar2')
let acertou2 = document.querySelector('.certo2')
let acertou3 = document.querySelector('.certo3')
let apagar3 = document.querySelector('.apagar3')
let acertou4 = document.querySelector('.certo4')
let apagar4 = document.querySelector('.apagar4')
let acertou5 = document.querySelector('.certo5')
let apagar5 = document.querySelector('.apagar5')

var btn = document.getElementById('btn-div');
var container = document.querySelector('.container');

btn.addEventListener('click', function() {
    
  if(container.style.display === 'block') {
      container.style.display = 'none';
  } else {
      container.style.display = 'block';
  }
});

function botao(){
    var botaoa = document.querySelector('.botaoInicio')
    botaoa.style.display = 'none'
}

function primeira() {
apagarPrimeira = document.querySelector('.apagarSegundo');

if (document.getElementById("primeira").value == "a toalha"){
    apagarPrimeira.style.display = 'block'
    acertou1.style.display = 'block'
    apagar1.style.display = 'none'
} else{
    document.getElementById("primeira").value = ''
    apagar1.style.display = 'block'
}
}

function segunda() {
apagarSegunda = document.querySelector('.apagarTerceira');
if (document.getElementById("segunda").value == "o selo"){
    apagarSegunda.style.display = 'block'
    apagar2.style.display = 'none'
    acertou2.style.display = 'block'
} else{
    document.getElementById("segunda").value = ''
    apagar2.style.display = 'block'
}
}

function terceira() {
apagarTerceira = document.querySelector('.apagarQuarta');

if (document.getElementById("terceira").value == "o gelo"){
    apagarTerceira.style.display = 'block'
    apagar3.style.display = 'none'
    acertou3.style.display = 'block'
} else {
    document.getElementById("terceira").value = ''
    apagar3.style.display = 'block'
}

}

function quarta() {
apagarQuarta = document.querySelector('.apagarQuinta');

if (document.getElementById("quarta").value == "a vela"){
    apagarQuarta.style.display = 'block'
    apagar4.style.display = 'none'
    acertou4.style.display = 'block'
} else{
    document.getElementById("quarta").value = ''
    apagar4.style.display = 'block'
}
}

function quinta() {

apagarQuinta = document.querySelector('.mostrarDepois');

if (document.getElementById("quinta").value == "o papel"){
    apagarQuinta.style.display = 'block'
    apagar5.style.display = 'none'
} else{
    document.getElementById("quinta").value = ''
    apagar5.style.display = 'block'

}
}
