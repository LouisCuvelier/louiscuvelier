export type ObjectValues<T> = T[keyof T];
export type WithRequired<T, K extends keyof T> = T & { [P in K]-?: T[P] };
