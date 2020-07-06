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
    this.updateNativeArray(items);
    return this.getNewArrayCollectionWithIdKey();
  }

  add(item: T): ArrayCollection<T> {
    this.push(item);
    return this.getNewArrayCollectionWithIdKey();
  }

  update(item: T): ArrayCollection<T> {
    const newArray: T[] = this.map(aItem => String(aItem[this.idKey]) === String(item[this.idKey]) ? item : aItem );
    this.updateNativeArray(newArray);
    return this.getNewArrayCollectionWithIdKey();
  }

  remove(id: string | number): ArrayCollection<T> {
    const newArray: T[] = this.filter((aItem) => String(aItem[this.idKey]) !== String(id));
    this.updateNativeArray(newArray);
    return this.getNewArrayCollectionWithIdKey();
  }

  private updateNativeArray(newArray: T[]) {
    this.splice(0, this.length, ...newArray);
  }

  private getNewArrayCollectionWithIdKey(): ArrayCollection<T> {
    return new ArrayCollection<T>(...this).setIdKey(this.idKey);
  }
}
