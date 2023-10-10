import { Sorter } from './Sorter';

export class CharactersCollection extends Sorter {
  constructor(public data: string) {
    super();
  }

  get length(): number {
    return this.data.length;
  }

  compare(leftIndex: number, rightIndex: number): boolean {
    return this.data[leftIndex].localeCompare(this.data[rightIndex]) === 1;
  }

  swap(leftIndex: number, rightIndex: number): void {
    const array = this.data.split('');
    const leftTemp = array[leftIndex];
    array[leftIndex] = array[rightIndex];
    array[rightIndex] = leftTemp;
    this.data = array.join('');
  }
}
