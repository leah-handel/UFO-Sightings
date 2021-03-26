var allSightings = data;

var tbody = d3.select("tbody");
var button = d3.select("button");

var dateField = d3.select("#date-input");
var cityField = d3.select("#city-input");
var stateField = d3.select("#state-input");
var countryField = d3.select("#country-input");
var shapeField = d3.select("#shape-input");

var textFields = [
["city", cityField.property("value")],
["state", stateField.property("value")],
["country", countryField.property("value")],
["shape", shapeField.property("value")]
];

function fillTable(sightings){
    tbody.html("");
    sightings.forEach(function(sighting) {
        var row = tbody.append("tr");
        Object.values(sighting).forEach(function(value){
            var cell = row.append("td");
            cell.text(value);
        });
    });
};

//function checkText(key, value, list){
  //  list = list.filter(l =>l[key] === value);

//};

function handleClick(){
    d3.event.preventDefault();
    console.log("did get click")

    var filteredSightings = allSightings

    var dateField = d3.select("#date-input");
    var dateString = dateField.property("value")

    if (!(dateString=="")){
        var dateInput = moment(dateString);
        filteredSightings = filteredSightings.filter(sighting => moment(sighting.datetime, "M/D/YYYY").isSame(dateInput));
    };

   // var dateInput = moment(dateString);
    //console.log(dateField.property("value"));
    //console.log(dateInput);
    //var filteredSightings = allSightings.filter(sighting => moment(sighting.datetime, "M/D/YYYY").isSame(dateInput));

    var cityField = d3.select("#city-input");
    var stateField = d3.select("#state-input");
    var countryField = d3.select("#country-input");
    var shapeField = d3.select("#shape-input");
    
    var textFields = [
    ["city", cityField.property("value")],
    ["state", stateField.property("value")],
    ["country", countryField.property("value")],
    ["shape", shapeField.property("value")]
    ];

    //var cityField = d3.select("#city-input");
    //var cityInput = cityField.property("value");
    //field = "city"
    //filteredSightings = filteredSightings.filter(sighting=>sighting[field]===cityInput);

    //checkText("city", cityInput, filteredSightings);

    textFields.forEach(function(array){
        var inputType = array[0];
        var inputText = array[1];
        console.log(inputText);
        if (!(inputText=="")){
            filteredSightings = filteredSightings.filter(s =>s[inputType] == inputText);
        };
   });
    fillTable(filteredSightings);
};

fillTable(allSightings);

button.on("click", handleClick);

