class Settings {
  constructor(gameState) {
    this.gameState = gameState;
    this.body = document.querySelector('body');
    this.backgroundColor = this.getBackgroundColor();
    document
      .querySelector('#settings')
      .addEventListener('click', this.gameSettings.bind(this));
    document
      .querySelector('#back')
      .addEventListener('click', this.settingsBack.bind(this));
    this.setBackgroundColor();
  }

  gameSettings() {
    this.gameState.inSettings = true;
    document.querySelector('#state-overlay').style.display = 'none';
    document.querySelector('#settings-overlay').style.display = 'flex';
  }
  settingsBack() {
    this.gameState.inSettings = false;
    document.querySelector('#settings-overlay').style.display = 'none';
    document.querySelector('#state-overlay').style.display = 'flex';
  }
  getBackgroundColor() {
    const bodyStyles = window.getComputedStyle(this.body);
    return bodyStyles.getPropertyValue('background-color');
  }
  setBackgroundColor() {
    const colorPicker = document.querySelector('#backgroundcolor');
    colorPicker.addEventListener('input', () => {
      this.body.style.backgroundColor = colorPicker.value;
    });
  }
}

export default Settings;
