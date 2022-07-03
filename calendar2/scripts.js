var days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
var days2 = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
var d = new Date(); 
var d2 = new Date();
var dayName = days[d.getDay()];
var year = d2.getFullYear();
var month = d2.getMonth()+1;
var now = d2.getHours();
var today = d2.getDate();
var display = 0;
var score = 0;

var easy_tasks =["Do 10 pushups", "Do 10 abs", "Clean something", "Pick up 2 trashes outside", "Play with dog", "Walk 10 floors up"]
var hard_tasks =["Exercise for 30 min", "Clean house", "Go kayaking for 60 min", "Go biking for 60 min"]


function dayview(number, number2) {
    display = 1;
    document.getElementById("app-calendar1").innerHTML = "";
    document.getElementById("app-calendar2").innerHTML = "";
    document.getElementById("p0").innerHTML = "";
    const back = document.querySelector("#p0");
    back.insertAdjacentHTML("beforeend", `<p id="p0" style="text-align:left" onclick="back(0)"> <b> Back to calendar </b> </p>`);
    document.getElementById("p1").innerHTML = "";
    document.getElementById("p2").innerHTML = "";
    document.getElementById("month_year").innerHTML = number + "/" + month + "/" + year;

    var x =0;
    var dayName2 = days2[number2];
    const topic = document.querySelector("#tasks0");
    topic.insertAdjacentHTML("beforeend", `<div class="topic";> ${ "<b>" +  dayName2 + "</b>"}</div>`);

    const etasks = document.querySelector("#tasks1");

    for(let hour = 1; hour <= 24; hour++) {
        var previous = hour-1;
        var random1 = Math.floor(Math.random() * 3);
        var random2 = easy_tasks[Math.floor(Math.random()*easy_tasks.length)];
        var random3 = Math.floor(Math.random() * 15);
        var random4 = hard_tasks[Math.floor(Math.random()*hard_tasks.length)];

        if(now+1==hour && number==today && month == d2.getMonth()+1 && year == d2.getFullYear()) {
            etasks.insertAdjacentHTML("beforeend", `<div class="now"${` id="divhour` + hour + `";>` + "<b>"+ previous + ":00" + "-" + hour + ":00 <br>" + "Now" + "</b>"}</div>`);
            x = hour;    
        }

        else if(now+1<hour &&hour==18 && number==today && month == d2.getMonth()+1 && year == d2.getFullYear() && number%2==0) {
            etasks.insertAdjacentHTML("beforeend", `<div class="hour"${` id="divhour` + hour + `";>` + previous + ":00" + "-" + hour + ":00 <br>" + `<a href="https://kisyys.github.io/kasvis/">Plan a dinner</a>`}</div>`);         
        }
        else if(hour==18 && number!=today && number%2==0 || hour==18 && number==today && month != d2.getMonth()+1 && number%2==0 ) {
            etasks.insertAdjacentHTML("beforeend", `<div class="hour"${` id="divhour` + hour + `";>` + previous + ":00" + "-" + hour + ":00 <br>" + `<a href="https://kisyys.github.io/kasvis/">Plan a dinner</a>`}</div>`);          
        }
        else if(now+1<hour && 10<hour && 21>=hour && number==today && month == d2.getMonth()+1 && year == d2.getFullYear() && random3==0) {
            etasks.insertAdjacentHTML("beforeend", `<div class="hour"${` id="divhour` + hour + `";>` + previous + ":00" + "-" + hour + ":00 <br>" + `<p style="color:red";>` + random4 + "</p>"}</div>`); 
        }
        else if(10<hour && 21>=hour && number!=today && random3==0 || 10<hour && 21>=hour && number==today && month != d2.getMonth()+1 && year && random3==0 ) {
            etasks.insertAdjacentHTML("beforeend", `<div class="hour"${` id="divhour` + hour + `";>` + previous + ":00" + "-" + hour + ":00 <br>" + `<p style="color:red";>` + random4 + "</p>"}</div>`);
        }
        else if(now<hour && 10<hour && 21>=hour && number==today && month == d2.getMonth()+1 && year == d2.getFullYear() && random1==0) {
            etasks.insertAdjacentHTML("beforeend", `<div class="hour"${` id="divhour` + hour + `";>` + previous + ":00" + "-" + hour + ":00 <br>" + `<p style="color:green";>` + random2 + "</p>"}</div>`); 
        }
        else if(10<hour && 21>=hour && number!=today && random1==0 || 10<hour && 21>=hour && number==today && month != d2.getMonth()+1 && year && random1==0) {
            etasks.insertAdjacentHTML("beforeend", `<div class="hour"${` id="divhour` + hour + `";>` + previous + ":00" + "-" + hour + ":00 <br>" + `<p style="color:green";>` + random2 + "</p>"}</div>`);
        }
        else {
            etasks.insertAdjacentHTML("beforeend", `<div class="hour"${` id="divhour` + hour + `";>` + previous + ":00" + "-" + hour + ":00"}</div>`);  
        }  
    }

    // if(number==1 & month==5) {
    //     const htasks = document.querySelector("#tasks2");
    //     htasks.insertAdjacentHTML("beforeend", `<h2> Happy Birthday Panki! </h2> <br> <img src="Panki.jpg" alt="";></img>`);
    // }

    if(x>0) {
        const element = document.getElementById(`divhour${x}`);
        element.scrollIntoView();
    }
    
    divhour18.addEventListener('touchstart', handleTouchStart, false);        
    divhour18.addEventListener('touchmove', handleTouchMove, false);

    var xDown = null;                                                        
    var yDown = null;

    function getTouches(evt) {
    return evt.touches ||             // browser API
            evt.originalEvent.touches; // jQuery
    }                                                     
                                                                            
    function handleTouchStart(evt) {
        const firstTouch = getTouches(evt)[0];                                      
        xDown = firstTouch.clientX;                                      
        yDown = firstTouch.clientY;                                      
    };                                                
                                                                            
    function handleTouchMove(evt) {
        if ( ! xDown || ! yDown ) {
            return;
        }

        var xUp = evt.touches[0].clientX;                                    
        var yUp = evt.touches[0].clientY;

        var xDiff = xDown - xUp;
        var yDiff = yDown - yUp;
                                                                            
        if ( Math.abs( xDiff ) > Math.abs( yDiff ) ) {/*most significant*/
            if ( xDiff > 0 ) {
                /* left swipe */
              
            } else {
                /* right swipe */
                if(display == 1) {
                    //score++;
                    document.getElementById("divhour18").innerHTML = "";
                    //document.getElementById("tasks2").innerHTML = "";
                    //const score = document.querySelector("#tasks2");
                    //score.insertAdjacentHTML("beforeend", `<b> Score: 1  </b>`);
                }
                
            }                       
        } else {
            if ( yDiff > 0 ) {
                /* down swipe */ 
            } else { 
                /* up swipe */
            }                                                                 
        }
        /* reset values */
        xDown = null;
        yDown = null;                                             
    };

}


function step(number) {

    document.getElementById("app-calendar1").innerHTML = "";
    document.getElementById("app-calendar2").innerHTML = "";
    document.getElementById("month_year").innerHTML = "";
    document.getElementById("tasks0").innerHTML = "";
    document.getElementById("tasks1").innerHTML = "";
    document.getElementById("tasks2").innerHTML = "";

    whatMonth(number);
}

function back(number) {
    display = 0;
    const previous = document.querySelector("#p0");
    //const reset = document.querySelector("#p1")
    const next = document.querySelector("#p2");

    document.getElementById("p0").innerHTML = "";
    document.getElementById("p1").innerHTML = "";
    document.getElementById("p2").innerHTML = "";

    previous.insertAdjacentHTML("beforeend", `<p id="p0" style="text-align:left" onclick="step(0)"> <b> Previous </b> </p>`);
    //reset.insertAdjacentHTML("beforeend", `<p id="p1" style="text-align:center" onclick="reset()"> <b> Reset </b> </p>`);
    next.insertAdjacentHTML("beforeend", `<p id="p2" style="text-align:right" onclick="step(0)"> <b> Next </b> </p>`);

    step(number+1);
}


function whatMonth(number) {

    const calendar1 = document.querySelector("#app-calendar1");
    const calendar2 = document.querySelector("#app-calendar2");
    const month_year = document.querySelector("#month_year");
    
    var newDate = new Date(d.setMonth(d.getMonth()+number));
    var beginning = new Date(newDate.setDate(newDate.getDate()-(newDate.getDate()-1)));

    month = month+number;

    if(month>12) {
        month = 1;
        year = year + 1;
    }

    if(month<1) {
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
    var g = 0;
        
    for(let i = 1; i < days.length; i++) {
        calendar1.insertAdjacentHTML("beforeend", `<div class="daynames"><b>${days[i]}</b></div>`);
    }

    calendar1.insertAdjacentHTML("beforeend", `<div class="daynames"><b>${days[0]}</b></div>`);

    while(grid<=42) {

        if(g>6) {
            g = 0;
        }
    
        if(grid==beginning.getDay() || beginning.getDay()==1 && grid<8 || grid==7 ) {

            for(let day = 1; day <= monthDays; day++) {

                if(g>6) {
                    g = 0;
                }
          
                if(day==1 && month==5) {
                    calendar2.insertAdjacentHTML("beforeend", `<div class="day"${` id="divday` + day + `" onclick="dayview(` + day + "," + g +`)";>` + "<b>" + day + "</b>" + "<br>" + "<b>" + "Panki" + "</b>"}</div>`);
                }

                else if(day==today && month == d2.getMonth()+1 && year == d2.getFullYear()) {
                    calendar2.insertAdjacentHTML("beforeend", `<div class="today"${` id="divday` + day + `" onclick="dayview(` + day + "," + g +`)";>` + "<b>" + day + "</b>" + " <br> " + "<b>" + "Today" + "</b>"}</div>`);
                }

                else {
                    calendar2.insertAdjacentHTML("beforeend", `<div class="day"${` id="divday` + day + `" onclick="dayview(` + day + "," + g +`)";>` + day}</div>`);
                }
                        
                grid++;
                g++;               
            }

        }

        calendar2.insertAdjacentHTML("beforeend", `<div class="day"></div>`);

        grid++;
        g++;       
    }   
}

// document.addEventListener('touchstart', handleTouchStart, false);        
// document.addEventListener('touchmove', handleTouchMove, false);


// var xDown = null;                                                        
// var yDown = null;

// function getTouches(evt) {
//   return evt.touches ||             // browser API
//          evt.originalEvent.touches; // jQuery
// }                                                     
                                                                         
// function handleTouchStart(evt) {
//     const firstTouch = getTouches(evt)[0];                                      
//     xDown = firstTouch.clientX;                                      
//     yDown = firstTouch.clientY;                                      
// };                                                
                                                                         
// function handleTouchMove(evt) {
//     if ( ! xDown || ! yDown ) {
//         return;
//     }

//     var xUp = evt.touches[0].clientX;                                    
//     var yUp = evt.touches[0].clientY;

//     var xDiff = xDown - xUp;
//     var yDiff = yDown - yUp;
                                                                         
//     if ( Math.abs( xDiff ) > Math.abs( yDiff ) ) {/*most significant*/
//         if ( xDiff > 0 ) {
//             /* left swipe */
//             if(display == 0) {
//                 step(1);
//             }
            
//         } else {
//             /* right swipe */
//             if(display == 0) {
//                 step(-1);
//             }
            
//         }                       
//     } else {
//         if ( yDiff > 0 ) {
//             /* down swipe */ 
//         } else { 
//             /* up swipe */
//         }                                                                 
//     }
//     /* reset values */
//     xDown = null;
//     yDown = null;                                             
// };
