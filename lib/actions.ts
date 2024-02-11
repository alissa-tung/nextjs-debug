"use server";

const xs = new Array();

export const modify = async (): Promise<void> => {
  xs.push(42);
};

export const read = async (): Promise<string> => {
  return xs.toString();
};
