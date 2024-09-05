function verificar() {
    var data = new Date();
    var ano = data.getFullYear();
    var fano = document.getElementById("txtano");
    var res = document.querySelector("div#res");
    var body = document.body;

    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert("Verifica os dados e tenta novamente!");
    } else {
        var fsex = document.getElementsByName("radsex");
        var idade = ano - Number(fano.value);
        var gênero = "";
        var img = document.createElement("img");
        img.setAttribute("id", "foto");

        if (fsex[0].checked) {
            gênero = "Homem";
            document.body.style.backgroundColor = "#add8e6";
            // body.style.backgroundColor = "#add8e6";
            if (idade >= 0 && idade < 10) {
                img.setAttribute("src", "images/bebe_m.png");
            } else if (idade < 21) {
                img.setAttribute("src", "images/jovem_m.png");
            } else if (idade < 50) {
                img.setAttribute("src", "images/adulto_m.png");
            } else {
                img.setAttribute("src", "images/idoso_m.png");
            }
        } else if (fsex[1].checked) {
            gênero = "Mulher";
            body.style.backgroundColor = "#ffc0cb";
            if (idade >= 0 && idade < 10) {
                img.setAttribute("src", "images/bebe_f.png");
            } else if (idade < 21) {
                img.setAttribute("src", "images/jovem_f.png");
            } else if (idade < 50) {
                img.setAttribute("src", "images/adulto_f.png");
            } else {
                img.setAttribute("src", "images/idoso_f.png");
            }
        }
        res.style.textAlign = "center";
        res.innerHTML = `Detectei ${gênero} com ${idade} anos.`;
        res.appendChild(img);
    }
}
