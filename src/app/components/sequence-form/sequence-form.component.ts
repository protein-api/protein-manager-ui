import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-sequence-form',
  templateUrl: './sequence-form.component.html',
  styleUrls: ['./sequence-form.component.scss']
})
export class SequenceFormComponent implements OnInit {

  @Input() list =[]
  constructor() { }

  ngOnInit() {
  }

  getHeaderIndex(i:any){
    return (i+1)*10
  }

}
