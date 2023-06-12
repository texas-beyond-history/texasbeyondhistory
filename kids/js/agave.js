document.addEventListener("DOMContentLoaded", function(){
  // leaves
  const leavesSourceDiv = document.getElementById('leaves');
  const leavesTargetDiv = document.getElementById('leaves-tooltip');

  // Add event listener for hover
  leavesSourceDiv.addEventListener('mouseenter', () => {
    leavesTargetDiv.classList.add('displayed');
  });

  leavesSourceDiv.addEventListener('mouseleave', () => {
    leavesTargetDiv.classList.remove('displayed');
  });

  // heart
  const heartSourceDiv = document.getElementById('heart');
  const trimmedHeartSourceDiv = document.getElementById('trimmed-heart');
  const heartTargetDiv = document.getElementById('heart-tooltip');

  // Add event listener for hover
  heartSourceDiv.addEventListener('mouseenter', () => {
    heartTargetDiv.classList.add('displayed');
  });
  trimmedHeartSourceDiv.addEventListener('mouseenter', () => {
    heartTargetDiv.classList.add('displayed');
  });

  heartSourceDiv.addEventListener('mouseleave', () => {
    heartTargetDiv.classList.remove('displayed');
  });
  trimmedHeartSourceDiv.addEventListener('mouseleave', () => {
    heartTargetDiv.classList.remove('displayed');
  });

  // bloomstalk
  const bloomstalkSourceDiv = document.getElementById('bloomstalk');
  const bloomstalkTargetDiv = document.getElementById('bloomstalk-tooltip');

  // Add event listener for hover
  bloomstalkSourceDiv.addEventListener('mouseenter', () => {
    bloomstalkTargetDiv.classList.add('displayed');
  });

  bloomstalkSourceDiv.addEventListener('mouseleave', () => {
    bloomstalkTargetDiv.classList.remove('displayed');
  });

  // flower seed nectar
  const fsnSourceDiv = document.getElementById('flower-seeds-nectar');
  const fsnTargetDiv = document.getElementById('flower-seeds-nectar-tooltip');

  // Add event listener for hover
  fsnSourceDiv.addEventListener('mouseenter', () => {
    fsnTargetDiv.classList.add('displayed');
  });

  fsnSourceDiv.addEventListener('mouseleave', () => {
    fsnTargetDiv.classList.remove('displayed');
  });

  // root
  const rootSourceDiv = document.getElementById('root');
  const rootTargetDiv = document.getElementById('root-tooltip');

  // Add event listener for hover
  rootSourceDiv.addEventListener('mouseenter', () => {
    rootTargetDiv.classList.add('displayed');
  });

  rootSourceDiv.addEventListener('mouseleave', () => {
    rootTargetDiv.classList.remove('displayed');
  });


  // agave plant video

  const videoElement = document.getElementById("agave-video");
  const startButton = document.getElementById("startButton");
  const resetButton = document.getElementById("resetButton");

  startButton.addEventListener("click", function () {
    videoElement.play();
    startButton.disabled = true;
    resetButton.disabled = true;
  });

  videoElement.addEventListener("ended", function () {
    resetButton.disabled = false;
  });

  resetButton.addEventListener("click", function () {
    videoElement.pause();
    videoElement.currentTime = 0;
    startButton.disabled = false;
    resetButton.disabled = true;
  });
});

