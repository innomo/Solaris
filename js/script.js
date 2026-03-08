

var currentPage = window.location.pathname.split('/').pop();


if (currentPage === '' || currentPage === '/') {
  currentPage = 'index.html';
}

var navLinks = document.querySelectorAll('nav a');

for (var i = 0; i < navLinks.length; i++) {
  var linkFile = navLinks[i].getAttribute('href');

  if (linkFile === currentPage) {
    navLinks[i].classList.add('active');
  }
}


  function submitForm() {
      var name = document.getElementById('name').value;
      var email = document.getElementById('email').value;

      if (name === '' || email === '') {
        alert('Please fill in your name and email address.');
        return;
      }

      document.getElementById('contact-form').style.display = 'none';
      document.getElementById('success-message').style.display = 'block';
  }
