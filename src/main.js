const btnMonthly = document.getElementById("btn-monthly")
const btnAnnually = document.getElementById("btn-annually")
const monthly = document.getElementById("monthly")
const annually = document.getElementById("annually")

function updateTime(type) {

  if (type === 'monthly') {
    btnMonthly.classList.add('active1');
    btnAnnually.classList.remove('active1');
    monthly.classList.remove('hidden')
    monthly.classList.add('grid')
    annually.classList.add('hidden');
    annually.classList.remove('grid');

  } else {
    btnMonthly.classList.remove('active1');
    btnAnnually.classList.add('active1');
    annually.classList.remove('hidden')
    annually.classList.add('grid')
    monthly.classList.add('hidden');
    monthly.classList.remove('grid');
  }
}
btnMonthly.onclick = () => updateTime('monthly');
btnAnnually.onclick = () => updateTime('annually');

// AccordionItems

const accordionItems = document.querySelectorAll('.accordion-item');

accordionItems.forEach((item) => {
    const header = item.querySelector('.accordion-header');
    
    header.addEventListener('click', () => {
        if (item.classList.contains('active')) {
            return;
        }
        accordionItems.forEach((allItem) => {
            allItem.classList.remove('active');
        });
        item.classList.add('active');
    });
});