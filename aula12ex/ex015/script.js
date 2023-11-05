function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')

    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('ERRO verifique os dados')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >=0 && idade <10){
                img.setAttribute('src', 'menino-bebe.png')
            } else if (idade <21) {
                img.setAttribute('src', 'homem-jovem.png')
            } else if (idade <50) {
                img.setAttribute('src', 'homem-adulto.png')
            } else {
                img.setAttribute('src', 'homem-velho.png')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >=0 && idade <10){
                img.setAttribute('src', 'bebe-menina.png')
            } else if (idade <21) {
                img.setAttribute('src', 'mulher-jovem.png')
            } else if (idade <50) {
                img.setAttribute('src', 'mulher-adulta.png')
            } else {
                img.setAttribute('src', 'mulher-velha.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.appendChild(img)
    }

}