const animationButton = document.querySelector('.js-3D-button');

animationButton.addEventListener('click', () => {
  animationPage()
});

const animationTarget = document.querySelector('.js-display-side');

function animationPage() {
  fetch(`3D-page.html`)
  .then(res => {
    if (res.ok) {
      return res.text();
    }
  })
  .then(htmlSnippet => {
    animationTarget.innerHTML =  htmlSnippet;
  });
}