function fatorial(n){
    var c = n
    var f = 1
    while (c > 0){
        f *= c
        c -= 1
    }
    return f   
}

function possibilidades() {
    var num = Number(document.getElementById('numero').value)
    var resposta = document.querySelector('div#resposta') 
    
    resultado = fatorial(10) / (fatorial(10 - num) * fatorial(num))    
    resposta.innerHTML = `Para um n&uacute;mero com ${num} d&iacute;gitos s&atilde;o poss&iacute;veis ${resultado} combina&ccedil;&otilde;es.`
}    

