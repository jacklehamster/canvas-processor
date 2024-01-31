export interface List<T> {
    readonly length: number;
    at(index: number): T | undefined;
}
export declare function forEach<T>(list: List<T> | undefined, callback: (value: T | undefined, index: number) => void): void;
export declare function map<T, R>(list: List<T>, callback: (value: T | undefined, index: number) => R): (R | undefined)[];
