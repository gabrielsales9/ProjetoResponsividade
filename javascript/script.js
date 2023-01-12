$(document).ready(function() {
    $(".botoes-flutuantes").hide();
    $("#fundo-preto").hide();
    //$("#formulario").hide();
    var tamPreto = $("#fundo-preto");
    var tamPrincipal = $("body");
   tamPreto.height(tamPrincipal.height());
   RedimensionaTela();
})
$(window).resize(function () {
    RedimensionaTela();
});
$(document).body.onresize = function() {
    $(".botoes-flutuantes").hide();
    $("#fundo-preto").hide();
    var tamPreto = $("#fundo-preto");
    var tamPrincipal = $("body");
   tamPreto.height(tamPrincipal.height());
};
function mostrarBotoes(){
    if($(".botoes-flutuantes").is( ":hidden" )){
        $(".botoes-flutuantes").show();
        $("#fundo-preto").show();
    } else{
        $(".botoes-flutuantes").hide();
        $("#fundo-preto").hide();
    }
}
function RedimensionaTela() {
    var tam = $(window).width();
    if (tam < 760) {
        $("#navbar-esquerdo").hide();
        $(".botoes-flutuantes").hide();
        $("#rodape").show();
    } else {
        $("#navbar-esquerdo").show();
        $("#rodape").hide();
    }
}
