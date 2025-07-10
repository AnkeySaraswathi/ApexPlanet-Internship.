document.getElementById("loadJoke").addEventListener("click", () => {
  fetch("https://official-joke-api.appspot.com/random_joke")
    .then(response => response.json())
    .then(data => {
      document.getElementById("joke").textContent = `${data.setup} - ${data.punchline}`;
    })
    .catch(error => {
      document.getElementById("joke").textContent = "Failed to load joke.";
      console.error(error);
    });
});