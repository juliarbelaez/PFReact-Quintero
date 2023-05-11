const products = [
  {
    id: "1",
    name: "Azucarera Carmesí",
    price: 38500,
    category: "azucareras",
    img: "/assets/azucareraCarmesi.jpg",
    stock: 15,
    description: "Dimensiones: 12cm alto x 11cm ancho x 8cm diámetro",
  },
  {
    id: "2",
    name: "Azucarera Flora",
    price: 40500,
    category: "azucareras",
    img: "/assets/azucareraFlora.jpg",
    stock: 25,
    description: "Dimensiones: 12cm alto x 11cm ancho x 8cm diámetro",
  },
  {
    id: "3",
    name: "Azucarera Protea",
    price: 43500,
    category: "azucareras",
    img: "/assets/azucareraProtea.jpg",
    stock: 28,
    description: "Dimensiones: 12cm alto x 11cm ancho x 8cm diámetro",
  },
  {
    id: "4",
    name: "Jarra Carmesí",
    price: 46500,
    category: "jarras",
    img: "/assets/jarraCarmesi.jpg",
    stock: 12,
    description: "Dimensiones:10cm diametro x 10,5cm alto  x 8,5cm base",
  },
  {
    id: "5",
    name: "Jarra Flora",
    price: 49000,
    category: "jarras",
    img: "/assets/jarraFlora.jpg",
    stock: 25,
    description: "Dimensiones:10cm diametro x 10,5cm alto  x 8,5cm base",
  },
  {
    id: "6",
    name: "Jarra Violeta",
    price: 47500,
    category: "jarras",
    img: "/assets/jarraVioleta.jpg",
    stock: 38,
    description: "Dimensiones:10cm diametro x 10,5cm alto  x 8,5cm base",
  },
  {
    id: "7",
    name: "Juego de té Limonar",
    price: 29500,
    category: "te",
    img: "/assets/juegoTeLimonar.jpg",
    stock: 8,
    description: "Dimensiones: 7cm x 11cm x 8.5cm ",
  },
  {
    id: "8",
    name: "Juego de té Olivo",
    price: 32000,
    category: "te",
    img: "/assets/juegoTeOlivo.jpg",
    stock: 50,
    description: "Dimensiones: 7cm x 11cm x 8.5cm ",
  },
  {
    id: "9",
    name: "Juego de té Violeta",
    price: 34500,
    category: "te",
    img: "/assets/juegoTeVioleta.jpg",
    stock: 90,
    description: "Dimensiones: 7cm x 11cm x 8.5cm ",
  },
  {
    id: "10",
    name: "Tetera Oslo Azalea",
    price: 54000,
    category: "teteras",
    img: "/assets/teteraOsloAzalea.jpg",
    stock: 5,
    description: "Dimensiones: 23cm diámetro x 15cm alto ",
  },
  {
    id: "11",
    name: "Tetera Oslo Bruma",
    price: 57000,
    category: "teteras",
    img: "/assets/teteraOsloBruma.jpg",
    stock: 10,
    description: "Dimensiones: 23cm diámetro x 15cm alto ",
  },
  {
    id: "12",
    name: "Tetera Oslo Violeta",
    price: 59000,
    category: "teteras",
    img: "/assets/teteraVioleta.jpg",
    stock: 7,
    description: "Dimensiones: 23cm diámetro x 15cm alto ",
  },
  {
    id: "13",
    name: "Vajilla Bruma Turquesa",
    price: 234000,
    category: "vajillas",
    img: "/assets/vajillaBrumaTurquesa.jpg",
    stock: 1,
    description: "Vajilla Bruma Turquesa",
  },
  {
    id: "14",
    name: "Vajilla Bruma Vinotinto",
    price: 234000,
    category: "vajillas",
    img: "/assets/vajillaBrumaVinotinto.jpg",
    stock: 2,
    description: "Vajilla Bruma Vinotinto",
  },
  {
    id: "15",
    name: "Vajilla Violeta",
    price: 250000,
    category: "vajillas",
    img: "/assets/vajillaVioleta.jpg",
    stock: 3,
    description: "Vajilla Violeta",
  },
];

export const getProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products);
    }, 500);
  });
};

export const getProductById = (productId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products.find((prod) => prod.id === productId));
    }, 500);
  });
};
export const getProductByCategory = (categoryId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products.filter((prod) => prod.category === categoryId));
    }, 500);
  });
};
