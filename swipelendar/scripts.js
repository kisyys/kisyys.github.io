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

var list_divhourtasks = [];

var easy_tasks =["Do 10 pushups", "Do 10 abs", "Clean something", "Pick up 2 trashes outside", "Play with dog", "Walk 10 floors up"]
var hard_tasks =["Exercise for 30 min", "Clean house", "Go kayaking for 60 min", "Go biking for 60 min"]


function dayview(number, number2) {
    list_divhourtasks = [];
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
    topic.insertAdjacentHTML("beforeend", `<div class="topic";> ${ "<b>" +  dayName2 + " - Test10" +  "</b>"}</div>`);

    const etasks = document.querySelector("#tasks1");

    for(let hour = 1; hour <= 24; hour++) {
        var previous = hour-1;
        var random1 = Math.floor(Math.random() * 3);
        var random2 = easy_tasks[Math.floor(Math.random()*easy_tasks.length)];
        var random3 = Math.floor(Math.random() * 15);
        var random4 = hard_tasks[Math.floor(Math.random()*hard_tasks.length)];

        if(now+1==hour && number==today && month == d2.getMonth()+1 && year == d2.getFullYear()) {
            etasks.insertAdjacentHTML("beforeend", `<div class="now"${` id="divhour` + hour + `";>` + `<p style="color:black";>` + "<b>"+ previous + ":00" + "-" + hour + ":00" + "  " +  "<br>" + "Now" + "</b>" + "</p>"}</div>`);
            x = hour;    
        }

        else if(now+1<hour &&hour==18 && number==today && month == d2.getMonth()+1 && year == d2.getFullYear() && number%2==0) {
            etasks.insertAdjacentHTML("beforeend", `<div class="hourdinner"${` id="divhourtask` + hour + `";>` + `<p style="color:black";>` + previous + ":00" + "-" + hour + ":00" + "  " + "</p>" + `<a style="color:blue" href="https://kisyys.github.io/kasvis/">Plan a dinner</a>`}</div>`);
            list_divhourtasks.push("divhourtask" + hour);         
        }
        else if(hour==18 && number!=today && number%2==0 || hour==18 && number==today && month != d2.getMonth()+1 && number%2==0 ) {
            etasks.insertAdjacentHTML("beforeend", `<div class="hourdinner"${` id="divhourtask` + hour + `";>` + `<p style="color:black";>` + previous + ":00" + "-" + hour + ":00" + "  " + "</p>" + `<a style="color:blue" href="https://kisyys.github.io/kasvis/">Plan a dinner</a>`}</div>`);
            list_divhourtasks.push("divhourtask" + hour);           
        }
        else if(now+1<hour && 10<hour && 21>=hour && number==today && month == d2.getMonth()+1 && year == d2.getFullYear() && random3==0) {
            etasks.insertAdjacentHTML("beforeend", `<div class="hourhard"${` id="divhourtask` + hour + `";>` + `<p style="color:black";>` + previous + ":00" + "-" + hour + ":00" + "  " + "</p>" + random4}</div>`);
            list_divhourtasks.push("divhourtask" + hour);  
        }
        else if(10<hour && 21>=hour && number!=today && random3==0 || 10<hour && 21>=hour && number==today && month != d2.getMonth()+1 && year && random3==0 ) {
            etasks.insertAdjacentHTML("beforeend", `<div class="hourhard"${` id="divhourtask` + hour + `";>` + `<p style="color:black";>` + previous + ":00" + "-" + hour + ":00" + "  " + "</p>" + random4}</div>`);
            list_divhourtasks.push("divhourtask" + hour); 
        }
        else if(now<hour && 10<hour && 21>=hour && number==today && month == d2.getMonth()+1 && year == d2.getFullYear() && random1==0) {
            etasks.insertAdjacentHTML("beforeend", `<div class="houreasy"${` id="divhourtask` + hour + `";>` + `<p style="color:black";>` + previous + ":00" + "-" + hour + ":00" + "  " + "</p>" +  random2}</div>`);
            list_divhourtasks.push("divhourtask" + hour);  
        }
        else if(10<hour && 21>=hour && number!=today && random1==0 || 10<hour && 21>=hour && number==today && month != d2.getMonth()+1 && year && random1==0) {
            etasks.insertAdjacentHTML("beforeend", `<div class="houreasy"${` id="divhourtask` + hour + `";>` + `<p style="color:black";>` + previous + ":00" + "-" + hour + ":00" + "  " + "</p>" + random2}</div>`);
            list_divhourtasks.push("divhourtask" + hour); 
        }
        else {
            etasks.insertAdjacentHTML("beforeend", `<div class="hour"${` id="divhour` + hour + `";>` + `<p style="color:black";>` + previous + ":00" + "-" + hour + ":00" + "  " + "</p>"}</div>`);  
        }  
    }

    if(x>0) {
        const element = document.getElementById(`divhour${x}`);
        element.scrollIntoView();
    }

    var vars = [];

    for (var i = 0; i <= 10; ++i) {
        vars[i] = "listener"+i;
    }

    if(list_divhourtasks.length<1) {

    }

    else if(list_divhourtasks.length<=1) {
        var numb2 = 0;
        vars[numb2] = document.getElementById(list_divhourtasks[numb2]);
        vars[numb2].addEventListener('touchstart', handleTouchStart, false);
        vars[numb2].addEventListener('touchmove', handleTouchMove0, false);
    }

    else if(list_divhourtasks.length<=2) {
        var numb2 = 0;
        vars[numb2] = document.getElementById(list_divhourtasks[numb2]);
        vars[numb2].addEventListener('touchstart', handleTouchStart, false);
        vars[numb2].addEventListener('touchmove', handleTouchMove0, false);
        numb2 = 1;
        vars[numb2] = document.getElementById(list_divhourtasks[numb2]);
        vars[numb2].addEventListener('touchstart', handleTouchStart, false);
        vars[numb2].addEventListener('touchmove', handleTouchMove1, false);
    }

    else if(list_divhourtasks.length<=3) {
        var numb2 = 0;
        vars[numb2] = document.getElementById(list_divhourtasks[numb2]);
        vars[numb2].addEventListener('touchstart', handleTouchStart, false);
        vars[numb2].addEventListener('touchmove', handleTouchMove0, false);
        numb2 = 1;
        vars[numb2] = document.getElementById(list_divhourtasks[numb2]);
        vars[numb2].addEventListener('touchstart', handleTouchStart, false);
        vars[numb2].addEventListener('touchmove', handleTouchMove1, false);
        numb2 = 2;
        vars[numb2] = document.getElementById(list_divhourtasks[numb2]);
        vars[numb2].addEventListener('touchstart', handleTouchStart, false);
        vars[numb2].addEventListener('touchmove', handleTouchMove2, false);
    }

    else if(list_divhourtasks.length<=4) {
        var numb2 = 0;
        vars[numb2] = document.getElementById(list_divhourtasks[numb2]);
        vars[numb2].addEventListener('touchstart', handleTouchStart, false);
        vars[numb2].addEventListener('touchmove', handleTouchMove0, false);
        numb2 = 1;
        vars[numb2] = document.getElementById(list_divhourtasks[numb2]);
        vars[numb2].addEventListener('touchstart', handleTouchStart, false);
        vars[numb2].addEventListener('touchmove', handleTouchMove1, false);
        numb2 = 2;
        vars[numb2] = document.getElementById(list_divhourtasks[numb2]);
        vars[numb2].addEventListener('touchstart', handleTouchStart, false);
        vars[numb2].addEventListener('touchmove', handleTouchMove2, false);
        numb2 = 3;
        vars[numb2] = document.getElementById(list_divhourtasks[numb2]);
        vars[numb2].addEventListener('touchstart', handleTouchStart, false);
        vars[numb2].addEventListener('touchmove', handleTouchMove3, false);
    }

    else if(list_divhourtasks.length<=5) {
        var numb2 = 0;
        vars[numb2] = document.getElementById(list_divhourtasks[numb2]);
        vars[numb2].addEventListener('touchstart', handleTouchStart, false);
        vars[numb2].addEventListener('touchmove', handleTouchMove0, false);
        numb2 = 1;
        vars[numb2] = document.getElementById(list_divhourtasks[numb2]);
        vars[numb2].addEventListener('touchstart', handleTouchStart, false);
        vars[numb2].addEventListener('touchmove', handleTouchMove1, false);
        numb2 = 2;
        vars[numb2] = document.getElementById(list_divhourtasks[numb2]);
        vars[numb2].addEventListener('touchstart', handleTouchStart, false);
        vars[numb2].addEventListener('touchmove', handleTouchMove2, false);
        numb2 = 3;
        vars[numb2] = document.getElementById(list_divhourtasks[numb2]);
        vars[numb2].addEventListener('touchstart', handleTouchStart, false);
        vars[numb2].addEventListener('touchmove', handleTouchMove3, false);
        numb2 = 4;
        vars[numb2] = document.getElementById(list_divhourtasks[numb2]);
        vars[numb2].addEventListener('touchstart', handleTouchStart, false);
        vars[numb2].addEventListener('touchmove', handleTouchMove4, false);
    }

    else if(list_divhourtasks.length<=6) {
        var numb2 = 0;
        vars[numb2] = document.getElementById(list_divhourtasks[numb2]);
        vars[numb2].addEventListener('touchstart', handleTouchStart, false);
        vars[numb2].addEventListener('touchmove', handleTouchMove0, false);
        numb2 = 1;
        vars[numb2] = document.getElementById(list_divhourtasks[numb2]);
        vars[numb2].addEventListener('touchstart', handleTouchStart, false);
        vars[numb2].addEventListener('touchmove', handleTouchMove1, false);
        numb2 = 2;
        vars[numb2] = document.getElementById(list_divhourtasks[numb2]);
        vars[numb2].addEventListener('touchstart', handleTouchStart, false);
        vars[numb2].addEventListener('touchmove', handleTouchMove2, false);
        numb2 = 3;
        vars[numb2] = document.getElementById(list_divhourtasks[numb2]);
        vars[numb2].addEventListener('touchstart', handleTouchStart, false);
        vars[numb2].addEventListener('touchmove', handleTouchMove3, false);
        numb2 = 4;
        vars[numb2] = document.getElementById(list_divhourtasks[numb2]);
        vars[numb2].addEventListener('touchstart', handleTouchStart, false);
        vars[numb2].addEventListener('touchmove', handleTouchMove4, false);
        numb2 = 5;
        vars[numb2] = document.getElementById(list_divhourtasks[numb2]);
        vars[numb2].addEventListener('touchstart', handleTouchStart, false);
        vars[numb2].addEventListener('touchmove', handleTouchMove5, false);
    }

    else if(list_divhourtasks.length<=7) {
        var numb2 = 0;
        vars[numb2] = document.getElementById(list_divhourtasks[numb2]);
        vars[numb2].addEventListener('touchstart', handleTouchStart, false);
        vars[numb2].addEventListener('touchmove', handleTouchMove0, false);
        numb2 = 1;
        vars[numb2] = document.getElementById(list_divhourtasks[numb2]);
        vars[numb2].addEventListener('touchstart', handleTouchStart, false);
        vars[numb2].addEventListener('touchmove', handleTouchMove1, false);
        numb2 = 2;
        vars[numb2] = document.getElementById(list_divhourtasks[numb2]);
        vars[numb2].addEventListener('touchstart', handleTouchStart, false);
        vars[numb2].addEventListener('touchmove', handleTouchMove2, false);
        numb2 = 3;
        vars[numb2] = document.getElementById(list_divhourtasks[numb2]);
        vars[numb2].addEventListener('touchstart', handleTouchStart, false);
        vars[numb2].addEventListener('touchmove', handleTouchMove3, false);
        numb2 = 4;
        vars[numb2] = document.getElementById(list_divhourtasks[numb2]);
        vars[numb2].addEventListener('touchstart', handleTouchStart, false);
        vars[numb2].addEventListener('touchmove', handleTouchMove4, false);
        numb2 = 5;
        vars[numb2] = document.getElementById(list_divhourtasks[numb2]);
        vars[numb2].addEventListener('touchstart', handleTouchStart, false);
        vars[numb2].addEventListener('touchmove', handleTouchMove5, false);
        numb2 = 6;
        vars[numb2] = document.getElementById(list_divhourtasks[numb2]);
        vars[numb2].addEventListener('touchstart', handleTouchStart, false);
        vars[numb2].addEventListener('touchmove', handleTouchMove6, false);
    }

    else if(list_divhourtasks.length<=8) {
        var numb2 = 0;
        vars[numb2] = document.getElementById(list_divhourtasks[numb2]);
        vars[numb2].addEventListener('touchstart', handleTouchStart, false);
        vars[numb2].addEventListener('touchmove', handleTouchMove0, false);
        numb2 = 1;
        vars[numb2] = document.getElementById(list_divhourtasks[numb2]);
        vars[numb2].addEventListener('touchstart', handleTouchStart, false);
        vars[numb2].addEventListener('touchmove', handleTouchMove1, false);
        numb2 = 2;
        vars[numb2] = document.getElementById(list_divhourtasks[numb2]);
        vars[numb2].addEventListener('touchstart', handleTouchStart, false);
        vars[numb2].addEventListener('touchmove', handleTouchMove2, false);
        numb2 = 3;
        vars[numb2] = document.getElementById(list_divhourtasks[numb2]);
        vars[numb2].addEventListener('touchstart', handleTouchStart, false);
        vars[numb2].addEventListener('touchmove', handleTouchMove3, false);
        numb2 = 4;
        vars[numb2] = document.getElementById(list_divhourtasks[numb2]);
        vars[numb2].addEventListener('touchstart', handleTouchStart, false);
        vars[numb2].addEventListener('touchmove', handleTouchMove4, false);
        numb2 = 5;
        vars[numb2] = document.getElementById(list_divhourtasks[numb2]);
        vars[numb2].addEventListener('touchstart', handleTouchStart, false);
        vars[numb2].addEventListener('touchmove', handleTouchMove5, false);
        numb2 = 6;
        vars[numb2] = document.getElementById(list_divhourtasks[numb2]);
        vars[numb2].addEventListener('touchstart', handleTouchStart, false);
        vars[numb2].addEventListener('touchmove', handleTouchMove6, false);
        numb2 = 7;
        vars[numb2] = document.getElementById(list_divhourtasks[numb2]);
        vars[numb2].addEventListener('touchstart', handleTouchStart, false);
        vars[numb2].addEventListener('touchmove', handleTouchMove7, false);
    }

    else if(list_divhourtasks.length<=9) {
        var numb2 = 0;
        vars[numb2] = document.getElementById(list_divhourtasks[numb2]);
        vars[numb2].addEventListener('touchstart', handleTouchStart, false);
        vars[numb2].addEventListener('touchmove', handleTouchMove0, false);
        numb2 = 1;
        vars[numb2] = document.getElementById(list_divhourtasks[numb2]);
        vars[numb2].addEventListener('touchstart', handleTouchStart, false);
        vars[numb2].addEventListener('touchmove', handleTouchMove1, false);
        numb2 = 2;
        vars[numb2] = document.getElementById(list_divhourtasks[numb2]);
        vars[numb2].addEventListener('touchstart', handleTouchStart, false);
        vars[numb2].addEventListener('touchmove', handleTouchMove2, false);
        numb2 = 3;
        vars[numb2] = document.getElementById(list_divhourtasks[numb2]);
        vars[numb2].addEventListener('touchstart', handleTouchStart, false);
        vars[numb2].addEventListener('touchmove', handleTouchMove3, false);
        numb2 = 4;
        vars[numb2] = document.getElementById(list_divhourtasks[numb2]);
        vars[numb2].addEventListener('touchstart', handleTouchStart, false);
        vars[numb2].addEventListener('touchmove', handleTouchMove4, false);
        numb2 = 5;
        vars[numb2] = document.getElementById(list_divhourtasks[numb2]);
        vars[numb2].addEventListener('touchstart', handleTouchStart, false);
        vars[numb2].addEventListener('touchmove', handleTouchMove5, false);
        numb2 = 6;
        vars[numb2] = document.getElementById(list_divhourtasks[numb2]);
        vars[numb2].addEventListener('touchstart', handleTouchStart, false);
        vars[numb2].addEventListener('touchmove', handleTouchMove6, false);
        numb2 = 7;
        vars[numb2] = document.getElementById(list_divhourtasks[numb2]);
        vars[numb2].addEventListener('touchstart', handleTouchStart, false);
        vars[numb2].addEventListener('touchmove', handleTouchMove7, false);
        numb2 = 8;
        vars[numb2] = document.getElementById(list_divhourtasks[numb2]);
        vars[numb2].addEventListener('touchstart', handleTouchStart, false);
        vars[numb2].addEventListener('touchmove', handleTouchMove8, false);
    }

    else if(list_divhourtasks.length<=10) {
        var numb2 = 0;
        vars[numb2] = document.getElementById(list_divhourtasks[numb2]);
        vars[numb2].addEventListener('touchstart', handleTouchStart, false);
        vars[numb2].addEventListener('touchmove', handleTouchMove0, false);
        numb2 = 1;
        vars[numb2] = document.getElementById(list_divhourtasks[numb2]);
        vars[numb2].addEventListener('touchstart', handleTouchStart, false);
        vars[numb2].addEventListener('touchmove', handleTouchMove1, false);
        numb2 = 2;
        vars[numb2] = document.getElementById(list_divhourtasks[numb2]);
        vars[numb2].addEventListener('touchstart', handleTouchStart, false);
        vars[numb2].addEventListener('touchmove', handleTouchMove2, false);
        numb2 = 3;
        vars[numb2] = document.getElementById(list_divhourtasks[numb2]);
        vars[numb2].addEventListener('touchstart', handleTouchStart, false);
        vars[numb2].addEventListener('touchmove', handleTouchMove3, false);
        numb2 = 4;
        vars[numb2] = document.getElementById(list_divhourtasks[numb2]);
        vars[numb2].addEventListener('touchstart', handleTouchStart, false);
        vars[numb2].addEventListener('touchmove', handleTouchMove4, false);
        numb2 = 5;
        vars[numb2] = document.getElementById(list_divhourtasks[numb2]);
        vars[numb2].addEventListener('touchstart', handleTouchStart, false);
        vars[numb2].addEventListener('touchmove', handleTouchMove5, false);
        numb2 = 6;
        vars[numb2] = document.getElementById(list_divhourtasks[numb2]);
        vars[numb2].addEventListener('touchstart', handleTouchStart, false);
        vars[numb2].addEventListener('touchmove', handleTouchMove6, false);
        numb2 = 7;
        vars[numb2] = document.getElementById(list_divhourtasks[numb2]);
        vars[numb2].addEventListener('touchstart', handleTouchStart, false);
        vars[numb2].addEventListener('touchmove', handleTouchMove7, false);
        numb2 = 8;
        vars[numb2] = document.getElementById(list_divhourtasks[numb2]);
        vars[numb2].addEventListener('touchstart', handleTouchStart, false);
        vars[numb2].addEventListener('touchmove', handleTouchMove8, false);
        numb2 = 9;
        vars[numb2] = document.getElementById(list_divhourtasks[numb2]);
        vars[numb2].addEventListener('touchstart', handleTouchStart, false);
        vars[numb2].addEventListener('touchmove', handleTouchMove9, false);
    }

    else if(list_divhourtasks.length<=11) {
        var numb2 = 0;
        vars[numb2] = document.getElementById(list_divhourtasks[numb2]);
        vars[numb2].addEventListener('touchstart', handleTouchStart, false);
        vars[numb2].addEventListener('touchmove', handleTouchMove0, false);
        numb2 = 1;
        vars[numb2] = document.getElementById(list_divhourtasks[numb2]);
        vars[numb2].addEventListener('touchstart', handleTouchStart, false);
        vars[numb2].addEventListener('touchmove', handleTouchMove1, false);
        numb2 = 2;
        vars[numb2] = document.getElementById(list_divhourtasks[numb2]);
        vars[numb2].addEventListener('touchstart', handleTouchStart, false);
        vars[numb2].addEventListener('touchmove', handleTouchMove2, false);
        numb2 = 3;
        vars[numb2] = document.getElementById(list_divhourtasks[numb2]);
        vars[numb2].addEventListener('touchstart', handleTouchStart, false);
        vars[numb2].addEventListener('touchmove', handleTouchMove3, false);
        numb2 = 4;
        vars[numb2] = document.getElementById(list_divhourtasks[numb2]);
        vars[numb2].addEventListener('touchstart', handleTouchStart, false);
        vars[numb2].addEventListener('touchmove', handleTouchMove4, false);
        numb2 = 5;
        vars[numb2] = document.getElementById(list_divhourtasks[numb2]);
        vars[numb2].addEventListener('touchstart', handleTouchStart, false);
        vars[numb2].addEventListener('touchmove', handleTouchMove5, false);
        numb2 = 6;
        vars[numb2] = document.getElementById(list_divhourtasks[numb2]);
        vars[numb2].addEventListener('touchstart', handleTouchStart, false);
        vars[numb2].addEventListener('touchmove', handleTouchMove6, false);
        numb2 = 7;
        vars[numb2] = document.getElementById(list_divhourtasks[numb2]);
        vars[numb2].addEventListener('touchstart', handleTouchStart, false);
        vars[numb2].addEventListener('touchmove', handleTouchMove7, false);
        numb2 = 8;
        vars[numb2] = document.getElementById(list_divhourtasks[numb2]);
        vars[numb2].addEventListener('touchstart', handleTouchStart, false);
        vars[numb2].addEventListener('touchmove', handleTouchMove8, false);
        numb2 = 9;
        vars[numb2] = document.getElementById(list_divhourtasks[numb2]);
        vars[numb2].addEventListener('touchstart', handleTouchStart, false);
        vars[numb2].addEventListener('touchmove', handleTouchMove9, false);
        numb2 = 10;
        vars[numb2] = document.getElementById(list_divhourtasks[numb2]);
        vars[numb2].addEventListener('touchstart', handleTouchStart, false);
        vars[numb2].addEventListener('touchmove', handleTouchMove10, false);
    }

    var xDown = null;                                                        
    var yDown = null;

    function done(numberx) {
        score++;
        var div = document.getElementById(list_divhourtasks[numberx]);
        var t = div.textContent;
        var t2 = t.split("  ");
        div.innerHTML = `<p style="color:black";>` + t2[0] + "  " + "</p>" +  "<del>" + t2[1] + "</del>";
        document.getElementById("tasks2").innerHTML = "";
        const score2 = document.querySelector("#tasks2");
        score2.insertAdjacentHTML("beforeend", "<b> Score: " + score + "</b>");
    }


    function getTouches(evt) {
        return evt.touches ||             // browser API
                evt.originalEvent.touches; // jQuery
    }                                                     
                                                                            
    function handleTouchStart(evt) {
        const firstTouch = getTouches(evt)[0];                                      
        xDown = firstTouch.clientX;                                      
        yDown = firstTouch.clientY;                                      
    };                                                
                                                                            
    function handleTouchMove0(evt) {
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
                var numb = 0;
                var content = document.getElementById(list_divhourtasks[numb]).innerHTML;
                if(display == 1 && !content.includes("<del>"))  {                
                    done(numb);
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

    function handleTouchMove1(evt) {
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
                var numb = 1;
                var content = document.getElementById(list_divhourtasks[numb]).innerHTML;
                if(display == 1 && !content.includes("<del>"))  {                
                    done(numb);
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

    function handleTouchMove2(evt) {
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
                var numb = 2;
                var content = document.getElementById(list_divhourtasks[numb]).innerHTML;
                if(display == 1 && !content.includes("<del>"))  {                
                    done(numb);
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

    function handleTouchMove3(evt) {
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
                var numb = 3;
                var content = document.getElementById(list_divhourtasks[numb]).innerHTML;
                if(display == 1 && !content.includes("<del>"))  {                
                    done(numb);
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

    function handleTouchMove4(evt) {
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
                var numb = 4;
                var content = document.getElementById(list_divhourtasks[numb]).innerHTML;
                if(display == 1 && !content.includes("<del>"))  {                
                    done(numb);
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

    function handleTouchMove5(evt) {
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
                var numb = 5;
                var content = document.getElementById(list_divhourtasks[numb]).innerHTML;
                if(display == 1 && !content.includes("<del>"))  {                
                    done(numb);
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

    function handleTouchMove6(evt) {
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
                var numb = 6;
                var content = document.getElementById(list_divhourtasks[numb]).innerHTML;
                if(display == 1 && !content.includes("<del>"))  {                
                    done(numb);
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

    function handleTouchMove7(evt) {
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
                var numb = 7;
                var content = document.getElementById(list_divhourtasks[numb]).innerHTML;
                if(display == 1 && !content.includes("<del>"))  {                
                    done(numb);
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

    function handleTouchMove8(evt) {
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
                var numb = 8;
                var content = document.getElementById(list_divhourtasks[numb]).innerHTML;
                if(display == 1 && !content.includes("<del>"))  {                
                    done(numb);
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

    function handleTouchMove9(evt) {
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
                var numb = 9;
                var content = document.getElementById(list_divhourtasks[numb]).innerHTML;
                if(display == 1 && !content.includes("<del>"))  {                
                    done(numb);
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

    function handleTouchMove10(evt) {
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
                var numb = 10;
                var content = document.getElementById(list_divhourtasks[numb]).innerHTML;
                if(display == 1 && !content.includes("<del>"))  {                
                    done(numb);
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

            if(grid==36) {
                break;
                
            }

            if(grid<=36) {
                grid = grid + 7;
            }

        }

        calendar2.insertAdjacentHTML("beforeend", `<div class="day"></div>`);

        grid++;
        g++;       
    }
    
}

document.addEventListener('touchstart', handleTouchStart, false);        
    
document.addEventListener('touchmove', handleTouchMove, false);

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
            if(display == 0) {
                step(1);
            }
            
        } else {
            /* right swipe */
            if(display == 0) {
                step(-1);
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
