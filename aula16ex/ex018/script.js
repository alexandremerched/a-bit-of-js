let num = document.getElementById('txtn')
let lista = document.getElementById('valores')
let res = document.getElementById('res')
let numbers = []
let dados = { maior: 0, menor: 0, total: 0 }

function add() {
    if (num.value.length == 0) {
        alert('Coloque um número válido')
    } else {
        n = Number(num.value)
        if (numbers.indexOf(n) != -1 || n < 1 || n > 100) {
            alert('Valor inválido ou já está na lista')
        } else {
            res.innerHTML = ''
            lista.innerHTML = ''
            dados['total'] = dados['media'] = 0
            numbers.push(n)
            for (pos in numbers) {
                let item = document.createElement('option')
                item.text = `Valor ${numbers[pos]} adicionado.`
                item.value = `valor${pos}`
                lista.appendChild(item)

                // DADOS

                dados['total'] += numbers[pos]

                if (pos == 0) {
                    dados['maior'] = dados['menor'] = numbers[pos]
                } else if (dados['maior'] < numbers[pos]) {
                    dados['maior'] = numbers[pos]
                } else if (dados['menor'] > numbers[pos]) {
                    dados['menor'] = numbers[pos]
                }
            }
        }
    }
}

function end() {
    if (numbers.length == 0) {
        alert('Adicione valores antes de finalizar')
    } else {
        addPtoRes(`Ao todo, temos ${numbers.length} números cadastrados.`)
        addPtoRes(`O maior valor informado foi ${dados['maior']}.`)
        addPtoRes(`O menor valor informado foi ${dados['menor']}.`)
        addPtoRes(`Somando todos os valores, temos ${dados['total']}.`)
        addPtoRes(`A média dos valores digitados é ${dados['total'] / numbers.length}`)
    }
}

function addPtoRes(txt) {
    let p = document.createElement('p')
    p.innerHTML = `${txt}`
    res.appendChild(p)
}