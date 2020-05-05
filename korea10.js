d3.csv("data.csv", function(error, data) { 
    console.log(data)
	
	var svg = d3.select("body")
					.append("svg")
					.attr("width",1500)
					.attr("height",1500);

	data.sort(function(a,b){
				return d3.descending(+a.value, +b.value);
			})

            // rect 
			var rects = svg.selectAll("rect")
								.data(data)
								.enter()
								.append("rect");

				rects.attr("x", 0)
					.attr("y", function(d, i) {
						return i * 25;
					})
					.attr("width", function(d) {
						return d.value*100;
					})
					.attr("height", 20)
					.attr("fill","#4DAAAB")

            // number from data : 1560, 1407
			var texts = svg.selectAll("text")
				.data(data)
				.enter()
				.append("text");

				texts.attr("x", function(d) {
					return d.value*101;
					})
					.attr("y", function(d, i) {
						return i * 25+15;
					})
					.attr("fill","#777777")
					.text(function(d) { return d.value;});
            
            // text in Rect (white)
			var labels = svg.selectAll(".label")
				.data(data)
				.enter()
				.append("text")
				.attr("class","label");

				labels.attr("x", 1)
					.attr("y", function(d, i) {
						return i * 25+15;
					})
					.attr("fill","#ffffff")
					.text(function(d) { return d.Name;});
	});