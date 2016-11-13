var chartdata = [40,60,80,100,70,12,100,60,70,150,120,140];

var height = 200
var width = 720

var barWidth = 40,
var barOffset = 20;

d3.select(#bar-chart).append('svg')
  .attr('width', width)
  .attr('height', height)
  .style('background', '#dff0d8')
  .selectAll('rect').data(chartdata)
  .enter().append('rect')
    .style({'fill': '#3c763d', 'stroke': '#d6e9c6', 'stroke-width': '5'})
    .attr('width', barWidth)
    .attr('height', function (data) {
        return data;
    })
    .attr('x', function (data, i) {
        return i * (barWidth + barOffset);
    })
    .attr('y', function (data) {
        return height - data;
    });
