import {Directive, ElementRef, HostBinding, HostListener, OnInit, Renderer2} from '@angular/core';

@Directive({
    selector : '[appDropdown]'
})
export class Dropdown implements OnInit{
    valueSet: boolean = false;
    @HostBinding('class.open') isOpenDropdown = false;

    @HostListener('click', ['$event.target']) toggleEvent()
    {
        this.isOpenDropdown = !this.isOpenDropdown;
         
    }

    constructor(private elementRef: ElementRef, private renderer : Renderer2)
    {
    }

    ngOnInit()
    {
    }
}