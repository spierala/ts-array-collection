# Ts Array Collection
[![npm version](https://badge.fury.io/js/ts-array-collection.svg)](https://www.npmjs.com/package/ts-array-collection)

`ArrayCollection` extends native Javascript Array and adds additional methods to manage Array data as a collection.

## Features
- ArrayCollection is still a native Javascript Array under the hood (all Array methods stay intact, ES6 Array spread syntax still works)
- Every ArrayCollection method returns a new ArrayCollection/Array which is useful if you need to work with immutable data

## Usage

Create a new Array Collection:

`const collection: ArrayCollection<T> = new ArrayCollection(obj1, obj2);`

Update Arrays with following methods:

`add(item: T): ArrayCollection<T>`

`update(item: T): ArrayCollection<T>`

`remove(id: string | number): ArrayCollection<T>`

`set(items: T[]): ArrayCollection<T>`

## Example
```
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

