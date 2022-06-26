import $ from 'jquery';
import './style.css';
import botao from './components/botao/botao.js';

$(function(){
   $('#botao').on('click', function(){

        let botao = new botao();
        botao.setTitle('Testador');

        $('.area').html( botao.render() );


        $('h1').html('ola mundo alterado');

        $(this).addClass('botao');

        $('#imagem'). attr('src , galeria')
   });
});