console.log("Script externo rodando para o DOM");

const títuloElemento = document.getElementById('título dinâmico');//seleciona o elemento <h2> pelo seu ID
títuloElemento.textContent = 'Texto alterado pelo JavaScript';//altera o texto do <h2>
títuloElemento.style.color = '#D7410AFF';//altera a cor do texto para verde

const botãoElemento = document.getElementById("umBotão");//seleciona o botão
botãoElemento.addEventListener('click',function(){
    alert('Botão foi clicado!!!');//quando o botão for clicado, uma caixa de alerta irá aparecer
})

