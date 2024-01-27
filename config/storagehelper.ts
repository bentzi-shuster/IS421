import "client-only";

export function getLocalStorage(key: string, defaultValue: any) {
    const stickyValue = localStorage.getItem(key);

    //     return (stickyValue !== null && stickyValue !== 'undefined')
    //         ? JSON.parse(stickyValue)
    //         : defaultValue;
    // }
    try {
        const stickyValue = localStorage.getItem(key);
        if (stickyValue === null || stickyValue === 'undefined') {
            return defaultValue;
        }
        return JSON.parse(stickyValue);
    } catch (error) {
        console.error('Error reading from localStorage', error);
        return defaultValue;
    }
}

// export function setLocalStorage(key: string, value: any) {
//     localStorage.setItem(key, JSON.stringify(value));
// }

export function setLocalStorage(key: string, value: any) {
    try {
        localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
        console.error('Error writing to localStorage', error);
    }
}