function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('img')
    var data = new Date()
    var hora = data.getHours()
    //var hora = 8

    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        // BOM DIA!
        img.src = 'assets/img/manha.png'
        document.body.style.background = '#f2a253'
    }else if (hora >= 12 && hora < 18) {
        // BOA TARDE!
        img.src = 'assets/img/tarde.png'
        document.body.style.background = '#966167'
    } else {
        // BOA NOITE!
        img.src = 'assets/img/noite.png'
        document.body.style.background = '#0f1d26'
    }
}

