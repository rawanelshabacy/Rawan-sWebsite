var savedUserInput = prompt("Hello1 Who are you? Please introduce yourself");

console. log(savedUserInput);

document.getElementById("username").innerText = savedUserInput;

// tooltrip


$(function () {
    $('[data-toggle="tooltip"]').tooltip()
  })