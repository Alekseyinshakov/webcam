export function calc() {
   console.log('calcccc');

   const calcSet = document.querySelector('.calc__set');

   calcSet.addEventListener("click", (e) => {
      if (e.target.classList.contains('calc__set-line-item')) {
         console.log('Клик');
         const elements = e.target.parentNode.querySelectorAll('.calc__set-line-item');
         elements.forEach(element => {
            element.classList.remove('active');
         });
         e.target.classList.add('active');
         calculateCash()
      }
   })

   function calculateCash(params) {
      
   }
}