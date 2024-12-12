let box = document.getElementById('box');
    let green = document.getElementById('green');
    let width = document.getElementById('width');
    let height = document.getElementById('height');

    
    green.addEventListener('click', () => {
      box.style.backgroundColor = 'green';
    });

    width.addEventListener('click', () => {
      let uzyndyk = parseInt(box.offsetWidth);
      box.style.width = uzyndyk + 20 + 'px' 
    });

    height.addEventListener('click', () => {
      let biyktyk = parseInt(box.offsetHeight);
      box.style.height = biyktyk + 20 + 'px'
    });

    
    box.addEventListener('mouseenter', () => {
      box.textContent = ' мышка қораптың ішінде!';
    });

    box.addEventListener('mouseleave', () => {
      box.textContent = ' мышка қораптан шығып кетті!';
    });

  