/**********problem - 1********* */
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
// console.log(formatValue(true));

/**********problem - 2********* */
const getLength = (value: string | number[]): number | string => {
  if (typeof value === "string") {
    return value.length;
  } else if (Array.isArray(value)) {
    return value.length;
  } else {
    return "Invalid Input";
  }
};
console.log(getLength("typescript"));
console.log(getLength([10, 20, 30, 40]));

/**********problem - 3********* */
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
// const person1 = new Person("John Doe", 30);
// console.log(person1.getDetails());

// const person2 = new Person("Alice", 25);
// console.log(person2.getDetails());

/**********problem - 4********* */
const filterByRating = (
  items: {
    title: string;
    rating: number;
  }[]
) => {
  const filteredData = items.filter((item) => item.rating >= 4);
  return filteredData;
};
// const books = [
//   { title: "Book A", rating: 4 },
//   { title: "Book B", rating: 3 },
//   { title: "Book C", rating: 5 },
// ];

// console.log(filterByRating(books));
/**********problem - 5********* */
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
// const users = [
//   { id: 1, name: "Rakib", email: "rakib@example.com", isActive: true },
//   { id: 2, name: "Asha", email: "asha@example.com", isActive: false },
//   { id: 3, name: "Rumi", email: "rumi@example.com", isActive: true },
// ];

// console.log(filterActiveUsers(users));
/**********problem - 6********* */
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
// const myBook: Book = {
//   title: "The Great Gatsby",
//   author: "F. Scott Fitzgerald",
//   publishedYear: 1925,
//   isAvailable: true,
// };

// console.log(printBookDetails(myBook));
/**********problem - 7********* */
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
// const array1 = ["1", "2", "3", "4", "5"];
// const array2 = [1, 1, 1, 3, 4, 5, 6, 7];
// console.log(getUniqueValues(array1, array2));

/**********problem - 8********* */
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
// const products = [
//   { name: "Pen", price: 10, quantity: 2 },
//   { name: "Notebook", price: 25, quantity: 3, discount: 10 },
//   { name: "Bag", price: 50, quantity: 1, discount: 20 },
// ];

// console.log(calculateTotalPrice(products));
