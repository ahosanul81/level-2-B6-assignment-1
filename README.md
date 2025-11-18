# 1. What are some differences between interfaces and types in TypeScript?

# Ans: Typescript এ interface হলো object ও array ডাটা টাইপ নির্ধারণ করতে সাহায্য করে। ভুল ডাটা ইনপুট দেওয়া হলে ডেভলপমেন্ট সময়েই error আসবে। একাধিক Interface এর নাম একই হলো তারা merge হয়ে য়াবে এবং extends রিওয়ার্ড ব্যবহার করে বর্ধিত করা যায়।

# কিন্তু অন্যদিকে type কিছুটা আলাদা interface থেকে। এখানে একাধিক type এর নাম একই হতে পারবে না। type এ extends ব্যবহার করা যায় না। কিন্তু intersection ব্যবহার করে কম্বাইন্ড করা যায়।

# 2. What is the use of the keyof keyword in TypeScript? Provide an example.

# Ans: keyof keyword-টি TypeScript-এ একটি বিদ্যমান টাইপ থেকে তার সকল পাবলিক প্রোপার্টি নামের স্ট্রিং বা সিম্বল ইউনিয়ন টাইপ বের করে আনার জন্য ব্যবহৃত হয়। এটি কোনো অবজেক্ট টাইপের সকল valid keys -এর একটি টাইপ তৈরি করে।

# Example:

`interface User {
id: number;
username: string;
email: string;
}`

UserKeys এখন একটি ইউনিয়ন টাইপ: "id" | "username" | "email"

# `type UserKeys = keyof User;`
