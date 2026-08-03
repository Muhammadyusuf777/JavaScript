const messageBox = document.getElementById('message');
const buttons = document.querySelectorAll('[data-action]');

const actionMessages = {
  'pay-cash': 'Naqd pul bilan to‘lov tanlandi.',
  'pay-card': 'Karta bilan to‘lov tanlandi.',
  'pay-check': 'Chek bilan to‘lov tanlandi.',
  'pay-no-check': 'Cheksiz to‘lov tanlandi.',
  'cancel': 'Amal bekor qilindi.',
  'barcode': 'Shtrix kod terish rejimi ochildi.',
  'code': 'Kodni kiritish rejimi ochildi.',
  'reconcile': 'Akt tekshiruvi tanlandi.',
  'client-payment': 'Mijoz to‘lovi tanlandi.',
  'documents': 'Hujjatlar bo‘limi ochildi.',
  'reserve': 'Bron saqlandi.'
};

function showResult(text) {
  messageBox.textContent = text;
}

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const action = button.dataset.action;
    const message = actionMessages[action] || `Bosilgan tugma: ${button.innerText}`;
    showResult(message);
  });
});
