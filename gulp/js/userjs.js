// $(function () {
//     // owlcarouselfn('.banner .row .col-xs-12', false, true)
// })
// $('test').click((e) => {
//     return e ? true : false
// })
function is (name) {
  return $(name).is(name)
}

$('body').hide()
setTimeout(() => {
  $('body').fadeIn(300)
}, 700);
$(function () {
  if (is('.idx.section-2')) {
    $('.module-special').appendTo('.append-content')
  }

  function is (name) {
    return $(name).is(name)
  }

  if (is('.module-viewcart')) {
    let title = $('.module-viewcart .mt h3').text()
    title = title.split('(')[0]
    $('.module-viewcart .mt h3').text(title)
  }
  // if (!is('.idx.section')) {
  //   $('.banner.idx').remove()
  // }
  // if ($(window).width() < 768 && is('.banner.img')) {
  //   $('.banner.img .img').each(function (){
  //     var src = $(this).find('img').attr('src')
  //     $(this).next('.banner-title').attr('style', `background: url(${src})center center no-repeat`)
  //   })
  // }
  // if (window.location.href.indexOf('new') >= 0) {
  //   $('.banner.img.news-banner').removeClass('hidden')
  //   $('.page.news.hidden').removeClass('hidden')
  // }
  // if (window.location.href.indexOf('prod') >= 0) {
  //   $('.banner.img.case-banner').removeClass('hidden')
  //   $('.page.case.hidden').removeClass('hidden')
  // }
  // if (window.location.href.indexOf('contact') >= 0) {
  //   $('.banner.img.contact-banner').removeClass('hidden')
  //   $('.page.contact.hidden').removeClass('hidden')
  // }
  // if (window.location.href.indexOf('newslist')) {
  //   $('.blog').addClass('newslist')
  // }

  // if (window.location.href.indexOf('prod/') >= 0) {
  //   $('.productlist-side').addClass('prod')
  //   $('.productlist-main').addClass('prod')
  // }

  // if (window.location.href.indexOf('contact') >= 0) {
  //   $('#wrap').addClass('contact')
  //   $('#ContentPlaceHolder1_txtText').attr('placeholder', '您的LINE ID')
  //   $('.contact.append').removeClass('hidden').prependTo('.contact.product .row .col-sm-8')
  // }
  // if ($(window).width() > 768) {
  //   $('#ulMember2').appendTo($('#navbar'))
  // }
  // else {
  //   $('#ulMember2').appendTo($('.navbar'))
  // }

  // if (is('.product-detail')) {
  //   $('.productlist.container').addClass('prodetail')
  // }
  // if (is('.photoSlide-show')) {
  //   let imgLink = $('.photoSlide-show').attr('style').split(`background-image: url('`)
  //   imgLink = imgLink[1].split(`');`)[0]
  //   $('.product-photoSlide').append(`<img class="img-responsive" src=${imgLink}>`)
  // }
  // $('#acart').appendTo($('body'))
})
