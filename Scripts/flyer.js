const flyerDesignButton = document.querySelector('.js-flyer-button');

flyerDesignButton.addEventListener('click', () => {
  const renderFlyerHTML = document.querySelector('.js-display-side');


  renderFlyerHTML.innerHTML = `
    <div class="flyer-design-display-block">
      <h2 class="flyer-design-title">FLYER DESIGN</h2>

      <div class="flyer-intro-block">
        <p>Flyers designed for clients when I was employed for diferent companies over the years. Thoughout the years I refined my design style and developed key characteristics in my design templates so that others would see my unique style to create professional campaigns. these are mixtures of flyers, profiles and catalogues that were made and reviewed by actual clients. The information displayed on the flyers may be changed today if the client has made any changes with a different marketing campaign.</p>
      </div>
      <div class="f1-slider-grid">
        <div class="f1-slider-card">
          <img src="Images/Flyers/brirthday-flyer-01.jpg" alt="" class="flyer-image">
          <div class="f1-discription">
            <h2 class="f1-header">Birthday Flyer</h2>
            <p>Single sided flyer designed during employment under Postnet Lifestyle@55 as their graphic dseign lead. Client required a simplistic WhatsApp status image to post regularly to remind her son's friends parents of his birthday that was due the week after its commission. The client wanted a sports themed slider representing her son's favourite rugby team. Also planning the event at a sports club for the kids to play a friendly match </p>
            <p class="commissioner">Commissioned for: Store client - Digital event poster.</p>
          </div>
        </div>
        <div class="f1-slider-card">
          <img src="Images/Flyers/Mothers day post-01.jpg" alt="" class="flyer-image">
          <div class="f1-discription">
            <h2 class="f1-header">Mother's day Flyer</h2>
            <p>Single sided flyer designed for freelance client. A jewelery store wanted to promote a product of theirs for the mother's day spacial that was to commmence the weekend after commission. The client provided me with a picture of their product which was to be displayed in the artwork whilst incorporating their company colours and the overall theme for mothers day commercialism.</p>
            <p class="commissioner">Commissioned for: Store client - Digital event poster.</p>
          </div>
        </div>
      </div>
      <div class="f1-slider-grid">
        <div class="f3-slider-card">
          <img src="Images/Flyers/Moday 19 Aug Pricelist-01.jpg" alt="" class="flyer-image3">
          <div class="f3-discription">
            <h2 class="f1-header">Maria BT weekly produce catalogue</h2>
            <p>1 Sided cataloge for a client that rquired a produce information catalogue based on fresh produce sold at the Tshwane Farmers market and was to be updated weekly after gathering up to date prices of the produce sold by the local farmers. Prices would be gathered on a monday and updated on the catalogue then the marketers would approac clients and offer their services to create a supply chain to whole sale produce enterprises to create a direct relationship between the clients and the farmers.</p>
            <p class="commissioner">Commissioned for: Maria BT - Weekly Produce catalogue</p>
          </div>
        </div>
        <div class="f3-slider-card">
          <img src="Images/Flyers/car wrap-01.jpg" alt="" class="flyer-image3">
          <div class="f3-discription">
            <h2 class="f1-header">Penta Motorgroup Car Wrap</h2>
            <p>Vehicle branding design conscept comissioned by a freelance client that required a wrap design for their vehicle rental agency. The client wanted a design concept to be mock wraped on an illustration of a car that they regularly used for office staff. the design i presented was a collage based squid tentacle pattern design to create a uniform pattern canvas that would help display their logo design which was an ink blotch pattern.</p>
            <p class="commissioner">Commissioned for: Penta Motorgroup - Digital car wrap concept.</p>
          </div>
        </div>
      </div>
      <div class="f2-slider-grid">
        <div class="f2-slider-card">
          <img src="Images/Flyers/1-stop-catalogue-01.jpg" alt="" class="flyer-image2">
          <img src="Images/Flyers/1-stop-catalogue-p2-01.jpg" alt="" class="flyer-image2">
          <div class="f1-discription">
            <h2 class="f1-header">1 Stop Catalogue</h2>
            <p>Developed under the employment of MBA Marketing. Our 1-stop Medical Supplies client comiisioned us to redevelop their whole marketing campaign including a new 36 page catalogue they required for all their medical supplies that they offered from disposible medical sticks to large irriplacable hospital furnature. the whole cataloge took a step by step process to ensure medical equipment was described correctly to make sure clients wouldnt invest in incorrect equipment. this required a constant back and forth dialogue for every single product displayed in the catalogue and their correct instrumental details and capabilities.</p>
            <p class="commissioner">Commissioned for: 1 Stop Medical - Company product Catalogue</p>
          </div>
        </div>
        <div class="f2-slider-card">
          <img src="Images/Flyers/1-stop-profile-01.jpg" alt="" class="flyer-image2">
          <img src="Images/Flyers/1-stop-profile-p2-01.jpg" alt="" class="flyer-image2">
          <div class="f1-discription">
            <h2 class="f1-header">1 Stop Profile</h2>
            <p>Developed under the employment of MBA Marketing. Our 1-stop Medical Supplies client comiisioned us to redevelop their whole marketing campaign including a cardboad folder profile that was to act as a book cover for proposal documents and invoices that would be given to the client after every consultation. Client wanted their company colours to be incorporated and the overal design to match their business card and catalogue design.</p>
            <p class="commissioner">Commissioned for: 1 Stop Medical - Company profile document folder</p>
          </div>
        </div>
        <div class="f2-slider-card">
          <img src="Images/Flyers/KJK-Profile-flyer-01.jpg" alt="" class="flyer-image2">
          <img src="Images/Flyers/KJK-Profile-flyer-p2-01.jpg" alt="" class="flyer-image2">
          <div class="f1-discription">
            <h2 class="f1-header">KJK Upholstery Profile</h2>
            <p>Developed under the employment of MBA Marketing. A client required a discriptive professional profile to inform clients of their casino furnature apholstry services. The design the approved was a leather cross stitched texture background with a replica of stitch patterns to represent the nature of their service. The blue red and black was chosen by the clients to represent their company colours.</p>
            <p class="commissioner">Commissioned for: KJK Upholstry - Company profile</p>
          </div>
        </div>
        <div class="f2-slider-card">
          <img src="Images/Flyers/catalogue-flyer-01.jpg" alt="" class="flyer-image2">
          <img src="Images/Flyers/catalogue-flyer-p2-01.jpg" alt="" class="flyer-image2">
          <div class="f1-discription">
            <h2 class="f1-header">Diphala Development Service Catalogue</h2>
            <p>Developed under the employment of Diphala Development Services. The employer required a catalogue containing all ther apparel they sold in their store. This requred product photography and gathering information from their warehouse of product sizes and materials used to create the apparel. This cataloge was to be print ready and was incorporated in their website so that their client would be able to have a digital copy of the store's range and would be able to come into the stor with a product alreeady in mind.</p>
            <p class="commissioner">Commissioned for: KJK Upholstry - Company profile</p>
          </div>
        </div>
      </div>
      

    </div>
  `
});