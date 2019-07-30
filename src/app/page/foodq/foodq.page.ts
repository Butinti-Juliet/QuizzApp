import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';



@Component({
  selector: 'app-foodq',
  templateUrl: './foodq.page.html',
  styleUrls: ['./foodq.page.scss'],
})
export class FoodqPage implements OnInit {
  score: string;
  theradio: string;
  theradio1: string;
  theradio2: string;
  theradio3: string;
  theradio4: string;
  interval;
  timeLeft;
  

 
  
  constructor(private router:Router) { 
  }
  calc(){
   console.log(this.theradio)
   console.log(this.theradio1)
   console.log(this.theradio2)
   console.log(this.theradio3)
   console.log(this.theradio4)
 
   
    this.router.navigateByUrl("foodr")
     this.router.navigate(['/foodr'],{queryParams: {theradio:this.theradio,theradio1:this.theradio1,theradio2:this.theradio2,theradio3:this.theradio3,theradio4:this.theradio4}})
     console.log(this.score)
  }
  
  startTimer() {
    console.log()
    this.interval = setInterval(() => {
    if(this.timeLeft > 0) {
    this.timeLeft;
    } else {
    this.timeLeft = 60;
    }
    },1000)
    }
    
    pauseTimer() { //you can use this function if you want restart timer
    clearInterval(this.interval);
    this.timeLeft = 60;
    }


 


  ngOnInit() {
  }

}
