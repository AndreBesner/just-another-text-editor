import { openDB } from 'idb';

const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });

// This code will use the PUT method in order to update existing content the user had typed
export const putDb = async (id, content) => {
  //debugging line
  console.log("Reading data from jate database...")
  //opens jate database
  const jateDb = await openDB('jate', 1);
  //creates a transaction with read and write priv
  const tx = jateDb.transaction('jate', 'readWrite');
  //open object store with respect to jate
  const objStore = tx.objectStore('jate');
  //updates records with id parameter and the user typed content
  const req = objStore.put({ id: id, value: content });
  const res = await req;
  console.log("...text added to jate database!");
}

export const getDb = async () => {
  console.log("Reading data from jate database...")
  const jateDb = await openDB('jate', 1);
  const tx = jateDb.transaction('jate', 'readWrite');
  const objStore = tx.objectStore('jate');
  const req = objStore.getAll();
  const res = await req;
  console.log("...data has been read from jate database!");
}

initdb();
