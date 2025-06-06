const dronePageButton = document.querySelector('.js-drone-button');

dronePageButton.addEventListener('click', () => {
  loadDronePage()
});

const droneTarget = document.querySelector('.js-display-side');

function loadDronePage() {
  fetch(`drone-page.html`)
  .then(res => {
    if (res.ok) {
      return res.text();
    }
  })
  .then(htmlSnippet => {
    droneTarget.innerHTML =  htmlSnippet;
  });
}