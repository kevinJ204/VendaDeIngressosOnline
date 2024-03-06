var qtdIngressosTotalOriginal = parseInt(document.getElementById('qtdIngressosTotal').innerText);

function calcularTotal() {
    var precoIngresso = parseFloat(document.getElementById('ingressoPreco').innerText);
    var qtdIngressosInput = document.getElementById('qtdIngressos').value.trim();
    var qtdIngressos = qtdIngressosInput !== '' ? parseInt(qtdIngressosInput) : 0;

    var precoTotal = precoIngresso * qtdIngressos;
    var ingressosRestantes = qtdIngressosTotalOriginal - qtdIngressos;

    if (qtdIngressos > qtdIngressosTotalOriginal) {
        qtdIngressos = qtdIngressosTotalOriginal;
        document.getElementById('qtdIngressos').value = qtdIngressos;
        ingressosRestantes = 0;
        precoTotal = precoIngresso * qtdIngressosTotalOriginal;
    }
    if (qtdIngressos < 0) {
        qtdIngressos = 0;
        document.getElementById('qtdIngressos').value = qtdIngressos;
        precoTotal = 0;
        ingressosRestantes = qtdIngressosTotalOriginal;
    }

    document.getElementById('precoTotal').innerText = isNaN(precoTotal) ? '0.00' : precoTotal.toFixed(2);
    document.getElementById('qtdIngressosTotal').innerText = isNaN(ingressosRestantes) ? qtdIngressosTotalOriginal : ingressosRestantes;
}

document.getElementById('qtdIngressos').addEventListener('input', calcularTotal);
