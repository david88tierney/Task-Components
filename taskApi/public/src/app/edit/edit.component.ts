import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  @Input() taskToBeEdit: any;
  // @Input() LoadEditForm: any;
  @Input() message: string;
  editTask = {
    'title': '',
    'description': ''
  };


  @Output() messageEvent = new EventEmitter<any>();

  constructor() {
  }

  ngOnInit() {
  }
  sendEdit(task) {
    this.editTask = task;
    this.messageEvent.emit(this.editTask);

  }
}
