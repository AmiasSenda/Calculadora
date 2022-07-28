function calcular(n1, n2) {
  n1 = document.getElementById('n1').value
  n2 = document.getElementById('n2').value
  selector = document.getElementById('selector').value

  switch (selector) {
    case '+':
      calculo = parseInt(n1) + parseInt(n2)
      document.getElementById(
        'resultado'
      ).innerHTML = ` ${n1} + ${n2} = ${calculo}`
      break

    case '-':
      calculo = parseInt(n1) - parseInt(n2)
      document.getElementById(
        'resultado'
      ).innerHTML = ` ${n1} - ${n2} = ${calculo}`
      break

    case '*':
      calculo = parseInt(n1) * parseInt(n2)
      document.getElementById(
        'resultado'
      ).innerHTML = `${n1} * ${n2} = ${calculo}`
      break

    case '/':
      calculo = parseInt(n1) / parseInt(n2)
      if (Number.isNaN(calculo)) {
        document.getElementById(
          'resultado'
        ).innerHTML = `Insira um divisivel  válido!`
      } else {
        document.getElementById(
          'resultado'
        ).innerHTML = ` ${n1} / ${n2} = ${calculo}`
      }
      break
  }
}
