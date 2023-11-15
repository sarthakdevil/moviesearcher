var moviesarr = ['tekken', 'god of war', 'welcome', 'star wars','avengers','baby','hello'];

for (var i = 0; i < moviesarr.length; i++) {
  fetch(`http://www.omdbapi.com/?apikey=4046680b&t=${moviesarr[i]}`)
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      var movieDiv = document.getElementById("moviediv");

      var movieImage = document.createElement("img");
      movieImage.src = data["Poster"];
      movieImage.style.width = "25vw";
      movieImage.style.height = "45vh";
      movieImage.style.marginLeft = "1%";
      movieDiv.style.display="grid";
      movieDiv.style.gridTemplateColumns="auto auto auto";
      movieDiv.appendChild(movieImage);
    })
    .catch(error => {
      console.error('There was a problem with the fetch operation:', error);
    });
}
