
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export interface Message {
    id: number;
    conversation: string;
}

export interface IQuery {
    messages(): Message[] | Promise<Message[]>;
}

type Nullable<T> = T | null;
