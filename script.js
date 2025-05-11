function addRecommendation() {
  // Get the message of the new recommendation
  let recommendation = document.getElementById("new_recommendation");
  // If the user has left a recommendation, display a pop-up
  if (recommendation.value != null && recommendation.value.trim() != "") {
    console.log("New recommendation added");
    //Call showPopup here

    // Create a new 'recommendation' element and set it's value to the user's message
    var element = document.createElement("div");
    element.setAttribute("class","recommendation");
    element.innerHTML = "\<span\>&#8220;\</span\>" + recommendation.value + "\<span\>&#8221;\</span\>";
    // Add this element to the end of the list of recommendations
    document.getElementById("all_recommendations").appendChild(element); 
    
    // Reset the value of the textarea
    recommendation.value = "";
    showPopup(true);
  }
}

function showPopup(bool) {
  if (bool) {
    document.getElementById('popup').style.visibility = 'visible'
  } else {
    document.getElementById('popup').style.visibility = 'hidden'
  }
}
window.onload = function () {
  // Certificates section
  const images = [
    'html_finalprojimages/Certificates/Google Data Analytics Professional Certificate.png',
    'html_finalprojimages/Certificates/IBM Developing Front-End Apps with React.png',
    'html_finalprojimages/Certificates/IBM Developing BackEnd Apps with Node.js&Express.png',
    'html_finalprojimages/Certificates/IBM Django App Dev with SQL&Databases.png',
    'html_finalprojimages/Certificates/IBM Developing AI Applications with Python and Flask.png',
    'html_finalprojimages/Certificates/IBM Introduction to Containers with Docker, Kubernetes.png',
    'html_finalprojimages/Certificates/IBM Application Development using Microservices and Serverless.png',
    'html_finalprojimages/Certificates/IBM Getting Started with Git and GitHub.png',
    'html_finalprojimages/Certificates/IBM Introduction to HTML, CSS, & JavaScript.png',
    'html_finalprojimages/Certificates/IBM Introduction to Cloud Computing.png',
    'html_finalprojimages/Certificates/IBM Introduction to Software Engineering.png',
    'html_finalprojimages/Certificates/IBM Generative AI- Elevate your Software Development Career.png',
    'html_finalprojimages/Certificates/IBM Python for Data Science, AI & Development.png',
    'html_finalprojimages/Certificates/IBM Software Developer Career Guide and Interview Prep.png',
    'html_finalprojimages/Certificates/AWS_Academy_Graduate___AWS_Academy_Cloud_foundation.png',
  ];

  let currentIndex = 0;

  const imageDisplay = document.getElementById('image-display');
  const prevButton = document.querySelector('.nav-button.prev');
  const nextButton = document.querySelector('.nav-button.next');

  function updateImage() {
    imageDisplay.style.backgroundImage = `url('${images[currentIndex]}')`;
      document.getElementById('image-counter').textContent = `Certificate ${currentIndex + 1} of ${images.length}`;

  }

  prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateImage();
  });

  nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % images.length;
    updateImage();
  });

  updateImage(); // Show the first image on load
};



