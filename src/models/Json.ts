import { Warscroll } from './Types';

export type Stringified<T> = {
    [P in keyof T]: T[P] extends Array<infer Item>
        ? Array<Stringified<Item>>
        : T[P] extends object
            ? Stringified<T[P]>
            : T[P] extends string 
                ? T[P] 
                : string;
};