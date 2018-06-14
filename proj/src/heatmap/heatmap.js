let _ = require('lodash');
let h337 = require('heatmap.js');
var fs = require('fs');

function component() {
    var element = document.createElement('div');
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    return element;
}

document.body.appendChild(component());

function getLogs() {
  return new Promise((resolve, reject) => {
    //let regexp = /^\.\/\.\.\/\.\.\/protractor\-heat\-map\/playground\/logs\/logs.*\.json$/;
    return fs.readFile('./../../protractor-heat-map/playground/logs/logs.json', 'utf8', (err, data) => {
      return err ? reject(err) : resolve(data);
    });
  });
};

(function createHeatmap() {

  // wczytaj logi
  getLogs().then(logs => {
    var heatmapInstance = h337.create({
      container: document.querySelector('.heatmap')
    });
    
    // weź actions
    actions = JSON.parse(logs).actions;
    console.log('actions: ', actions);

    // tylko akcje click, clear, sendKeys
    
    let points = getPoints();

    console.log('points: ', points);
  
    var data = { 
      max: 100,
      data: points
    };
  
    heatmapInstance.setData(data);
    

  }).catch(error => console.log('Error: ', error));

})();

function getPoints() {
  let points = [];
  let j = 0;
  console.log('actions.length: ', actions.length);
  // get points only for clicks, clear and sendKeys
  for (let i = 0; i < actions.length; i++) {
    if(actions[i].action === 'element.clear()' || actions[i].action === 'element.click()' || actions[i].action === 'element.sendKeys()') {
      points[j] = { x: Math.floor(actions[i].x), y: Math.floor(actions[i].y), value: 50 };
      j++;
    }
  }
  return points;
}