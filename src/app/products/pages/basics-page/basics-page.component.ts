import { Component } from '@angular/core';

@Component({
  selector: 'app-basics-page',
  templateUrl: './basics-page.component.html',
  styleUrls: ['./basics-page.component.css']
})
export class BasicsPageComponent {

  public nameLower: string = 'ever yuneri';
  public nameUpper: string = 'EVER YUNERI';
  public fullName: string = 'eVer yuNeri mArTínez PéreZ';

  public customDate: Date = new Date();
}
