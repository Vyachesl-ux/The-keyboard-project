function t11(event) {
  let i11 = document.querySelector('.i-11').value;
  let button = document.querySelectorAll('.buttons__content');
    for(let i = 0; i < button.length; i++){
      button[i].classList.remove('active');
      let att = button[i].getAttribute('data-key');
      if(att == event.key) button[i].classList.add('active');
    } 


}

document.querySelector('.i-11').onkeydown = t11;