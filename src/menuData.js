const menuData = [
    {
      id: 1,
      category: "Appetizers",
      items: [
        { id: 101, name: "Chicken Wings", price: 5.99, desc: "Chicken wings mildly/spicy hot, with Blue Cheese or Ranch dressing and French Fries", imghr: "https://imgur.com/svtj29a"},
        { id: 102, name: "Tomato Fitfit", price: 4.99,  desc: "Chopped tomatoes, jalapenos, onions soaked with vinegar. Served cold", imghr: "https://imgur.com/GLLc62o"},
        { id: 103, name: "Asmara Salad", price: 7.99,  desc: "Chopped potatoes mixed with tomato, onions, lettuce, vinegar, and a special house sauce", imghr: "https://imgur.com/3cIgZol"},
        { id: 104, name: "House Salad", price: 5.99,  desc: "Romaine lettuce, tomatoes, onions, jalapenos, mixed with homemade dressing. Served with Italian bread rolls", imghr: "https://imgur.com/3cIgZol"}
      ]
    },
    {
      id: 2,
      category: "Entrees",
      items: [
        { id: 201, name: "Tibsi", price: 16.99, desc: "Cubed tender beef, lamb, chicken or fish marinated and cooked with onions, jalapenos, tomatoes", imghr: "https://img.freepik.com/premium-photo/person-holding-bowl-ethiopian-delicious-derek-tibs-meat-dish_181624-59165.jpg?w=2000"},
        { id: 202, name: "Derek Tibsi", price: 17.99, desc: "Bite-sized fresh beef cubes dry cooked with onions, jalapenos, and tomatoes", imghr: "https://imgur.com/UOAQd2p"},
        { id: 203, name: "Gored Gored", price: 18.99, desc: "Chunked beef lightly cooked with onions, jalapenos, tomatoes, and Ethiopian butter", imghr: "https://imgur.com/QJ3EFVT"},
        { id: 204, name: "Goden Tibsi", price: 19.99, desc: "Prime short ribs cooked with veggies", imghr: "https://imgur.com/GbeAjhW"},
        { id: 205, name: "Banatu", price: 15.99, desc: "Spicy beef ribs served hot with kifto and cottage cheese", imghr: "https://imgur.com/nLfyMyu"},
        { id: 206, name: "Kitfo", price: 12.99, desc: "Ground beef mixed with homemade butter and mitmita (Ethiopian hot spice)", imghr: "https://imgur.com/rolNO5N"},
        { id: 207, name: "Quanta firfir", price: 11.99, desc: "Bite-sized fresh dried beef cooked with onions, jalapenos, garlic, mixed with injera", imghr: "https://imgur.com/kkYq9dU"},
        { id: 208, name: "Quanta dinich", price: 11.99, desc: "Bite-sized fresh dried beef cooked with onions, jalapenos, mixed with injera and boiled potatoes. Served with injera", imghr: "https://imgur.com/E1aHR70"},
        { id: 209, name: "Fish Dulet", price: 11.99, desc: "Finely minced tilapia mixed with onions and tomatoes", imghr: "https://imgur.com/C3kj2LW"},
        { id: 210, name: "Dinich Siga", price: 13.99, desc: "Cubed tender beef mixed with onions, tomatoes, garlic, and injera", imghr: "https://imgur.com/i5sxouv"},
        { id: 211, name: "Bozena Shiro", price: 10.99, desc: "Cubed prime beef simmered with spiced Shiro (ground chickpeas)", imghr: ""},
        { id: 212, name: "Shiro", price: 9.99, desc: "Shiro served plain or with avocado", imghr: "https://imgur.com/9Tuahgh"},
        { id: 213, name: "Mahberawi", price: 15.99, desc: "A combination of awaze beef tibsi, medium spicy kitfo, finely minced fish dulet, sauteed cabbage, potatoes, collard greens, and salad", imghr: "https://imgur.com/OmyLnU7"}
      ]
    },
   {
      id: 3,
      category: "Breakfast",
      items: [
        { id: 301, name: "Frittata", price: 7.99, desc: "Scrambled eggs (plain or with choice of grilled veggies) served with Italian bread rolls", imghr: "https://imgur.com/SOLbVbE"},
        { id: 302, name: "Fuul", price: 6.99, desc: "Sauteed mashed Fava beans with chopped onions, jalapenos, tomatoes, boiled eggs, topped with feta cheese, olive oil, cumin, served with Italian bread rolls", imghr: "https://imgur.com/t5i7y5u"},
        { id: 303, name: "Kicha Fitfit", price: 7.99, desc: "Chopped Eritrean traditional flatbread tossed in homemade butter or hot spice berbere and served with yogurt as a topping", imghr: "https://imgur.com/9NYzmxx"},
        { id: 304, name: "Fata", price: 6.99, desc: "Hot-spicy stew tossed with bread and served with a cup of yogurt as topping", imghr: "https://imgur.com/ZAMz9zc"},
        { id: 305, name: "Egg sandwich", price: 6.99, desc: "Egg sandwich with veggies", imghr: ""},
        { id: 306, name: "Kicha Fitfit with fresh meat or quanta", price: 9.99, desc: "Chopped Eritrean traditional flatbread tossed in hot spice berbere with fresh meat or beef jerky (quanta) and served with a cup of yogurt as topping", imghr: "https://imgur.com/h1cmVgA"},
        { id: 307, name: "Enjera Fitfit", price: 7.99, desc: "Spicy vegetarian stew mixed with injera", imghr: "https://imgur.com/EHo6fPJ"}
      ]
    },
   {
      id: 4,
      category: "Pasta",
      items: [
        { id: 401, name: "Spaghetti or Macaroni Zara Sauce", price: 12.99, desc: "Spaghetti or macaroni pasta served with special Zara tomato sauce served with Italian bread rolls", imghr: "https://imgur.com/UqtynQz"},
        { id: 402, name: "Spaghetti or Macaroni with Zara Meat Sauce", price: 10.99, desc: "Spaghetti or macaroni pasta served with special Zara meat sauce and served with Italian bread rolls", imghr: "https://imgur.com/UqtynQz"},
        { id: 403, name: "Beef/Chicken/Fish Cotoletta", price: 12.99, desc:"Meats" , imghr: "https://imgur.com/NQLnrqe"}
      ]
    },
   {
      id: 5,
      category: "Sandwiches",
      items: [
        { id: 501, name: "Steak Sandwich", price: 8.99, desc: "Grilled steak, onions, tomatoes, swiss cheese, lettuce, ranch dressing", imghr: "https://imgur.com/WXTkDUL"},
        { id: 502, name: "Chicken Sandwich", price: 8.99, desc: "Grilled chicken, onions, tomatoes, swiss cheese, lettuce, ranch dressing", imghr: "https://imgur.com/PPGCVst"},
        { id: 503, name: "Fish Sandwich", price: 8.99, desc: "Grilled fish, onions, tomatoes, swiss cheese, lettuce, ranch dressing", imghr: "https://imgur.com/xh1z7RT"},
      ]
    },
   {
      id: 6,
      category: "Kids",
      items: [
        { id: 601, name: "Chicken/Steak/Fish strips with fries or chips", price: 4.99, desc: "", imghr: "https://imgur.com/ysmUarH"},
        { id: 602, name: "Spaghetti or Macaroni with Zara (plain or meat) sauce", price: 4.99, desc: "", imghr: "https://imgur.com/eBBXcJP"}
      ]
    },
   {
      id: 7,
      category: "Drinks",
      items: [
        { id: 701, name: "Juices, Sodas, Hot Tea, Coffee, Macchiato, Cappuccino, Espresso ", price: null, desc: "(Full bar service upon request)", imghr: "https://imgur.com/DQgbc9l"}
      ]
    },
   {
      id: 8,
      category: "Weekend Special",
      items: [
        { id: 501, name: "Doro Wot", price: 12.99, desc: "Chicken legs stew simmered with spicy berbere sauce and served with boiled eggs with injera", imghr: "https://imgur.com/Kbv15qE"}
      ]
    },
    {
      id: 9,
      category: "Popular",
      items: [
        { id: 201, name: "Tibsi", price: 12.99, desc: "Cubed tender beef, lamb, chicken or fish marinated and cooked with onions, jalapenos, tomatoes", imghr: "https://imgur.com/5GUn7Fk"},
        { id: 202, name: "Derek Tibsi", price: 11.99, desc: "Bite-sized fresh beef cubes dry cooked with onions, jalapenos, and tomatoes", imghr: "https://imgur.com/UOAQd2p"},
        { id: 203, name: "Gored Gored", price: 11.99, desc: "Chunked beef lightly cooked with onions, jalapenos, tomatoes, and Ethiopian butter", imghr: "https://imgur.com/ypQCwkQ"},
        { id: 207, name: "Quanta firfir", price: 11.99, desc: "Bite-sized fresh dried beef cooked with onions, jalapenos, garlic, mixed with injera", imghr: "https://imgur.com/kkYq9dU"},
      ]
    },
]
  export default menuData;
