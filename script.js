const weightButtons = document.querySelectorAll('.item-weight');
const articleEl = document.querySelector('.item-article span');
const currentPriceEl = document.querySelector('.item-current-price');
const previousPriceEl = document.querySelector('.item-previous-price');

// ф-я изменения инф-ии о товаре в зависимости от фасовки
function updateItemData(button) {
    const price = parseFloat(button.dataset.price);
    const oldPrice = parseFloat(button.dataset.oldPrice);
    articleEl.textContent = button.dataset.art;
    currentPriceEl.textContent = `${price.toLocaleString('ru-RU')} ₽`;
    previousPriceEl.textContent = `${oldPrice.toLocaleString('ru-RU')} ₽`;
}

// расчет скидки
weightButtons.forEach(button => {
    const price = parseFloat(button.dataset.price);
    const oldPrice = parseFloat(button.dataset.oldPrice);
    const badge = button.querySelector('.discount');
    if (badge) {
        badge.textContent = `-${Math.round((oldPrice - price) / oldPrice * 100)}%`;
    }
});

// обработчик по клику на блок с фасовкой
weightButtons.forEach(button => {
    button.addEventListener('click', () => {
        weightButtons.forEach(btn => btn.classList.remove('item-weight--active'));
        button.classList.add('item-weight--active');
        updateItemData(button);
    });
});

updateItemData(document.querySelector('.item-weight--active'));

// переменные для переключения изображений
const mainImage = document.querySelector('.item-main-image');
const thumbs = document.querySelectorAll('.item-thumb');

thumbs.forEach(thumb => {
    thumb.addEventListener('click', () => {
        mainImage.src = thumb.src;
        thumbs.forEach(t => t.classList.remove('item-thumb--active'));
        thumb.classList.add('item-thumb--active');
    });
});