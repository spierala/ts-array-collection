export class ArrayCollection<T> extends Array<T> {

  private idKey: string = 'id';

  setIdKey(idKey: string): ArrayCollection<T> {
    this.idKey = idKey;
    return this;
  }

  set(items: T[]): ArrayCollection<T> {
    this.updateArray(items);
    return new ArrayCollection<T>(...this).setIdKey(this.idKey);
  }

  addItem(item: T): ArrayCollection<T> {
    this.push(item)
    return new ArrayCollection<T>(...this).setIdKey(this.idKey);
  }

  update(item: T): ArrayCollection<T> {
    const newArray: T[] = this.map(aItem => aItem[this.idKey] === item[this.idKey] ? item : aItem );
    this.updateArray(newArray);
    return new ArrayCollection<T>(...this).setIdKey(this.idKey);
  }

  delete(item: T): ArrayCollection<T> {
    const newArray: T[] = this.filter((aItem) => aItem[this.idKey] !== item[this.idKey]);
    this.updateArray(newArray);
    return new ArrayCollection<T>(...this).setIdKey(this.idKey);
  }

  private updateArray(newArray: T[]) {
    this.splice(0, this.length, ...newArray)
  }
}
