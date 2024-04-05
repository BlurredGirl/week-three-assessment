document.addEventListener('DOMContentLoaded', function() {
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');
  const thumbContainer = document.getElementById("thumb-container");
  const displayImage = document.getElementById("display");

  const images = [
    {
      url: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=1600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29mZmVlfGVufDB8fDB8fHww",
      alt: "Coffee Table",
      width: 100, // note for marking - please see comments about this in the ReadMe
      height: 100,
    },
    {
      url: "https://images.unsplash.com/photo-1507133750040-4a8f57021571?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "Coffee Jungle",
      width: 100,
      height: 100,
    },
    {
      url: "https://images.unsplash.com/photo-1541870730196-cd1efcbf5649?w=1600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fGNvZmZlZXxlbnwwfHwwfHx8MA%3D%3D",
      alt: "Espresso",
      width: 100,
      height: 100,
    },
    {
      url: "https://plus.unsplash.com/premium_photo-1675676357543-dd2845de6947?w=1600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjV8fGNvZmZlZXxlbnwwfHwwfHx8MA%3D%3D",
      alt: "Coffee Chair",
      width: 100,
      height: 100,
    },
    {
      url: "https://images.unsplash.com/photo-1501747315-124a0eaca060?w=1600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fGNvZmZlZXxlbnwwfHwwfHx8MA%3D%3D",
      alt: "Black Coffee",
      width: 100,
      height: 100,
    },
    {
      url: "https://images.unsplash.com/photo-1485808191679-5f86510681a2?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "Espresso Table",
      width: 100,
      height: 100,
    },
  ];

  let currentIndex = 0;

  function showImage() {
    const currentImage = images[currentIndex];
    displayImage.innerHTML = `<img src="${currentImage.url}" alt="${currentImage.alt}">`;
  }

  function showPrevImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showImage();
  }

  // Function to show the next image
  function showNextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    showImage();
  }

  // Creating the thumbnails
  function createThumbnails() {
    images.forEach(function(image) {
      const img = document.createElement("img");
      img.src = image.url;
      img.alt = image.alt;
      thumbContainer.appendChild(img);
      img.addEventListener("click", function() {
        currentIndex = images.findIndex(imgObj => imgObj.alt === image.alt);
        showImage();
        console.log (image.alt);
      });
    });
  }

  // Event listeners
  prevBtn.addEventListener('click', showPrevImage);
  nextBtn.addEventListener('click', showNextImage);

  // Keyboard navigation section
  document.addEventListener('keydown', function(event) {
    if (event.key === 'ArrowLeft') {
      showPrevImage();
    } else if (event.key === 'ArrowRight') {
      showNextImage();
    }
  });

  // Show the first image initially
  showImage();

  // Create thumbnails initially
  createThumbnails();
});


// notes left in for future reference for me!