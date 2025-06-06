const logoDesignButton = document.querySelector('.js-logo-button');

logoDesignButton.addEventListener('click', () => {
  const renderLogoHTML = document.querySelector('.js-display-side');


  renderLogoHTML.innerHTML = `
    <div class="logo-design-display-block">
      <h2 class="Logo-design-title">LOGO DESIGN</h2>
      <div class="logo-intro-block">
        <p>Hand drawn logo designs for unique detailing and stylistic patterning to represent culture and individuality. All logo designs are guaranteed to be obedient to copyright laws as all designs are drawn by hand according to descriptions required by the client.</p>
      </div>
      <div class="logo-grid">
        <div class="logo-card">
          <img src="Images/Logos/Aquarious-logo-01.png" alt="" class="logo-image">
          <div class="logo-discription">
            <h2>AQUARIUS SYMBOL</h2>
            <p>Hand drawn mandala style artwork with complex pattern repetitions and curls to eminate a water flow to capture the elemental connection to the zodiac sign.</p>
            <p class="commissioner">Commissioned for: Kaffir Illustrated - Instagram Artwork</p>
          </div>
        </div>
        <div class="logo-card">
          <img src="Images/Logos/Capricorn-logo-01.png" alt="" class="logo-image">
          <div class="logo-discription">
            <h2>CAPRICORN SYMBOL</h2>
            <p>Hand drawn tribal style capricorn symetrical pattern drawn on tablet using adobe illustrator for precise pattern repetition across mirrored grids.</p>
            <p class="commissioner">Commissioned for: Kaffir Illustrated - Instagram Artwork</p>
          </div>
        </div>
      </div>
      <div class="logo-grid">
        <div class="logo-card">
          <img src="Images/Logos/virgo-logo-01.png" alt="" class="logo-image">
          <div class="logo-discription">
            <h2>VIRGO SYMBOL</h2>
            <p>Hand drawn mandala style artwork with complex pattern repetitions and curls to eminate a flower to capture life and change showing the elemental connection to the zodiac sign.</p>
            <p class="commissioner">Commissioned for: Kaffir Illustrated - Instagram Artwork</p>
          </div>
        </div>
        <div class="logo-card">
          <img src="Images/Logos/Freekleesh-logo-01.png" alt="" class="logo-image">
          <div class="logo-discription">
            <h2>FREEKLEESH LOGO</h2>
            <p>Developed in illustrator, the client wanted a logo that eccentuates their phisosophy in unity in business between all genders in society. Using a polar axis design on a circular Logo brand. This logo creates a look of a candy wrapper to symbolize desire for their style and photography editing skils</p>
            <p class="commissioner">Commissioned for: Freekleesh Photography - Creative Logo</p>
          </div>
        </div>
      </div>
      <div class="logo-grid">
        <div class="logo-card">
          <img src="Images/Logos/KI-logo-01.png" alt="" class="logo-image">
          <div class="logo-discription">
            <h2>KAFFIR ILLUSTRATED LOGO</h2>
            <p>Created in Adobe Illustrator with the use of combining vector shapes to make a circular mandala style Logo that would be later digitized to be an embroidery badge.</p>
            <p class="commissioner">Commissioned for: Kaffir Illustrated - Embroidry Logo</p>
          </div>
        </div>
        <div class="logo-card">
          <img src="Images/Logos/Cupcake-logo-01.png" alt="" class="logo-image">
          <div class="logo-discription">
            <h2>KIKI'S CONFECTIONS LOGO</h2>
            <p>Hand drawn mozaic vase shaped cupcake wrapper design to highlight the psychadaelic culture and atrract a niche audience to the brand. The client wanted a sticker to put on all her cupcake packaging that would match her style and resonate with her audience.</p>
            <p class="commissioner">Commissioned for: Kiki's Confections - Packaging Sticker Concept</p>
          </div>
        </div>
      </div>
      <div class="logo-grid">
        <div class="logo-card">
          <img src="Images/Logos/footprint-logo-01.png" alt="" class="logo-image">
          <div class="logo-discription">
            <h2>FOOTPRINT LOGO</h2>
            <p>Created using Adobe Illustrator, the client wanted a simple but unique badge to represent one of their new campaigns and their marketing wanted to print this badge on buttons to be handed out in campaigns.</p>
            <p class="commissioner">Commissioned for: VS Printers - Badge Logo</p>
          </div>
        </div>
        <div class="logo-card">
          <img src="Images/Logos/Maria-bt-logo-01.png" alt="" class="logo-image">
          <div class="logo-discription">
            <h2>MARIA BT LOGO</h2>
            <p>Hand drawn corporate identity logo for a produce distribution company that mainly supplies grapes from Egypt. They wanted something to represent their colours but with minimalistic aesthetics to it. This was to be printed on their new business cards and stickers for their grapes that they would sell to supermarkets</p>
            <p class="commissioner">Commissioned for: Maria BT - Company Logo Rebrand</p>
          </div>
        </div>
      </div>
      <div class="logo-grid">
        <div class="logo-card">
          <img src="Images/Logos/1-stop-logo-01.png" alt="" class="logo-image">
          <div class="logo-discription">
            <h2>1-STOP MEDICAL SUPPLIES LOGO</h2>
            <p>Created using Adobe Illustrator, working under the guidence of a marketing company, the client required a rebranding of their Medical Equipment Supply Company. Their logo was meant to show their technical expertise in state of the art medical equipment to assure customers of their brand's efficiency.</p>
            <p class="commissioner">Commissioned for: 1-Stop Medical Supplies - Company rebrand</p>
          </div>
        </div>
        <div class="logo-card">
          <img src="Images/Logos/Medicorp-logo-01.png" alt="" class="logo-image">
          <div class="logo-discription">
            <h2>MEDICORP SOLUTIONS LOGO</h2>
            <p>Created using Adobe Illustrator, working under the guidence of a marketing company, the client wanted to rebrand their pharmesutical logistics corporation with a text based logo they would imprint in their profiles and business cards.</p>
            <p class="commissioner">Commissioned for: Medicorp Solutions - Company Logo Rebrand</p>
          </div>
        </div>
      </div>
    </div>
  `
});