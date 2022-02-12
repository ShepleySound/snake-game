class Settings {
  constructor(gameState) {
    this.gameState = gameState;
    document
      .querySelector('#settings')
      .addEventListener('click', this.gameSettings.bind(this));
    document
      .querySelector('#back')
      .addEventListener('click', this.settingsBack.bind(this));
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
    console.log(document.body);
  }
}

export default Settings;
