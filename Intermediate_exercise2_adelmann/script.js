random_backgroundcolor();

function average_sum() {
    var a = Number(document.getElementById("first_num").value);
    var b = Number(document.getElementById("second_num").value);
    var c = Number(document.getElementById("third_num").value);
    var average = (a + b + c) / 3;
    var sum = a + b + c;
    document.getElementById("sum").innerHTML = sum;
    document.getElementById("average").innerHTML = average;
}

function minutes_into_hours() {
    var minutes = Number(document.getElementById("minutes").value);
    var hours = Math.round(minutes / 60) + " hours : " + minutes % 60 + " minutes";
    document.getElementById("number_in_hours").innerHTML = hours;
}


function random_backgroundcolor() {
    var r = (Math.random() * 255);
    var g = (Math.random() * 255);
    var b = (Math.random() * 255);
    var rgb_color = "rgb(" + r + "," + g + "," + b + ")";
    document.body.style.background = rgb_color;
}


var yesterdays_date = function() {
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth() + 1; //January is 0!
    var yyyy = today.getFullYear();
    if (dd < 10) {
        dd = '0' + dd
    }

    if (mm < 10) {
        mm = '0' + mm
    }




    var yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    var y_dd = yesterday.getDate();
    var y_mm = yesterday.getMonth() + 1;
    var y_yyyy = yesterday.getFullYear();
    if (y_dd < 10) {
        y_dd = '0' + y_dd
    }

    if (y_mm < 10) {
        y_mm = '0' + y_mm
    }


    today = dd + '/' + mm + '/' + yyyy;
    yesterday = y_dd + '/' + y_mm + '/' + y_yyyy;
    document.getElementById("output_todaysdate").innerHTML = today;
    document.getElementById("output_yesterdaysdate").innerHTML = yesterday;

}

function bubble_sort() {
    var x, i = 0;
    var outputstring = 0;
    var string_array = document.getElementById("string_array").value;
    var loops = Number(document.getElementById("loops").value);
    var array = string_array.split(",");
    for (;x <= array.length; x++) {
        Number(array[x]);
    }
    for (;i < loops; i++) {
        for (var ii = 0; ii < array.length; ii++) {
            if ((array[ii + 1]) < (array[ii])) {
                var relative = array[ii + 1];
                array[ii + 1] = array[ii];
                array[ii] = relative;
            }
        }

    }
    outputstring = array.toString();
    document.getElementById("sorted_array").innerHTML = outputstring;
}