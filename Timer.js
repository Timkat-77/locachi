// let time = 60;
//   let ourCount = setInterval(() => {
//     document.getElementById("timer").innerHTML= --time;
//     if (time == 50) {
//       clearInterval(ourTimer);
//     }
//       }, 2000);




var cars = [
    "LILLARD", "LeBRON","CURRY",
     "WALL","DURANT","ANTETOKUMPO",
     "OLADIPO", "KYRIE",];
   

    function quotes() {
        setInterval(() => {
          
          var myCars = Math.floor(Math.random() * cars.length);
        //   document.write(cars[myCars]);
        document.getElementById('Header').innerHTML=(cars[myCars]);
        
        }, 3000);
      }

  function Mban() {
    let time = 60;
    let ourTimer = setInterval(() => {
      document.getElementById("acham").innerHTML= --time;
      if (time == 0) {
        clearInterval(ourTimer);
      }
        }, 3000);
            
  }
           function stop() {
            location.reload('')
           
          }
          function start() {
            
            Mban()
            quotes() 
          }


          

          document.ge

          