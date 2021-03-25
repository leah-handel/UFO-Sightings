var allSightings = data;

var tbody = d3.select("tbody");

var button = d3.select("button");
var dateField = d3.select("#date-input");
var cityField = d3.select("#city-input");
var stateField = d3.select("#state-input");
var countryField = d3.select("#country-input");
var shapeField = d3.select("#shape-input");

function fillTable(sightings){
    sightings.forEach(function(sighting) {
        var row = tbody.append("tr");
        Object.values(sighting).forEach(function(value){
            var cell = row.append("td");
            cell.text(value);
        });
    });
};

function handleClick(){
    console.log("did get click");
    tbody.html("");
    var dateInput = moment(dateField.property("value"));
    console.log(dateField.property("value"));
    console.log(dateInput);
    var filteredSightings = allSightings.filter(sighting => moment(sighting.datetime, "M/D/YYYY").isSame(dateInput));
    fillTable(filteredSightings);
}

fillTable(allSightings);

button.on("click", handleClick);

