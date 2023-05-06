fetch("texto.txt")
    .then(response => response.text())
    .then(data => console.log(data))