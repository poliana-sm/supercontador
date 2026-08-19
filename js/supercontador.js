function iniciarContagem() {

    let numeroInicial = Number(document.getElementById('inicio').value);
    let numeroFinal = Number(document.getElementById('final').value);
    let telaResultado = document.getElementById('tela-resultado');

    if (
        document.getElementById('inicio').value == '' ||
        document.getElementById('final').value == ''
    ) {
        telaResultado.innerHTML = 'ERRO: preencha todos os campos.';
        return;
    }

    telaResultado.innerHTML = `Contando de ${numeroInicial} até ${numeroFinal}: <br>`;

    for (let contadora = numeroInicial; contadora <= numeroFinal; contadora++) {
        telaResultado.innerHTML += `${contadora}, `;
    }

    telaResultado.innerHTML += "<br>Fim";
}