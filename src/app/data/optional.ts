export class Optional<T> {
  static empty<T>(): Optional<T> {
    return new Optional<T>(undefined);
  }

  static of<T>(item: T): Optional<T> {
    return new Optional<T>(item);
  }

  constructor(public item?: T) {
  }

  get exists(): boolean {
    return typeof this.item !== 'undefined';
  }

}
