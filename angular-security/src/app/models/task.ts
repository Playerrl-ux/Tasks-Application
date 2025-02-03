import { Stats } from "./stats";

export interface Task{

    title: string,
    estimatedEnd: Date,
    urgent: boolean,
    important: boolean,
    description?:string,
    stats: Stats,

    [key: string]: any;
}