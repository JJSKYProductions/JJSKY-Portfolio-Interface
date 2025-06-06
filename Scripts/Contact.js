const openContactButton = document.querySelector('.chatOn');
const closeContactButton = document.querySelector('.chatOff');

openContactButton.addEventListener('click', () => {
 openForm();
});

closeContactButton.addEventListener('click', () => {
  closeForm();
})

function openForm() {
  document.getElementById('chat-form').style.cssText = 'display: block;';
}

function closeForm() {
  document.getElementById('chat-form').style.cssText = 'display: none;';
}