$('.page-scroll').on('click', function(){
    let tujuan = $(this).attr('href');
    let elemenTujuan = $(tujuan);
    $('html, body').animate({
        scrollTop: elemenTujuan.offset().top - 50
    }, 1000, 'easeInOutCubic')
})

$('.page-port').on('click', function(){
    let tujuanPort = $(this).attr('href');
    let elemenTujuanPort = $(tujuanPort);
    $('html, body').animate({
        scrollTop: elemenTujuanPort.offset().top - 70
    }, 1000, 'easeInOutCubic')
})

$('.page-home').on('click', function(){
    let tujuanHome = $(this).attr('href');
    let elemenTujuanHome = $(tujuanHome);
    $('html, body').animate({
        scrollTop: elemenTujuanHome.offset().top
    }, 1000, 'easeInOutCubic')
})


$(window).scroll(function(){
    let wScroll = $(this).scrollTop();

    // jumbotron
    $('.jumbotron .gambar img').css({
        'transform': 'translate(0, '+ wScroll/4 +'%)'
    })
    
    $('.jumbotron h1').css({
        'transform': 'translate(0, '+ wScroll/2 +'%)'
    })

    $('.jumbotron p').css({
        'transform': 'translate(0, '+ wScroll +'%)'
    })

    $('.jumbotron .arrow img').css({
        'transform': 'translate(0, '+ wScroll/4 +'%)'
    })

    if(wScroll > 0){
        $('.jumbotron a.cv').addClass('cv-ext');
    }

    else if(wScroll == 0){
        $('.jumbotron a.cv').removeClass('cv-ext');
    }

    // about
    if(wScroll > $('.about').offset().top - 250){
        $('.par1, .par2').addClass('par-ext')
    }

    // Portfolio
    if(wScroll > $('.portfolio').offset().top - 250){
        $('.portfolio .thumbnail').each(function (i) { 
             setTimeout(function(){
                $('.portfolio .thumbnail').eq(i).addClass('thumb-ext');
             }, 100 * (i+1));
        });
    }
})



