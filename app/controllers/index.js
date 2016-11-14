//Adding Margins and fixing formatting

var margin = {
top: 5,
right: 0,
bottom: 90,
left: 100
}

var height = 1200 - margin.left - margin.right;
var width = 550 - margin.top - margin.bottom;

d3.json("https://raw.githubusercontent.com/FreeCodeCamp/ProjectReferenceData/master/GDP-data.json", function(data){
data = data.data


var gdpData = data.map(function(d){return d[1]})
var yearData = data.map(function(d){return d[0]})

var gdpMax = d3.max(gdpData)
var gdpMin = d3.min(gdpData)
var yearMax = d3.max(yearData)
var yearMin = d3.min(yearData)



var yScale = d3.scaleLinear()
.domain([0, gdpMax])
.range([0,960]);

var xScaleValue = width/(data.length)
var barWidth = xScaleValue * .8


//Put a g inside an svg in order to get margins
d3.select('svg')
.attr("height", height + margin.top + margin.bottom)
.attr("width", width + margin.left + margin.right)
.append("g")
.attr("transform", "translate(" + margin.left + "," + margin.top + ")")
.attr("id", "g-cont")


//Add a tooltip?

//Add a y yourself?

//Generate Graph with elements

d3.select("svg")
.selectAll("rect")
.data(data)
.enter()
.append("rect")
.attr("width", barWidth)
.attr("height", function(d){return yScale(d[1]);})
.style("fill", "blue")
.style("stroke","red")
.style("stroke-width", "1px")
.style("opacity", .25)
.attr("x", function(d,i){return i * xScaleValue})
/*.attr("y", function(d) {

var l = height - yScale(d[1])
return l

})*/

})



