import './style.css'

function menuPrincipal() {
    const buttonBurguer = document.querySelector('.buttonBurguer');
    const categoriaMusica = document.querySelector('.CategoriaMusica');

    buttonBurguer.addEventListener('click', () => {
        if (categoriaMusica.classList.contains('hidden')) {
            categoriaMusica.classList.remove('hidden')
        } else {
            categoriaMusica.classList.add('hidden')
        }

    })
}
menuPrincipal();

function menuSertanejo() {
    const buttonSertanejo = document.querySelector('.buttonSertanejo');
    const categoriaSertanejo = document.querySelector('.CategoriaSertanejo');
    const categoriaMusicahidden = document.querySelector('.CategoriaMusica');
    const buttonVoltar = document.querySelector('.buttonVoltar')
    const removeButtonBurguer = document.querySelector('.buttonBurguer')

    buttonSertanejo.addEventListener('click', () => {
        if (categoriaSertanejo.classList.contains('hidden')) {
            categoriaSertanejo.classList.remove('hidden')
            categoriaMusicahidden.classList.add('hidden')
            buttonVoltar.classList.remove('hidden')
            removeButtonBurguer.classList.add('hidden')
        }
    })

    buttonVoltar.addEventListener('click', () => {
        categoriaSertanejo.classList.add('hidden')
        categoriaMusicahidden.classList.remove('hidden')
        removeButtonBurguer.classList.remove('hidden')
        buttonVoltar.classList.add('hidden')
    })
}
menuSertanejo();

function menuForro() {
    const buttonForro = document.querySelector('.buttonForro');
    const categoriaForro = document.querySelector('.CategoriaForro');
    const categoriaMusicahidden = document.querySelector('.CategoriaMusica');
    const buttonVoltar = document.querySelector('.buttonVoltar')
    const removeButtonBurguer = document.querySelector('.buttonBurguer')

    buttonForro.addEventListener('click', () => {
        if (categoriaForro.classList.contains('hidden')) {
            categoriaForro.classList.remove('hidden')
            categoriaMusicahidden.classList.add('hidden')
            buttonVoltar.classList.remove('hidden')
            removeButtonBurguer.classList.add('hidden')
        }
    })

    buttonVoltar.addEventListener('click', () => {
        categoriaForro.classList.add('hidden')
        categoriaMusicahidden.classList.remove('hidden')
        removeButtonBurguer.classList.remove('hidden')
        buttonVoltar.classList.add('hidden')
    })
}
menuForro();

function menuFunk() {
    const buttonFunk = document.querySelector('.buttonFunk');
    const categoriaFunk = document.querySelector('.CategoriaFunk');
    const categoriaMusicahidden = document.querySelector('.CategoriaMusica');
    const buttonVoltar = document.querySelector('.buttonVoltar')
    const removeButtonBurguer = document.querySelector('.buttonBurguer')

    buttonFunk.addEventListener('click', () => {
        if (categoriaFunk.classList.contains('hidden')) {
            categoriaFunk.classList.remove('hidden')
            categoriaMusicahidden.classList.add('hidden')
            buttonVoltar.classList.remove('hidden')
            removeButtonBurguer.classList.add('hidden')
        }
    })

    buttonVoltar.addEventListener('click', () => {
        categoriaFunk.classList.add('hidden')
        categoriaMusicahidden.classList.remove('hidden')
        removeButtonBurguer.classList.remove('hidden')
        buttonVoltar.classList.add('hidden')
    })
}
menuFunk();

function menuPagode() {
    const buttonPagode = document.querySelector('.buttonPagode');
    const categoriaPagode = document.querySelector('.CategoriaPagode');
    const categoriaMusicahidden = document.querySelector('.CategoriaMusica');
    const buttonVoltar = document.querySelector('.buttonVoltar')
    const removeButtonBurguer = document.querySelector('.buttonBurguer')

    buttonPagode.addEventListener('click', () => {
        if (categoriaPagode.classList.contains('hidden')) {
            categoriaPagode.classList.remove('hidden')
            categoriaMusicahidden.classList.add('hidden')
            buttonVoltar.classList.remove('hidden')
            removeButtonBurguer.classList.add('hidden')
        }
    })

    buttonVoltar.addEventListener('click', () => {
        categoriaPagode.classList.add('hidden')
        categoriaMusicahidden.classList.remove('hidden')
        removeButtonBurguer.classList.remove('hidden')
        buttonVoltar.classList.add('hidden')
    })
}
menuPagode();

function menuBrega() {
    const buttonBrega = document.querySelector('.buttonBrega');
    const categoriaBrega = document.querySelector('.CategoriaBrega');
    const categoriaMusicahidden = document.querySelector('.CategoriaMusica');
    const buttonVoltar = document.querySelector('.buttonVoltar')
    const removeButtonBurguer = document.querySelector('.buttonBurguer')

    buttonBrega.addEventListener('click', () => {
        if (categoriaBrega.classList.contains('hidden')) {
            categoriaBrega.classList.remove('hidden')
            categoriaMusicahidden.classList.add('hidden')
            buttonVoltar.classList.remove('hidden')
            removeButtonBurguer.classList.add('hidden')
        }
    })

    buttonVoltar.addEventListener('click', () => {
        categoriaBrega.classList.add('hidden')
        categoriaMusicahidden.classList.remove('hidden')
        removeButtonBurguer.classList.remove('hidden')
        buttonVoltar.classList.add('hidden')
    })
}
menuBrega();