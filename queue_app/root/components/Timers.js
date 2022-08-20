import _BackgroundTimer from 'react-native-background-timer';

function timerThreeMinutes() {
  return _BackgroundTimer.runBackgroundTimer(() => {
    console.log('Three minutes');
  }, 30000);
}

function timerTwoMinutes() {
  return _BackgroundTimer.runBackgroundTimer(() => {
    console.log('two minutes');
  }, 20000);
}

export {timerThreeMinutes, timerTwoMinutes};
