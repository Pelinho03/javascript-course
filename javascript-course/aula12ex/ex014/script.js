function carregar() {
    var msg = window.document.getElementById("msg");
    var img = window.document.getElementById("imagem");
    var data = new Date();
    var hora = data.getHours();
    // var hora = 15;
    msg.innerHTML = `Agora são ${hora} horas`;
    if (hora >= 0 && hora < 12) {
        //BOM DIA
        img.src = "images/morning.png";
        document.body.style.background = "#d6dfca";
    } else if (hora >= 12 && hora <= 18) {
        //BOA TARDE
        img.src = "images/afternoon.png";
        document.body.style.background = "#daae7d";
    } else {
        //BOA NOITE
        img.src = "images/night.png";
        document.body.style.background = "#f7864c";
    }
}
