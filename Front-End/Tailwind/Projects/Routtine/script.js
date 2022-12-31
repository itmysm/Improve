events()

function events() {

    window.addEventListener('scroll', function(e) {

        //window.scrollY > 22 ? navbar = "#fff" : navbar = 'transparent'
        window.scrollY > 22 ? document.querySelector('#header').style.background = "#211260" : document.querySelector('#header').style.background = 'transparent'
    });
}