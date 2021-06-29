
```function calculaSalario(qtdeCarrosVendidos, valorTotalVendas) {
 const salarioFixo = 2000
 let x = qtdeCarrosVendidos*100
 let y = valorTotalVendas*0.05
 
 let comissao = x + y
 let salarioFinal = comissao + salarioFixo
 
 return salarioFinal
 

}```