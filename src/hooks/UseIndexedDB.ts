// hooks/useIndexedDB.ts

export function useIndexedDB(dbName: string, storeName: string) {
  const db = ref<IDBDatabase | null>(null);
  const error = ref<Error | null>(null);
  const isLoading = ref(false);

  // 打开数据库
  const openDB = () => {
    return new Promise<IDBDatabase>((resolve, reject) => {
      isLoading.value = true;
      const request = indexedDB.open(dbName, 1);

      request.onupgradeneeded = (event) => {
        const db = (event.target as IDBOpenDBRequest).result;
        if (!db.objectStoreNames.contains(storeName)) {
          db.createObjectStore(storeName, { keyPath: "id" });
        }
      };

      request.onsuccess = (event) => {
        db.value = (event.target as IDBOpenDBRequest).result;
        isLoading.value = false;
        resolve(db.value);
      };

      request.onerror = (event) => {
        error.value = (event.target as IDBOpenDBRequest).error;
        isLoading.value = false;
        reject(error.value);
      };
    });
  };
  // 添加/更新数据
  const setItem = async (data: { id: string; [key: string]: any }) => {
    if (!db.value) await openDB();
    return new Promise((resolve, reject) => {
      const tx = db.value!.transaction(storeName, "readwrite");
      const store = tx.objectStore(storeName);
      const request = store.put(data);

      request.onsuccess = () => resolve();
      request.onerror = (e) => reject((e.target as IDBRequest).error);
    });
  };

  // 获取数据
  const getItem = async (id: string) => {
    if (!db.value) await openDB();
    return new Promise((resolve, reject) => {
      const tx = db.value!.transaction(storeName);
      const store = tx.objectStore(storeName);
      const request = store.get(id);

      request.onsuccess = () => resolve(request.result);
      request.onerror = (e) => reject((e.target as IDBRequest).error);
    });
  };
  const batchSetItems = async (items: Array<{ id: string }>) => {
    if (!db.value) await openDB();
    return new Promise((resolve) => {
      const tx = db.value!.transaction(storeName, "readwrite");
      const store = tx.objectStore(storeName);

      items.forEach((item) => store.put(item));
      tx.oncomplete = () => resolve();
    });
  };
  const getPagedData = async (page: number, pageSize: number) => {
    if (!db.value) await openDB();
    return new Promise((resolve) => {
      const tx = db.value!.transaction(storeName);
      const store = tx.objectStore(storeName);
      const request = store.openCursor();
      const results: any[] = [];
      let counter = 0;

      request.onsuccess = (e) => {
        const cursor = (e.target as IDBRequest<IDBCursorWithValue>).result;
        if (!cursor || counter >= pageSize) {
          resolve(results);
          return;
        }

        if (counter >= (page - 1) * pageSize) {
          results.push(cursor.value);
          counter++;
        }
        cursor.continue();
      };
    });
  };
  // 自动关闭连接
  onUnmounted(() => {
    db.value?.close();
  });

  return {
    db,
    error,
    isLoading,
    openDB,
    setItem,
    getItem,
    batchSetItems,
    getPagedData,
  };
}
