import { Metadata } from "./metadata";
import { Sys } from "./sys";

export interface Entry<T> {
    sys: Sys;
    fields: T;
    metadata: Metadata;
}