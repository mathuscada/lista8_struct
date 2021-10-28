const calculateIMC = (weight, height) => weight/height**2;

const generateUser = (name, age, email) => {
    return {
        "name": name,
        "age": age,
        "email": email
    };
};

const even = (array) => array.filter((n) => n % 2 == 0);

console.log(calculateIMC(55, 1.75));
console.log(generateUser("Nome", 20, "email"));
console.log(even([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));