const businessCardButton = document.querySelector('.js-business-button');

businessCardButton.addEventListener('click', () => {
  const renderBusinessHTML = document.querySelector('.js-display-side');


  renderBusinessHTML.innerHTML = `
    <div class="business-card-display-block">
      <h2 class="business-card-title">BUSINESS CARDS</h2>

      <div class="business-intro-block">
        <p>Business cards designed for multiple clients through previous employement under professional marketing compaines. Using brand colours and minimalistic design patterns to allow space for information but also captivating the reader with dynamic design styles.</p>
      </div>
      <div class="b1-sider-grid">
        <div class="b1-sider-card">
          <img src="Business-cards/Jasontech-1side-01.jpg" alt="" class="demo-card">
          <div class="b1-sider-discription">
            <h2>JASONTECH 1 SIDE</h2>
            <p>
              Digital QR code based business card with technological pattern design and a working qr that can link directly to the website when scamnned with a smartphone camera. This was my on design concept which i made to reduce the need for reprinteng when a potential client would just need to pull out their phone and take a picture of my card and their QR scanner plugin would do the rest.
            </p>
            <p class="commissioner">Commissioned for: Jasontech Productions - Interactive Business Card</p>
          </div>
        </div>
        <div class="b1-sider-card">
          <img src="Business-cards/Mabaso-1side-01.jpg" alt="" class="demo-card">
          <div class="b1-sider-discription">
            <h2>MABASO DENTAL PRACTICE 1 SIDE</h2>
            <p>
              1 Sided dental business cards with blue and white company colours to promote dental cleanliness, with porcelain style line patterns to emphisize aesthetic craftsmanship in the reconstruction of teeth and vineers.
            </p>
            <p class="commissioner">Commissioned for: Mabaso Dental Practice - Company Business Card</p>
          </div>
        </div>
      </div>
      <div class="b2-slider-grid">
        <div class="b2-sider-card">
          <img src="Business-cards/1-stop-front-01.jpg" alt="" class="demo-card-2">
          <img src="Business-cards/1-stop-back-01.jpg" alt="" class="demo-card-2">
          <div class="b2-discription">
            <h2 class="b2-header">1-STOP-MEDICAL</h2>
            <p>Double sided business cards developed under the employment of MBA Marketing. The client required a business card to accomidate the new logo we designed for them. their medical colours were red and white and the swoosh borders were to mimic the design of the logo.</p>
            <p class="commissioner">Commissioned for: 1 Stop Medical - Company Business Card</p>
          </div>

        </div>
        <div class="b2-sider-card">
          <img src="Business-cards/rumbee-front-01.jpg" alt="" class="demo-card-2">
          <img src="Business-cards/rumbee-back-01.jpg" alt="" class="demo-card-2">
          <div class="b2-discription">
            <h2 class="b2-header">RUMBEE (OSHA)</h2>
            <p>Double sided business cards developed under the employment of MBA Marketing. The client required a business card for a department in their company that focused on Occupational Safety and Health in the private property construction department. They wanted a honeycomb pattern design with a Bee logo to represent productivity through safe work environments</p>
            <p class="commissioner">Commissioned for: Melissa Visser - Campaign business card</p>
          </div>

        </div>
        <div class="b2-sider-card">
          <img src="Business-cards/SARA-front-01.jpg" alt="" class="demo-card-2">
          <img src="Business-cards/SARA-back-01.jpg" alt="" class="demo-card-2">
          <div class="b2-discription">
            <h2 class="b2-header">SA ROPE ACCESS</h2>
            <p>Double sided business cards developed under the employment of MBA Marketing. The client required a business card for their new logo and rebrand of their business. They wanted a sleek design with a touch of gold to represent South Africa's golden commercial colour.</p>
            <p class="commissioner">Commissioned for: SA Rope Access - Company business card</p>
          </div>

        </div>
        <div class="b2-sider-card">
          <img src="Business-cards/Obuntu-front-01.jpg" alt="" class="demo-card-2">
          <img src="Business-cards/Obuntu-back-01.jpg" alt="" class="demo-card-2">
          <div class="b2-discription">
            <h2 class="b2-header">OBUNTU GROUP</h2>
            <p>Double sided business cards developed under the employment of MBA Marketing. The client required a business card for their side business that dealt with financial consulting for medical related debts.</p>
            <p class="commissioner">Commissioned for: Obuntu Group - Company business card</p>
          </div>

        </div>
      </div>

    </div>
  `
});
