$(document).ready(function() {
    /*
    console.log(document.querySelector("header button")); forma padrão de chamar elemento 
    console.log($("header button"));  Executando a mesma ação com o JQuery 
    
    document.querySelector('header button').addEventListener('click', function(){
    })*/

    $('header button').click(function() {
        $('form').slideDown();//Essa função da um efeito de abrir para baixo.
    })

    $('#botao-cancelar').click(function() {
        $('form').slideUp();//Essa faz o inverso da slideDown
    })

    
    $('form').on('submit', function(e) {
        e.preventDefault();
        const enderecoDaNovaimagem = $('#endereco-imagem-nova').val();//Aqui o .val faz o mesmo que o .value
        const novoItem = $('<li style="display: none"></li>')
        $(`<img src="${enderecoDaNovaimagem}" />`).appendTo(novoItem);//a função appendTo() serviu para adicionarmos esse elemento à cons novoItem
        $(`
            <div class="overlay-imagem-link">
                <a href="${enderecoDaNovaimagem}" target="_blank" title="Ver imagem em tamanho real">
                    Ver imagem em tamanho real
                </a>
            </div>
        `).appendTo(novoItem);
        $(novoItem).appendTo('ul');
        $(novoItem).fadeIn(1000);//função de animação para surgimento do elemento
        $('#endereco-imagem-nova').val('');
    })
})