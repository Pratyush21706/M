// var bg,input1,a = 1,z=1,temp,c1,h1,input1,button,location,wind,humidity,coming;
// var div1,report,covidUrl;
// var link = `https://coronavirus-19-api.herokuapp.com/countries/`
// var nation = `india`
// var api = `https://api.openweathermap.org/data/2.5/forecast?q=`
// var apiKey =`&appid=ca869b8d4f1a1a9fa1b200e5cef8d33a`;
// var units = `&units=metric`
// var hr,mn,sc,day,month,year;
// var r=255 , g = 50, b=0;
// var icon,iconImg;
// var corona = 1;
// // var y=2020, montho=1||2||3||4;

// function preload(){
//   s1 = loadImage("1.png")
//   sunny = loadImage("Sunny.png")
//     iconImg = loadImage("http://openweathermap.org/img/wn/10d@2x.png")
// }
// function setup(){
//   createCanvas(window.innerWidth,window.innerHeight);
// var col = color(25, 23, 200, 1);

//   input1 = createInput(`Delhi`).attribute(`placeholder`,`Enter Your Location`);
//   input1.position(width/4,height/1.09);
//   input1.style(`font-size`,`17px`)
//     input1.style(`border`,`100px`)
//     input1.style(`background-color`,"#87CEEB")

//   input2 = createInput(`India`).attribute(`placeholder`,`Enter Your Location`);
//   input2.position(width/2.64,-555);
//   input2.style(`font-size`,`20px`)

//      button1 = createButton(`🔍`)
//   button1.position(width/1.756,-555)
//   button1.mousePressed(change);
//   button1.style(`font-size`,`20px`)
//         button1.style(`background-color`,`#87CEEB`)
//         button1.style(`border`,`0px`)

//  button = createButton(`🔍`)
//     button.position(width/1.75,height/1.1)
//       button.mousePressed(weatherAsk);
//      button.style(`font-size`,`21px`)
//         button.style(`background-color`,col)
//         button.style(`border`,`0px`)

    
//  button3 = createButton(`Covid19 Updates`)
//   button3.position(width/1.756,-555)
//   button3.mousePressed(changer);
//   button3.style(`font-size`,`20px`)
//         button3.style(`background-color`,`#87CEEB`)
//         button3.style(`border`,`0px`)
 
//     button4 = createButton(`Weather Updates`)
//   button4.position(width/1.756,-555)
//   button4.mousePressed(retriver);
//   button4.style(`font-size`,`20px`)
//         button4.style(`background-color`,`#87CEEB`)
//         button4.style(`border`,`0px`)


//   covidUrl = link+nation;
//   loadJSON(covidUrl, gotCorona);


//   }
//   function weatherAsk(){
//      city = input1.value();
//     var url = api+city+apiKey+units;
//     loadJSON(url, gotData);
//     a = 3;
//       button.position(20,-555)
//             input1.position(20,-555)

//   }
// function retriver(){
//     corona = 1
// }
// function changer(){
//     corona = 2;
// }

//   function gotData(data){
//   coming = data
//   }
  
//   function gotCorona(info){
//     report = info
//   }
//   function change(){
//     input1.position(width/2,10);
//     button.position(width/1.1,8)
//       corona = 1;
// //      button1.position(width/1.1,-555)


//   }
//   function doing(){
//     nation = input2.value();
//     covidUrl = link+nation;
//   loadJSON(covidUrl, gotCorona);
//   button2.position(width/1.756,-555)
//   input2.position(width/2.59,-5555);
//   button1.position(width/1.4,height/1.5)
    
//   }

//   function draw(){
//     background(s1)
// //     console.log(montho);
       

//        if(keyDown("Space")){
//         weatherAsk();
//       }

//          if(coming){
// //              console.log(coming)
         
//          z = 2;
//          humidity = coming.list[0].main.humidity;
//          temp = coming.list[0].main.temp;

//          windSpeed = coming.list[0].wind.speed;
//          windD = coming.list[0].wind.deg;

//         name = coming.city.name;
//         feel = coming.list[0].main.feels_like;
//          preassure = coming.list[0].main.pressure;
//         country = coming.city.country;
//                  population= coming.city.population;

//         lat =coming.city.coord.lat;
//         lon =coming.city.coord.lon;

       
//             des = coming.list[0].weather[0].main;
//             icon = coming.list[0].weather[0].icon;
            
//              //Day 1
//                       temp1 = coming.list[5].main.temp;
// des1 = coming.list[5].weather[0].main
// // console.log(date)
             
//               //Day 2
//                       temp2 = coming.list[13].main.temp;
// des2 = coming.list[13].weather[0].main

//               //Day 3
//                       temp3 = coming.list[21].main.temp;
// des3 = coming.list[21].weather[0].main

//               //Day4
//                       temp4 = coming.list[29].main.temp;
// des4 = coming.list[29].weather[0].main

//               //Day 5
//                       temp5 = coming.list[37].main.temp;
// des5 = coming.list[37].weather[0].main

             
//             hr = hour();
//             mn =minute();
//             sc = day();
// // sc = 25;

// //              dy = day();
// //             month = month();
// //year = year();
//          a=2;
// image(iconImg,200,200)
//        }
//        if(hr===13){
//          hr =1
//        }
//        if(hr===14){
//          hr =2
//        }
//        if(hr===15){
//          hr =3
//        }
//        if(hr===16){
//          hr =4
//        }
//        if(hr===17){
//          hr =5
//        }
//        if(hr===18){
//          hr =6
//        }
//        if(hr===19){
//          hr =7
//        }
//        if(hr===20){
//          hr =8
//        }
//        if(hr===21){
//          hr =9
//        }
//        if(hr===22){
//          hr =10
//        }
//        if(hr===23){
//          hr =11
//        }
//        if(hr===24){
//          hr =12
//        }
//        if(report){
//          country1 = report.country;
// cases = report.cases;
// recover = report.recovered;
// deaths = report.deaths;
// active = report.active;
// critical = report.critical;
// totalT = report.totalTests;
//        }
//       if(a===2){
//       if(report){
//             button3.position(3,6)
//           console.log("got th edt")
//       }          
//       }

// drawSprites();
//    if(a===1){
//     let need = input1.value();
//      textStyle("bold")
//        fill("Red")
//        textSize(20)
//      text(need,width/2,height/6)
//    }
  
//      if(a===2){
//        background(sunny)
                
//    button1.position(width/1.1,8)

//        if(temp<20){
//         //  background(c1)
//        }
//          if(temp>20){
//           //  background(h1)
//          }           
//            fill("white")
           
//             textSize(40)
//             textStyle("normal")
// //                        text(" °",width/3.5,height/4.5)
//             textSize(20)
// //  fill("white")
// textStyle("bold")
//  text("Latitude",width/19,height/1.24)


//   text(" Longitude ",11,height/1.155)
//     text("Population ",width/25,height/1.08)
//     fill("black")
//     text(Math.round(population),width/21,height/1.04)
//  text(Math.round(lat),width/10,height/1.192)
//  text(Math.round(lon),width/10,height/1.11)

//  fill("black")
//  textStyle("normal")
// //             text(,width/12,height/2.05)
//                       textSize(30)
// //          console.log(description)
// //                       console.log(country)
//            textFont(`Alegreya Sans`)
// if(corona===1){
//            text(name+" "+country ,width/2.18,height/5)
//             text(des, width/2.18 , height/3.8)
//            textSize(100);
//            textStyle("normal")
// ////          for(var i =0; i++ ; i=temp){
// //              console.log(i)
// //          }
// textStyle("normal")
//            text(Math.round(temp)+"°",width/11,height/3.8)
// }button3
// textFont("Mangal")
//             textSize(40)
// //           textStyle("bold")
//            fill("#fffffff")
//                       text(humidity+"%",width/10,height/1.52)

//             textSize(30)
//             text(Math.round(windSpeed)+`K/PH`,width/2.5,height/1.53)
// textSize(18)
// text(des1,width/3.25,height/1.07)
// text(des2,width/2.25,height/1.07)
// text(des3,width/1.7,height/1.07)
// text(des4,width/1.35,height/1.07)
// text(des5,width/1.16,height/1.07)
// textSize(30)
// // date1 = sc+1;
// // date2 = sc+2;
// // date3 = sc+3;
// // date4 = sc+4;
// // date5 = sc+5;

// date1 = 31
// date2 = 01
// date3 = 02
// date4 = 03
// date5 = 04

// // if(date1==="32"){
// //   date1 = 1;
// // }
// // if(date2==="32"){
// //   date2 = 99;
// // }
// // if(date3==="32"){
// //   date3 = 1;
// // }
// // if(date4==="32"){
// //   date4 = 1;
// // }
// // if(date5==="32"){
// //   date5 = 1;
// //}

// // if(date1==="33"){
// //   date1 = 2;
// // }
// // if(date2==="33"){
// //   date2 = 2;
// // }
// // if(date3==="33"){
// //   date3 = 2;
// // }
// // if(date4==="33"){
// //   date4 = 2;
// // }
// // if(date5==="33"){
// //   date5 = 2;
// // }

// // text(date1,width/3.15, height/1.22)
// // text(date2,width/2.15,height/1.22)
// // text(date3,width/1.63,height/1.22)
// // text(date4,width/1.33,height/1.22)
// // text(date5,width/1.13,height/1.22)

// text(date1,width/3.15, height/1.22)
// text("0"+date2,width/2.15,height/1.22)
// text("0"+date3,width/1.63,height/1.22)
// text("0"+date4,width/1.33,height/1.22)
// text("0"+date5,width/1.13,height/1.22)
// textStyle("normal")
// textSize(22)

// fill("black")
//          if(corona===1){
//             text(Math.round(feel)+`°`,width/2.4,height/2.95)
//             text("Time: "+hr+":"+mn,width/1.85,height/2.95)
//              button4.position(3,-555)
// //                         input1.position(20,-555)

//          }
// fill("white")
//                               text(+preassure+"hPa",width/1.4,height/1.53)
//                               textSize(32)
// text(Math.round(temp1)+"°",width/3.15,height/1.115)
// text(Math.round(temp2)+"°",width/2.15,height/1.115)
// text(Math.round(temp3)+"°",width/1.65,height/1.115)
// text(Math.round(temp4)+"°",width/1.35,height/1.115)
// text(Math.round(temp5)+"°",width/1.14,height/1.115)
//          console.log(corona)
// if(corona===2){
//  noStroke();
//                 button4.position(3,6)
//   button1.position(width/1.756,-555)

//  fill("#FDEDE4")
//     rect(0,0,width,height/2.7)
//     textSize(30)
//     fill("Black")
//     textStyle("bold")
//     text("Covid 19",width/2.7,height/11)
//     textSize(25)
//         text("Total Cases ",width/2.8,height/7)
//         noFill();
//         stroke("red")
//         textSize(50)
// text(cases,width/3.3,height/4.6)
//  fill("Black")
//   noStroke();
//   textSize(25)
//   textStyle("normal")
// text("Recoverd: "+recover, width/25, height/3)
// text("Active:    "+ active, width/25, height/3.6)
// text("Critical:    "+ critical, width/25, height/2.6)
// text("Country: "+country1,width/1.8, height/3.6)
// text("Total Tests ",width/1.75, height/3)
// text(totalT,width/1.7, height/2.6)
// }
// //         country1 = report.country;
// //cases = report.cases;
// //recover = report.recovered;
// //deaths = report.deaths;
// //active = report.active;
// //critical = report.critical;
// //totalT = report.totalTests;

// //             input1.position(width/1.65,height/30)
// // input1.style(`font-size`,`10px`)

// //             button.position(width/1.28,height/30)
// //             button.style(`font-size`,`11px`)
//     }
//       if(a ===3){
//      input1.position(width / 4, -555);
//        button.position(width / 1.5, -555)
//        textStyle("bold");
//      if(frameCount%4===0){
//        r =random(0,255);
//        g= random(0,255);
//      b =random(0,255)
//      }

//        //           console.log("r: "+r)
//        //            console.log("g: "+g)
//        //            console.log("b: "+b)
//        rectMode(CENTER)
//        fill(rgb(r, g, b, 80))
//        rect(window.innerWidth / 2, window.innerHeight / 2, width, height)

//        textSize(40);
//        fill("fffffff")
//        text(`loading...`, width / 2.5, height / 2)

//        textSize(20);
//   }
//   }
 
//    Hello and welcome to my project and first thing first, after looking at my complete sketch you you definitely say tht there would be better names for variables, let it be I  am the one who likes the clutters way but if it causes some trouble to you then I am really sorry for it.

//Moving ahead this project is basically made for people who are really conserned about their physical health altough this is a fitness app but it is packed with so many feratures which are comparitively hidden such as book a doctor, a full body medical checkup, setting the goals for the future of viewing the results of your medical tests.

//So without wasting much of your time let's begin

//setting up the localstorage (the most important part of this project) so that the users can log in or log out
localStorage.speed=1;

//Declaring the two user credential variables
var uN,Up;

//setting up the time and the various other variables
var time;
var food,water,sleep,run,qot,nm,img;
var now,end; 

//declaring two localStorage variables to hold the name andthe age of the user permanently
localStorage.name;
localStorage.age;
var talkbox;
var rand;

//Creating various minutevariables which will help to change the appStaes
var a = 1,b=1,s = 1,x = 1,c = 1;
var count =1,karna = 1,h =900;
 var i = 1, w = 200;
var m = 1,r  =1;

//using the localStorage as an holder of user's goals and what he/she may have achived so far
localStorage.water, localStorage.calories,localStorage.sleep;
 localStorage.sleep_goal ,localStorage.water_goal ,localStorage.calories_goal ;

//Making a variable boolean value false so that I can check it later
var option1 = false;

//Defining two variables for colors
var col1="black",col2 = "col1";
var nameInput;

// this function will load all the images and multimedia before the programme starts
function preload(){
  smile =loadImage("intro.png")
            bot = loadImage("bot.png")
dk = loadImage("desktop.png")
frame = loadImage("border.png")
    dark = loadImage("dark.png")
      smile =loadImage("intro.png")
            bot = loadImage("bot.png")
}
function setup(){
   canvas =  createCanvas(window.innerWidth,window.innerHeight)
    
/*   ========================Firebase stuff Begins Here========================================*/

    // Firebase configuration here
    var firebaseConfig = {
   apiKey: "AIzaSyBMdyADowFNLi-mVDm91NYnBKSem_peveg",
    authDomain: "ambience-database.firebaseapp.com",
    databaseURL: "https://ambience-database.firebaseio.com",
    projectId: "ambience-database",
    storageBucket: "ambience-database.appspot.com",
    messagingSenderId: "953268091712",
    appId: "1:953268091712:web:806a6e5cf4181b5159d8a5"
  };
        //Initialising Firebase here
  firebase.initializeApp(firebaseConfig);
//    Console Logging firebase
  console.log(firebase);
//  Initialising the firebase database
 database = firebase.database();
 //Firebase stuff Ends Here   
    
    /*  ===========================Firebase stuff Ends Here=======================================   */

    
    nm = window.innerHeight/17
col = color(255,255,255,0)
    
nextButton = createButton(`→`)
 nextButton.position(width/2.1,-555)
  nextButton.style(`background`,`transparent`);
   nextButton.style(`font-size`,`50px`)
    nextButton.style(`border`,`0px`)
     nextButton.mousePressed(next)
     //Creating the name input
       input1 = createInput(``)
        input1.position(width/4,-555);
         input1.style(`background`,`transparent`)
          input1.style(`font-size`,`25px`)
           input1.style(`border-top-style`,`hidden`)
            input1.style(`border-bottom-style`,`groove`)
             input1.style(`border-right-style`,`hidden`)
              input1.style(`border-left-style`,`hidden`)
               input1.style(`padding-right`,`40px`)
                input1.style(`outline`,`0px`)
                 input1.style(`color`,`white`)
                  input2 = createInput(``,`password`)
                   input2.position(width/4,-555);
                    input2.style(`font-size`,`25px`)
                     input2.style(`background`,`transparent`)
                      input2.style(`border-top-style`,`hidden`)
                       input2.style(`border-bottom-style`,`groove`)
                        input2.style(`border-right-style`,`hidden`)
                         input2.style(`border-left-style`,`hidden`)
                           input2.style(`padding-right`,`40px`)
                             input2.style(`outline`,`0px`)
                               input2.style(`color`,`white`)
                                input3 = createInput(``)
                                 input3.position(width/4,-555);
                                  input3.style(`font-size`,`25px`)
                                   input3.style(`background`,`transparent`)
                                    input3.style(`border-top-style`,`hidden`)
                                      input3.style(`border-bottom-style`,`groove`)
                                        input3.style(`border-right-style`,`hidden`)
                                         input3.style(`border-left-style`,`hidden`)
                                          input3.style(`padding-right`,`40px`)
                                           input3.style(`outline`,`0px`)
                                              input3.style(`color`,`white`)     
                                                input4 = createInput(``)
                                                  input4.position(width/4,-555);
                                                    input4.style(`font-size`,`25px`)
                                                     input4.style(`background`,`transparent`)
                                                      input4.style(`border-top-style`,`hidden`)
                                                        input4.style(`border-bottom-style`,`groove`)
                                                         input4.style(`border-right-style`,`hidden`)
                                                           input4.style(`border-left-style`,`hidden`)
                                                             input4.style(`padding-right`,`40px`)
                                                               input4.style(`outline`,`0px`)
                                                                 input4.style(`color`,`white`)  
                                                                  input5 = createInput(``,`number`)
                                                                   input5.position(width/4,-555);
                                                                    input5.style(`font-size`,`25px`)
                                                                     input5.style(`background`,`transparent`)
                                                                       input5.style(`border-top-style`,`hidden`)
                                                                         input5.style(`border-bottom-style`,`groove`)
                                                                            input5.style(`border-right-style`,`hidden`)
                                                                             input5.style(`border-left-style`,`hidden`)
                                                                              input5.style(`padding-right`,`40px`)
                                                                               input5.style(`outline`,`0px`)
                                                                                input5.style(`color`,`white`)
                                                                                  input6 = createInput(``,`password`)
                                                                                     input6.position(width/4,-555);
                                                                                         input6.style(`font-size`,`25px`)
                                                                                           input6.style(`background`,`transparent`)
                                                                                              input6.style(`border-top-style`,`hidden`)
                                                                                                input6.style(`border-bottom-style`,`groove`)
                                                                                                 input6.style(`border-right-style`,`hidden`)
                                                                                                   input6.style(`border-left-style`,`hidden`)
                                                                                                     input6.style(`padding-right`,`40px`)
                                                                                                       input6.style(`outline`,`0px`)
                                                                                                        input6.style(`color`,`white`)
                                                                                                          input7 = createInput(``,`password`)
                                                                                                            input7.position(width/4,-555);
                                                                                                                input7.style(`font-size`,`25px`)
                                                                                                                    input7.style(`background`,`transparent`)
                                                                                                                      input7.style(`border-top-style`,`hidden`)
                                                                                                                          input7.style(`border-bottom-style`,`groove`)
                                                                                                                            input7.style(`border-right-style`,`hidden`)
                                                                                                                             input7.style(`border-left-style`,`hidden`)
                                                                                                                               input7.style(`padding-right`,`40px`)
                                                                                                                                 input7.style(`outline`,`0px`)
                                                                                                                                  input7.style(`color`,`white`)
                                                                                                                                     registerButton = createButton(`Log In`)
     registerButton.attribute('disabled', '');
                                                                                                                                       registerButton.position(width/2.1,-555)
                                                                                                                                           registerButton.style(`background-color`,`#5D9DFF`);
                                                                                                                                               registerButton.style(`font-size`,`35px`)
                                                                                                                                                  registerButton.style(`border`,`0px`)
                                                                                                                                                     registerButton.style(`color`,`white`)
                                                                                                                                                       registerButton.style(`padding-left`,`100px`)
                                                                                                                                                         registerButton.style(`padding-right`,`100px`)
                                                                                                                                                            registerButton.style(`padding-top`,`5px`)
                                                                                                                                                               registerButton.style(`padding-bottom`,`5px`)
                                                                                                                                                                   registerButton.style(`border-radius`,`6px`)
                                                                                                                                                                    registerButton.style(`box-shadow`,`0px 5px 10px rgba(93, 157, 255, 0.05)`)
                                                                                                                                                                   registerButton.mousePressed(login)
                                                                                                                                                                 success = createButton(`Register`)
                                                                                                                                                               success.position(width/2.1,-555)
                                                                                                                                                            success.style(`background-color`,`#5D9DFF`);
                                                                                                                                                           success.style(`font-size`,`35px`)
                                                                                                                                                         success.style(`border`,`0px`)
                                                                                                                                                       success.style(`color`,`white`)
                                                                                                                                                    success.style(`padding-left`,`100px`)
                                                                                                                                                 success.style(`padding-right`,`100px`)
                                                                                                                                               success.style(`padding-top`,`5px`)
                                                                                                                                           success.style(`padding-bottom`,`5px`)
                                                                                                                                       success.style(`border-radius`,`6px`)
                                                                                                                                   success.style(`box-shadow`,`0px 5px 10px rgba(93, 157, 255, 0.05)`)
                                                                                                                               success.mousePressed(send)
                                                                                                                            Health = createButton(`.`)
                                                                                                                         Health.style(`background-color`,col);
                                                                                                                     Health.position(15,-555)
                                                                                                                 Health.style(`border`,`2px`)
                                                                                                                Health.style(`border-radius`,`15px`)
                                                                                                               Health.style(`padding-left`,`15px`)
                                                                                                            Health.style(`padding-right`,`160px`)
                                                                                                        Health.style(`padding-top`,`50px`)
                                                                                                    Health.style(`padding-bottom`,`10px`) 
    
                                                                                                 Goals = createButton(`.`)
                                                                                               Goals.style(`background-color`,col);
                                                                                           Goals.position(width/1.95,-555)
                                                                                       Goals.style(`border`,`2px`)
                                                                                    Goals.style(`border-radius`,`15px`)
                                                                                 Goals.style(`padding-left`,`20px`)
                                                                            Goals.style(`padding-right`,`160px`)
                                                                         Goals.style(`padding-top`,`50px`)
                                                                     Goals.style(`padding-bottom`,`10px`)    
    
                                                                Bot= createButton(`.`)
                                                            Bot.style(`background-color`,col);
                                                         Bot.mousePressed(bring)
                                                       Bot.position(15,-555)
                                                     Bot.style(`border`,`2px`)
                                                   Bot.style(`border-radius`,`15px`)
                                                 Bot.style(`padding-left`,`20px`)
                                               Bot.style(`padding-right`,`160px`)
                                             Bot.style(`padding-top`,`50px`)
                                         Bot.style(`padding-bottom`,`10px`)   
    
                                      Reports= createButton(`.`)
                                   Reports.style(`background-color`,col);
                                 Reports.position(width/1.95,-555)
                                Reports.style(`border`,`2px`)
                             Reports.style(`border-radius`,`15px`)
                           Reports.style(`padding-left`,`20px`)
                         Reports.style(`padding-right`,`160px`)
                      Reports.style(`padding-top`,`50px`)
                   Reports.style(`padding-bottom`,`10px`)                                                                                                                                        
                newUser = createButton(`Create Account`)
             newUser.position(width/8,-555)    ;
           newUser.style(`background`,`transparent`);
         newUser.style(`color`,`white`);
        newUser.style(`border`,`0px`);
    newUser.style(`outline`,`0px`)
  newUser.style(`font-size`,`18px`)
newUser.mousePressed(newU);
talkbox = createInput(``).attribute(`placeholder`,`    Introduction to Ambibot`)
 talkbox.position(width/1.95,-555)
    talkbox.style(`font-size`,`28px`)
  talkbox.style(`padding-right`,`115px`)
talkbox.style("border","40px")
    talkbox.style(`border-radius`,`100px`)
            talkbox.style(`outline`,`0px`)
    talkbox.style(`background-color`,`#E5E5E5`);
    
    send = createButton(``)
    send.position(width/1.133,-555)
    send.mousePressed(tell)
           
    send.style(`background`,`url("send.png")`);
    send.style(`background-size`,`100%`)
//    send.style(`font-size`,`3-px`)
    send.style(`border`,`10000px`)
//        send.style(`border-radius`,`1500px`)
//    send.style(`padding-right`,`60px`)
//        send.style(`padding-bottom`,`350px`)
//        send.style(`padding-top`,`8px`)
    send.style(`padding`,`14px`)
                send.style(`outline`,`0px`)
    
     buttonA = createButton(`Book A Doctor`)
    buttonA.position(width/1.133,-555)
    buttonA.mousePressed(tell)
           
    buttonA.style(`background-color`,`#3744DE`);
    buttonA.style(`background-size`,`100%`)
//    send.style(`font-size`,`3-px`)
    buttonA.style(`border`,`10000px`)
buttonA.style(`padding`,`14px`)
                buttonA.style(`outline`,`0px`)
      buttonA.style(`font-size`,`20px`)
    buttonA.style(`color`,`white`)
buttonA.style(`border-radius`, `15px`)
    
     
     buttonB = createButton(`Medical Tests`)
    buttonB.position(width/1.133,-555)
    buttonB.style(`font-size`,`20px`)
    buttonB.style(`color`,`white`)
    buttonB.mousePressed(tell)
     buttonB.style(`background-color`,`#3744DE`);
    buttonB.style(`background-size`,`100%`)
    buttonB.style(`border-radius`, `15px`)
//    send.style(`font-size`,`3-px`)
    buttonB.style(`border`,`10000px`)
buttonB.style(`padding`,`14px`)
                buttonB.style(`outline`,`0px`)


  see = createButton(``)
    see.position(width/1.133,-5555)
    see.style(`font-size`,`20px`)
    see.style(`color`,`white`)
see.style(`background-color`,`rgba(255, 255, 255, 0.7)`);
    see.style(`border`,`0px`)
    see.style(`background-size`,`100%`)
    see.style(`border-radius`, `15px`)
    see.style(`padding-bottom`,`530px`)
        see.style(`padding-right`,`480px`)
    
     sum = createButton(`+`)
    sum.position(2,-5555)
    sum.style(`font-size`,`20px`)
    sum.mousePressed(waterUpdate)
    sum.style(`color`,`white`)
sum.style(`background-color`,`rgba(253, 106, 15, 1)`);
    sum.style(`border`,`0px`)
 sum.style(`border-radius`, `15px`)
sum.style(`outline`,`0px`)
    
      backButton = createButton(`←`)
    backButton.position(width/2.1,-555)
    backButton.style(`background`,`transparent`);
    backButton.style(`font-size`,`30px`)
    backButton.style(`border`,`0px`)
    backButton.mousePressed(back)


                see.style(`outline`,`0px`)
    nextButton.mousePressed(next)

  start = createButton(`Begin sleep`)
    start.position(width/1.9,-555);
    start.mousePressed(start_sleep)
       start.style(`background-color`,`#4aa4e8`);
     start.style(`border-radius`, `5px`)
    start.style(`font-size`,`14px`)
    start.style(`border`,`0px`)
    start.style(`color`,`white`)
    
    end = createButton(`End sleep`)
    end.position(width/1.9,-555);
       end.style(`background-color`,`#4aa4e8`);
     end.style(`border-radius`, `5px`)
    end.style(`font-size`,`14px`)
    end.style(`border`,`0px`)
    end.style(`color`,`white`)
    
    a2 = createButton(`Sign In`);
        a2.style(`color`,`white`)
    a2.style(`font-size`,`18px`)
       a2.style(`background`,`transparent`);
    a2.position(200,-555);
    a2.style(`border`,`0px`);
        a2.style(`outline`,`0px`);

               a2.mousePressed(back_1)

}
back_1 = function(){
    a = 2;
}
function newU(){
    a = 3;
}

start_sleep = function(){
    now = hour();
    min = minute();
    sec = second();
time =   now+":"+min+":"+sec
}

end_sleep = function(){
    
}

waterUpdate = function(){
    localStorage.water++
    if(localStorage.water>9){
        localStorage.water = 9;
    }
}
function bring(){
    localStorage.speed = 35;
}
function send(){
    console.log("kf;sd;")
    UserName = input3.value();
    email = input4.value();
    ag = input5.value();
    pass = input6.value();
        pass7 = input7.value();

         hr = hour();
    mn = minute();
    sc = second();
       dy = day();
    mt = month();
    yr = year();
year =   dy+"-"+mt+"-"+yr
time =   hr+":"+mn+":"+sc
    if(pass === pass7){
        console.log("You are great")
    }
        var data ={
          TIME :time,
    NAME : UserName,
           AGE :ag,
            EMAIL : email,
            Password: pass,
          DATE : year
  }
  database.ref(UserName).push(data,finished);
  console.log("send called");
    a=2;
}

function login(){
  localStorage.name = input1.value();
    localStorage.age = input2.value();
    name = input1.value();
    age = input2.value();

c = 2;
    console.log("hdsadkjdjas")
    
//      var data ={
//          TIME :time,
//    NAME : name,
//           AGE :age,
//          DATE : year
//  }
//  database.ref(name).push(data,finished);
//  console.log("send called");
//    if(uN == null){
//        console.log("dflhsdlfk")
//    }

//     alert(`You Have Registerd Successfully`)    

       var ref = database.ref(name);
ref.on("value", gotData, errData);
}
function update(){
    if(uN==input1.value()){
        console.log("success")
    }
     if(uP==input2.value()){
        console.log("successful")
    }
    if(uN==input1.value()&&uP==input2.value()){
     console.log("Name: "+localStorage.name)
        console.log("Age: "+localStorage.age)
    localStorage.speed = 34;
 input1.position(width/4,-555);
 input2.position(width/4,-555);
 registerButton.position(width/2.1,-555)
}
}

function gotData(data){
  let info = data.val();
var keys = Object.keys(info)
var k = keys[0]
  console.log(keys)
uN = info[k].NAME;
    uP = info[k].Password;
console.log("Name: "+uN+" Pass: "+uP)
    update();
}
function errData(err){
console.log("error: "+err)
    console.log("dljdjwkdwkhdkw")
}

function finished(error) {
  if (error) {
   alert(`Plz check your internet connection`)
  } else {
           alert(`You Have Registerd Successfully`)                     
  }
}
function next(){
    a = 2;
}
function draw(){
    background("white");
    let xyz = input1.value().length;
    let length = input2.value().length;
    if(xyz>1&&length>4){
        registerButton.removeAttribute('disabled')
            console.log(xyz)
            registerButton.style(`background-color`,"#0065ff",`color`,'white');
                                                                                                                                                   registerButton.style(`background-color`,`#5D9DFF`);

    }else{
         registerButton.attribute('disabled', '');
    registerButton.style(`background-color`,`#dce8fa`, `color`,`red`);

    }                                                                                                                                           

//    if(deviceOrientation = `landscape`){
//        alert('please rotate your phone')
//    }
    drawSprites();
    fill("black")
    textSize(40)
    text("W: "+window.innerWidth+"  H: "+window.innerHeight,20,60);
    if(localStorage.water==null){
        localStorage.water = 0;
    }
    
     if(localStorage.calories==null){
        localStorage.calories = 0;
    }
     if(localStorage.sleep==null){
        localStorage.sleep = 0;
    }
     if(localStorage.sleep_goal==null){
         localStorage.sleep_goal = 0;
     } 
    
     if(localStorage.calories_goal==null){
         localStorage.calories_goal = 0;
     } 
     if(localStorage.water_goal==null){
         localStorage.water_goal = 0;
     } 
  
//    if(quotes){
//        b = 2;
//    }
//    if(b===2){
//        better = quotes.body;
//        console.log(better)
//    }
 if(localStorage.speed==1){
     if(a===1){
         
    fill("black")
          image(smile,width/11,height/8,width/1.1,height/3)
    textSize(60)
     textStyle("bold")
   text("Welcome!",width/5,height/1.8)
          textStyle("normal")

     textSize(21);
    text("We are happy to have you & welcome",width/12,height/1.6)
         text(`you to experience the "Ambience Way"`,width/12,height/1.5)
        text(`towards Holistic Health, far avobe`,width/8,height/1.41)
             text(`weight loss/control`,width/3.5,height/1.34)
     fill("green")
     noStroke();
     rectMode(CENTER)
rect(width/1.9,height/1.28,width/9,3)
    nextButton.position(width/2.1,height/1.2)
     }
     if(a===2){
             nextButton.position(width/2.1,-555)
             input1.position(width/12,height/2.5);
         background("#313131")
    input2.position(width/12,height/1.71);
//          image(logo,width/5,height/16,width/1.6,height/3)
//          image(user,width/7,height/2.1,width/16,height/16,20)
//                   image(age,width/7,height/1.7,width/16,height/16)
             registerButton.position(width/8,height/1.4)
fill("white");
         textSize(45)
         textFont("arial")
         textStyle("bold")
         text("Hello.", width/14,height/8)
         text("Welcome Back.", width/14,height/5.15)
         fill("gray");
         textSize(width/23)
         textFont("arial")
         textStyle("normal")
         text("Username",width/12,height/2.65);
                  text("Password",width/12,height/1.78)
newUser.position(width/3,height/1.2)  
          input3.position(width/12,-555);
                  input4.position(width/12,-555);
         input5.position(width/12,-555);
         input6.position(width/12,-555);
         input7.position(width/12,-555);
         success.position(width/8-555)
         a2.position(width/20,-555);
         if(c==2){
             col = color(255,255,255,0.8)
             rectMode(CENTER)
                      tint(240,240,240)
 if(m==1){
    i = i+2
    w  =w-2;
  }
  if(m==2){
    i = i-2
    w  =w+2;
    
  }
  if(i ==215){
  m = 2
     r = random(0,255)
  g = random(0,255)
  b = random(0,255)
  }
  if(i==-1){
    m = 1
  }
 
  
  noStroke();
  fill("red")
  ellipse(width/2,height/2,i,i)
  fill("orange")
  ellipse(width/2,height/2,w,w)
         }
     }
     if(a===3){
                  background("#313131")

         input1.position(2,-5555);
                  input2.position(2,-5555);
newUser.position(width/3,-555)  
             registerButton.position(width/8,-555)
         fill("white");
         textSize(40)
         textFont("arial")
         textStyle("bold")
         text("Join Us.", width/14,height/8)
         input3.position(width/12,height/4);
                  input4.position(width/12,height/2.65);
         input5.position(width/12,height/2);
         input6.position(width/12,height/1.64);
         input7.position(width/12,height/1.39);
         success.position(width/8,height/1.2)
  fill("gray");
         textSize(20)
         textFont("arial")
         textStyle("normal")
         text("Username",width/12,height/4.2);
         text("Email",width/12,height/2.75);
         text("Age",width/12,height/2.06);
         text("Password",width/12,height/1.65);
         text("Confirm Password",width/12,height/1.4);
a2.position(width/3,height/1.07);
         fill("red")
//         ellipse(200,200,20,20)

     }
}
    if(localStorage.speed==34){
    if(deviceOrientation ==="landscape"){
//        alert("rotate your device")
    }
         a2.position(width/20,-555);

        if(window.innerWidth>550){
                     resizeCanvas(window.innerWidth,window.innerHeight)
            background(dk)
            textSize(width/30);
//            textStyle("bold");
            newUser.position(width/3,-555)  

            fill("white")
            text(localStorage.name,width/12,height/12)
Health.style(`padding-left`,`15px`)
           Health.style(`padding-right`,`280px`)
               Health.style(`padding-top`,`80px`)
                   Health.style(`padding-bottom`,`65px`)
 Goals.style(`padding-left`,`20px`)
           Goals.style(`padding-right`,`280px`)
               Goals.style(`padding-top`,`80px`)
                   Goals.style(`padding-bottom`,`65px`)
Bot.style(`padding-left`,`20px`)
Bot.style(`padding-right`,`280px`)
Bot.style(`padding-top`,`80px`)
Bot.style(`padding-bottom`,`65px`)
Reports.style(`padding-left`,`20px`)
Reports.style(`padding-right`,`280px`)
Reports.style(`padding-top`,`80px`)
Reports.style(`padding-bottom`,`65px`)
            Health.position(width/3.5,height/1.4)
Goals.position(width/1.32,height/1.4)
Bot.position(width/20,height/1.4)
Reports.position(width/1.91,height/1.4)
    
            desktop();
            console.log("wjhdw")
      
                

        }else{
                     resizeCanvas(window.innerWidth,window.innerHeight*1.1)
    start.position(width/1.9,height/1.384);
    end.position(width/1.9,height/1.384);
                                        sum.position(width/25,height/2.51)

            background(dark)
             fill("white")
        textSize(width/20);
//       text("There is no NOBILITY in fighting",width/6,height/5.2)
//                     textStyle("bold")
                    textSize(width/25);

                 text("Out of "+localStorage.sleep_goal+" glasses",width/9,height/2.41)

        text(localStorage.name,width/5,height/16.5)
                    textSize(width/6);
fill("#BB86FC")
            text(localStorage.water,width/5.65,height/2.9)
                            text(localStorage.calories,width/5.65,height/1.5)
                text(localStorage.sleep,width/1.48,height/1.5)
//   noFill();
//        stroke("gray")
//        strokeWeight(0.05)
//        rect(15,height/2.6,width/1.1,height/12)
//                rect(15,height/2.1,width/1.1,height/12)
//                        rect(15,height/1.75,width/1.1,height/12)
////                                 strokeWeight(1.1)
//        rect(15,height/1.5,width/1.1,height/12)

//         profile.position(width/12,height/5.4)



//                 textStyle("normal")
//                 textSize(width/36)
//                 text("0 out of 1800 cals consumed",width/5,height/2.2)
//                                  text("0 out of 8 glasses ",width/5,height/1.85)
//                                  text("0 out of 8 hours ",width/5,height/1.55)
//                                  text("Active for 0 hours ",width/5,height/1.35)
//
//      
////                    image(sample,width/2.5,6,width/5,height/10)
//                           image(food,17,height/2.55,width/8,height/15)
//                                                      image(water,17,height/2.06,width/8,height/15)
//                                                      image(sleep,20,height/1.74,width/8,height/15)
//                                                      image(run,17,height/1.49,width/8,height/15)
//                                                      image(qot,15,height/5.2,width/1.1,height/6.8)
//          textSize(width/20)
//text("Today's Status",8,height/2.7)
//
//        noFill();
//        stroke("white")
//        strokeWeight(3)
//        circle(width/2,height/17,width/5,height/40)
//        
//         fill("red")
//         circle(width/2,height/17,width/5,height/40)
//         fill("green")
//        
//         fill("white")
//textSize(width/27);
//textStyle("bold")
//        noStroke();
//text("There is no NOBILITY in fighting",width/7,height/4)
//text("Sometimes it is best to SMILE and",width/7,height/3.6)
//text("move on",width/2.5,height/3.25)
count = 0;
            Health.position(15,height/1.26)
Goals.position(width/1.95,height/1.26)
Bot.position(15,height/1.11)
Reports.position(width/1.95,height/1.11)
        }
        if(img){
image(img,0,0,width/6,height/12)
    image(frame,00,00,width/6,height/11)
            console.log("jfls")
        }
         buttonA.position(width/9,-555);
                                buttonB.position(width/2,-555);
        backButton.position(200,-555);
        talkbox.position(200,-555);
       
      newUser.position(width/8,-555)    ;

//        profile.position(width/5,12)
     
see.position(200,-5555)
    }
//console.log(localStorage.login)
        if(localStorage.speed==35){
         resizeCanvas(window.innerWidth,window.innerHeight)
Health.position(15,-555)
Goals.position(width/1.95,-555)
Bot.position(15,-555)
Reports.position(width/1.95,-555)
    background(bot)
            
            backButton.position(15,3)
             fill("white")
            rect(0,0,width,height/15)
            strokeWeight(0.2)
            fill(col1)
            textSize(width/27)
            textStyle("bold")
            text("Ambibot",width/2.5,height/25)
           
            
 talkbox.position(20,height/1.08);
fill("#3744DE")
    if(karna===1){
            count++
    }

            if(count>15){
                fill("#3744DE")
            noStroke();     
rect(width/19,height/15,width/3,height/20)
                textSize(width/40);
                console.log(width/30)
                   fill("white")
                text("Hello "+localStorage.name,width/12,height/10)
            }
              if(count>25){
                fill("#3744DE")
            noStroke();     
rect(width/19,height/8,width/2,height/8.5)
                textSize(width/38);
                   fill("white")
                  
                text("I am `Ambibot` your virtual guide",width/12.5,height/6.5)
                                  text("for all your health related queries",width/12.5,height/5.5)
                                                    text("and a coach for you to live a fit and  ",width/12.5,height/4.8)
                   text("a Healthy Life",width/12.5,height/4.25)


            }
              if(count>35){
                    fill(col1)
    textSize(width/30)
    text(window.innerWidth,width/2,height/12)
                fill("#3744DE")
            noStroke();     
rect(width/19,height/3.9,width/1.8,height/20)
                textSize(width/width*15);
                   fill("white")
                text("Tell me how can I help you "+localStorage.name,width/12,height/3.45)
            }
            if(count>40){
                buttonA.position(width/9,height/3);
                                buttonB.position(width/2,height/3);

            }
            
            if(count>40&&karna===1){
                talkbox.attribute(`placeholder`,`Choose One of the options`)
//                 send.position(width/1.2,height/1.075)
            }
            if(option1){
see.position(16,height/10)
                talkbox.position(200,-555)
            }
        }
}

function tell()
{
    count = 0;
    karna = 2;
     buttonA.position(width/9,-555);
                                buttonB.position(width/2,-555);
  option1 = true;
    
    }
function desktop()
{
}

function back(){
    localStorage.speed=34;
}
