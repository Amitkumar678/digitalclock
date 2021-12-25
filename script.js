function clock(){


    var hour = document.getElementById("hour");
    var minutes = document.getElementById("minutes");
    var seconds = document.getElementById("seconds");
    var change_am = document.getElementById("am_pm");


    var ab;
    var time = new Date();
    var a=time.getHours();
    var b= time.getMinutes();
    var c=time.getSeconds();

    hour.innerHTML=a;
    minutes.innerHTML=b;
    seconds.innerHTML=c;

    
    if(a>12){
         a =a-12;

          ab ="pm"
        document.getElementById("am_pm").innerHTML = ab;
     }
     else {
         ab = "AM";
         document.getElementById("am_pm").innerHTML = ab;
     }
     if(a<10){
         a='0'+a;
     }
     if(b<10){
        b = '0' + b;
    }
    if(c<10){
        c='0'+c;
    }
     document.getElementById('hour').innerHTML = a;
}

setInterval(clock,1000);

function Makediv(){
    document.getElementById("container1_last_box").style.display = "block";

    p1 = document.getElementById("wake_up_time");
    p2 = document.getElementById("lunch_time");
    p3 = document.getElementById("nap_time");


    p1 = p1.options[p1.selectedIndex].text;
    p2 = p2.options[p2.selectedIndex].text;
    p3 = p3.options[p3.selectedIndex].text;

    if(p1 == "default"){
        p1 = "not set";
    }

    if(p2 == "default"){
        p2 = "not set";
    }

    if(p3 == "default"){
        p3 = "not set";
    }

    document.getElementById("para1").innerHTML = `set wake up time :: ${p1}`;
    document.getElementById("para2").innerHTML = `set lunch time :: ${p2}`;
    document.getElementById("para3").innerHTML = `set nap time :: ${p3}`;
}

function settime(){
    var ab=document.getElementById("wake_up_time").value;
    var bc=document.getElementById("lunch_time").value;
    var cd=document.getElementById("nap_time").value;
    var current_time=new Date().getHours();

    if(ab==current_time){
        document.getElementById('right_side_container2_down_box2').style.backgroundImage="url(wakeup.jpeg)";
        document.getElementById('right_side_container2_down_box1').innerHTML="Lets Have Some Breakfast";
    }
    else if(bc==current_time){
        document.getElementById('right_side_container2_down_box2').style.backgroundImage="url(lunch.jpeg)";
        document.getElementById('right_side_container2_down_box1').innerHTML="Lets Have Some Lunch";
    }
    else if(cd==current_time){
        document.getElementById('right_side_container2_down_box2').style.backgroundImage="url(goodnight.jpeg)";
        document.getElementById('right_side_container2_down_box1').innerHTML="Lets Have Sleep";
    }
    Makediv()
}