import { Directive, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[ANIMATE]',
  standalone: true
})
export class ContainerIntersectionDirective implements OnInit{
  container! : HTMLElement;
  constructor(private element: ElementRef, private renderer: Renderer2) {
    this.container = element.nativeElement as HTMLElement
  }

  ngOnInit(): void {
    if(typeof window !== 'undefined'){
      const observer = new IntersectionObserver((entries)=>{
        console.log(entries)
        entries.forEach(entry=>{
          let myDiv = entry.target as HTMLElement;
          if(entry.isIntersecting){
            this.renderer.addClass(myDiv, 'animate')
            console.log(myDiv)
          }else{
            this.renderer.removeClass(myDiv, 'animate')
            observer.observe(myDiv)
          
          }
        })
      })

    observer.observe(this.container)
  }
  }

}
