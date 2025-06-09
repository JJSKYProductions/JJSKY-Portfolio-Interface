const tshirtPrintingButton = document.querySelector('.js-t-shirt-button');

tshirtPrintingButton.addEventListener('click', () => {
  const renderTshirtHTML = document.querySelector('.js-display-side');


  renderTshirtHTML.innerHTML = `
    <div class="T-shirt-printing-display">
      <h2 class="T-shirt-printing-title">T-SHIRT PRINTING</h2>

      <div class="Tshirt-intro-block">
        <p>Througout my graphic design career, I managed to pick up a few skills during my employment for diferent media companies including clothing branding uisng a variaty of methods like heat press branding, vinyl cutting and application and Embroidery design. During my employment, I went under training programs and gained experience servicing clients and reaching intense deadlines.</p>
      </div>

      <div class="t-shirt-printing-grid">
        <div class="t-shirt-card">
          <img src="Styles/Icons/heat-press-icon-01.png" alt="" class="t-shirt-image">
          <h2>HEAT PRESS</h2>
          <p>Experience in heat press clothing branding using 1 step media printing methods and also video flex vinyls that require heat stress to adhear to the fabric.</p>
        </div>
        <div class="t-shirt-card">
          <img src="Styles/Icons/vinyl-cutting-icon-01.png" alt="" class="t-shirt-image">
          <h2>VINYL CUTTING</h2>
          <p>Experience in using vinyl cutting programs such as silhouette studio and with designing layouts to be applied to large scale print and cut machines. With un understanding of the patience and attention to detail required.</p>
        </div>
        <div class="t-shirt-card">
          <img src="Styles/Icons/screen-printing-icon-01.png" alt="" class="t-shirt-image">
          <h2>SCREEN PRINTING</h2>
          <p>Attended a short course for screen printing learning the step by step process of screen preparation, Imulsion cleaning and paint application.</p>
        </div>
        <div class="t-shirt-card">
          <img src="Styles/Icons/embroidery-icon-01.png" alt="" class="t-shirt-image">
          <h2>EMBROIDERY</h2>
          <p>Taining with embroidery cad software during my employment under Diphala Development Services which specialised in custom uniform embroidery. With a knowledge of digitizing software.</p>
        </div>
      </div>
    </div>
  `
});
