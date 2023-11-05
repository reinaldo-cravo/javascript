

function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    
    msg.innerHTML = `Agora são ${hora} horas.`
    if(hora >= 0 && hora <12) {
        img.src = 'foto-manha.png'
        document.body.style.background = '#28B1FA'
    } else if (hora >=12 && hora <18) {
        img.src = 'foto-tarde.png'
        document.body.style.background = '#F75016'
        
    } else {
        img.src = 'foto-noite.png'
        document.body.style.background = '#1B0A29'
    }

}

















