import storage from './storage';
class Settings {
  constructor(gameState) {
    this.gameState = gameState;
    this.body = document.querySelector('body');
    this.theme = storage.get('theme') || 'darkMode';
    document
      .querySelector('#settings')
      .addEventListener('click', this.gameSettings.bind(this));
    document
      .querySelector('#back')
      .addEventListener('click', this.settingsBack.bind(this));
    document.querySelector('#themes-list').addEventListener('change', (e) => {
      this.setTheme(e.target.value);
    });
    this.setTheme(this.theme);
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
  setTheme(theme) {
    document.documentElement.className = theme;
    storage.set('theme', theme);
    document.querySelector('#themes-list').value = theme;
  }
}

export default Settings;
