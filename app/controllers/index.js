//Adding Margins and fixing formatting

var margin = {
top: 5,
right: 10,
bottom: 30,
left: 75
}

var width = 1000 - margin.left - margin.right;
var height = 500 - margin.top - margin.bottom;

d3.json("https://raw.githubusercontent.com/FreeCodeCamp/ProjectReferenceData/master/GDP-data.json", function(data){
data = data.data


var gdpData = data.map(function(d){return d[1]})
var yearData = data.map(function(d){return d[0]})

var gdpMax = d3.max(gdpData)
var gdpMin = d3.min(gdpData)

var minDate = new Date(data[0][0]);
var maxDate = new Date(data[274][0]);

//Adjust Scales
var yScale = d3.scaleLinear()
.domain([0, gdpMax])
.range([0, height]);

var xScale = d3.scaleTime().domain([minDate, maxDate]).range([0, width])
var barWidth = width/data.length

var xAxis = d3.axisBottom().scale(xScale).ticks(d3.timeYear, 5);
var yAxis = d3.axisLeft().scale(yScale).ticks(10, "");

d3.select('svg')
.attr("width", width + margin.left + margin.right)
.attr("height", height + margin.top + margin.bottom)
	
//Put a g inside the container in order to get margins
d3.select('svg')
.append("g")
.attr("transform", "translate(" + margin.left + "," + margin.top + ")")
.attr("id", "g-cont")

//Add x axis
d3.select('#g-cont')
.append("g")
.attr("class", "x-axis")
.attr("transform", "translate(0," + height + ")")
.call(xAxis)

//Add y axis



//Add a tooltip?

//Generate Graph with elements

d3.select("#g-cont")
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
.attr("x", function(d,i){return xScale(new Date(d[0]))})
.attr("y", function(d) {return　height - yScale(d[1])})

})



