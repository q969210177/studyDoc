import { nanoid } from "nanoid";
import { ref } from "vue";

interface IDBOptions {
  dbName?: string;
  version?: number;
  keyPath?: string;
  indexes?: Array<{
    name: string;
    keyPath: string | string[];
    options?: IDBIndexParameters;
  }>;
}

export function useIndexedDB(storeName: string, options?: IDBOptions) {
  const dbName = options?.dbName || "PHOTOGRAPHY";
  const version = options?.version || 1;
  const keyPath = options?.keyPath || "id";
  let db: IDBDatabase | null = null;
  const error = ref<Error | null>(null);
  const isLoading = ref(false);

  // 打开数据库连接
  const openDB = (): Promise<IDBDatabase> => {
    return new Promise((resolve, reject) => {
      isLoading.value = true;
      error.value = null;

      const request = indexedDB.open(dbName, version);

      request.onupgradeneeded = (event) => {
        const db = (event.target as IDBOpenDBRequest).result;

        // 创建对象存储空间（如果不存在）
        if (!db.objectStoreNames.contains(storeName)) {
          const store = db.createObjectStore(storeName, {
            keyPath,
            autoIncrement: true,
          });

          // 创建索引
          options?.indexes?.forEach((index) => {
            store.createIndex(index.name, index.keyPath, index.options);
          });
        }
      };

      request.onsuccess = (event) => {
        db = (event.target as IDBOpenDBRequest).result;
        isLoading.value = false;
        resolve(db);
      };

      request.onerror = (event) => {
        error.value = (event.target as IDBOpenDBRequest).error;
        isLoading.value = false;
        reject(error.value);
      };
    });
  };

  // 添加数据
  async function add<T>(data: T) {
    const transaction = db?.transaction([storeName], "readwrite");
    const objectStore = transaction?.objectStore(storeName);
    if (objectStore) {
      const res = await objectStore.add({ [keyPath]: nanoid(), ...data });
      return res;
    }
  }
  // 获取所有数据
  const getAll = async <T>(): Promise<T[]> => {
    try {
      if (!db) await openDB();
      isLoading.value = true;

      return new Promise((resolve, reject) => {
        const transaction = db!.transaction(storeName, "readonly");
        const store = transaction.objectStore(storeName);
        const request = store.getAll();

        request.onsuccess = () => {
          isLoading.value = false;
          resolve(request.result as T[]);
        };

        request.onerror = () => {
          error.value = request.error;
          isLoading.value = false;
          reject(request.error);
        };
      });
    } catch (err) {
      error.value = err as Error;
      isLoading.value = false;
      throw err;
    }
  };

  // 根据ID获取数据
  const get = async <T>(id: IDBValidKey): Promise<T | undefined> => {
    try {
      if (!db) await openDB();
      isLoading.value = true;

      return new Promise((resolve, reject) => {
        const transaction = db!.transaction(storeName, "readonly");
        const store = transaction.objectStore(storeName);
        const request = store.get(id);

        request.onsuccess = () => {
          isLoading.value = false;
          resolve(request.result as T);
        };

        request.onerror = () => {
          error.value = request.error;
          isLoading.value = false;
          reject(request.error);
        };
      });
    } catch (err) {
      error.value = err as Error;
      isLoading.value = false;
      throw err;
    }
  };

  // 更新数据
  const update = async <T extends { id: IDBValidKey }>(
    data: T
  ): Promise<void> => {
    try {
      if (!db) await openDB();
      isLoading.value = true;

      return new Promise((resolve, reject) => {
        const transaction = db!.transaction(storeName, "readwrite");
        const store = transaction.objectStore(storeName);
        const request = store.put(data);

        request.onsuccess = () => {
          isLoading.value = false;
          resolve();
        };

        request.onerror = () => {
          error.value = request.error;
          isLoading.value = false;
          reject(request.error);
        };
      });
    } catch (err) {
      error.value = err as Error;
      isLoading.value = false;
      throw err;
    }
  };

  // 删除数据
  const remove = async (id: IDBValidKey): Promise<void> => {
    try {
      if (!db) await openDB();
      isLoading.value = true;

      return new Promise((resolve, reject) => {
        const transaction = db!.transaction(storeName, "readwrite");
        const store = transaction.objectStore(storeName);
        const request = store.delete(id);

        request.onsuccess = () => {
          isLoading.value = false;
          resolve();
        };

        request.onerror = () => {
          error.value = request.error;
          isLoading.value = false;
          reject(request.error);
        };
      });
    } catch (err) {
      error.value = err as Error;
      isLoading.value = false;
      throw err;
    }
  };

  // 清空存储
  const clear = async (): Promise<void> => {
    try {
      if (!db) await openDB();
      isLoading.value = true;

      return new Promise((resolve, reject) => {
        const transaction = db!.transaction(storeName, "readwrite");
        const store = transaction.objectStore(storeName);
        const request = store.clear();

        request.onsuccess = () => {
          isLoading.value = false;
          resolve();
        };

        request.onerror = () => {
          error.value = request.error;
          isLoading.value = false;
          reject(request.error);
        };
      });
    } catch (err) {
      error.value = err as Error;
      isLoading.value = false;
      throw err;
    }
  };

  // 使用索引查询
  const queryByIndex = async <T>(
    indexName: string,
    key: IDBValidKey | IDBKeyRange
  ): Promise<T[]> => {
    try {
      if (!db) await openDB();
      isLoading.value = true;

      return new Promise((resolve, reject) => {
        const transaction = db!.transaction(storeName, "readonly");
        const store = transaction.objectStore(storeName);
        const index = store.index(indexName);
        const request = index.getAll(key);

        request.onsuccess = () => {
          isLoading.value = false;
          resolve(request.result as T[]);
        };

        request.onerror = () => {
          error.value = request.error;
          isLoading.value = false;
          reject(request.error);
        };
      });
    } catch (err) {
      error.value = err as Error;
      isLoading.value = false;
      throw err;
    }
  };

  return {
    db,
    error,
    isLoading,
    openDB,
    add,
    get,
    getAll,
    update,
    remove,
    clear,
    queryByIndex,
  };
}
