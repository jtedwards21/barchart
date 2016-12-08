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

var secondYScale = d3.scaleLinear().domain([0, gdpMax]).range([height, 0])

var xAxis = d3.axisBottom().scale(xScale).ticks(d3.timeYear.every(5));
var yAxis = d3.axisLeft().scale(secondYScale);

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

d3.select("#g-cont")
.append("g")
.attr("class", "y-axis")
.call(yAxis)


//Add a tooltip?

var div= d3.select(".box").append("div")
.attr("class", "tooltip")
.style("opacity", 0)


//Generate Graph with elements

d3.select("#g-cont")
.selectAll("rect")
.data(data)
.enter()
.append("rect")
.attr("width", barWidth)
.attr("height", function(d){return yScale(d[1]);})
.style("fill", "#7035BB")
.style("stroke","#555")
.style("stroke-width", "1px")
.style("opacity", 1)
.attr("x", function(d,i){return xScale(new Date(d[0]))})
.attr("y", function(d) {return　height - yScale(d[1])})
.on("mouseover", function(d){
var rect = d3.select(this);
rect.attr("class", "mouseover")
var currentDateTime = new Date(d[0])
var year = currentDateTime.getFullYear();
var month = currentDateTime.getMonth()
var dollars = d[1];
div.style("opacity", .9)
div.html("<span class='amount'>" + dollars + "&nbsp;Billion </span><br><span class='year'>" + year + ' - ' + month + "</span>")
.style("left", (d3.event.pageX + 5) + "px")
.style("top", (d3.event.pageY - 50) + "px");

})
})



