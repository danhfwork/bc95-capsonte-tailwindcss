const btnMonthly = document.getElementById("btn-monthly")
const btnAnnually = document.getElementById("btn-annually")

const pricingData = {
  monthly: { beginner: "25", starter: "89", pro: "199", label: "/Per month" },
  annually: { beginner: "240", starter: "960", pro: "1800", label: "/Per year" }
};

function updatePrices(type) {
  // 1. Cập nhật con số giá tiền
  document.getElementById('price-beginner').innerText = pricingData[type].beginner;
  document.getElementById('price-starter').innerText = pricingData[type].starter;
  document.getElementById('price-pro').innerText = pricingData[type].pro;

  // 2. Cập nhật chữ Label
  document.getElementById('cycle-beginner').innerText = pricingData[type].label;
  document.getElementById('cycle-starter').innerText = pricingData[type].label;
  document.getElementById('cycle-pro').innerText = pricingData[type].label;



  // 3. Style Button active
  if (type === 'monthly') {
    btnMonthly.classList.add('active1');
    btnAnnually.classList.remove('active1');
  } else {
    btnAnnually.classList.add('active1');
    btnMonthly.classList.remove('active1');
  }
}

btnMonthly.onclick = () => updatePrices('monthly');
btnAnnually.onclick = () => updatePrices('annually');

// Acc

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