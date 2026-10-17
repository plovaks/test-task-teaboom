const weightButtons = document.querySelectorAll('.item-weight');
const articleEl = document.querySelector('.item-article span');
const currentPriceEl = document.querySelector('.item-current-price');
const previousPriceEl = document.querySelector('.item-previous-price');
const discountEl = document.querySelector('.discount-badge');


function updateItemData(button) {
    const art = button.getAttribute('data-art');
    const price = parseFloat(button.getAttribute('data-price'));
    const oldPrice = parseFloat(button.getAttribute('data-old-price'));

    articleEl.textContent = art;

    currentPriceEl.textContent = `${price.toLocaleString('ru-RU')} ₽`;
    previousPriceEl.textContent = `${oldPrice.toLocaleString('ru-RU')} ₽`;

    if (oldPrice > price) {
        const discountPercent = Math.round(((oldPrice - price) / oldPrice) * 100);
        discountEl.textContent = `-${discountPercent}%`;
        discountEl.style.display = 'inline-block'; 
    } else {
        discountEl.style.display = 'none'; 
    }
}

weightButtons.forEach(button => {
    button.addEventListener('click', () => {
        weightButtons.forEach(btn => btn.classList.remove('item-weight--active'));
        button.classList.add('item-weight--active');
        
        updateItemData(button);
    });
});


const activeBtn = document.querySelector('.item-weight--active');
if (activeBtn) updateItemData(activeBtn);
