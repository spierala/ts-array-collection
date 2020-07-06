import { ArrayCollection } from './array-collection';

class Todo {
  id: number;
  title: string;
  desc?: string;
}

describe('ArrayCollection', () => {

  const todo1: Todo = {
    id: 1,
    title: 'Todo 1'
  };

  const todo2: Todo = {
    id: 2,
    title: 'Todo 2'
  };

  const todo3: Todo = {
    id: 3,
    title: 'Todo 3'
  };

  const todo4: Todo = {
    id: 4,
    title: 'Todo 4'
  };

  const todo5: Todo = {
    id: 5,
    title: 'Todo 5'
  };

  it('should create an array with initial value', () => {
    const ac: ArrayCollection<Todo> = new ArrayCollection<Todo>(todo1);
    expect(ac.length).toBe(1);
    expect(ac[0]).toBe(todo1);
  });

  it('should add an item and return a new array', () => {
    const ac: ArrayCollection<Todo> = new ArrayCollection<Todo>(todo1);
    const added: ArrayCollection<Todo> = ac.add(todo2);
    expect(ac.length).toBe(1);

    expect(added).not.toBe(ac);
    expect(added.length).toBe(2);
    expect(added[1]).toBe(todo2);
  });

  it('should update an item and return a new array', () => {
    const ac: ArrayCollection<Todo> = new ArrayCollection<Todo>(todo1, todo2);
    const updatedTodo: Todo = {
      ...todo2,
      desc: 'updated desc'
    };
    const updated: ArrayCollection<Todo> = ac.update(2, updatedTodo);
    expect(ac.length).toBe(2);
    expect(ac[1]).toEqual(todo2);

    expect(updated).not.toBe(ac);
    expect(updated[1]).toEqual(updatedTodo);
  });

  it('should replace the entire collection with another array', () => {
    const ac: ArrayCollection<Todo> = new ArrayCollection<Todo>(todo3, todo4, todo5);
    const array: Todo[] = [todo1, todo2];
    const acAfterSet: ArrayCollection<Todo> = ac.set(array);
    expect(ac.length).toBe(3);
    expect(ac[0]).toBe(todo3);
    expect(ac[1]).toBe(todo4);
    expect(ac[2]).toBe(todo5);

    expect(acAfterSet).not.toBe(ac);
    expect(acAfterSet[0]).toBe(todo1);
    expect(acAfterSet[1]).toBe(todo2);
    expect(acAfterSet[2]).toBeUndefined();
  });

  it('should remove an item and return a new array', () => {
    const ac: ArrayCollection<Todo> = new ArrayCollection<Todo>(todo1, todo2, todo3);
    const acAfterRemove: ArrayCollection<Todo> = ac.remove(2);
    expect(acAfterRemove.length).toBe(2);
    expect(ac[0]).toBe(todo1);
    expect(ac[1]).toBe(todo2);
    expect(ac[2]).toBe(todo3);

    expect(acAfterRemove).not.toBe(ac);

    expect(acAfterRemove[0]).toBe(todo1);
    expect(acAfterRemove[1]).toBe(todo3);
  });

  it('should support a custom id property', () => {
    class TodoWithCustomId {
      fancyId: number;
      title: string;
      desc?: string;
    }

    const todo11: TodoWithCustomId = {
      fancyId: 11,
      title: 'todo1'
    };

    const todo22: TodoWithCustomId = {
      fancyId: 22,
      title: 'todo2'
    };

    const todo22Updated: TodoWithCustomId = {
      fancyId: 22,
      title: 'todo2',
      desc: 'updated desc'
    };

    const ac: ArrayCollection<TodoWithCustomId> = new ArrayCollection<TodoWithCustomId>(todo11, todo22).setIdKey('fancyId');
    const acAfterUpdate: ArrayCollection<TodoWithCustomId> = ac.update(22, todo22Updated);

    expect(acAfterUpdate.length).toBe(2);
    expect(acAfterUpdate[0]).toBe(todo11);
    expect(acAfterUpdate[1]).toEqual(todo22Updated);
    expect(ac[0]).toBe(todo11);
    expect(ac[1]).toBe(todo22);

    const acAfterRemove: ArrayCollection<TodoWithCustomId> = acAfterUpdate.remove(todo11.fancyId);
    expect(acAfterRemove.length).toBe(1);
    expect(acAfterRemove[0]).toEqual(todo22Updated);
  });

  it('should still behave like an array', () => {
    const ac: ArrayCollection<Todo> = new ArrayCollection<Todo>(todo1, todo2);

    const newArray: Todo[] = [...ac, todo3];

    expect(newArray.length).toBe(3);
    expect(newArray[2]).toBe(todo3);
  });
});

