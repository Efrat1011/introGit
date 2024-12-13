const groupSelect = document.getElementById('groupSelect');
const textarea = document.getElementById('textarea');
const rating = document.getElementById('rating');
const ratingValue = document.getElementById('ratingValue');
const commentMessage = document.getElementById('commentMessage');
const formMessage = document.getElementById('formMessage');
const feedbackForm = document.getElementById('feedbackForm');


rating.addEventListener('input', () => {
  ratingValue.textContent = rating.value;
});


feedbackForm.addEventListener('submit', (event) => {
  event.preventDefault();
  commentMessage.textContent = '';
  formMessage.textContent = '';

  const group = groupSelect.value;
  const comment = textarea.value
  const ratingValueText = rating.value;


  if (!group) {
    formMessage.textContent = 'Топты таңдаңыз!';
    formMessage.className = 'error';
    return;
  }
  if (comment.length > 15) {
    commentMessage.textContent = 'Пікір 15 символдан аспауы керек!';
    return;
  }

  formMessage.textContent = 'Форма сәтті жіберілді!';
  formMessage.className = 'success';

  
  console.log('Форма мәліметтері:');
  console.log(`Таңдалған топ: ${group}`);
  console.log(`Пікір: ${comment}`);
  console.log(`Бағалау: ${ratingValueText}`);
});