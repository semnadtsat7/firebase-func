const authSwitchLinks = document.querySelectorAll('.switch');
const authModals = document.querySelectorAll('.auth .modal');
const authWrapper = document.querySelector('.auth');
const registerForm = document.querySelector('.register');
const loginForm = document.querySelector('.login');
const signOut = document.querySelector('.sign-out');

// toggle regis and login
authSwitchLinks.forEach(link => {
  link.addEventListener('click', () => {
    authModals.forEach(modal => modal.classList.toggle('active'));
  });
});

// register 
registerForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = registerForm.email.value;
    const password = registerForm.password.value;
  
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(user => {
        console.log('registered', user);
        registerForm.reset();
        location.reload();
      })
      .catch(error => {
        registerForm.querySelector('.error').textContent = error.message;
      });
  });

// login form
loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const email = loginForm.email.value;
    const password = loginForm.password.value;
  
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(user => {
        console.log('logged in', user);
        loginForm.reset();
        location.reload();
      })
      .catch(error => {
        loginForm.querySelector('.error').textContent = error.message;
      });
  });
 
  // sign out
signOut.addEventListener('click', () => {
    firebase.auth().signOut()
      .then(() => console.log('signed out'));
  });
  
  // auth listener
  firebase.auth().onAuthStateChanged(user => {
    if (user) {
      // User is logged in
      authWrapper.classList.remove('open');
      authModals.forEach(modal => modal.classList.remove('active'));
    } else {
      // User is logged out
      authWrapper.classList.add('open');
      authModals[0].classList.add('active');
      vueApp.schools = []; 
    }
  });

