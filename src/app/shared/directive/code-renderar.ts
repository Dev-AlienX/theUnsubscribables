import { Directive, ElementRef, input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[CodeRenderar]',
})
export class CodeRenderar implements OnInit {
  private el = ElementRef;
  private renderar = Renderer2;
  
  CodeRenderar = input('')
  language = input('')

  constructor() {}

  ngOnInit(): void {
    

  }
}
