import { Component, OnInit } from '@angular/core';
import { Color } from '../models/color';
import { ColorService } from '../services/color.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  colors:Color[]=[]
  constructor(private colorService:ColorService) { }

  ngOnInit(): void {
  }

  getAllColorComponent(){
    this.colorService.getAllColors().subscribe(response=>{
      this.colors=response.data;
    });
  }

}
