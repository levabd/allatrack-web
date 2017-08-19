export default {
  goTo (event) {
    let a = event.target
    if (event.target.tagName === 'I' && event.target.parentNode.tagName === 'SPAN' && event.target.parentNode.parentNode.tagName === 'A') {
      a = event.target.parentNode.parentNode
    }

    if (location.pathname.replace(/^\//, '') === a.pathname.replace(/^\//, '') || location.hostname === a.hostname) {
      var target = $(a.hash)
      target = target.length ? target : $('[name=' + a.hash.slice(1) + ']')
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top - 60
        }, 1000)
        return false
      }
    }
  }
}