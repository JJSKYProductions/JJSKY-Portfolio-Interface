const webDesignButton = document.querySelector('.js-website-button');

webDesignButton.addEventListener('click', () => {
  const renderWebsiteHTML = document.querySelector('.js-display-side');
  renderWebsiteHTML.innerHTML = `
    <div class="web-design-display">
      <h2 class="web-design-title">WEB DESIGN</h2>
    
      <div class="web-intro-block">
        <p>Web development experience using Wordpress, Godaddy, Squarespace and HTML, CSS & Javascript website development. I created different portfolio websites and have experience creating an ecommerce wbsite from scratch through frontend web development.</p>
      </div>
    
      <div class="web-design-grid">
        <div class="web-design-card">
          <h2 class="card-tilte">JASONTECH</h2>
    
          <section class="container">
            <div class="slider-wrapper">
              <div class="slider">
                <img id="slide-1" src="Images/Websites/Jasontech-1.png" alt="Jasontech Home Page">
                <img id="slide-2" src="Images/Websites/Jasontech-2.png" alt="Jasontech About Page">
                <img id="slide-3" src="Images/Websites/Jasontech-3.png" alt="Jasontech Graphics Page">
                <img id="slide-4" src="Images/Websites/Jasontech-4.png" alt="Jasontech Illustration Page">
                <img id="slide-5" src="Images/Websites/Jasontech-5.png" alt="Jasontech Multimedia Page">
              </div>
              <div class="slider-nav">
                <a href="#slide-1"></a>
                <a href="#slide-2"></a>
                <a href="#slide-3"></a>
                <a href="#slide-4"></a>
                <a href="#slide-5"></a>
              </div>
            </div>
          </section>
    
          <div class="web-discription">
            Portfolio website designed on Universe website builder. This website was made to showcase my work yousing a cost effective method before I purchase and install a permanent domain. The website contains 5 pages and has links to YouTube that showcase my video editing skills. The main menu links also link to my social media pages and my contact information for instant enqiries. This website is also compatable with all screen sizes as it was converted with the applications sorce code.
          </div>
    
        </div>
    
        <div class="web-design-card">
          <h2 class="card-tilte">DIPHALA DS</h2>

          <section class="container">
            <div class="slider-wrapper">
              <div class="slider">
                <img id="diphala-1" src="Images/Websites/DiphalaDS-1.png" alt="Diphala Home Page">
                <img id="diphala-2" src="Images/Websites/DiphalaDS-2.png" alt="Diphala Catalogue dowload">
                <img id="diphala-3" src="Images/Websites/DiphalaDS-3.png" alt="Diphala About Page">
                <img id="diphala-4" src="Images/Websites/DiphalaDS-4.png" alt="Diphala Home Page">
                <img id="diphala-5" src="Images/Websites/DiphalaDS-5.png" alt="Diphala Home Page">
                <img id="diphala-6" src="Images/Websites/DiphalaDS-6.png" alt="Diphala Home Page">
                <img id="diphala-7" src="Images/Websites/DiphalaDS-7.png" alt="Diphala Home Page">
              </div>
              <div class="slider-nav">
                <a href="#diphala-1"></a>
                <a href="#diphala-2"></a>
                <a href="#diphala-3"></a>
                <a href="#diphala-4"></a>
                <a href="#diphala-5"></a>
                <a href="#diphala-6"></a>
                <a href="#diphala-7"></a>
              </div>
            </div>
          </section>
    
          <div class="web-discription">
            Store  website made under the employment of Diphala development Services. I was instructed to build a website through the the GoDaddy app. Where I made an introductory website to the new stor that the owner had opened. The website had a direct dowload link to the stores workwear catalogue to help potential customers gather the neccessary informationthey needed if so they required specific tailored uniform. The about page displayed their history and experience within the industry and featured a carosel of all their clients they serviced. The website was to direct the customer to their stor with a google maps link and featured links to specific sections of their cataogue for customers who did not require the full catalogue pdf.
          </div>
    
        </div>
    
      </div>
    
    </div>
  `
});


  
















