function tabuada() {
    var num = document.getElementById('txtn')
    var tab = document.getElementById('seltab')
    if (num.value.lenght == 0) {
        window.alert('Por favor, digite um número!')
    } else {
        var n = Number(num.value)
        var c = 1
        tab.innerHTML = ''
        while (c <=10) {
            var item = document.createElement('option')
            var cnum = n*c
            item.text = `${n} x ${c} = ${cnum}`
            nx = 
            item.value = `tab${c}`
            tab.appendChild(item)
            c++
        }
    }
    
}