import { Component } from '@angular/core';
import { ArrayCollection } from 'ts-array-collection';
import { MapCollection } from '../../../ts-array-collection/src/lib/map-collection';

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

    const arrayCollection: ArrayCollection<Todo> = new ArrayCollection({
      id: 1,
      title: 'Todo 1'
    });
    // Mutate the ArrayCollection/Array with native JS Array.push
    arrayCollection.push({
      id: 2,
      title: 'Todo 2'
    });
    console.log('Mutated with native Array.push\n', arrayCollection);

    // ES6 Array Spread syntax
    const arrayCollection2: ArrayCollection<Todo> = new ArrayCollection({
      id: 22,
      title: 'Todo 22'
    });
    const newArray: Todo[] = [...arrayCollection2, {id: 33, title: 'Todo 33'}];
    console.log('Created new Array using ES6 Array spread syntax: \n', newArray);




    const mcInitialized: MapCollection<Todo> = new MapCollection<Todo>([
      {
        id: 1,
        title: 'Todo 1'
      }
    ]);

    const mcAdded = mcInitialized.add({
      id: 2,
      title: 'Todo 2'
    });

    const mcUpdated = mcAdded.update(2, {
      desc: 'Updated Desc'
    });

    const mcRemoved = mcUpdated.remove(1);

    const mcAfterSet = mcUpdated.setItems([
      {
        id: 3,
        title: 'Todo 3'
      },
      {
        id: 4,
        title: 'Todo 4'
      }
    ]);

    console.log('MC INITIALIZED\n', mcInitialized);
    console.log('MC ADDED\n', mcAdded);
    console.log('MC UPDATED\n', mcUpdated);
    console.log('MC REMOVED\n', mcRemoved);
    console.log('MC AFTERSET\n', mcAfterSet);
    console.log('MC AFTERSET items\n', mcAfterSet.getItems());
  }
}

