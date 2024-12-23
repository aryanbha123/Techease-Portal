export const openDB = () => {
    return new Promise((resolve, reject) => {
        const request = indexedDB.open("quizDatabase", 1);

        request.onupgradeneeded = (event) => {
            const db = event.target.result;
            const quizStore = db.createObjectStore("quizzes", {
                keyPath: "_id", // Use '_id' as the key path
            });
        };

        request.onerror = (event) => reject(event.target.error);
        request.onsuccess = (event) => resolve(event.target.result);
    });
};

export const storeData = async (data) => {
    const db = await openDB();
    const transaction = db.transaction("quizzes", "readwrite");
    const store = transaction.objectStore("quizzes");

    store.clear();

    data.forEach(item => {
        if (!item._id) {
            console.error("Item missing '_id':", item);
            return;
        }
        store.put(item);
    });

    transaction.oncomplete = () => {
        console.log("Data stored successfully");
    };

    transaction.onerror = (event) => {
        console.error("Error storing data:", event.target.error);
    };
};

export const getData = async () => {
    const db = await openDB();
    const transaction = db.transaction("quizzes", "readonly");
    const store = transaction.objectStore("quizzes");

    return new Promise((resolve, reject) => {
        const request = store.getAll(); // Get all data from the object store
        request.onsuccess = () => resolve(request.result);
        request.onerror = (event) => reject(event.target.error);
    });
};
