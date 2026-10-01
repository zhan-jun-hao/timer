// 1.变量
let currentSeconds = 0;
const startButton = document.getElementById("start");
const pauseButton = document.getElementById("pause");
const stopButton = document.getElementById("stop");
const resetButton = document.getElementById("reset");
const timeElement = document.getElementById("time");
const minimizeButton = document.getElementById("minimize");
const closeButton = document.getElementById("close");
// 防止重复点击
let timeLock = null;
// 2.事件绑定
startButton.onclick = startTimer;
pauseButton.onclick = pauseTimer;
stopButton.onclick = stopTimer;
resetButton.onclick = resetTimer;
minimizeButton.onclick = () => {
  window.electronAPI.minimize();
};

closeButton.onclick = () => {
  window.electronAPI.close();
};
// 3.函数
function startTimer() {
  if (timeLock) return; // 如果计时器已运行，则不执行
  timeLock = setInterval(() => {
    currentSeconds++;
    showTime();
  }, 1000);
}

function showTime() {
  let hours = Math.floor(currentSeconds / 3600);
  let minutes = Math.floor((currentSeconds % 3600) / 60);
  let seconds = currentSeconds % 60;
  let timeString = `${format(hours)}:${format(minutes)}:${format(seconds)}`;
  timeElement.innerHTML = timeString;
}

function pauseTimer() {
  if (!timeLock) return;
  clearInterval(timeLock);
  timeLock = null;
}

function stopTimer() {
  if (currentSeconds === 0) return;
  pauseTimer();
  recordTime();
  currentSeconds = 0;
  showTime();
}

function resetTimer() {
  pauseTimer();
  currentSeconds = 0;
  showTime();
}

function recordTime() {
  let record = `日期：${getDate()}
时长：${formatTime(currentSeconds)}

`;
  console.log("记录时间: ", record);
  window.electronAPI.saveRecord(record);
}
// 格式化时间
function getDate() {
  let date = new Date();

  return `${date.getFullYear()}-${format(date.getMonth() + 1)}-${format(date.getDate())} ${format(date.getHours())}:${format(date.getMinutes())}:${format(date.getSeconds())}`;
}

function format(num) {
  return String(num).padStart(2, "0");
}

function formatTime(totalSeconds) {
  let hours = Math.floor(totalSeconds / 3600);
  let minutes = Math.floor((totalSeconds % 3600) / 60);
  let seconds = totalSeconds % 60;

  return `${format(hours)}:${format(minutes)}:${format(seconds)}`;
}
