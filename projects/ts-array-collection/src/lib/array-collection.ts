const acMap: WeakMap<ArrayCollection<any>, string> = new WeakMap();

export class ArrayCollection<T> extends Array<T> {

  // private idKey = 'id';

  constructor(...items: T[]) {
    super(...items);
  }

  setIdKey(idKey: string): ArrayCollection<T> {
    // this.idKey = idKey;
    acMap.set(this, idKey);
    return this;
  }

  // static get [Symbol.species](): ArrayConstructor {
  //   return Object.assign(function (...items: any[]) {
  //     const test = acMap.get(items as ArrayCollection<any>);
  //     debugger
  //     return new ArrayCollection(new Array(...items));
  //   }, ArrayCollection) as any;
  // }

  static get [Symbol.species](): ArrayConstructor {
    return Array;
  }

  getIdKey(): string {
    return acMap.has(this) ? acMap.get(this) : 'id';
  }

  set(items: T[]): ArrayCollection<T> {
    return this.getNewArrayCollectionWithIdKey(items);
  }

  add(item: T): ArrayCollection<T> {
    return this.getNewArrayCollectionWithIdKey([...this, item]);
  }

  update(id: string | number, item: Partial<T>): ArrayCollection<T> {
    const newArray: T[] = this.map(aItem => String(aItem[this.getIdKey()]) === String(id) ? ({...aItem, ...item}) : aItem );
    return this.getNewArrayCollectionWithIdKey(newArray);
  }

  remove(id: string | number): ArrayCollection<T> {
    const newArray: T[] = this.filter((aItem) => String(aItem[this.getIdKey()]) !== String(id));
    return this.getNewArrayCollectionWithIdKey(newArray);
  }

  private getNewArrayCollectionWithIdKey(newArray: T[]): ArrayCollection<T> {
    return new ArrayCollection<T>(...newArray).setIdKey(this.getIdKey());
  }
}
