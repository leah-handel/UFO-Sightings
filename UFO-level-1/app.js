var sightings = data;

var tbody = d3.select("tbody");

sightings.forEach(function(sighting) {
    var row = tbody.append("tr");
    Object.values(sighting).forEach(function(value){
        var cell = row.append("td");
        cell.text(value);
    });
});