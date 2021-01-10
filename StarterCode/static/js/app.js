
function create_charts(id) {

// Fetch the JSON data and console log it
d3.json("samples.json").then(function(data) {
    var filter_data = data.samples.filter(obj=>obj.id == id);
    console.log(filter_data)

    var samplevalues = filter_data[0].sample_values.slice(0,10).reverse();
    console.log(samplevalues)

    var otuid = filter_data[0].otu_ids.slice(0,10).reverse();
    console.log(otuid)

    var otulabel = filter_data[0].otu_labels.slice(0,10).reverse();
    console.log(otulabel)

//Bar Chart

    var trace1 = {
        x: samplevalues,
        y: otuid.map(o=>'OTU ' + o),
        type: "bar",
        color: 'blue',
        orientation: "h"
      }; 
    
      var data1 = [trace1];
    
      var layout = {
        title: " Top 10 OTUs"}
    
    Plotly.newPlot("bar", data1, layout);
    
//Bubble Chart

var trace2 = {
    x: otuid,
    y: samplevalues,
    mode: "markers",
    marker: {size:samplevalues, color:otuid},
  };

  var data2 = [trace2];

  var layout2 = {
    title: " Bubble"}

  Plotly.newPlot("bubble", data2, layout2);


    console.log(data)


      //Demographic Panel

  var demo_filter = data.metadata.filter(obj=>obj.id == id);
  console.log(demo_filter)

  });



}











//Update Dropdown



// Call updatePlotly() when a change takes place to the DOM

// This function is called when a dropdown menu item is selected
function optionChanged(id) {
  // Use D3 to select the dropdown menu
  create_charts(id)
}
// Initializes the page with a default plot
function init() {
    d3.json("samples.json").then(function(data) {
    var dropdown = d3.select("#selDataset")    
data.names.forEach((samplenames)=>{
    dropdown.append("option").text(samplenames).property
    ("value", samplenames)
})
    })
    create_charts(940)
    }
  
  init()