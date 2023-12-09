function somatorioDivisiveisPor3ou5(limite) {
    let somatorio = 0;
  
    for (let i = 0; i < limite; i++) {
      if (i % 3 === 0 || i % 5 === 0) {
        somatorio += i;
      }
    }
  
    return somatorio;
  }
  
  function imprimirResultado(numero, resultado) {
    console.log(`Para ${numero}, o somatório é: ${resultado}`);
  }
  
  //Para mudar o resultado, altere o número abaixo
  const limiteExemplo = 10;
  const resultadoExemplo = somatorioDivisiveisPor3ou5(limiteExemplo);
  imprimirResultado(limiteExemplo, resultadoExemplo);
