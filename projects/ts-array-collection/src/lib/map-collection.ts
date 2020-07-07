type KeyType = number | string;

export class MapCollection<T> extends Map<KeyType, T> {
  private idKey = 'id';

  constructor(items: T[] | Map<KeyType, T>, idKey: string = 'id') {
    super(
      items instanceof Map ? items : createKeyValueArray<T>(items, idKey)
    );

    if (idKey) {
      this.idKey = idKey;
    }
  }

  setItems(items: T[]): MapCollection<T> {
    const newMap: Map<KeyType, T> = new Map(createKeyValueArray<T>(items, this.idKey));
    return this.getMapCollectionWithIdKey(newMap);
  }

  add(item: T): MapCollection<T> {
    const newMap: Map<KeyType, T> = new Map(this);
    newMap.set(item[this.idKey], item);
    return this.getMapCollectionWithIdKey(newMap);
  }

  update(id: string | number, item: Partial<T>): MapCollection<T> {
    const newMap: Map<KeyType, T> = new Map(this);
    const foundItem: T = this.get(id);
    if (foundItem) {
      const updatedItem: T = {
        ...foundItem,
        ...item,
      };
      newMap.set(id, updatedItem);
    }
    return this.getMapCollectionWithIdKey(newMap);
  }

  remove(id: string | number): MapCollection<T> {
    const newMap: Map<KeyType, T> = new Map(this);
    newMap.delete(id);
    return this.getMapCollectionWithIdKey(newMap);
  }

  getItems(): T[] {
    return Array.from(this.values());
  }

  private getMapCollectionWithIdKey(newMap: Map<KeyType, T>): MapCollection<T> {
    const mapCollection = new MapCollection<T>(newMap, this.idKey);
    return mapCollection;
  }
}

function createKeyValueArray<T>(items: T[], idKey): [string, T][] {
  return items.map((item): [string, T] => [item[idKey], item]);
}
