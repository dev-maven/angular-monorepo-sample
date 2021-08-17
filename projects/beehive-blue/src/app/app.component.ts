import { Component } from '@angular/core';
import { IMenu } from 'projects/lib-beehive-ui-shared/src/public-api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'beehive-blue';

  _menu: IMenu[];

  ngOnInit(): void {
    this._menu = [
      { path: 'pages/beehive-blue-happy', name: 'Blue-Happy' } as IMenu,
      { path: 'pages/beehive-blue-shock', name: 'Blue-Shock' } as IMenu,
    ];
  }
}
