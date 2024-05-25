const hora = document.querySelector ('#horas')
const minuto = document.querySelector ('#minutos')
const segundo = document.querySelector ('#segundos')
const fundo = document.querySelector ('body')
const data = document.querySelector ('#teste')

setInterval (()=> {
    dados = new Date()

    dia = dados.getDate()
    mes = dados.getMonth() + 1
    ano = dados.getFullYear()
    hr = dados.getHours()
    min = dados.getMinutes()
    seg = dados.getSeconds()
    miliseg = dados.getMilliseconds()

    hr = hr < 10 ? '0' + hr : hr
    min = min < 10 ? '0' + min : min
    seg = seg < 10 ? '0' + seg : seg
    dia = dia < 10 ? '0' + dia : dia
    mes = mes < 10 ? '0' + mes : mes

    if (hr >= 5 && hr < 12) {
        fundo.className = 'fundoDia'
        
    } else if (hr >= 12 && hr < 18) {
        fundo.className = 'fundoTarde'

    } else {
        fundo.className = 'fundoNoite'
    }

    data.textContent = `${dia} - ${mes} - ${ano}`
    hora.textContent = hr
    minuto.textContent = min
    segundo.textContent = seg
}, 1000)