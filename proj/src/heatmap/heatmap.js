let _ = require('lodash');
let h337 = require('heatmap.js');
var fs = require('fs');

function getLogs() {
  return new Promise((resolve, reject) => {
    return fs.readFile('./../../protractor-heat-map/playground/logs/logs.json', 'utf8', (err, data) => {
      return err ? reject(err) : resolve(data);
    });
  });
};

(() => {

  // wczytaj logi
  getLogs().then(logs => {
    var heatmapInstance = h337.create({
      container: document.querySelector('.heatmap')
    });
    
    // weź actions
    var parsedLogs = JSON.parse(logs);
    var actions = parsedLogs.actions;
    var pages = parsedLogs.pages;
    console.log('actions: ', actions);

    var points = getPoints(actions);

    console.log('points: ', points);
  
    var data = { 
      max: 1,
      data: points
    };

    addImage(pages);
    heatmapInstance.setData(data);
    

  }).catch(error => console.log('Error: ', error));

})();

const addImage = (pages) => {
  var width = pages[0].value.resolution.width;
  var height = pages[0].value.resolution.height;
  document.querySelector('.heatmap').setAttribute('style', `background-image: url('./../../../logs/screenshots/home.page.png'); width: ${width}px; height: ${height}px; position: relative;`)
};

function getPoints(actions) {
  let points = [];
  let j = 0;
  console.log('actions.length: ', actions.length);
  // get points only for clicks, clear and sendKeys
  for (let i = 0; i < actions.length; i++) {
    if (actions[i].action === 'element.clear()' || actions[i].action === 'element.click()' || actions[i].action === 'element.sendKeys()') {
      points[j] = { x: Math.floor(actions[i].x), y: Math.floor(actions[i].y), value: 50 };
      j++;
    }
  }
  return points;
}