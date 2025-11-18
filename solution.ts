const formatValue = (
  value: string | number | boolean
): string | number | boolean => {
  if (typeof value === "string") {
    return value.toUpperCase();
  } else if (typeof value === "number") {
    return value * 10;
  } else if (typeof value === "boolean") {
    return !value;
  } else {
    return "Invalid Input";
  }
};

const getLength = (value: string | number[]): number | string => {
  if (typeof value === "string") {
    return value.length;
  } else if (Array.isArray(value)) {
    return value.length;
  } else {
    return "Invalid Input";
  }
};

class Person {
  name: string;
  age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
  getDetails(): string {
    return `"Name: ${this.name}, Age: ${this.age}"`;
  }
}

const filterByRating = (
  items: {
    title: string;
    rating: number;
  }[]
) => {
  const filteredData = items.filter((item) => item.rating >= 4);
  return filteredData;
};

type TUsers = {
  id: number;
  name: string;
  email: string;
  isActive: boolean;
};
const filterActiveUsers = (users: TUsers[]): TUsers[] => {
  const activeUser = users.filter((user: TUsers) => user.isActive === true);
  return activeUser;
};

interface Book {
  title: string;
  author: string;
  publishedYear: number;
  isAvailable: boolean;
}
const printBookDetails = (book: Book): string => {
  return ` Title: ${book.title} Author: ${book.author} PublishedYear: ${
    book.publishedYear
  } IsAvailable: ${book.isAvailable === true ? "Yes" : "No"}`;
};

const getUniqueValues = (
  array1: number[] | string[],
  array2: number[] | string[]
): number[] => {
  const arr = [...array1, ...array2];
  const hashMap: { [key: string]: number } = {};
  let result: number[] = [];
  arr.forEach((elem, index) => {
    if (!hashMap[elem]) {
      hashMap[elem] = index;
    }
  });
  for (let key in hashMap) {
    result.push(Number(key));
  }

  return result;
};

type TProduct = {
  name: string;
  price: number;
  quantity: number;
  discount?: number;
};
const calculateTotalPrice = (products: TProduct[]): number => {
  const totalPriceOfProduct = products.reduce(
    (totalPrice: number, currentProduct: TProduct) => {
      let discount = 0;
      if (currentProduct?.discount) {
        discount = currentProduct.discount;
      }

      return (
        totalPrice + currentProduct.quantity * currentProduct.price - discount
      );
    },
    0
  );
  return totalPriceOfProduct;
};
