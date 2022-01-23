function carregar() {
var msg = window.document.getElementById('msg')
var img = window.document.getElementById('imagem')
var data = new Date()
var hora = data.getHours()
//var hora = 22
msg.innerHTML = `Agora são ${hora} horas.`
if (hora >=0 && hora < 12) {
        // BOM DIA!
        img.src = 'images/manha.png'
        document.body.style.background = '#d0b469'
} else if (hora >= 12 && hora < 18) {
        // BOA TARDE!
        img.src = 'images/tarde.png'
        document.body.style.background = '#e6927a'
} else {
        //BOA NOITE!
        img.src = 'images/noite.png'
        document.body.style.background = '#6a657c'
}
}
