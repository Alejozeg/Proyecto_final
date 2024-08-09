document.getElementById('colorButton').addEventListener('click', function() {
    const currentColor = document.body.style.backgroundColor;
    const comidas = document.querySelectorAll('.comidas');

    if (currentColor === 'black') {
      document.body.style.backgroundColor = '#f3e5d8';
      comidas.forEach(eat => {
        eat.style.backgroundColor = 'white';
        eat.style.color = 'black';
      })


    } else {
      document.body.style.backgroundColor = 'black';
      comidas.forEach(eat => {
        eat.style.backgroundColor = 'grey';
        eat.style.color = 'white';
      })


    }
  });
