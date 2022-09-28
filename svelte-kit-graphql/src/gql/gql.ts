/* eslint-disable */
import * as types from './graphql';
import type { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

const documents = {
    "\n\tquery Hello {\n\t\thello\n\t}\n": types.HelloDocument,
};

export function graphql(source: "\n\tquery Hello {\n\t\thello\n\t}\n"): (typeof documents)["\n\tquery Hello {\n\t\thello\n\t}\n"];

export function graphql(source: string): unknown;
export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;