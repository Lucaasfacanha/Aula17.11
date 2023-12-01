import './style.css'

const buttonBurguer = document.querySelector('.buttonBurguer');
const categoriaMusica = document.querySelector('.CategoriaMusica');

buttonBurguer.addEventListener('click', () => {
    if (categoriaMusica.classList.contains('hidden')){
        categoriaMusica.classList.remove('hidden')
    } else {
        categoriaMusica.classList.add('hidden')
    }

})