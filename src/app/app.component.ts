import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'First App';
  name = 'Şuayb Talha';
  items=[
    {description:"Kahvaltı",action:"No"},
    {description:"Sinema",action:"No"},
    {description:"Spor",action:"No"},
    {description:"Ders Çalışma",action:"No"},
  ];
}
