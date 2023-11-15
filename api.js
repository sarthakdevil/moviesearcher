var movie = document.getElementById("name");
var name;
movie.addEventListener("input", function() {
    name = movie.value;
});


function getData() {
  console.clear();
  var moviediv = document.getElementById('moviediv');
  moviediv.innerHTML = '';
  if (name) {
      // Fetch movie data from OMDB API
      fetch(`http://www.omdbapi.com/?apikey=4046680b&s=${name}`)
          .then(response => {
              if (!response.ok) {
                  throw new Error('Network response was not ok');
              }
              return response.json();
          })
          .then(data => {
              // Iterate through movie search results and update the HTML
              for (var i = 0; i <=10; i++) {
                  // Create a container for each movie
                  var container = document.createElement('div');
                  container.className = "movie-container";

                  // Create an image element for the movie poster
                  var image = document.createElement('img');
                  image.src = data.Search[i].Poster;
                  image.alt = "poster";
                  image.style.width = "85%";
                  image.style.height = "auto";
                  image.className = "image";
                  container.appendChild(image);

                  // Create a title element for the movie title and year
                  var title = document.createElement('h3');
                  title.textContent = data.Search[i].Title + " (" + data.Search[i].Year + ")";
                  title.className = "title";
                  title.style.color = 'white';
                  container.appendChild(title);

                  // Create a paragraph element for the movie plot
                  var plot = document.createElement('p');
                  plot.textContent = data.Search[i].Plot;
                  plot.className = "plot";
                  container.appendChild(plot);

                  // Append the movie container to the main div
                  moviediv.appendChild(container);
              }
          })
          .catch(error => {
              console.error('There was a problem with the fetch operation:', error);
          });
  }
}
