import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { XeCardComponent } from './xe-card/xe-card.component';
import { XeSkillCardsComponent } from './xe-skill-cards/xe-skill-cards.component';
import { ExpXeCardComponent } from './exp-xe-card/exp-xe-card.component';
import { title } from 'node:process';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpClient, HttpClientModule, HttpErrorResponse } from '@angular/common/http';
import { EMPTY, catchError } from 'rxjs';
import { ContainerIntersectionDirective } from './directives/container-intersection.directive';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    CommonModule,
    ContainerIntersectionDirective,
    XeCardComponent,
    XeSkillCardsComponent,
    ExpXeCardComponent,
    ReactiveFormsModule,
    HttpClientModule,
    
    

  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  url : string = 'https://api.imaginekenya.site/portfolio_email'

  formData!: FormGroup;

  status: any;
  messageSent!: boolean;
  openPopup : boolean = false;

  constructor(private fb: FormBuilder, private http: HttpClient){
  this.formData = fb.group({
    name: ['',
     
    ],
    email:['',
      {validators : [Validators.email, Validators.required]}
    ],
    message:['',
      {validators: [Validators.required]}
    ],
    subject:[''],
    phone:['']
  })
  }

  sendMessage(){
    console.log(this.formData.get('email')?.value)

    var data = new FormData()

    data.append('name', this.formData.get('name')?.value)
    data.append('phone', this.formData.get('phone')?.value)
    data.append('email', this.formData.get('email')?.value)
    data.append('subject', this.formData.get('subject')?.value)
    data.append('message', this.formData.get('message')?.value)

    this.http.post(this.url, data).pipe(
      catchError((error : HttpErrorResponse)=>{
        this.notSent(error.error)
        return EMPTY
      })
    ).subscribe((e)=>{
      this.msgSent(e)
    })
  }

  notSent(e: any){
    this.status = "Message not sent!"
    this.messageSent = false
    this.openPopup = true

  }
  msgSent(e: any){
    this.status = 'Message sent successfully!' 
    this.messageSent = true
    this.openPopup = true
  }


  data: Array<any> = [
    {
      title:'UI/UX Design',
      description: 'I design intuitive interfaces that optimize user interactions.',
      image : '/assets/ui2.png',

      moreDescription1: "I can create intuitive and user-friendly interfaces by understanding user needs, conducting usability testing, and designing workflows that optimize user interactions with the software.",
      moreDescription2: "I can design aesthetically pleasing interfaces by selecting appropriate colors, typography, icons, and other visual elements that align with your brand identity and enhance the overall user experience."
    },
    {
      title: 'Frontend Development',
      description: 'I can build user interfaces using HTML, CSS, and JavaScript, as well as React or Angular.',
      image: '/assets/ui1.png',
      moreDescription1: "Proficient in frontend development, crafting intuitive and engaging user interfaces using HTML, CSS, and JavaScript, along with popular frameworks like React  or Angular",
      moreDescription2: "Skilled in frontend development, adept at creating visually appealing and user-friendly interfaces that enhance the overall user experience across different devices and platforms"
    },
    {
      title: 'Database Design and Management',
      description: 'I can design, implement, and manage databases using SQL or NoSQL databases .',
      image: '/assets/database2.png',
      moreDescription1: "Proficient in designing and managing databases, ensuring optimal performance and reliability across various projects and platforms.",
      moreDescription2: "Skilled in database design and management, adept at architecting scalable and efficient data solutions tailored to meet project-specific requirements."
    },

    {
      title: 'Backend Development:',
      description: 'I can develop server-side logic and databases.',
      image: '/assets/server2.png',
      moreDescription1: " I can develop server-side logic and databases using languages like Python, JavaScript (Node.js), Java,, or PHP, along with frameworks like Express.js, Django, Spring Boot, and more.",
      moreDescription2: "I specialize in server-side logic and database management. My expertise ensures seamless integration with your chosen technology stack."
    },
    
    
  ]

  skill_data : Array<any> = [
    {
      logo: '/assets/python.png',
      name: 'Python',
    },
    {
      logo: '/assets/angular cli.png',
      name: 'Angular',
    },
    {
      logo: '/assets/physics.png',
      name: 'React js',
    },
    {
      logo: '/assets/node_js.png',
      name: 'Node Js',
    },
    {
      logo: '/assets/java.png',
      name: 'Java',
    },
    {
      logo: '/assets/django.png',
      name: 'Django',
    },
   
  ]


  experience_Data : Array<any> = [
    {
      year : 2022,
      title1 : "Kenyaplex Institute of Technology",
      subTitle1: "UI/UX Design",
     
      title2 : "Technical University of Mombasa",
      subTitle2: "Bs in Computer Science",
    },
    {
      year : 2023,
      title1 : "TrueHost Kenya Internship",
      subTitle1: "Database Management",     
      title2 : "Technical University of Mombasa Intern",
      subTitle2: "Frontend Development",
    },
    {
      year : 2024,
      title1 : "Savanna Host Internship",
      subTitle1: "Server configuration",     
      title2 : "TUM",
      subTitle2: "Backend Development",
    }
  ]


  menuOpened = false;

  year  = new Date().getFullYear()

  navigateHome(){
    location.replace('/')
  }

  openMenu(){
    this.menuOpened  =! this.menuOpened

   
  }

  ContactMe(){
    location.replace('#contact')
  }

  toggleClass(){
    this.menuOpened =! this.menuOpened
  }


  
}
