const form = document.getElementById('form-validar');
const campoA = document.getElementById('campo-a');
const campoB = document.getElementById('campo-b');
const mensagem = document.querySelector('.mensagem');

form.addEventListener('submit', function (e) {
    e.preventDefault();

    let a = Number(campoA.value);
    let b = Number(campoB.value);

    validacao(a, b);
});


function validacao(a, b) {
    mensagem.style.display = 'block';
    if (b > a) {
        mensagem.innerHTML = 'Sucesso, o campo B é maior que o campo A !'
        mensagem.style.backgroundColor = 'green';  
    } else {
        mensagem.innerHTML = 'Erro, o campo A é maior que o campo B !'
        mensagem.style.backgroundColor = 'red';
    }
}