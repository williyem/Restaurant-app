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

// export const isAuthenticated = () => {
//   return false;
// };

export const getFirstLetters = (username: string) => {
  if (typeof username !== "string" || !username.trim()) {
    return "RA"; // Return a message for invalid inputs
  }
  const words = username?.split(" "); // Split username into words
  const firstLetters = words
    .slice(0, 2) // Consider the first two words
    .map((word) => word.charAt(0)) // Get the first letter of each word
    .join(""); // Join the first letters

  return firstLetters.toUpperCase(); // Convert to uppercase if needed
};
