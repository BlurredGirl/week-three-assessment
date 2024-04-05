const thumbContainer = document.getElementById("thumb-container");
const displayImage = document.getElementById("display");

// the clue for using arrow keys or left and right buttons
// let imageIndex = 0; // this currently does nothing, but is a start

// get some images
const images = [
  {
    url: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=1600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29mZmVlfGVufDB8fDB8fHww",
    alt: "Coffee Table",
  },
  {
    url: "https://images.unsplash.com/photo-1541167760496-1628856ab772?w=1600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Y29mZmVlfGVufDB8fDB8fHww",
    alt: "Coffee Pour",
  },
  {
    url: "https://images.unsplash.com/photo-1512568400610-62da28bc8a13?w=1600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGNvZmZlZXxlbnwwfHwwfHx8MA%3D%3D",
    alt: "Coffee Beans",
  },
  {
    url: "https://images.unsplash.com/photo-1541870730196-cd1efcbf5649?w=1600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fGNvZmZlZXxlbnwwfHwwfHx8MA%3D%3D",
    alt: "Espresso",
  },
  {
    url: "https://plus.unsplash.com/premium_photo-1675676357543-dd2845de6947?w=1600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjV8fGNvZmZlZXxlbnwwfHwwfHx8MA%3D%3D",
    alt: "Coffee Chair",
  },
  {
    url: "https://images.unsplash.com/photo-1501747315-124a0eaca060?w=1600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fGNvZmZlZXxlbnwwfHwwfHx8MA%3D%3D",
    alt: "Black Coffee",
  },
];

// put those images onto the page as thumbnails
function createThumbnails() {
  images.forEach(function (image) { 
    console.log (image.alt);
    
    // create an img DOM node
    const img = document.createElement("img");

    // add the src and alt to the img
    img.src = image.url;
    img.alt = image.alt;

    // put the img onto the page
    thumbContainer.appendChild(img);

    // make it so when we click the image something happens
    img.addEventListener("click", function () {
      createBigImage(image);
    });
  });
}

// display the large image
function createBigImage(image) {
  // clear out the display image div first (by setting it to be nothing)
  displayImage.innerHTML = "";

  // create our img
  const bigImg = document.createElement("img");

  // set the src and alt
  bigImg.src = image.url;
  bigImg.alt = image.alt;

  // add it to the page
  displayImage.appendChild(bigImg);
}

// actually do the things
createThumbnails();
createBigImage(images[0]);