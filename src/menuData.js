const menuData = [
    {
      id: 1,
      category: "Appetizers",
      items: [
        { id: 101, name: "Chicken Wings", price: 5.99, desc: "Chicken wings mildly/spicy hot, with Blue Cheese or Ranch dressing and French Fries", imghr: "https://i.pinimg.com/originals/47/55/a0/4755a0f4e3de012f1f55bd03b872f3d1.jpg"},
        { id: 102, name: "Tomato Fitfit", price: 4.99,  desc: "Chopped tomatoes, jalapenos, onions soaked with vinegar. Served cold", imghr: ""},
        { id: 103, name: "Asmara Salad", price: 7.99,  desc: "Chopped potatoes mixed with tomato, onions, lettuce, vinegar, and a special house sauce", imghr: ""},
        { id: 104, name: "House Salad", price: 5.99,  desc: "Romaine lettuce, tomatoes, onions, jalapenos, mixed with homemade dressing. Served with Italian bread rolls", imghr: ""}
      ]
    },
    {
      id: 2,
      category: "Entrees (all served with side salad)",
      items: [
        { id: 201, name: "Tibsi", price: 11.99, desc: "Cubed tender beef, lamb, chicken or fish marinated and cooked with onions, jalapenos, tomatoes", imghr: "https://img.freepik.com/premium-photo/person-holding-bowl-ethiopian-delicious-derek-tibs-meat-dish_181624-59165.jpg?w=2000"},
        { id: 202, name: "Derek Tibsi", price: 11.99, desc: "Bite-sized fresh beef cubes dry cooked with onions, jalapenos, and tomatoes", imghr: ""},
        { id: 203, name: "Gored Gored", price: 11.99, desc: "Chunked beef lightly cooked with onions, jalapenos, tomatoes, and Ethiopian butter", imghr: ""},
        { id: 204, name: "Goden Tibsi", price: 14.99, desc: "Prime short ribs cooked with veggies", imghr: ""},
        { id: 205, name: "Banatu", price: 15.99, desc: "Spicy beef ribs served hot with kifto and cottage cheese", imghr: ""},
        { id: 206, name: "Kitfo", price: 12.99, desc: "Ground beef mixed with homemade butter and mitmita (Ethiopian hot spice)", imghr: ""},
        { id: 207, name: "Quanta firfir", price: 11.99, desc: "Bite-sized fresh dried beef cooked with onions, jalapenos, garlic, mixed with injera", imghr: ""},
        { id: 208, name: "Quanta dinich", price: 11.99, desc: "Bite-sized fresh dried beef cooked with onions, jalapenos, mixed with injera and boiled potatoes. Served with injera", imghr: ""},
        { id: 209, name: "Fish Dulet", price: 11.99, desc: "Finely minced tilapia mixed with onions and tomatoes", imghr: ""},
        { id: 210, name: "Dinish Siga", price: 13.99, desc: "Cubed tender beef mixed with onions, tomatoes, garlic, and injera", imghr: ""},
        { id: 211, name: "Bozena Shiro", price: 10.99, desc: "Cubed prime beef simmered with spiced Shiro (ground chickpeas)", imghr: ""},
        { id: 212, name: "Shiro", price: 9.99, desc: "Shiro served plain or with avocado", imghr: ""},
        { id: 213, name: "Mahberawi", price: 15.99, desc: "A combination of awaze beef tibsi, medium spicy kitfo, finely minced fish dulet, sauteed cabbage, potatoes, collard greens, and salad", imghr: ""}
      ]
    },
   {
      id: 3,
      category: "Breakfast",
      items: [
        { id: 301, name: "Frittata", price: 7.99, desc: "Scrambled eggs (plain or with choice of grilled veggies) served with Italian bread rolls", imghr: ""},
        { id: 302, name: "Fuul", price: 6.99, desc: "Sauteed mashed Fava beans with chopped onions, jalapenos, tomatoes, boiled eggs, topped with feta cheese, olive oil, cumin, served with Italian bread rolls", imghr: ""},
        { id: 303, name: "Kicha Fitfit", price: 7.99, desc: "Chopped Eritrean traditional flatbread tossed in homemade butter or hot spice berbere and served with yogurt as a topping", imghr: ""},
        { id: 304, name: "Fata", price: 6.99, desc: "Hot-spicy stew tossed with bread and served with a cup of yogurt as topping", imghr: ""},
        { id: 305, name: "Egg sandwich", price: 6.99, desc: "Egg sandwich with veggies", imghr: ""},
        { id: 306, name: "Kicha Fitfit with fresh meat or quanta", price: 9.99, desc: "Chopped Eritrean traditional flatbread tossed in hot spice berbere with fresh meat or beef jerky (quanta) and served with a cup of yogurt as topping", imghr: ""},
        { id: 307, name: "Enjera Fitfit", price: 7.99, desc: "Spicy vegetarian stew mixed with injera", imghr: ""}
      ]
    },
   {
      id: 4,
      category: "Pasta",
      items: [
        { id: 401, name: "Spaghetti or Macaroni Zara Sauce", price: 12.99, desc: "Spaghetti or macaroni pasta served with special Zara tomato sauce served with Italian bread rolls", imghr: ""},
        { id: 402, name: "Spaghetti or Macaroni with Zara Meat Sauce", price: 10.99, desc: "Spaghetti or macaroni pasta served with special Zara meat sauce and served with Italian bread rolls", imghr: ""},
        { id: 403, name: "Beef/Chicken/Fish Cotoletta", price: 12.99, desc:"Meats" , imghr: ""}
      ]
    },
   {
      id: 5,
      category: "Sandwiches (with side of fries or chips)",
      items: [
        { id: 501, name: "Steak Sandwich", price: 8.99, desc: "Grilled steak, onions, tomatoes, swiss cheese, lettuce, ranch dressing", imghr: ""},
        { id: 502, name: "Chicken Sandwich", price: 8.99, desc: "Grilled chicken, onions, tomatoes, swiss cheese, lettuce, ranch dressing", imghr: ""},
        { id: 503, name: "Fish Sandwich", price: 8.99, desc: "Grilled fish, onions, tomatoes, swiss cheese, lettuce, ranch dressing", imghr: ""},
      ]
    },
   {
      id: 6,
      category: "Kids",
      items: [
        { id: 601, name: "Chicken/Steak/Fish strips with fries or chips", price: 4.99, desc: "", imghr: ""},
        { id: 602, name: "Spaghetti or Macaroni with Zara (plain or meat) sauce", price: 4.99, desc: "", imghr: ""}
      ]
    },
   {
      id: 7,
      category: "Drinks",
      items: [
        { id: 701, name: "Juices, Sodas, Hot Tea, Coffee, Macchiato, Cappuccino, Espresso ", price: null, desc: "Full bar service upon request", imghr: ""}
      ]
    },
   {
      id: 8,
      category: "Weekend Special",
      items: [
        { id: 501, name: "Doro Wot", price: 12.99, desc: "Chicken legs stew simmered with spicy berbere sauce and served with boiled eggs with injera", imghr: ""}
      ]
    },
    {
      id: 9,
      category: "Popular",
      items: [
        { id: 201, name: "Tibsi", price: 11.99, desc: "Cubed tender beef, lamb, chicken or fish marinated and cooked with onions, jalapenos, tomatoes", imghr: ""},
        { id: 202, name: "Derek Tibsi", price: 11.99, desc: "Bite-sized fresh beef cubes dry cooked with onions, jalapenos, and tomatoes", imghr: ""},
        { id: 203, name: "Gored Gored", price: 11.99, desc: "Chunked beef lightly cooked with onions, jalapenos, tomatoes, and Ethiopian butter", imghr: ""},
        { id: 207, name: "Quanta firfir", price: 11.99, desc: "Bite-sized fresh dried beef cooked with onions, jalapenos, garlic, mixed with injera", imghr: ""},
      ]
    },
]
  export default menuData;