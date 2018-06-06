import _ from 'lodash';
let h337 = require('heatmap.js');

function component() {
    var element = document.createElement('div');
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    return element;
}

function createHeatmap() {
var heatmapInstance = h337.create({
    container: document.querySelector('.heatmap')
  });
  
  var points = [];
  var max = 0;
  var width = 840;
  var height = 400;
  var len = 200;
  
  while (len--) {
    var val = Math.floor(Math.random()*100);
    max = Math.max(max, val);
    var point = {
      x: Math.floor(Math.random()*width),
      y: Math.floor(Math.random()*height),
      value: val
    };
    points.push(point);
  }

  var data = { 
    max: max, 
    data: points 
  };

  heatmapInstance.setData(data);
}
createHeatmap();
document.body.appendChild(component());