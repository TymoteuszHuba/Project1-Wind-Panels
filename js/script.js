//nasłuchiwanie na całą stronę www od momentu jej całkowitego załadowania document.addEventListener('DOMContentLoaded')
//następnie utworzyliśmy fukcję anonimową function()
document.addEventListener('DOMContentLoaded', function()
{
    const nav = document.querySelector('.navbar')
    const navItems = document.querySelectorAll('.nav-link')
    const navList = document.querySelector('.navbar-collapse')

    function addShadow()
    {
        //warunek if jeśli window.scroll będzie większy bądź równy 300px
        if (window.scrollY >= 150)
        {
            //dodaj do zmiennej nav za pomocą .add dodajemy klasę shadow-bg 
            nav.classList.add('shadow-bg')
        }
        else
        {
            //w przeciwnym wypadku usuń .remove z zmiennej nav klasę shadow-bg
            nav.classList.remove('shadow-bg')
        }
    }

navItems.forEach(item => item.addEventListener('click', () => navList.classList.remove('show')))

    //nasłuchiwanie ustawione na przewijanie, w momencie uzyskania okreśonych warunków funkcji addShadow aby wywołać funkcję
    window.addEventListener('scroll', addShadow)

})



