$('.pqjo').click(function(){
    if($('.pqjo').hasClass('active')){
        $('.pqjo').attr('src', 'assets/img/pao_queijo.png')
        $('.pqjo').removeClass('active')
    } else {
        $('.pqjo').addClass('active')
        $('.pqjo').attr('src', 'assets/img/pao_quijo_lupa.png')
    }
})
$('.pizza').click(function(){
    if($('.pizza').hasClass('active')){
        $('.pizza').attr('src', 'assets/img/pizza.png')
        $('.pizza').removeClass('active')
    } else {
        $('.pizza').addClass('active')
        $('.pizza').attr('src', 'assets/img/pizza_lupa.png')
    }
})
$('.sorvete').click(function(){
    if($('.sorvete').hasClass('active')){
        $('.sorvete').attr('src', 'assets/img/sorvete.png')
        $('.sorvete').removeClass('active')
    } else {
        $('.sorvete').addClass('active')
        $('.sorvete').attr('src', 'assets/img/sorvete_lupa.png')
    }
})
$('.frango').click(function(){
    if($('.frango').hasClass('active')){
        $('.frango').attr('src', 'assets/img/frango.png')
        $('.frango').removeClass('active')
    } else {
        $('.frango').addClass('active')
        $('.frango').attr('src', 'assets/img/frango_lupa.png')
    }
})
$('.lasanha').click(function(){
    if($('.lasanha').hasClass('active')){
        $('.lasanha').attr('src', 'assets/img/lasanha.png')
        $('.lasanha').removeClass('active')
    } else {
        $('.lasanha').addClass('active')
        $('.lasanha').attr('src', 'assets/img/lasanha_lupa.png')
    }
})