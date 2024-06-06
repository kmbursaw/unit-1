
//declares table variable globally
var table;

//cities function
function cities(){

	//creates array for city and population
	var cityPop = [
	{ 
		city: 'Madison',
		population: 233209
	},
	{
		city: 'Milwaukee',
		population: 594833
	},
	{
		city: 'Green Bay',
		population: 104057
	},
	{
		city: 'Superior',
		population: 27244
	}
	];


	//creates table
	table = document.createElement("table");

	//creates header row
	var headerRow = document.createElement("tr");

	//creates the header names
	headerRow.insertAdjacentHTML("beforeend","<th>City</th><th>Population</th>");

	//appends header names to header row
	table.appendChild(headerRow);

	//loops through the cityPop array and adds city and population for each row
	for(var i = 0; i < cityPop.length; i++){
		var rowHtml = "<tr><td>" + cityPop[i].city + "</td><td>" + cityPop[i].population + "</td></tr>";
		table.insertAdjacentHTML('beforeend',rowHtml);
	}
	
	//appends table to mydiv in DOM
	document.getElementById("mydiv").appendChild(table);

	//returns array from function
	return cityPop;

};

//delcares returned array as a variable from cities function
var cityPop = cities();

//function that adds the City Size column
function addColumns(cityPop){
    //adds a row for each item in cityPop
    document.querySelectorAll("tr").forEach(function(row, i){
		//adds header and then loops through cityPop to evaluate size of population and classify into either small, medium, or large city
    	if (i == 0){
    		row.insertAdjacentHTML('beforeend', '<th>City Size</th>');
    	} else {
			//citySize variable created wit parameters
    		var citySize;

    		if (cityPop[i-1].population < 100000){
    			citySize = 'Small';

    		} else if (cityPop[i-1].population < 500000){
    			citySize = 'Medium';

    		} else {
    			citySize = 'Large';
    		}
			//adds city sizes to the table
			row.insertAdjacentHTML('beforeend', '<td>' + citySize + '</td>');

    	}
    });
}



//function to add mouse over and click events to the table
function addEvents(){

	//adds the event listener actions
	document.querySelector("table").addEventListener("mouseover", function(){
		//sets color variable
		var color = "rgb(";
		//chooses random number multiplied by 255 to select a hue of random color
		for (var i=0; i<3; i++){

			var random = Math.round(Math.random() * 255);

			color += random;

			if (i<2){
				color += ",";
			
			} else {
				color += ")";
			}
		}
	//changes the color of the text in the table
	this.style.color = color;
	
	});

	//adds function to bring up text if user clicks any part of the table
	function clickme(){
		//text that appears after the click
		alert('Hey, you clicked me!');
	};
	//adds the click me feature from the clickme function
	document.querySelector("table").addEventListener("click", clickme)
}

//gets new city size column to appear
addColumns(cityPop);

//appends new column to the cityPop table
document.getElementById("mydiv").appendChild(table);

//calls the addEvents function to add the color changeing text and click me text
addEvents();
