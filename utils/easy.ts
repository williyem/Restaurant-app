

export function addToArray(param:string | number, arr:any[]) {
    if( arr.includes(param)){
        return arr.filter((value) => value !== param);
    }
    return [...arr, param];
}