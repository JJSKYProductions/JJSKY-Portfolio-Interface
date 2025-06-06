const cvButton = document.querySelector('.js-cv-button');

cvButton.addEventListener('click', () => {
  const renderCvHTML = document.querySelector('.js-display-side');


  renderCvHTML.innerHTML = `
        <div class="CV-display-block">
          <h2 class="CV-title-1">MY RESUME</h2>
          <h2 class="CV-title">CURRICULUM VITAE</h2>
          <img src="Images/CV-images/CV-01.jpg" alt="" class="cv-image">
          <h2 class="CV-title">NATIONAL SENIOR CERTIFICATE</h2>
          <img src="Images/CV-images/CV-02.jpg" alt="" class="cv-image">
          <h2 class="CV-title">NQF QUALIFICATIONS</h2>
          <img src="Images/CV-images/CV-03.jpg" alt="" class="cv-image">
          <img src="Images/CV-images/CV-04.jpg" alt="" class="cv-image">
        </div>
  `
});