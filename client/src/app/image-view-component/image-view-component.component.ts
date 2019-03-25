import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'image-view-component',
  templateUrl: './image-view-component.component.html',
  styleUrls: ['./image-view-component.component.css']
})
export class ImageViewComponentComponent implements OnInit {

  private imagelocation : string = "./assets/macgyver.jpg"

  constructor() { }

  ngOnInit() {
  }

}
