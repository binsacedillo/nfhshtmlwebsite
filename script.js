// Define a function to handle the window resize event
function handleWindowResize() {
  const windowWidth = window.innerWidth;

  if (windowWidth < 800) {
    document.querySelector('.imagebanner').style.width = '648px';
    return;
  }

  if (windowWidth >= 800 && windowWidth < 1518) {
    const cplusplusImg = document.querySelector('.cplusplus img');
    cplusplusImg.style.width = '200px';
    cplusplusImg.style.height = '200px';
    cplusplusImg.style.marginLeft = '675px';

    const pythonImg = document.querySelector('.python img');
    pythonImg.style.width = '230px';
    pythonImg.style.height = '200px';
    pythonImg.style.marginLeft = '660px';

    const javaImg = document.querySelector('.java img');
    javaImg.style.width = '370px';
    javaImg.style.height = '250px';
    javaImg.style.marginLeft = '580px';
  } else {
    const cplusplusImg = document.querySelector('.cplusplus img');
    cplusplusImg.style.width = '300px';
    cplusplusImg.style.height = '300px';
    cplusplusImg.style.marginLeft = '700px';

    const pythonImg = document.querySelector('.python img');
    pythonImg.style.width = '300px';
    pythonImg.style.height = '300px';
    pythonImg.style.marginLeft = '700px';

    const javaImg = document.querySelector('.java img');
    javaImg.style.width = '300px';
    javaImg.style.height = '300px';
    javaImg.style.marginLeft = '700px';

    const imageBanner = document.querySelector('.imagebanner');
    imageBanner.style.position = 'relative';
    imageBanner.style.left = '0px';
    imageBanner.style.marginRight = '0px';
    imageBanner.style.bottom = '12px';
    imageBanner.style.marginTop = '0';
    imageBanner.style.height = '180px';
    imageBanner.style.width = '1679px';
    imageBanner.style.marginBottom = '20px';

    document.querySelector('nav').style.width = 'auto';

    const visionMission = document.querySelector('#visionmission');
    visionMission.style.position = 'absolute';
    visionMission.style.left = '1420px';
    visionMission.style.top = '2180px';
  }
}

// Add the handleWindowResize function as a listener for the window resize event
window.addEventListener('resize', handleWindowResize);

// Define a function to show a loading screen and start a loading animation
function showLoadingScreen() {
  const loadingScreen = document.getElementById('loadingScreen');
  loadingScreen.style.display = 'flex';

  const circle = document.getElementById('loadingCircle');
  circle.style.left = '47%';
  circle.style.top = '35%';

  let rotation = 0;
  setInterval(() => {
    rotation += 10;
    circle.style.transform = `rotate(${rotation}deg)`;
  }, 50);

  setTimeout(() => {
    loadingScreen.style.display = 'none';
  }, 3000);
}

// Add the showLoadingScreen function as a listener for the window load event
window.addEventListener('load', showLoadingScreen);


// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 3000 || document.documentElement.scrollTop > 3000) {
    document.getElementById("myBtn").style.display = "block";
  } else {
    document.getElementById("myBtn").style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document smoothly
function topFunction() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}


const welcome = document.querySelector('.animate');
const button = document.querySelector('.button');

welcome.addEventListener('animationend', () => {
  button.classList.remove('hidden');
});


///////////////////////////////////////////////////
function showStrand() {
  var selectedStrand = prompt("HUMMS\nABM\nSTEM\nTVL\nGAS");
  var strandInfo = document.getElementById("strand-info");
  var showInfoButton = document.getElementById("show-info-button");
  var goBackButton = document.createElement("button");
  goBackButton.innerText = "Go Back";
  goBackButton.onclick = function() {
    strandInfo.innerHTML = "";
    strandInfo.style.display = "none";
    showInfoButton.style.display = "inline-block";
    goBackButton.style.display = "none";
  };

  switch (selectedStrand) {
    case "HUMMS":
    case "1":
      strandInfo.innerHTML = "<h2>HUMMS (Humanities and Social Sciences)</h2><p>HUMMS is a strand focused on the study of human behavior, societal interactions, and culture. It prepares students for courses in psychology, sociology, political science, anthropology, literature, history, and the arts. This strand is suitable for students who have a strong interest in understanding and analyzing human experiences and the world around them.</p>";
      break;
    case "ABM":
    case "2":
      strandInfo.innerHTML = "<h2>ABM (Accountancy, Business, and Management)</h2><p>ABM focuses on the fundamental concepts of accounting, business, and management. This strand is tailored for students who aspire to pursue careers in business, entrepreneurship, finance, and economics. It provides them with a solid foundation in principles of management, marketing, and finance, as well as a basic understanding of economic systems.</p>";
      break;
    case "STEM":
    case "3":
      strandInfo.innerHTML = "<h2>STEM (Science, Technology, Engineering, and Mathematics)</h2><p>STEM is an academic strand that targets students with a keen interest in pursuing careers related to science, technology, engineering, and mathematics. The curriculum emphasizes scientific inquiry, problem-solving, critical thinking, and innovative solutions. It prepares students for college courses such as biology, chemistry, physics, engineering, computer science, and other related fields.</p>";
      break;
    case "TVL":
    case "4":
      strandInfo.innerHTML = "<h2>TVL (Technical-Vocational Livelihood)</h2><p>TVL focuses on vocational and technical skills, equipping students with practical knowledge and specialized training for specific industries. It offers courses for students who want to immediately enter the workforce upon graduation or pursue further technical education. TVL is divided into various tracks, including Agriculture and Fishery, Home Economics, Information and Communications Technology, and Industrial Arts, providing an array of options to cater to a wide range of interests and skill sets.</p>";
      break;
    case "GAS":
    case "5":
      strandInfo.innerHTML = "<h2>GAS (General Academic Strand)</h2><p>GAS is designed for students who have not yet decided on a specific academic pathway or who want a versatile, well-rounded foundation for various college degrees. This strand offers a broad range of subjects that touch upon various disciplines—including language, literature, natural sciences, social sciences, and mathematics—giving students the opportunity to explore different fields and develop a variety of skills. GAS is ideal for those who wish to keep their options open when transitioning to college or the workforce.</p>";
      break;
    default:
      strandInfo.innerHTML = "<h2>Invalid Strand</h2><p>Please choose a valid strand.</p>";
  }
  
  strandInfo.style.display = "block";
  showInfoButton.style.display = "none";
  goBackButton.style.display = "inline-block";
  goBackButton.style.marginLeft = "47%";
  goBackButton.style.padding = "10px";
  goBackButton.style.border = "3px solid yellow";
  goBackButton.style.borderRadius = "10px";
  goBackButton.style.backgroundColor = "transparent";
  goBackButton.style.color = "white";
  goBackButton.style.fontSize = "2rem";
  goBackButton.style.transition = "transform 0.3s ease-in-out";
  strandInfo.appendChild(goBackButton);

  goBackButton.addEventListener("mouseover", function() {
  goBackButton.style.cursor = "pointer";
  goBackButton.style.transform = "scale(1.2)";
});

goBackButton.addEventListener("mouseout", function() {
  goBackButton.style.backgroundColor = "transparent";
  goBackButton.style.cursor = "default";
  goBackButton.style.transform = "scale(1)";
});
}