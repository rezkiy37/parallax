jQuery(document).ready(() => {
    console.log('Ready!')

    //detect scroll
    $(window).scroll(e => {
        let scrollTop = $(this).scrollTop(),
            width = $(this).outerWidth(),
            contentHeight = $('.content').outerHeight(),
            parallaxHeight = $('.parallax').outerHeight(),
            percentContent = scrollTop / contentHeight * 100,
            parallaxPercent = scrollTop / parallaxHeight * 100,
            opacity = 1 - 1 / 100 * parallaxPercent;

        let z_1 = 1 + (width / 10000 * parallaxPercent)
        $('.parallax-fog').css('transform', `scale(${z_1})`)
        $('.parallax-fog').css('opacity', opacity)


        let z_2 = 1 + (width / 5000000 * percentContent)
        $('.parallax-mountain--1').css('transform', `scale(${z_2})`)


        let hr = width / 2000 * parallaxPercent
        let z_3 = 1 + (width * 0.000005 * parallaxPercent)
        $('.parallax-mountain--2').css('transform', `translate3d(${hr}px, 0, 0) scale(${z_3})`)


        let hr_2 = width / 1500 * parallaxPercent
        let z_4 = 1 + (width * 0.00001 * parallaxPercent)
        $('.parallax-mountain--3').css('transform', `translate3d(${hr_2}px, 0, 0) scale(${z_4})`)
    })










})