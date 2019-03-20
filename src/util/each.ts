/**
 * Helper method for looping over objects properties
 * @param obj
 * @param callbackFn
 */
export function each<T>(obj: T, callbackFn: (key: string, value: any, obj: T) => void);
export function each(obj: object, callbackFn: (key: string, value: any, obj: object) => void) {
    const keys = Object.keys(obj);
    keys.forEach((key) => {
        callbackFn(key, obj[key], obj);
    });
}
