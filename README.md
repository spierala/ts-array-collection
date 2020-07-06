# Ts Array Collection
[![npm version](https://badge.fury.io/js/ts-array-collection.svg)](https://www.npmjs.com/package/ts-array-collection)

`ArrayCollection` extends native Javascript Array and adds additional methods to manage Array data as a collection.

## Features
- ArrayCollection is still a native Javascript Array under the hood (all Array methods stay intact, ES6 Array spread syntax still works)
- Every ArrayCollection method returns a new ArrayCollection/Array which is useful if you need to work with immutable data
- The original ArrayCollection/Array it **not** mutated by performing the ArrayCollection methods.

## Usage

Create a new Array Collection:

`const collection: ArrayCollection<T> = new ArrayCollection(obj1, obj2);`

Update Arrays with following methods:

`add(item: T): ArrayCollection<T>`

`update(id: string | number, item: Partial<T>): ArrayCollection<T>`

`remove(id: string | number): ArrayCollection<T>`

`set(items: T[]): ArrayCollection<T>`

## Example
```
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
```

Console output:

![Example](.github/images/console.png)

ArrayCollection uses the `id` property of an item to find the correct item e.g. for update/remove.

The default idKey can be adjusted:

`const collection: ArrayCollection = new ArrayCollection().setIdKey('fancyId')`

## License

MIT

## Created By

If you like this, follow [@spierala](https://twitter.com/spierala) on twitter.

