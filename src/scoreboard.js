import storage from './storage';
import { DEFAULTSCORES } from './constants';

class ScoreBoard {
  constructor() {
    this.hiscoreElement = document.querySelector('.hiscore-container');
    this.hiScoreList = storage.get('hiscores') || DEFAULTSCORES;
    document.querySelector('#reset-scores').addEventListener('click', () => {
      const [...defaultScore] = DEFAULTSCORES;
      this.setScoreList(defaultScore);
    });
  }

  // Add score object to array, THEN redraw

  addScore(name, score) {
    this.hiScoreList.push({ name, score });
  }

  isHighScore(checkScore) {
    this.sortScores();
    if (this.hiScoreList.length < 5) {
      return true;
    }
    const checkList = this.hiScoreList.findIndex(
      ({ score }) => score < checkScore,
    );
    if (checkList >= 0) {
      return true;
    }
    return false;
  }

  updateScore(name, checkScore) {
    this.sortScores();
    const replaceIndex = this.hiScoreList.findIndex(
      ({ score }) => score < checkScore,
    );
    if (replaceIndex >= 0) {
      this.hiScoreList.splice(replaceIndex, 0, {
        name,
        score: checkScore,
      });
      this.hiScoreList.pop();
    }
  }

  sortScores() {
    this.hiScoreList.sort((a, b) => b.score - a.score);
  }

  redrawScores() {
    this.sortScores();
    this.hiscoreElement.innerHTML = '';
    this.hiScoreList.forEach((entry) => {
      const nameElement = document.createElement('div');
      nameElement.classList.add('hiscore-name');
      nameElement.innerText = entry.name;
      const scoreElement = document.createElement('div');
      scoreElement.classList.add('hiscore-score');
      scoreElement.innerText = entry.score;
      scoreElement.dataset.score = entry.score;
      this.hiscoreElement.append(nameElement, scoreElement);
    });
    storage.set('hiscores', this.hiScoreList);
  }

  getScoreList() {
    return this.hiScoreList;
  }

  setScoreList(scores) {
    this.hiScoreList = scores;
    this.redrawScores();
  }

  getScoreByName(name) {
    return this.hiScoreList.filter((entry) => entry.name === name);
  }
}

export default new ScoreBoard();
