export const products = [
  {
    id: 1,
    name: "Atrak Black",
    category: "رجالي",
    price: 799,
    rating: 5,
    reviews: 128,

    image: "/images/products/product1.png",

    images: [
      "/images/products/product1.png",
      "/images/products/product1-2.png",
      "/images/products/product1-3.png",
      "/images/products/product1-4.png",
    ],

    description:
      "عطر رجالي فاخر يجمع بين البرغموت والعود والمسك، يمنحك حضورًا قويًا وثباتًا يدوم طوال اليوم.",

    ingredients: [
      "البرغموت",
      "العود",
      "المسك",
      "العنبر",
      "خشب الصندل",
    ],

    sizes: ["50ml", "100ml", "200ml"],

    stock: 25,

    reviewsList: [
      {
        id: 1,
        user: "Ahmed",
        rating: 5,
        comment: "رائحة رائعة وثبات ممتاز.",
      },
      {
        id: 2,
        user: "Omar",
        rating: 5,
        comment: "من أفضل العطور التي استخدمتها.",
      },
    ],
  },

  {
    id: 2,
    name: "Atrak Rose",
    category: "نسائي",
    price: 699,
    rating: 4.8,
    reviews: 87,
    image: "/images/products/product2.png",
    images: [
      "/images/products/product2.png",
      "/images/products/product2-2.png",
    ],
    description:
      "عطر نسائي ناعم بلمسات الورد والياسمين والفانيليا.",
    ingredients: [
      "الورد",
      "الياسمين",
      "الفانيليا",
    ],
    sizes: ["50ml", "100ml"],
    stock: 15,
    reviewsList: [],
  },

  {
    id: 3,
    name: "Atrak Oud",
    category: "شرقي",
    price: 999,
    rating: 5,
    reviews: 64,
    image: "/images/products/product3.png",
    images: [
      "/images/products/product3.png",
    ],
    description:
      "عطر شرقي غني بالعود والعنبر والمسك.",
    ingredients: [
      "العود",
      "العنبر",
      "المسك",
    ],
    sizes: ["100ml", "200ml"],
    stock: 10,
    reviewsList: [],
  },

  {
    id: 4,
    name: "Atrak Paris",
    category: "فرنسي",
    price: 899,
    rating: 4.9,
    reviews: 95,
    image: "/images/products/product4.png",
    images: [
      "/images/products/product4.png",
    ],
    description:
      "عطر فرنسي فاخر بلمسات الحمضيات والأخشاب.",
    ingredients: [
      "الليمون",
      "اللافندر",
      "خشب الأرز",
    ],
    sizes: ["50ml", "100ml"],
    stock: 18,
    reviewsList: [],
  },
];