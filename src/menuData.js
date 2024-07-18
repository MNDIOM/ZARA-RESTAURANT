const menuData = [
    {
      id: 1,
      category: "Appetizers",
      items: [
        { id: 101, name: "Chicken Wings", price: 5.99, desc: "mildly/spicy hot, with Blue Cheese or Ranch dressing and French Fries", imghr: "https://i.imgur.com/UHBQi2U.jpg"},
        { id: 102, name: "Tomato Fitfit", price: 4.99,  desc: "Chopped tomatoes, jalapenos, onions soaked with vinegar. Served cold", imghr: "https://i.imgur.com/GLLc62o.jpg"},
        { id: 103, name: "Asmara Salad", price: 7.99,  desc: "Chopped potatoes mixed with tomato, onions, lettuce, vinegar, and a special house sauce", imghr: "https://i.imgur.com/UBVo1iv.jpeg"},
        { id: 104, name: "House Salad", price: 5.99,  desc: "Romaine lettuce, tomatoes, onions, jalapenos, mixed with homemade dressing", imghr: "https://i.imgur.com/3cIgZol.png"}
      ]
    },
    {
      id: 2,
      category: "Entrees",
      items: [
        { id: 201, name: "Tibsi", price: 16.99, desc: "Cubed tender beef, lamb, chicken or fish marinated and cooked with onions, jalapenos, tomatoes", imghr: "https://i.imgur.com/5GUn7Fk.jpg"},
        { id: 202, name: "Derek Tibsi", price: 17.99, desc: "Bite-sized fresh beef cubes dry cooked with onions, jalapenos, and tomatoes", imghr: "https://i.imgur.com/hsljWya.jpg"},
        { id: 203, name: "Gored Gored", price: 18.99, desc: "Chunked beef lightly cooked with onions, jalapenos, tomatoes, and Ethiopian butter", imghr: "https://i.imgur.com/QJ3EFVT.jpg"},
        { id: 204, name: "Goden Tibsi", price: 19.99, desc: "Prime short ribs cooked with veggies", imghr: "https://i.imgur.com/GbeAjhW.jpg"},
        { id: 205, name: "Banatu", price: 15.99, desc: "Spicy beef ribs served hot with kifto and cottage cheese", imghr: "https://i.imgur.com/nLfyMyu.jpg"},
        { id: 206, name: "Kitfo", price: 12.99, desc: "Ground beef mixed with homemade butter and mitmita (Ethiopian hot spice)", imghr: "https://i.imgur.com/rolNO5N.jpg"},
        { id: 207, name: "Quanta firfir", price: 11.99, desc: "Bite-sized fresh dried beef cooked with onions, jalapenos, garlic, mixed with injera", imghr: "https://i.imgur.com/JWMpl1w.jpg"},
        { id: 208, name: "Quanta dinich", price: 11.99, desc: "Bite-sized fresh dried beef cooked with onions, jalapenos, mixed with injera and boiled potatoes. Served with injera", imghr: "https://i.imgur.com/E1aHR70.jpg"},
        { id: 209, name: "Fish Dulet", price: 11.99, desc: "Finely minced tilapia mixed with onions and tomatoes", imghr: "https://i.imgur.com/C3kj2LW.jpg"},
        { id: 210, name: "Dinich Siga", price: 13.99, desc: "Cubed tender beef mixed with onions, tomatoes, garlic, and injera", imghr: "https://i.imgur.com/i5sxouv.jpg"},
        { id: 211, name: "Bozena Shiro", price: 10.99, desc: "Cubed prime beef simmered with spiced Shiro (ground chickpeas)", imghr: "https://i.imgur.com/x5tyd80.png"},
        { id: 212, name: "Shiro", price: 9.99, desc: "Shiro served plain or with avocado", imghr: "https://i.imgur.com/9Tuahgh.jpg"},
        { id: 213, name: "Mahberawi", price: 15.99, desc: "A combination of awaze beef tibsi, medium spicy kitfo, finely minced fish dulet, sauteed cabbage, potatoes, collard greens, and salad", imghr: "https://i.imgur.com/OmyLnU7.jpg"}
      ]
    },
   {
      id: 3,
      category: "Breakfast",
      items: [
        { id: 301, name: "Frittata", price: 7.99, desc: "Scrambled eggs (plain or with choice of grilled veggies) served with Italian bread rolls", imghr: "https://i.imgur.com/SOLbVbE.jpg"},
        { id: 302, name: "Fuul", price: 6.99, desc: "Sauteed mashed Fava beans with chopped onions, jalapenos, tomatoes, boiled eggs, topped with feta cheese, olive oil, cumin, served with Italian bread rolls", imghr: "https://i.imgur.com/t5i7y5u.jpg"},
        { id: 303, name: "Kitcha Fitfit", price: 7.99, desc: "Chopped Eritrean traditional flatbread tossed in homemade butter or hot spice berbere and served with yogurt as a topping", imghr: "https://i.imgur.com/h1cmVgA.jpg"},
        { id: 304, name: "Fata", price: 6.99, desc: "Hot-spicy stew tossed with bread and served with a cup of yogurt as topping", imghr: "https://i.imgur.com/ZAMz9zc.jpg"},
        { id: 305, name: "Egg sandwich", price: 6.99, desc: "Egg sandwich with veggies", imghr: "https://i.imgur.com/Pp2NmH3.jpeg"},
        { id: 306, name: "Kicha Fitfit with fresh meat or quanta", price: 9.99, desc: "Chopped Eritrean traditional flatbread tossed in hot spice berbere with fresh meat or quanta and served with a cup of yogurt as topping", imghr: "https://i.imgur.com/9NYzmxx.png"},
        { id: 307, name: "Enjera Fitfit", price: 7.99, desc: "Spicy vegetarian stew mixed with injera", imghr: "https://i.imgur.com/EHo6fPJ.jpg"}
      ]
    },
   {
      id: 4,
      category: "Pasta",
      items: [
        { id: 401, name: "Spaghetti or Macaroni Zara Sauce", price: 12.99, desc: "Spaghetti or macaroni pasta served with special Zara tomato sauce served with Italian bread rolls", imghr: "https://i.imgur.com/UqtynQz.jpg"},
        { id: 402, name: "Spaghetti or Macaroni with Zara Meat Sauce", price: 10.99, desc: "Spaghetti or macaroni pasta served with special Zara meat sauce and served with Italian bread rolls", imghr: "https://i.imgur.com/u34DSjg.jpeg"},
        { id: 403, name: "Beef/Chicken/Fish Cotoletta", price: 12.99, desc:"Meats" , imghr: ""}
      ]
    },
   {
      id: 5,
      category: "Sandwiches",
      items: [
        { id: 501, name: "Steak Sandwich", price: 8.99, desc: "Grilled steak, onions, tomatoes, swiss cheese, lettuce, ranch dressing", imghr: "https://i.imgur.com/WXTkDUL.jpg"},
        { id: 502, name: "Chicken Sandwich", price: 8.99, desc: "Grilled chicken, onions, tomatoes, swiss cheese, lettuce, ranch dressing", imghr: "https://i.imgur.com/PPGCVst.jpg"},
        { id: 503, name: "Fish Sandwich", price: 8.99, desc: "Grilled fish, onions, tomatoes, swiss cheese, lettuce, ranch dressing", imghr: "https://i.imgur.com/xh1z7RT.jpg"},
      ]
    },
   {
      id: 6,
      category: "Kids",
      items: [
        { id: 601, name: "Chicken/Steak/Fish strips with fries or chips", price: 4.99, desc: "", imghr: "https://i.imgur.com/ysmUarH.jpg"},
        { id: 602, name: "Spaghetti or Macaroni with Zara (plain or meat) sauce", price: 4.99, desc: "", imghr: "https://i.imgur.com/eBBXcJP.jpg"}
      ]
    },
   {
      id: 7,
      category: "Drinks",
      items: [
        { id: 701, name: "Juices, Sodas, Hot Tea, Coffee, Macchiato, Cappuccino, Espresso ", price: null, desc: "(Full bar service upon request)", imghr: "https://i.imgur.com/DQgbc9l.png"}
      ]
    },
   {
      id: 8,
      category: "Weekend Special",
      items: [
        { id: 501, name: "Doro Wot", price: 12.99, desc: "Chicken legs stew simmered with spicy berbere sauce and served with boiled eggs with injera", imghr: "https://i.imgur.com/Kbv15qE.jpg"}
      ]
    },
    {
      id: 9,
      category: "Popular",
      items: [
        { id: 201, name: "Tibsi", price: 12.99, desc: "Cubed tender beef, lamb, chicken or fish marinated and cooked with onions, jalapenos, tomatoes", imghr: "https://i.imgur.com/5GUn7Fk.jpg"},
        { id: 202, name: "Derek Tibsi", price: 11.99, desc: "Bite-sized fresh beef cubes dry cooked with onions, jalapenos, and tomatoes", imghr: "https://i.imgur.com/UBVo1iv.jpeg"},
        { id: 203, name: "Gored Gored", price: 11.99, desc: "Chunked beef lightly cooked with onions, jalapenos, tomatoes, and Ethiopian butter", imghr: "https://i.imgur.com/ypQCwkQ.jpg"},
        { id: 207, name: "Quanta firfir", price: 11.99, desc: "Bite-sized fresh dried beef cooked with onions, jalapenos, garlic, mixed with injera", imghr: "https://i.imgur.com/JWMpl1w.jpg"},
      ]
    },
]
  export default menuData;