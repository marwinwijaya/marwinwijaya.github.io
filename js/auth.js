// Firebase configuration placeholder
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  databaseURL: "YOUR_DATABASE_URL",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID"
};

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const database = firebase.database();

document.getElementById('loginForm').addEventListener('submit', function (e) {
  e.preventDefault();
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const name = document.getElementById('name').value;
  const role = document.getElementById('role').value;

  auth.signInWithEmailAndPassword(email, password)
    .catch(function (error) {
      if (error.code === 'auth/user-not-found') {
        return auth.createUserWithEmailAndPassword(email, password);
      }
      throw error;
    })
    .then(function (userCredential) {
      const user = userCredential.user;
      return database.ref('users/' + user.uid).set({
        email: email,
        name: name,
        role: role,
        last_login: new Date().toISOString()
      });
    })
    .then(function () {
      alert('Logged in successfully');
    })
    .catch(function (error) {
      alert(error.message);
    });
});
