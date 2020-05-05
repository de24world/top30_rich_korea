d3.csv("data.csv", function(error, data) { 
    console.log(data)
	
	var svg = d3.select("body")
					.append("svg")
					.attr("width",2000)
					.attr("height",2000);

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
                    // // toolTip
                    // .on("mouseover", function() { tooltip.style("display", mull); })
                    // .on("mouseout",  function() { tooltip.style("display", "none"); })
                    // .on("mousemove", function(d) {
                    //     tooltip.style("left", (d3.event.pageX + 10) + "px");
                    //     tooltip.style("top", (d3.event.pageY - 10) + "px");
                    //     tooltip.text(d.value); 
                    // });
         

            // number from data : 16.8, 7.4 ....
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
            
            // text in Rect (Lee Kun-hee...)
			var labels = svg.selectAll(".label")
				.data(data)
				.enter()
				.append("text")
				.attr("class","label");

				labels.attr("x", 5)
					.attr("y", function(d, i) {
						return i * 25+15;
					})
					.attr("fill","#ffffff")
                    .text(function(d) { return d.Name;});
                    
            // // tooltip append
            // var tooltip = d3.select("body").append("div")
            // .attr("class", "toolTip")
            // .style("display", "none");


	});