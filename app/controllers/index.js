var height = 960;
var width = 620;

d3.json("https://raw.githubusercontent.com/FreeCodeCamp/ProjectReferenceData/master/GDP-data.json", function(data){
data = data.data

d3.select('svg')
.attr("height", height)
.attr("width", width)

var gdpMax = d3.max(data, function(d) {return d[1]})
var gdpMin = d3.min(data, function(d) {return d[1]})
var yScale = d3.scaleLinear()
.domain([0, gdpMax])
.range([0,960]);


d3.select("svg")
.selectAll("rect")
.data(data)
.enter()
.append("rect")
.attr("width", 10)
.attr("height", function(d){return yScale(d[1]);})
.style("fill", "blue")
.style("stroke","red")
.style("stroke-width", "1px")
.style("opacity", .25)
.attr("x", function(d,i){return i *12})
/*.attr("y", function(d) {

var l = height - yScale(d[1])
return l

})*/

})



