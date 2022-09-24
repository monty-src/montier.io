import {
  createSerializableStateInvariantMiddleware,
  isPlain,
} from "@reduxjs/toolkit";

function isIterable(value: any) {
  return Symbol.iterator in Object(value);
}

export const isSerializable = (value: any) =>
  isIterable(value) || isPlain(value);

export const getEntries = (value: any) =>
  isIterable(value) ? value.entries() : Object.entries(value);

export const serializableMiddleware =
  createSerializableStateInvariantMiddleware({
    isSerializable,
    getEntries,
  });
