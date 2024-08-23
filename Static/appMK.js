// log data too console
let url = '../Data/2021_Crimes_SummarizedByWard.csv'
d3.csv(url).then(function(data){
    console.log(data);
});

// Arrays to hold data by ward
arson_wards = [];
arson_count = [];
assault_wards = [];
assault_count = [];
burglary_wards = [];
burglary_count = [];
homicide_wards = [];
homicide_count = [];
motortheft_wards = [];
motortheft_count = [];
robbery_wards = [];
robbery_count = [];
sex_wards = [];
sex_count = [];
theftAuto_wards = [];
theftAuto_count = [];
theft_wards = [];
theft_count = [];


// Create basic default graph
var data = [{
    x: [1,2,3,4,5,6,7,8,9],
    y: [0,0,0,0,0,0,0,0],
    type: "bar"
}];
let layout = {
    title:"Crime Type by Ward",
    xaxis: {title:"Ward", range: [.5, 8.5]},
    yaxis: {title: "Number of Reports", autotick: true},
    automargin: true,
}
Plotly.newPlot("bar", data, layout);

// Grab counts of crime reports by offense type
d3.csv(url).then(function(data) {
    let crimes = data;
    console.log(data)

    // loop through crimes
    for (let i = 0; i<data.length; i++) {
        let crime = data[i]
        console.log(crime);
        // Conditional statements to determine array assignment
        if (crime.OFFENSE == "ARSON") {
            arson_wards.push(crime.WARD);
            arson_count.push(crime.Count);
        } else if (crime.OFFENSE == "ASSAULT W/DANGEROUS WEAPON") {
            assault_wards.push(crime.WARD);
            assault_count.push(crime.Count);
        } else if (crime.OFFENSE == "BURGLARY") {
            burglary_wards.push(crime.WARD);
            burglary_count.push(crime.Count);
        } else if (crime.OFFENSE == "HOMICIDE") {
            homicide_wards.push(crime.WARD);
            homicide_count.push(crime.Count);
        } else if (crime.OFFENSE == "MOTOR VEHICLE THEFT") {
            motortheft_wards.push(crime.WARD);
            motortheft_count.push(crime.Count);
        } else if (crime.OFFENSE == "SEX ABUSE") {
            sex_wards.push(crime.WARD);
            sex_count.push(crime.Count);
        } else if (crime.OFFENSE == "ROBBERY") {
            robbery_wards.push(crime.WARD);
            robbery_count.push(crime.Count);
        } else if (crime.OFFENSE == "THEFT F/AUTO") {
            theftAuto_wards.push(crime.WARD);
            theftAuto_count.push(crime.Count);
        } else if (crime.OFFENSE == "THEFT/OTHER") {
            theft_wards.push(crime.WARD);
            theft_count.push(crime.Count);
        }
    };
    console.log(arson_count)
});

// Dropdown to update graph
d3.selectAll("#selDataset").on("change", updatePlotly);

function updatePlotly() {
    
    let dropdownMenu = d3.select("#selDataset");
    let dataset = dropdownMenu.property("value");
    let x = [];
    let y = [];

    if (dataset === 'dataset1') {
        x = arson_wards;
        y = arson_count;
    }

    else if (dataset ==='dataset2') {
        x = assault_wards;
        y = assault_count;
    }

    else if (dataset ==="dataset3") {
        x = burglary_wards;
        y = burglary_count;
    }
    else if (dataset ==="dataset4") {
        x = homicide_wards;
        y = homicide_count;
    }
    else if (dataset ==="dataset5") {
        x = motortheft_wards;
        y = motortheft_count;
    }
    else if (dataset ==="dataset6") {
        x = sex_wards;
        y = sex_count;
    }
    else if (dataset ==="dataset7") {
        x = robbery_wards;
        y = robbery_count;
    }
    else if (dataset ==="dataset8") {
        x = theftAuto_wards;
        y = theftAuto_count;
    }
    else if (dataset ==="dataset9") {
        x = theft_wards;
        y = theftAuto_count;
    }

    Plotly.restyle("bar", "x", [x]);
    Plotly.restyle("bar", "y", [y]);
};

