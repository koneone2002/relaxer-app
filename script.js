const container = document.getElementById('container');
const text = document.getElementById('text');

const totalTime = 7500;
const breatheTime = (totalTime / 5) * 2;
const holdTime = totalTime / 5;

//console.log(breatheTime, holdTime);

function breathAnimation() {
  text.innerText = 'Breath In!';
  container.className = 'container grow';
  setTimeout(() => {
    text.innerText = 'Hold';
    setTimeout(() => {
      text.innerText = 'Breath Out!';
      container.className = 'container shrink';
    }, holdTime);
  }, breatheTime);
}
breathAnimation();
setInterval(breathAnimation, totalTime);
