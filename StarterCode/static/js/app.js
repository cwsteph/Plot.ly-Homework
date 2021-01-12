
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

  // 

  });



}

function getData(id) {
    d3.json("samples.json").then((data) => {

      demographicTable.html("");

      var demo_filter = data.metadata.filter(obj=>obj.id.toString() === id)[0];

      console.log(demo_filter);
      
      
      demo_filter.forEach(([key, value]) => {
      demographicTable.append("h5").text(`${key}: ${value}`);
    
    });

  });
}


//Update Dropdown

function optionChanged(id) {
  create_charts(id)
}
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