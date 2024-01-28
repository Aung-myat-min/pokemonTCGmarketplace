export const transformOptions = (arr: string[]) => {
  return arr.map((str) => ({ id: str, name: str, value: str }));
};

export const transformSetToOptions = (arr: any[]) => {
  return arr.map((item) => ({ id: item.id, name: item.name, value: item.id }));
};
