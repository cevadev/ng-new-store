import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'new-store';
  imgParent = '';
  showImg = true;

  // el evento del componente hijo envia la url de la imagen
  onLoaded(img: string) {
    console.info(`Log from Parent ${img}`);
  }

  toggleImg() {
    this.showImg = !this.showImg;
  }
}
