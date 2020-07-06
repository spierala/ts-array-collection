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
    return this.getNewArrayCollectionWithIdKey(items);
  }

  add(item: T): ArrayCollection<T> {
    return this.getNewArrayCollectionWithIdKey([...this, item]);
  }

  update(id: string | number, item: T): ArrayCollection<T> {
    const newArray: T[] = this.map(aItem => String(aItem[this.idKey]) === String(id) ? item : aItem );
    return this.getNewArrayCollectionWithIdKey(newArray);
  }

  remove(id: string | number): ArrayCollection<T> {
    const newArray: T[] = this.filter((aItem) => String(aItem[this.idKey]) !== String(id));
    return this.getNewArrayCollectionWithIdKey(newArray);
  }

  private getNewArrayCollectionWithIdKey(newArray: T[]): ArrayCollection<T> {
    return new ArrayCollection<T>(...newArray).setIdKey(this.idKey);
  }
}
