export function calc() {
   

   const calcSet = document.querySelector('.calc__set');

   calcSet.addEventListener("click", (e) => {
      if (e.target.classList.contains('calc__set-line-item')) {
         
         const elements = e.target.parentNode.querySelectorAll('.calc__set-line-item');
         elements.forEach(element => {
            element.classList.remove('active');
         });
         e.target.classList.add('active');
         updateData()
      }
   })
   updateData()
   function updateData(params) {
      const dataObj = calculateCash()

      const weekSpan = document.getElementById('week');
      const monthSpan = document.getElementById('month');
      const yearSpan = document.getElementById('year');

      weekSpan.textContent = numberWithSpaces(dataObj.week);
      monthSpan.textContent = numberWithSpaces(dataObj.month);
      yearSpan.textContent = numberWithSpaces(dataObj.year);

   }

   function numberWithSpaces(x) {
      var parts = x.toString().split(".");
      parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, " ");
      return parts.join(".");
    }

   function calculateCash(params) {
      let moneyPerWeek = 0, 
      baseMoneyForDay = 3200;
      const langSet = document.querySelectorAll('.calc__set-item')[0];
      const timeSet = document.querySelectorAll('.calc__set-item')[1];
      const shiftsSet = document.querySelectorAll('.calc__set-item')[2];

      if (langSet.querySelectorAll('.calc__set-line-item')[0].classList.contains('active')) {
         baseMoneyForDay = baseMoneyForDay * 1.1
      } else if (langSet.querySelectorAll('.calc__set-line-item')[1].classList.contains('active')) {
         baseMoneyForDay = baseMoneyForDay * 1.2
      } else if (langSet.querySelectorAll('.calc__set-line-item')[2].classList.contains('active')) {
         baseMoneyForDay = baseMoneyForDay * 1.3
      }

      if (timeSet.querySelectorAll('.calc__set-line-item')[0].classList.contains('active')) {
         baseMoneyForDay = baseMoneyForDay * 1
      } else if (timeSet.querySelectorAll('.calc__set-line-item')[1].classList.contains('active')) {
         baseMoneyForDay = baseMoneyForDay * 1.1
      } else if (timeSet.querySelectorAll('.calc__set-line-item')[2].classList.contains('active')) {
         baseMoneyForDay = baseMoneyForDay * 1.3
      }

      if (shiftsSet.querySelectorAll('.calc__set-line-item')[0].classList.contains('active')) {
         moneyPerWeek = baseMoneyForDay * 4
      } else if (shiftsSet.querySelectorAll('.calc__set-line-item')[1].classList.contains('active')) {
         moneyPerWeek = baseMoneyForDay * 5
      } else if (shiftsSet.querySelectorAll('.calc__set-line-item')[2].classList.contains('active')) {
         moneyPerWeek = baseMoneyForDay * 6
      }

      moneyPerWeek = (Math.round(moneyPerWeek/100)*100);

      return {
         week: moneyPerWeek,
         month: moneyPerWeek*4,
         year: moneyPerWeek*52
      }
   }
}