const useStorage = (storageName) => {
    const storage = JSON.parse(localStorage.getItem(storageName));

    const setStorage = (value) => {
        localStorage.setItem(storageName, JSON.stringify(value));
    }

    const removeStorage = () => {
        localStorage.removeItem(storageName);
    }

    return [storage, setStorage, removeStorage];
}

export default useStorage;