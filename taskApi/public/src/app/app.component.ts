import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'Restful Tasks API';
  tasks = [];
  newTask = {
    'title': '',
    'description': ''
  };
  editTask = {
    'title': '',
    'description': ''
  };

  golly: any;

  BUTTONwasCLICKED = false;


  constructor(private _httpService: HttpService) {
  }

  ngOnInit() {
    this.getTasksFromService();

  }

  edit(task_id) {
    let observable = this._httpService.edit(task_id, this.editTask);
    observable.subscribe( data => {
      console.log(data);
      this.golly = this.editTask;
      // this.BUTTONwasCLICKED = false;
      this.getTasksFromService();
      this.editTask = {
        'title': '',
        'description': ''
      };
    });
  }

  receiveMesseage($event) {
    this.editTask = $event;
    this.edit($event.id);
  }

  getTasksFromService() {
    let observable = this._httpService.getTasks();
    observable.subscribe((data) => {
      console.log( data);
      this.tasks = data['tasks'];
  });
}

  makeTask() {
    let observable = this._httpService.createTask(this.newTask);
    observable.subscribe( data => {
      console.log(data);
      this.getTasksFromService();
      this.newTask = {
        'title': '',
        'description': ''
      };
    });
  }

  taskToEdit(task_id) {
    this.BUTTONwasCLICKED = true;
  }


  removeTask(task_id) {

    let observable = this._httpService.deleteTask(task_id);
    console.log('REMOVE TASK EXECUTED!', task_id);
    observable.subscribe( (data) => {
      this.getTasksFromService();
    });
  }
}
//   onButtonClick(): void {
//     console.log(`Click event is working`);
// }
// onButtonClickParam(num: Number): void {
//     console.log(`Click event is working with num param: ${num}`);
// }
// onButtonClickParams(num: Number, str: String): void {
//     console.log(`Click event is working with num param: ${num} and str param: ${str}`);
// }
// onButtonClickEvent(event: any): void {
//     console.log(`Click event is working with event: ${event}`);
// }

