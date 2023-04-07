import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InteractionService {

  constructor() { }

  private todoSource = new Subject<any>();
  // Observable string streams
  todoAnnounced$ = this.todoSource.asObservable();

  // Service message commands
  announceMission(todo: any) {
    this.todoSource.next(todo);
  }
}
