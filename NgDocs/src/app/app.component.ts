import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public title = 'NgDocs';
  public valueFromParent = "DefaultValueFromParent";

  public propertyValue(event: Event): void {
    this.valueFromParent = (event.target as HTMLInputElement).value;
  }
}
