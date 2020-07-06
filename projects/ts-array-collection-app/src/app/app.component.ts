import { Component } from '@angular/core';
import { ArrayCollection } from 'ts-array-collection';

interface Todo {
  id: number;
  title: string;
  desc?: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ts-array-collection-app';

  constructor() {
    const initialized: ArrayCollection<Todo> = new ArrayCollection({
      id: 1,
      title: 'Todo 1'
    });
    console.log('initialized', initialized);

    const added: ArrayCollection<Todo> = initialized.add({
      id: 2,
      title: 'Todo 2'
    });
    console.log('added', added);

    const updated: ArrayCollection<Todo> = added.update(2, {
      desc: 'Updated Desc'
    });
    console.log('updated', updated);

    const removed: ArrayCollection<Todo> = updated.remove(2);
    console.log('removed', removed);

    const afterSet: ArrayCollection<Todo> = updated.set([{
      id: 3,
      title: 'Todo 3'
    }]);
    console.log('afterSet', afterSet);
  }
}

