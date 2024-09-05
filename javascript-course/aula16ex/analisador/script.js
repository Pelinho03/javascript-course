let num = document.getElementById("fnum");
let lista = document.getElementById("flista");
let res = document.getElementById("res");
let valores = [];

function isNumero(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true;
    } else {
        return false;
    }
}

function inLista(n, lista) {
    if (lista.indexOf(Number(n)) != -1) {
        return true;
    } else {
        return false;
    }
}

function adicionar() {
    if (isNumero(num.value) && !inLista(num.value, valores)) {
        valores.push(Number(num.value));
        let item = document.createElement("option");
        item.text = `Valor ${num.value} adicionado.`;
        lista.appendChild(item);
        res.innerHTML = "";
    } else {
        window.alert("Valor inválido ou já encontrado na lista");
    }
    num.value = "";
    num.focus();
}

function finalizar() {
    if (valores.length == 0) {
        window.alert("Adiciona valores antes de finalizar!");
    } else {
        let tot = valores.length;
        let maior = valores[0];
        let menor = valores[0];
        let soma = 0;
        let media = 0;

        for (let i = 0; i < valores.length; i++) {
            soma += valores[i];
            if (valores[i] > maior) {
                maior = valores[i];
            }
            if (valores[i] < menor) {
                menor = valores[i];
            }
        }

        media = soma / tot;
        res.innerHTML = "";
        res.innerHTML += `<p>Ao todo, temos ${tot} números registados.</p>`;
        res.innerHTML += `<p>O maior valor é ${maior}.</p>`;
        res.innerHTML += `<p>O menor valor é ${menor}.</p>`;
        res.innerHTML += `<p>A soma dos valores é ${soma}.</p>`;
        res.innerHTML += `<p>A média dos valores é ${media}.</p>`;
    }
}
