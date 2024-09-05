function contar() {
    var inicio = document.getElementById("num1");
    var fim = document.getElementById("num2");
    var passo = document.getElementById("num3");
    var res = document.querySelector("div#res");

    if (
        inicio.value.length == 0 ||
        fim.value.length == 0 ||
        passo.value.length == 0
    ) {
        window.alert("[ERRO] valores inválidos!");
        res.innerHTML = "Impossível contar!";
    } else {
        // res.innerHTML = `Inicio = ${inicio.value}, Fim = ${fim.value}, Passo = ${passo.value} <br>`;
        res.innerHTML = "A contar: <br>";
        inicio = Number(inicio.value);
        fim = Number(fim.value);
        passo = Number(passo.value);
        if (passo == 0) {
            window.alert("Passo inválido! Considerado PASSO = 1");
            passo = 1;
        }
        if (inicio > fim) {
            for (var c = inicio; c > fim; c -= passo) {
                res.innerHTML += `${c} \u{1F449}`;
            }
        } else {
            for (var c = inicio; c < fim; c += passo) {
                res.innerHTML += `${c} \u{1F449}`;
            }
        }
    }

    res.innerHTML += `\u{1F3C1}`;
}
