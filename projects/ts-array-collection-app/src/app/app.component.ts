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
    // Create new ArrayCollection
    const initialized: ArrayCollection<Todo> = new ArrayCollection({
      id: 1,
      title: 'Todo 1'
    });

    // Add new item
    const added: ArrayCollection<Todo> = initialized.add({
      id: 2,
      title: 'Todo 2'
    });

    // Update item by Id
    const updated: ArrayCollection<Todo> = added.update(2, {
      desc: 'Updated Desc'
    });

    // Remove item by Id
    const removed: ArrayCollection<Todo> = updated.remove(2);

    // Replace current collection with the provided collection
    const afterSet: ArrayCollection<Todo> = updated.set([
      {
        id: 3,
        title: 'Todo 3'
      },
      {
        id: 4,
        title: 'Todo 4'
      }
    ]);

    console.log('INITIALIZED\n', initialized);
    console.log('ADDED\n', added);
    console.log('UPDATED\n', updated);
    console.log('REMOVED\n', removed);
    console.log('AFTERSET\n', afterSet);
  }
}

