const IllustrationButton = document.querySelector('.js-illustration-button');

IllustrationButton.addEventListener('click', () => {
  loadSnippet()
});

const targetEl = document.querySelector('.js-display-side');

function loadSnippet() {
  fetch(`image-gallery-2.html`)
  .then(res => {
    if (res.ok) {
      return res.text();
    }
  })
  .then(htmlSnippet => {
    targetEl.innerHTML =  htmlSnippet;
  });
}

document.addEventListener('DOMContentLoaded', () => {
  let gallerImages = document.querySelectorAll('.gallery-image');
  let getLatestOpenImg;
  let windowWidht = window.innerWidth;

  gallerImages.forEach(function(image, index) {
    image.onclick = function() {
      getLatestOpenImg = index + 1;

      let container = document.body;
      let newImgWindow = document.createElement('div');
      container.appendChild(newImgWindow);
      newImgWindow.setAttribute('class', 'img-window');
      newImgWindow.setAttribute('onclick', 'closeImg()');

      let newImg = image.firstElementChild.cloneNode();
      newImgWindow.appendChild(newImg);
      newImg.classList.add('popup-img');
      newImg.setAttribute('id', 'current-img');

      newImg.onload = function() {
        let newNxtBtn = document.createElement('a');
        newNxtBtn.innerHTML = `<p>&#10095</p>`;
        container.appendChild(newNxtBtn);
        newNxtBtn.setAttribute('class', 'img-btn-next');
        newNxtBtn.setAttribute('onclick', 'changeImg(1)');

        let newPrevBtn = document.createElement('a');
        newPrevBtn.innerHTML = `<p>&#10094</p>`;
        container.appendChild(newPrevBtn);
        newPrevBtn.setAttribute('class', 'img-btn-prev');
        newPrevBtn.setAttribute('onclick', 'changeImg(0)');
      }
    }
  })

  function closeImg() {
    document.querySelector('.img-window').remove();
    document.querySelector('.img-btn-next').remove();
    document.querySelector('.img-btn-prev').remove();
  }

  function changeImg(change) {
    document.querySelector('#current-img').remove();

    let getImgWindow = document.querySelector('.img-window');
    let newImg = document.createElement('img');
    getImgWindow.appendChild(newImg);

    let calcNewImg;
    if (change === 1) {
      calcNewImg = getLatestOpenImg + 1;
      if (calcNewImg > gallerImages.length) {
        calcNewImg = 1;
      }
    } else if (change === 0) {
      calcNewImg = getLatestOpenImg - 1;
      if (calcNewImg < 1) {
        calcNewImg = gallerImages.length;
      }
    } 
    newImg.setAttribute('src', 'Images/Illustrations/Illustration-' + calcNewImg + '.jpg');
    newImg.setAttribute('class', 'popup-img');
    newImg.setAttribute('id', 'current-img');

    getLatestOpenImg = calcNewImg;
  }
})

