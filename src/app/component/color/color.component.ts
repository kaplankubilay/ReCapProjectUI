import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Color } from '../models/color';
import { ColorService } from '../services/color.service';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css']
})
export class ColorComponent implements OnInit {

  colors:Color[]=[]
  isLoaded:boolean=false;

  constructor(private colorService:ColorService,
    private toastrService:ToastrService) { }

  ngOnInit() {
    this.getAllColorsComponent();
  }

  getAllColorsComponent(){
    this.colorService.getAllColors().subscribe(response=>{
      this.colors=response.data;
      this.isLoaded=true;
      this.toastrService.info("Renkler Listelendi.")
    });
  }

}
