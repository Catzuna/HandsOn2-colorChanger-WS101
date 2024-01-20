document.getElementById('colorButton').addEventListener('click', function() {
  const colorDiv = document.getElementById('colorDiv');
  const button = document.getElementById('colorButton');
  
  colorDiv.classList.toggle('blue');
  
  button.classList.add('light-effect');
  
  setTimeout(() => {
    button.classList.remove('light-effect');
  }, 300);
});
