$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})

function iniciaModal(modalID) {
    
    const modal = document.getElementById(modalID);
       if(modal) {
           modal.classList.add('mostrar');
           modal.addEventListener('click', (e) => {
               if(e.target.id == modalID || e.target.className == 'fechar') {
                   modal.classList.remove('mostrar');
                   
               }
           });
    }
   
}


const login  = document.querySelector('i');
login.addEventListener('click', () => iniciaModal('modal-popup'));



/*
function iniciaModal(modal-inscreverID) {
    
    const modal = document.getElementById(modal-inscreverID);
       if(modal) {
           modal.classList.add('mostrar-inscrever');
           modal.addEventListener('click', (e) => {
               if(e.target.id == modal-inscreverID || e.target.className == 'fechar-inscrever') {
                   modal.classList.remove('mostrar-inscrever');
                   
               }
           });
    }
   
}

const creat  = document.querySelector('inscrever');
login.addEventListener('click', () => iniciaModal('modal-popup-inscrever'));*/