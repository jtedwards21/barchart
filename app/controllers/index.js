$.getJSON("https://raw.githubusercontent.com/FreeCodeCamp/ProjectReferenceData/master/GDP-data.json", function(data){

});

var chartdata = [40,60,80,100,70,12,100,60,70,150,120,140];

var height = 960;
var width = 500;

var y = d3.scale.linear()
.range([height, 0]);

var chart = d3.select(".chart")
.attr("width", width)
.attr("height", height)

d3.json("https://raw.githubusercontent.com/FreeCodeCamp/ProjectReferenceData/master/GDP-data.json", function(data){
data = data.data
x.domain(data.map(function(d) {return d[0]}));
y.domain([0, d3.max(data, function(d) {return d[1]})]);
var bar = chart.selectAll('g')
.data(data)
.enter().append('g')
.attr("transform", function(d) {return "translate(" + x(d.name) + ",0)"; })


bar.append("rect")
.attr("y", function(d) { return y(d.value); })
.attr("height", function(d) { return height - y(d.value); })
.attr("width", x.rangeBand());

bar.append("text")
.attr("x", x.rangeBand() / 2)
.attr("y", function(d) { return y(d.value) + 3; })
.attr("dy", ".75em")
.text(function(d) { return d.value; });
})
