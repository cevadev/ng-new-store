import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  OnChanges,
  AfterViewInit,
  OnDestroy,
} from '@angular/core';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.scss'],
})
export class ImgComponent
  implements OnInit, OnChanges, AfterViewInit, OnDestroy
{
  @Input() img: string = '';
  imageDefault: string = './assets/images/bike.jpg';

  // enviando un evento al componente padre
  // EventEmitter envia strings
  @Output() loaded = new EventEmitter<string>();

  // constructor run before render()
  constructor() {
    console.info(`app-img component constructor imgValue=> ${this.img}`);
  }

  // se ejecuta antes de render()
  ngOnInit(): void {
    console.info(`app-img component ngOnInit imgValue=> ${this.img}`);
  }

  // se ejecuta antes del render()
  ngOnChanges() {
    console.info(`app-img component ngOnChanges imgValue=> ${this.img}`);
  }

  // se ejecuta despues del correr el metodo render()
  ngAfterViewInit() {
    console.info('app-img component ngAfterViewInit');
  }

  ngOnDestroy() {
    console.info('app-img component ngOnDestroy');
  }

  imgError() {
    this.img = this.imageDefault;
  }

  imgLoaded() {
    console.info('Log from child');
    // emitimos el evento
    this.loaded.emit(this.img);
  }
}
