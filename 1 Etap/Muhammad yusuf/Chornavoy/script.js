const obj1 = {
  name: "Ali",
  address: {
    city: "Tashkent"
  }
};

const obj2 = Object.assign({}, obj1);

obj2.address.city = "Vali";
obj2.name = "Gali";

console.log(obj1);


const obj3 = {
  name: "Ali",
  address: {
    city: "Tashkent"
  }
};

const obj5 = structuredClone(obj3);
obj5.name = "Vali";
obj5.address.city = "Samarqand";

console.log(obj5);