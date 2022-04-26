// // 20220107031214
// // https://fakestoreapi.com/products
// // 20220223134301
// // https://counties-kenya.herokuapp.com/api/v1

// export let data = [
//   {
//     name: "Mombasa",
//     code: "1",
//     areaSqKm: "212.5",
//     capital: ["Mombasa"],
//   },
//   {
//     name: "Kwale",
//     code: "2",
//     areaSqKm: "8270.3",
//     capital: ["Kwale"],
//   },
//   {
//     name: "Kilifi",
//     code: "3",
//     areaSqKm: "12245.9",
//     capital: ["Kilifi"],
//   },
//   {
//     name: "Tana River",
//     code: "4",
//     areaSqKm: "35375.8",
//     capital: ["Hola"],
//   },
//   {
//     name: "Lamu",
//     code: "5",
//     areaSqKm: "6497.7",
//     capital: ["Lamu"],
//   },
//   {
//     name: "Taita Taveta",
//     code: "6",
//     areaSqKm: "17083.9",
//     capital: ["Mwatate"],
//   },
//   {
//     name: "Garissa",
//     code: "7",
//     areaSqKm: "45720.2",
//     capital: ["Garissa"],
//   },
//   {
//     name: "Wajir",
//     code: "8",
//     areaSqKm: "55840.6",
//     capital: ["Wajir"],
//   },
//   {
//     name: "Mandera",
//     code: "9",
//     areaSqKm: "25797.7",
//     capital: ["Mandera"],
//   },
//   {
//     name: "Marsabit",
//     code: "10",
//     areaSqKm: "66923.1",
//     capital: ["Marsabit"],
//   },
//   {
//     name: "Isiolo",
//     code: "11",
//     areaSqKm: "25336.1",
//     capital: ["Isiolo"],
//   },
//   {
//     name: "Meru",
//     code: "12",
//     areaSqKm: "7003.1",
//     capital: ["Meru"],
//   },
//   {
//     name: "Tharaka Nithi",
//     code: "13",
//     areaSqKm: "2609.5",
//     capital: ["Kathwana"],
//   },
//   {
//     name: "Embu",
//     code: "14",
//     areaSqKm: "2555.9",
//     capital: ["Embu"],
//   },
//   {
//     name: "Kitui",
//     code: "15",
//     areaSqKm: "24385.1",
//     capital: ["Kitui"],
//   },
//   {
//     name: "Machakos",
//     code: "16",
//     areaSqKm: "5952.9",
//     capital: ["Machakos"],
//   },
//   {
//     name: "Makueni",
//     code: "17",
//     areaSqKm: "8008.9",
//     capital: ["Wote"],
//   },
//   {
//     name: "Nyandarua",
//     code: "18",
//     areaSqKm: "3107.7",
//     capital: ["Ol Kalou"],
//   },
//   {
//     name: "Nyeri",
//     code: "19",
//     areaSqKm: "2361",
//     capital: ["Nyeri"],
//   },
//   {
//     name: "Kirinyaga",
//     code: "20",
//     areaSqKm: "1205.4",
//     capital: ["Kerugoya", "Kutus"],
//   },
//   {
//     name: "Murang'a",
//     code: "21",
//     areaSqKm: "2325.8",
//     capital: ["Murang'a"],
//   },
//   {
//     name: "Kiambu",
//     code: "22",
//     areaSqKm: "2449.2",
//     capital: ["Kiambu"],
//   },
//   {
//     name: "Turkana",
//     code: "23",
//     areaSqKm: "71597.8",
//     capital: ["Lodwar"],
//   },
//   {
//     name: "West Pokot",
//     code: "24",
//     areaSqKm: "8418.2",
//     capital: ["Kapenguria"],
//   },
//   {
//     name: "Samburu",
//     code: "25",
//     areaSqKm: "20182.5",
//     capital: ["Maralal"],
//   },
//   {
//     name: "Trans Nzoia",
//     code: "26",
//     areaSqKm: "2469.9",
//     capital: ["Kitale"],
//   },
//   {
//     name: "Uasin Gishu",
//     code: "27",
//     areaSqKm: "2955.3",
//     capital: ["Eldoret"],
//   },
//   {
//     name: "Elgeyo Marakwet",
//     code: "28",
//     areaSqKm: "3079.7",
//     capital: ["Iten"],
//   },
//   {
//     name: "Nandi",
//     code: "29",
//     areaSqKm: "2884.5",
//     capital: ["Kapsabet"],
//   },
//   {
//     name: "Baringo",
//     code: "30",
//     areaSqKm: "11075.3",
//     capital: ["Kabarnet"],
//   },
//   {
//     name: "Laikipia",
//     code: "31",
//     areaSqKm: "8696.1",
//     capital: ["Rumuruti"],
//   },
//   {
//     name: "Nakuru",
//     code: "32",
//     areaSqKm: "7509.5",
//     capital: ["Nakuru"],
//   },
//   {
//     name: "Narok",
//     code: "33",
//     areaSqKm: "17921.2",
//     capital: ["Narok"],
//   },
//   {
//     name: "Kajiado",
//     code: "34",
//     areaSqKm: "21292.7",
//     capital: ["Kajiado"],
//   },
//   {
//     name: "Kericho",
//     code: "35",
//     areaSqKm: "2454.5",
//     capital: ["Kericho"],
//   },
//   {
//     name: "Bomet",
//     code: "36",
//     areaSqKm: "1997.9",
//     capital: ["Bomet"],
//   },
//   {
//     name: "Kakamega",
//     code: "37",
//     areaSqKm: "3033.8",
//     capital: ["Kakamega"],
//   },
//   {
//     name: "Vihiga",
//     code: "38",
//     areaSqKm: "531.3",
//     capital: ["Vihiga"],
//   },
//   {
//     name: "Bungoma",
//     code: "39",
//     areaSqKm: "2206.9",
//     capital: ["Bungoma"],
//   },
//   {
//     name: "Busia",
//     code: "40",
//     areaSqKm: "1628.4",
//     capital: ["Busia"],
//   },
//   {
//     name: "Siaya",
//     code: "41",
//     areaSqKm: "2496.1",
//     capital: ["Siaya"],
//   },
//   {
//     name: "Kisumu",
//     code: "42",
//     areaSqKm: "2009.5",
//     capital: ["Kisumu"],
//   },
//   {
//     name: "Homa Bay",
//     code: "43",
//     areaSqKm: "3154.7",
//     capital: ["Homa Bay"],
//   },
//   {
//     name: "Migori",
//     code: "44",
//     areaSqKm: "2586.4",
//     capital: ["Migori"],
//   },
//   {
//     name: "Kisii",
//     code: "45",
//     areaSqKm: "1317.9",
//     capital: ["Kisii"],
//   },
//   {
//     name: "Nyamira",
//     code: "46",
//     areaSqKm: "912.5",
//     capital: ["Nyamira"],
//   },
//   {
//     name: "Nairobi",
//     code: "47",
//     areaSqKm: "694.9",
//     capital: ["Nairobi"],
//   },
// ];
export let data = [
  {
    id: 1,
    title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    price: 1090.95,
    description:
      "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    category: "men's clothing",
    image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    rating: {
      rate: 3.9,
      count: 120,
    },
  },
  {
    id: 2,
    title: "Mens Casual Premium Slim Fit T-Shirts ",
    price: 2200.3,
    description:
      "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
    category: "men's clothing",
    image:
      "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
    rating: {
      rate: 4.1,
      count: 259,
    },
  },
  {
    id: 3,
    title: "Mens Cotton Jacket",
    price: 550.99,
    description:
      "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
    category: "men's clothing",
    image: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
    rating: {
      rate: 4.7,
      count: 500,
    },
  },
  {
    id: 4,
    title: "Mens Casual Slim Fit",
    price: 1500.99,
    description:
      "The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.",
    category: "men's clothing",
    image: "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
    rating: {
      rate: 2.1,
      count: 430,
    },
  },
  {
    id: 5,
    title:
      "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
    price: 69500,
    description:
      "From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl. Wear facing inward to be bestowed with love and abundance, or outward for protection.",
    category: "jewelery",
    image: "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg",
    rating: {
      rate: 4.6,
      count: 400,
    },
  },
  {
    id: 6,
    title: "Solid Gold Petite Micropave ",
    price: 16800,
    description:
      "Satisfaction Guaranteed. Return or exchange any order within 30 days.Designed and sold by Hafeez Center in the United States. Satisfaction Guaranteed. Return or exchange any order within 30 days.",
    category: "jewelery",
    image: "https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg",
    rating: {
      rate: 3.9,
      count: 70,
    },
  },
  {
    id: 7,
    title: "White Gold Plated Princess",
    price: 900.99,
    description:
      "Classic Created Wedding Engagement Solitaire Diamond Promise Ring for Her. Gifts to spoil your love more for Engagement, Wedding, Anniversary, Valentine's Day...",
    category: "jewelery",
    image: "https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg",
    rating: {
      rate: 3,
      count: 400,
    },
  },
  {
    id: 8,
    title: "Pierced Owl Rose Gold Plated Stainless Steel Double",
    price: 1000.99,
    description:
      "Rose Gold Plated Double Flared Tunnel Plug Earrings. Made of 316L Stainless Steel",
    category: "jewelery",
    image: "https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg",
    rating: {
      rate: 1.9,
      count: 100,
    },
  },
  {
    id: 9,
    title: "WD 2TB Elements Portable External Hard Drive - USB 3.0 ",
    price: 6400,
    description:
      "USB 3.0 and USB 2.0 Compatibility Fast data transfers Improve PC Performance High Capacity; Compatibility Formatted NTFS for Windows 10, Windows 8.1, Windows 7; Reformatting may be required for other operating systems; Compatibility may vary depending on user’s hardware configuration and operating system",
    category: "electronics",
    image: "https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg",
    rating: {
      rate: 3.3,
      count: 203,
    },
  },
  {
    id: 10,
    title: "SanDisk SSD PLUS 1TB Internal SSD - SATA III 6 Gb/s",
    price: 1090,
    description:
      "Easy upgrade for faster boot up, shutdown, application load and response (As compared to 5400 RPM SATA 2.5” hard drive; Based on published specifications and internal benchmarking tests using PCMark vantage scores) Boosts burst write performance, making it ideal for typical PC workloads The perfect balance of performance and reliability Read/write speeds of up to 535MB/s/450MB/s (Based on internal testing; Performance may vary depending upon drive capacity, host device, OS and application.)",
    category: "electronics",
    image: "https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg",
    rating: {
      rate: 2.9,
      count: 470,
    },
  },
  {
    id: 11,
    title:
      "Silicon Power 256GB SSD 3D NAND A55 SLC Cache Performance Boost SATA III 2.5",
    price: 1000,
    description:
      "3D NAND flash are applied to deliver high transfer speeds Remarkable transfer speeds that enable faster bootup and improved overall system performance. The advanced SLC Cache Technology allows performance boost and longer lifespan 7mm slim design suitable for Ultrabooks and Ultra-slim notebooks. Supports TRIM command, Garbage Collection technology, RAID, and ECC (Error Checking & Correction) to provide the optimized performance and enhanced reliability.",
    category: "electronics",
    image: "https://fakestoreapi.com/img/71kWymZ+c+L._AC_SX679_.jpg",
    rating: {
      rate: 4.8,
      count: 319,
    },
  },
  {
    id: 12,
    title:
      "WD 4TB Gaming Drive Works with Playstation 4 Portable External Hard Drive",
    price: 1140,
    description:
      "Expand your PS4 gaming experience, Play anywhere Fast and easy, setup Sleek design with high capacity, 3-year manufacturer's limited warranty",
    category: "electronics",
    image: "https://fakestoreapi.com/img/61mtL65D4cL._AC_SX679_.jpg",
    rating: {
      rate: 4.8,
      count: 400,
    },
  },
  {
    id: 13,
    title: "Acer SB220Q bi 21.5 inches Full HD (1920 x 1080) IPS Ultra-Thin",
    price: 5990,
    description:
      "21. 5 inches Full HD (1920 x 1080) widescreen IPS display And Radeon free Sync technology. No compatibility for VESA Mount Refresh Rate: 75Hz - Using HDMI port Zero-frame design | ultra-thin | 4ms response time | IPS panel Aspect ratio - 16: 9. Color Supported - 16. 7 million colors. Brightness - 250 nit Tilt angle -5 degree to 15 degree. Horizontal viewing angle-178 degree. Vertical viewing angle-178 degree 75 hertz",
    category: "electronics",
    image: "https://fakestoreapi.com/img/81QpkIctqPL._AC_SX679_.jpg",
    rating: {
      rate: 2.9,
      count: 250,
    },
  },
  {
    id: 14,
    title:
      "Samsung 49-Inch CHG90 144Hz Curved Gaming Monitor (LC49HG90DMNXZA) – Super Ultrawide Screen QLED ",
    price: 9990.99,
    description:
      "49 INCH SUPER ULTRAWIDE 32:9 CURVED GAMING MONITOR with dual 27 inch screen side by side QUANTUM DOT (QLED) TECHNOLOGY, HDR support and factory calibration provides stunningly realistic and accurate color and contrast 144HZ HIGH REFRESH RATE and 1ms ultra fast response time work to eliminate motion blur, ghosting, and reduce input lag",
    category: "electronics",
    image: "https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_.jpg",
    rating: {
      rate: 2.2,
      count: 140,
    },
  },
  {
    id: 15,
    title: "BIYLACLESEN Women's 3-in-1 Snowboard Jacket Winter Coats",
    price: 560.99,
    description:
      "Note:The Jackets is US standard size, Please choose size as your usual wear Material: 100% Polyester; Detachable Liner Fabric: Warm Fleece. Detachable Functional Liner: Skin Friendly, Lightweigt and Warm.Stand Collar Liner jacket, keep you warm in cold weather. Zippered Pockets: 2 Zippered Hand Pockets, 2 Zippered Pockets on Chest (enough to keep cards or keys)and 1 Hidden Pocket Inside.Zippered Hand Pockets and Hidden Pocket keep your things secure. Humanized Design: Adjustable and Detachable Hood and Adjustable cuff to prevent the wind and water,for a comfortable fit. 3 in 1 Detachable Design provide more convenience, you can separate the coat and inner as needed, or wear it together. It is suitable for different season and help you adapt to different climates",
    category: "women's clothing",
    image: "https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_.jpg",
    rating: {
      rate: 2.6,
      count: 235,
    },
  },
  {
    id: 16,
    title:
      "Lock and Love Women's Removable Hooded Faux Leather Moto Biker Jacket",
    price: 2090.95,
    description:
      "100% POLYURETHANE(shell) 100% POLYESTER(lining) 75% POLYESTER 25% COTTON (SWEATER), Faux leather material for style and comfort / 2 pockets of front, 2-For-One Hooded denim style faux leather jacket, Button detail on waist / Detail stitching at sides, HAND WASH ONLY / DO NOT BLEACH / LINE DRY / DO NOT IRON",
    category: "women's clothing",
    image: "https://fakestoreapi.com/img/81XH0e8fefL._AC_UY879_.jpg",
    rating: {
      rate: 2.9,
      count: 340,
    },
  },
  {
    id: 17,
    title: "Rain Jacket Women Windbreaker Striped Climbing Raincoats",
    price: 3900.99,
    description:
      "Lightweight perfet for trip or casual wear---Long sleeve with hooded, adjustable drawstring waist design. Button and zipper front closure raincoat, fully stripes Lined and The Raincoat has 2 side pockets are a good size to hold all kinds of things, it covers the hips, and the hood is generous but doesn't overdo it.Attached Cotton Lined Hood with Adjustable Drawstrings give it a real styled look.",
    category: "women's clothing",
    image: "https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_-2.jpg",
    rating: {
      rate: 3.8,
      count: 679,
    },
  },
  {
    id: 18,
    title: "MBJ Women's Solid Short Sleeve Boat Neck V ",
    price: 900.85,
    description:
      "95% RAYON 5% SPANDEX, Made in USA or Imported, Do Not Bleach, Lightweight fabric with great stretch for comfort, Ribbed on sleeves and neckline / Double stitching on bottom hem",
    category: "women's clothing",
    image: "https://fakestoreapi.com/img/71z3kpMAYsL._AC_UY879_.jpg",
    rating: {
      rate: 4.7,
      count: 130,
    },
  },
  {
    id: 19,
    title: "Opna Women's Short Sleeve Moisture",
    price: 700.95,
    description:
      "100% Polyester, Machine wash, 100% cationic polyester interlock, Machine Wash & Pre Shrunk for a Great Fit, Lightweight, roomy and highly breathable with moisture wicking fabric which helps to keep moisture away, Soft Lightweight Fabric with comfortable V-neck collar and a slimmer fit, delivers a sleek, more feminine silhouette and Added Comfort",
    category: "women's clothing",
    image: "https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_.jpg",
    rating: {
      rate: 4.5,
      count: 146,
    },
  },
  {
    id: 20,
    title: "DANVOUY Womens T Shirt Casual Cotton Short",
    price: 1200.99,
    description:
      "95%Cotton,5%Spandex, Features: Casual, Short Sleeve, Letter Print,V-Neck,Fashion Tees, The fabric is soft and has some stretch., Occasion: Casual/Office/Beach/School/Home/Street. Season: Spring,Summer,Autumn,Winter.",
    category: "women's clothing",
    image: "https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg",
    rating: {
      rate: 3.6,
      count: 145,
    },
  },
];
