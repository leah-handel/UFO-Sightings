var allSightings = data;

var tbody = d3.select("tbody");
var button = d3.select("button");

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

// when filter button is clicked

function handleClick(){
    d3.event.preventDefault();
   
    // using one variable to hold all the filters

    var filteredSightings = allSightings

    // date field separate from text fields

    var dateField = d3.select("#date-input");
    var dateString = dateField.property("value")

    if (!(dateString=="")){
        var dateInput = moment(dateString);
        filteredSightings = filteredSightings.filter(sighting => moment(sighting.datetime, "M/D/YYYY").isSame(dateInput));
    };

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

    // applying each text filter if there is input for it

    textFields.forEach(function(array){
        var inputType = array[0];
        var inputText = array[1];
        console.log(inputText);
        if (!(inputText=="")){
            filteredSightings = filteredSightings.filter(s =>s[inputType] == inputText);
        };
   });

   // fill table with filtered data

    fillTable(filteredSightings);
};

// on loading, fill table with all data

fillTable(allSightings);

button.on("click", handleClick);

