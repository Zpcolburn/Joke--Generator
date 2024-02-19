// USE WITH FIREBASE AUTH
// import ViewDirectorBasedOnUserAuthStatus from '../utils/viewDirector';
import 'bootstrap'; // import bootstrap elements and js
import '../styles/main.scss';
import renderToDom from '../utils/renderToDom';
import { showJoke, showPunchline } from '../pages/showJoke';
import getAJoke from '../components/jokeData';

const init = () => {
  document.querySelector('#app').innerHTML = `
    <h1>HELLO! Welcome to the Joke Generator!</h1>
    <div id="joke-constainer">
      <div id="joke"></div>
      <div id="punchline"></div>
      <div id="btn-container">
        <button class="btn btn-danger" id="joke-btn">Get A Joke!</button><br />
      </div>
    </div>
    <hr />
  `;

  document
    .querySelector('#joke-constainer')
    .addEventListener('click', (e) => {
      if (e.target.id.includes('joke-btn')) {
        renderToDom('#btn-container', '<button class="btn btn-danger" id="punchline-btn">Get Punchline!</button><br />');
        getAJoke().then((response) => {
          showJoke(response);
          showPunchline(response);
          document.querySelector('#punchline').style.display = 'none';
        });
      }
      if (e.target.id.includes('punchline-btn')) {
        document.querySelector('#punchline').style.display = 'block';
        renderToDom('#btn-container', '<button class="btn btn-danger" id="joke-btn">Next Joke!</button><br />');
      }
    });

  // USE WITH FIREBASE AUTH
  // ViewDirectorBasedOnUserAuthStatus();
};

init();
