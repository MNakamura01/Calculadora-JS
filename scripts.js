function calcular(tipo, valor) {
        console.log(tipo, valor)

        if (tipo === "acao") {
          if (valor === "c") {
          document.getElementById("resultado").value = 0
          } else if (valor === "+" || valor === "-" || valor === "/" || valor === "*" || valor === ".") {
            document.getElementById("resultado").value += valor
          } else if (valor === "=") {
            var valor_campo = document.getElementById("resultado").value
            document.getElementById("resultado").value = eval(valor_campo)
          }




        } else if (tipo === "valor") {
          document.getElementById("resultado").value += valor

        }
      }