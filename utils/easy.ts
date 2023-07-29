export function addToArray(param: string | number, arr: any[]) {
  if (arr.includes(param)) {
    return arr.filter((value) => value !== param);
  }
  return [...arr, param];
}

export const calulateTotal = (cartArr: any) => {
  let total = 0;
  cartArr.forEach((item: any) => {
    total += item.price * item.quantity;
  });
  return total;
};

export const quantityList = (num: number) => {
  const arr = [];
  for (let i = 1; i <= num; i++) {
    arr.push(i);
  }
  return arr;
};

export function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}
