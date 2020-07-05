export class ArrayCollection<T> extends Array<T> {

  private idKey = 'id';

  constructor(...items: T[]) {
    super(...items);
  }

  setIdKey(idKey: string): ArrayCollection<T> {
    this.idKey = idKey;
    return this;
  }

  set(items: T[]): ArrayCollection<T> {
    this.updateArray(items);
    return new ArrayCollection<T>(...this).setIdKey(this.idKey);
  }

  add(item: T): ArrayCollection<T> {
    this.push(item);
    return new ArrayCollection<T>(...this).setIdKey(this.idKey);
  }

  update(item: T): ArrayCollection<T> {
    const newArray: T[] = this.map(aItem => String(aItem[this.idKey]) === String(item[this.idKey]) ? item : aItem );
    this.updateArray(newArray);
    return new ArrayCollection<T>(...this).setIdKey(this.idKey);
  }

  remove(id: string | number): ArrayCollection<T> {
    const newArray: T[] = this.filter((aItem) => String(aItem[this.idKey]) !== String(id));
    this.updateArray(newArray);
    return new ArrayCollection<T>(...this).setIdKey(this.idKey);
  }

  private updateArray(newArray: T[]) {
    this.splice(0, this.length, ...newArray);
  }
}
