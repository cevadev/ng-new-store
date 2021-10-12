import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  OnChanges,
  AfterViewInit,
  OnDestroy,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.scss'],
})
export class ImgComponent
  implements OnInit, OnChanges, AfterViewInit, OnDestroy
{
  img: string = '';
  @Input('img')
  set changeImg(newImg: string) {
    this.img = newImg;
    console.info(`change just img => ${this.img}`);
  }

  @Input() alt: string = '';

  imageDefault: string = './assets/images/bike.jpg';

  //** ngDestroy & ngSetInput Sample */
  // counter: number = 0;
  // guardamos la referencia que retorna el metodo setInterval()
  // counterFn: number | undefined;
  //** END ngDestroy & ngSetInput Sample */

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

    //** ngDestroy & ngSetInput Sample */
    // corremos una tarea q se ejcuta por cada segundo y como es algo asincrono lo hacemos en el ngOnInit()
    // este evento setInterval() se queda activo aun cuando el componente app-img es destruido
    /* this.counterFn = window.setInterval(() => {
      this.counter += 1;
      console.info(`run counter ${this.counter}`);
    }, 1000); */
    //** ngDestroy & ngSetInput Sample */
  }

  // se ejecuta antes del render()
  ngOnChanges(changes: SimpleChanges) {
    console.info(`app-img component ngOnChanges imgValue=> ${this.img}`);
  }

  // se ejecuta despues del correr el metodo render()
  ngAfterViewInit() {
    console.info('app-img component ngAfterViewInit');
  }

  ngOnDestroy() {
    console.info('app-img component ngOnDestroy');
    // limpiamos el evento del setInterval()
    // window.clearInterval(this.counterFn);
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
