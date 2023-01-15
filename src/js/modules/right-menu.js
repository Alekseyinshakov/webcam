export function rightMenu() {
   const $rightMenu = document.querySelector('.right')
   const $burger = document.querySelector('.burger-btn')
   const $closeBtn = document.querySelector('.right-close-btn')

   const $list = document.querySelector('.right__list')
   const $bg = document.querySelector('.right__bg')

   if ($rightMenu && $burger) {
      $burger.addEventListener('click', () => {
         openMenu()
      })


      $closeBtn.addEventListener('click', () => {
         closeMenu()
      })


      function openMenu(params) {
         $rightMenu.classList.add('active')
         
         setTimeout(() => {
            $list.classList.add('show')
            $bg.classList.add('show')
         }, 1);
      }

      function closeMenu(params) {
         $list.classList.remove('show')
         $bg.classList.remove('show')
         setTimeout(() => {
            $rightMenu.classList.remove('active');
         }, 300);
         
      }
   }
}