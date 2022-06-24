var days = ['Su', 'Mo', 'Tu', 'We', 'Thu', 'Fr', 'Sa'];
var d = new Date(); 
var d2 = new Date();
var dayName = days[d.getDay()];
var year = d2.getFullYear();
var month = d2.getMonth()+1;

var easy_tasks =["excersise for 10 min", "clean something", "pick up trash", "play with dog"]
var hard_tasks =["excersise for 30 min", "clean house", "make dinner", "go kayaking for 60 min", "go biking for 60 min"]

function dayview(number) {
    document.getElementById("app-calendar1").innerHTML = "";
    document.getElementById("app-calendar2").innerHTML = "";
    document.getElementById("p0").innerHTML = "";
    const back = document.querySelector("#p0");
    back.insertAdjacentHTML("beforeend", `<p id="p0" style="text-align:left" onclick="back(0)"> <b> Back to calendar </b> </p>`);
    document.getElementById("p1").innerHTML = "";
    document.getElementById("p2").innerHTML = "";
    document.getElementById("month_year").innerHTML = number + "/" + month + "/" + year;
}

function reset() {
    step(0);
}


function step(number) {

    document.getElementById("app-calendar1").innerHTML = "";
    document.getElementById("app-calendar2").innerHTML = "";
    document.getElementById("month_year").innerHTML = "";
    //document.getElementById("p0").innerHTML = "";
    //document.getElementById("p2").innerHTML = "";

    whatMonth(number);

}

function back(number) {

    const previous = document.querySelector("#p0");
    const reset = document.querySelector("#p1")
    const next = document.querySelector("#p2");

    document.getElementById("p0").innerHTML = "";
    document.getElementById("p1").innerHTML = "";
    document.getElementById("p2").innerHTML = "";

    previous.insertAdjacentHTML("beforeend", `<p id="p0" style="text-align:left" onclick="step(0)"> <b> Previous </b> </p>`);
    reset.insertAdjacentHTML("beforeend", `<p id="p1" style="text-align:center" onclick="reset()"> <b> Reset </b> </p>`);
    next.insertAdjacentHTML("beforeend", `<p id="p2" style="text-align:right" onclick="step(0)"> <b> Next </b> </p>`);

    step(number+1);
}


function whatMonth(number) {

    const calendar1 = document.querySelector("#app-calendar1");
    const calendar2 = document.querySelector("#app-calendar2");
    const month_year = document.querySelector("#month_year");
    
    var newDate = new Date(d.setMonth(d.getMonth()+number));
 
    var date = newDate.getDate();

    month = month+number;

    if(month>12) {
        month = 1;
        year = year + 1;
    }

    if( month<1) {
        month = 12;
        year = year - 1;
    }

    month_year.insertAdjacentHTML("beforeend", `${month +"/"+year}`);

    var monthDays = 0;

    if(month==1) {
        monthDays = 31;
    }

    if(month==2) {
        if(year % 4 ==0 && year % 100 == 0 && year % year == 0) {
            monthDays = 29;          
        } else if (year % 4 ==0 && year % 100 == 0 && year % 400 != 0) {
            monthDays = 28;
        } else if (year % 4 ==0) {
            monthDays = 29;
        } else {
            monthDays = 28;
        }
    }

    if(month==3) {
        monthDays = 31;
    }

    if(month==4) {
        monthDays = 30;
    }

    if(month==5) {
        monthDays = 31;
    }

    if(month==6) {
        monthDays = 30;
    }

    if(month==7) {
        monthDays = 31;
    }

    if(month==8) {
        monthDays = 31;
    }

    if(month==9) {
        monthDays = 30;
    }

    if(month==10) {
        monthDays = 31;
    }

    if(month==11) {
        monthDays = 30;
    }

    if(month==12) {
        monthDays = 31;
    }

    var grid = 1;
    var b2 = 0;
    
    
     for(let i = 1; i < days.length; i++) {
        calendar1.insertAdjacentHTML("beforeend", `<div class="daynames"><b>${days[i]}</b></div>`);
     }
    calendar1.insertAdjacentHTML("beforeend", `<div class="daynames"><b>${days[0]}</b></div>`);

    while(grid<=42) {

        calendar2.insertAdjacentHTML("beforeend", `<div class="day"></div>`);

        var paiva = (newDate.getDay()-date+b2)%7;
        
            if(paiva<=0) {
                paiva=paiva+7;
            }
            if(paiva==7) {
               
                
            } 
            //else {
            //    calendar2.insertAdjacentHTML("beforeend", `<div class="day"></div>`);
            //}
            //console.log(paiva)

        if(grid==paiva ) {

            for(let b = 1; b <= monthDays; b++) {


                paiva = (newDate.getDay()-date+b)%7;
        
                if(paiva<0) {
                    paiva=paiva+7;
                }
                
                
                var random0 = easy_tasks[Math.floor(Math.random()*easy_tasks.length)];
                var random1 = hard_tasks[Math.floor(Math.random()*hard_tasks.length)];
                var random2 = Math.floor(Math.random() * 2);
                
                var random3 = Math.floor(Math.random() * 3);


                if(random3==1 && random2==0) {
                    calendar2.insertAdjacentHTML("beforeend", `<div class="day"${` id=div"` + b + ` onclick="dayview(` + b +  `)";>` + "<b>" + b + "</b>" + " <br> " + random0}</div>`);
                }
                else if(random3==1 && random2==1) {
                    calendar2.insertAdjacentHTML("beforeend", `<div class="day"${` id=div"` + b + ` onclick="dayview(` + b + `)";>` + "<b>" + b + "</b>" + " <br> " +  `<p style="color:red";>` + random1 + "</p>"}</div>`);
                }
                else {
                    calendar2.insertAdjacentHTML("beforeend", `<div class="day"${` id=div"` + b + ` onclick="dayview(` + b + `)";>` + b}</div>`);
                }
                        
                grid++;
                
            }

        }
        grid++;
        
    }
    
}