import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.scss'],
})
export class ImgComponent implements OnInit {
  @Input() img: string = '';
  imageDefault: string = './assets/images/bike.jpg';

  // enviando un evento al componente padre
  // EventEmitter envia strings
  @Output() loaded = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {}

  imgError() {
    this.img = this.imageDefault;
  }

  imgLoaded() {
    console.info('Log from child');
    // emitimos el evento
    this.loaded.emit(this.img);
  }
}
