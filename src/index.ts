import { NumberCollection } from './NumberCollection';
import { CharactersCollection } from './CharactersCollection';
import { LinkedList } from './LinkedList/LinkedList';

const numberCollection = new NumberCollection([1, 5, -2, 1]);
numberCollection.sort();
console.log(numberCollection.data);

const characCollection = new CharactersCollection('dCba');
characCollection.sort();
console.log(characCollection.data);

const linkedList = new LinkedList();
linkedList.add(-1);
linkedList.add(1222);
linkedList.add(22);
linkedList.add(-123);
linkedList.sort();
linkedList.print();
