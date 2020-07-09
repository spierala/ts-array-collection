import { Component } from '@angular/core';
import { ArrayCollection } from '../../../ts-array-collection/src/lib/array-collection';


interface Todo {
  id: number;
  bla?: number;
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
    // // Create new ArrayCollection
    // const initialized: ArrayCollection<Todo> = new ArrayCollection({
    //   id: 1,
    //   title: 'Todo 1'
    // });
    //
    // // Add new item
    // const added: ArrayCollection<Todo> = initialized.add({
    //   id: 2,
    //   title: 'Todo 2'
    // });
    //
    // // Update item by Id
    // const updated: ArrayCollection<Todo> = added.update(2, {
    //   desc: 'Updated Desc'
    // });
    //
    // // Remove item by Id
    // const removed: ArrayCollection<Todo> = updated.remove(2);
    //
    // // Replace current collection with the provided collection
    // const afterSet: ArrayCollection<Todo> = updated.set([
    //   {
    //     id: 3,
    //     title: 'Todo 3'
    //   },
    //   {
    //     id: 4,
    //     title: 'Todo 4'
    //   }
    // ]);
    //
    // console.log('INITIALIZED\n', initialized);
    // console.log('ADDED\n', added);
    // console.log('UPDATED\n', updated);
    // console.log('REMOVED\n', removed);
    // console.log('AFTERSET\n', afterSet);
    //
    // const arrayCollection: ArrayCollection<Todo> = new ArrayCollection({
    //   id: 1,
    //   title: 'Todo 1'
    // });
    // // Mutate the ArrayCollection/Array with native JS Array.push
    // arrayCollection.push({
    //   id: 2,
    //   title: 'Todo 2'
    // });
    // console.log('Mutated with native Array.push\n', arrayCollection);
    //
    // // ES6 Array Spread syntax
    // const arrayCollection2: ArrayCollection<Todo> = new ArrayCollection({
    //   id: 22,
    //   title: 'Todo 22'
    // });
    // const newArray: Todo[] = [...arrayCollection2, {id: 33, title: 'Todo 33'}];
    // console.log('Created new Array using ES6 Array spread syntax: \n', newArray);

    const todo1: Todo = {
      id: undefined,
      bla: 1,
      title: 'Todo 1'
    };

    const todo2: Todo = {
      id: undefined,
      bla: 2,
      title: 'Todo 2'
    };

    const ac2: ArrayCollection<Todo> = new ArrayCollection<Todo>(todo1, todo2).setIdKey('bla');

    ac2.getIdKey();

    const mapped: ArrayCollection<number> = ac2.map(item => item.bla + 666) as ArrayCollection<number>;
    console.log('mapped', mapped);
  }
}

