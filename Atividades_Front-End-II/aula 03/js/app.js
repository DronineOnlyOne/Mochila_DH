import sum from './modulos/sum'
import sub from './modulos/sub'
import div from './modulos/div'
import mult from './modulos/mult'

function app() {
    let calculadora = prompt(` Calculadora do Sofrimento
    Escolha qual operação deseja:
    [+] Somar
    [-] Subtrair
    [/] Dividir
    [*] Multiplicar`)
    if (calculadora == 0 || calculadora > 4) {
        alert("Não há essa opção")
        app()
    }
    else {
        let valor1 = Number(prompt("Digite o primeiro valor"))
        let valor2 = Number(prompt("Digite o segundo valor"))
        switch (Number(calculadora)) {
            case 1:
                sum(valor1, valor2)
                break
            case 2:
                sub(valor1, valor2)
                break
            case 3:
                div(valor1, valor2)
                break
            case 4:
                mult(valor1, valor2)
                break
        }
        if (confirm("Deseja mais alguma operação?") == true) {
            app()
        } else {
            alert("Obrigado por aliviar seu sofrimento comigo")
        }
    }
}

app()




