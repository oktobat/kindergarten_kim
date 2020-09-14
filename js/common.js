(function($){

    // $(window).load(function(){
    //     $('.introAni').delay(500).fadeOut(500)
    // })

    var colorCode = ['red', 'blue', 'green', 'yellow', 'lime']
    var minCnt =  setInterval(minusCount, 1000)
    var k = 5;
    function minusCount() {
        k--;
        if (k===0) {
            clearInterval(minCnt)
            $('.introAni').fadeOut(500)
            return false
        }
        $('.introAni span').text(k+'초').css({
            color:colorCode[k]
        })
        
    }


    



    $('#containerBox').load('main.html')
    
    $('.depth1 > li').hover(
        function(){
            $(this).find('.depth2')
            .stop().slideDown(700)
        },
        function(){
            $(this).find('.depth2')
            .stop().slideUp(500)
        }
    )

    $('.login a, h1 a').on('click', function(e){
        e.preventDefault();
        var url = $(this).attr('href');
        $('#container').remove()
        $('#containerBox').load(url)
    })




})(jQuery)