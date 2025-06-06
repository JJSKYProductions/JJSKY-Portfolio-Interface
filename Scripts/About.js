const aboutButton = document.querySelector('.js-about-button');

aboutButton.addEventListener('click', () => {
  const renderAboutHTML = document.querySelector('.js-display-side');


  renderAboutHTML.innerHTML = `
    <div class="about-display-block">
      <h2 class="about-title">ABOUT</h2>
      <div class="introduction-row">
        <div class="profile-column">
          <img class="about-profile-image" src="Animations/Face-animation.gif" alt="">
        </div>
        <div class="intro-column">
          <h2 class="introduction-title">TERRY KHESWA</h2>
          <p class="intoduction-text">
            I, Terry Kheswa am a graphic designer with years of experience in multimedia design platforms to tackle all marketing challenges that clients have come to me with. Residing in Pretoria East, Gauteng, I have gained experience in Graphic design Programs, Web development languages and programs, Video Editing techniques and 3D Modelling and CAD software.
          </p>
        </div>
        
      </div>
      <div class="about-grid">
        <div class="about-card">
          <img src="Images/Icons/graphic-design-01.png" alt="" class="about-icon">
          <h2>GRAPHIC DESIGN</h2>
          <p>
            I've been practicing programs such as Adobe Photoshop, Illustrator, inDesign. Coral Programs such as Coral Draw and Coral Paint, and other basic art-board workspace programs. With experience in DTP design for large format printing machines, textbook design with page allocation. Social media marketing and email campaigns sent frequently to subscribed clients. Drawing techniques for logo design and business corporate identity.
          </p>
        </div>
        <div class="about-card">
          <img src="Images/Icons/Animation-01.png" alt="" class="about-icon">
          <h2>ANIMATION</h2>
          <p>
            Experience in animation software such as Blender, Adobe photoshop key frames, Adobe Animate and Adobe Flash Professional. Character design and illustration for textbook mascots and learning edutainment. Key-framing and storyboard design, and with the help of Adobe premiere pro and after effects I can sequence and special effects to tailor your video.
          </p>
        </div>
        <div class="about-card">
          <img src="Images/Icons/3d-modeling-01.png" alt="" class="about-icon">
          <h1>3D MODELLING</h1>
          <p>
            Experience in 3D animation and modelling software such as Unreal Engine 5 and Blender for 3D. CAD Software like Wilcom embroidery studio and 3DStudio Max. Special effects to short product videos and modelling of 3D Structures.
          </p>
        </div>
      </div>
      <div class="about-grid">
        <div class="about-card">
          <img src="Images/Icons/Video-01.png" alt="" class="about-icon">
          <h2>VIDEOGRAPHY</h2>
          <p>
            Video editing experience and recording of events, speeches and other motion capture mediums. Editing software such as Adobe Premier Pro, After Effects, Filmora, Flash Professional and other storyboard workspace programs. Video cutting and audio syncing experience for clean design and quality playback. Drone photography and video editing for property and establishment marketing.
          </p>
        </div>
        <div class="about-card">
          <img src="Images/Icons/Website-01.png" alt="" class="about-icon">
          <h2>WEB DEVELOPMENT</h2>
          <p>
            Web design software experience using programs like Wordpress, Woocommerce, Godaddy, and GitHub. With an understanding of front end web development languages such as HTML, CSS and JavaScript. And with a clear knowledge of UX and UI design and layout management.
          </p>
        </div>
        <div class="about-card">
          <img src="Images/Icons/drone-01.png" alt="" class="about-icon">
          <h1>DRONE PHOTOGRAPHY</h1>
          <p>
            Multiple projects using aerial footage of construction sites, events and buildings to convert footage into video presentations, picture diagrams and over head surveys. Video presentations would be edited with animated banner and discriptive captions to guide audiences through the video presentations.
          </p>
        </div>
      </div>
    </div>
  `
});