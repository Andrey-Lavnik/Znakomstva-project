const openModal = document.getElementById('open_modal') 
const closeModal = document.getElementById('close_modal') 
const modal = document.getElementById('modal') 
 
openModal.addEventListener('click', function(e){ 
    e.preventDefault() 
    modal.classList.add('active') 
    console.log('почему не выводит окно')
}) 
 
closeModal.addEventListener('click', () =>{ 
    modal.classList.remove('active') 
   
})