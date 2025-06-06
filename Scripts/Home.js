function renderHomeAtLaunch() {

const homeButton = document.querySelector('.js-home-button');

homeButton.addEventListener('click', () => {
  const renderHomeHTML = document.querySelector('.js-display-side');

  renderHomeHTML.innerHTML = `
    
      <div class="home-display-block">
        <h1 class="home-title">JJSKY</h1>
        <div class="discription-box">
          <div class="home-discription">
            <p>Graphic design portfolio for Terry Kheswa, containing artworks from previous projects which range from 2D drawing and Logo design, Illustrations, Business Cards, Flyers, T-shirt Printing, Web design, Video edits, 3D-modelling objects and Drone photography work.</p>

            <p>This portfolio is also created with HTML,CSS & JavaScript and uploaded to the internet via GitHub as an example of my graphic design skills.</p>
          </div>
        </div>
      </div>
  `
});


}
renderHomeAtLaunch();