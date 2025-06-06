const videoEditingButton = document.querySelector('.js-video-button');

videoEditingButton.addEventListener('click', () => {
  loadSnippet2()
});

const targetSpot = document.querySelector('.js-display-side');

function loadSnippet2() {
  fetch(`video-page.html`)
  .then(res => {
    if (res.ok) {
      return res.text();
    }
  })
  .then(htmlSnippet => {
    targetSpot.innerHTML =  htmlSnippet;
  });
}