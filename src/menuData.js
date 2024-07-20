const menuData = [
  {
    id: 1,
    category: "Appetizers",
    items: [
      { id: 101, name: "Chicken Wings", price: 5.99, desc: "Mildly/spicy hot, with Blue Cheese or Ranch dressing and French Fries", imghr: "https://i.imgur.com/UHBQi2U.jpg"},
      { id: 102, name: "Tomato Fitfit", price: 4.99, desc: "Chopped tomatoes, jalapenos, onions soaked with vinegar. Served cold", imghr: "https://i.imgur.com/YlitMi9.png"},
      { id: 103, name: "Asmara Salad", price: 7.99, desc: "Chopped potatoes mixed with tomato, onions, lettuce, vinegar, and a special house sauce", imghr: "https://assets.bonappetit.com/photos/57acae4053e63daf11a4d95b/1:1/w_2560%2Cc_limit/crispy-potato-salad-with-chiles-celery-and-peanuts.jpg"},
      { id: 104, name: "House Salad", price: 5.99, desc: "Romaine lettuce, tomatoes, onions, jalapenos, mixed with homemade dressing", imghr: "https://i.imgur.com/3cIgZol.png"}
    ]
  },
  {
    id: 2,
    category: "Entrees",
    items: [
      { id: 201, name: "Tibsi", price: 16.99, desc: "Cubed tender beef, lamb, chicken or fish cooked with onions, jalapenos, tomatoes", imghr: "https://i.imgur.com/4My4Jzl.png"},
      { id: 202, name: "Derek Tibsi", price: 17.99, desc: "Bite-sized fresh beef cubes dry cooked with onions, jalapenos, and tomatoes", imghr: "https://i.imgur.com/cDP5z8X.jpg"},
      { id: 203, name: "Gored Gored", price: 18.99, desc: "Chunked beef lightly cooked with onions, jalapenos, tomatoes, and Ethiopian butter", imghr: "https://i.imgur.com/R2GM73E.jpeg"},
      { id: 204, name: "Goden Tibsi", price: 19.99, desc: "Prime short ribs cooked with onions, jalapenos, tomatoes, and Ethiopian butter", imghr: "https://i.imgur.com/GbeAjhW.jpg"},
      { id: 205, name: "Banatu", price: 15.99, desc: "Spicy beef ribs served hot with kifto and cottage cheese on the side", imghr: "https://static.spotapps.co/spots/6e/df63e127ee4a7fb0765f90cc1665c9/full"},
      { id: 206, name: "Kitfo", price: 12.99, desc: "Ground beef mixed with homemade butter and mitmita (Ethiopian hot spice)", imghr: "https://i.imgur.com/rolNO5N.jpg"},
      { id: 207, name: "Quanta firfir", price: 11.99, desc: "Bite-sized fresh dried beef cooked with onions, jalapenos, garlic, mixed with injera", imghr: "https://recipes.net/wp-content/uploads/2023/07/ethiopian-firfir-with-dried-beef-quanta-firfir_682b81757d28f53c3cf6c23da2566ba0-1024x576.jpeg"},
      { id: 208, name: "Quanta dinich", price: 11.99, desc: "Bite-sized fresh dried beef cooked with onions, jalapenos, mixed with injera and boiled potatoes", imghr: "https://i.imgur.com/E1aHR70.jpg"},
      { id: 209, name: "Fish Dulet", price: 11.99, desc: "Finely minced tilapia mixed with onions, jalapenos, tomatoes, and garlic", imghr: "https://i.imgur.com/C3kj2LW.jpg"},
      { id: 210, name: "Dinich Siga", price: 13.99, desc: "Cubed tender beef mixed with onions, tomatoes, garlic, and injera, a native bread", imghr: "https://i.imgur.com/i5sxouv.jpg"},
      { id: 211, name: "Bozena Shiro", price: 10.99, desc: "Cubed prime beef simmered with spiced Shiro (ground chickpeas) and injera, a native bread", imghr: "https://www.wassethiopianrestaurant.com/wp-content/uploads/2021/07/Bozena-Shiro.jpg"},
      { id: 212, name: "Shiro", price: 9.99, desc: "Shiro served plain or with avocado and a side of injera, a native bread", imghr: "https://a.storyblok.com/f/95452/2000x1500/fbad400f1a/food-shiro-wat.jpg/m/1000x1000/filters:focal(1098x504:1099x505)"},
      { id: 213, name: "Mahberawi", price: 15.99, desc: "A combination of awaze beef tibsi, medium spicy kitfo, finely minced fish dulet, sauteed cabbage, potatoes, collard greens, and salad", imghr: "https://sandiegomagazine.com/wp-content/uploads/2023/08/e5793efd8b949d41809b05e4eb8295a2.jpg"}
    ]
  },
  {
    id: 3,
    category: "Breakfast",
    items: [
      { id: 301, name: "Frittata", price: 7.99, desc: "Scrambled eggs (plain or with choice of grilled veggies) served with Italian bread rolls", imghr: "https://www.mexicanplease.com/wp-content/uploads/2018/03/mexican-frittata-slice-on-plate.jpg"},
      { id: 302, name: "Fuul", price: 6.99, desc: "Sauteed Fava beans with chopped veggies, boiled eggs, feta cheese, olive oil & cumin", imghr: "https://i.imgur.com/t5i7y5u.jpg"},
      { id: 303, name: "Kitcha Fitfit", price: 7.99, desc: "Chopped Eritrean traditional flatbread tossed in homemade butter and served with yogurt", imghr: "https://i.imgur.com/gBMgvhm.png"},
      { id: 304, name: "Fata", price: 6.99, desc: "Hot-spicy stew tossed with bread and served with a cup of yogurt as topping", imghr: "https://i.imgur.com/ZAMz9zc.jpg"},
      { id: 305, name: "Egg sandwich", price: 6.99, desc: "Egg sandwich with veggies, served with a side of fresh salad for your pleasure", imghr: "https://www.allthingsmamma.com/wp-content/uploads/2023/04/egg-and-cheese-sandwich-hero-4-scaled.jpg"},
      { id: 307, name: "Enjera Fitfit", price: 7.99, desc: "Spicy vegetarian stew mixed with injera, served with a side of yogurt", imghr: "https://i.imgur.com/EHo6fPJ.jpg"}
    ]
  },
  {
    id: 4,
    category: "Pasta",
    items: [
      { id: 401, name: "Vegan Spaghetti or Macaroni", price: 12.99, desc: "Spaghetti or macaroni served with special Zara sauce and Italian bread rolls", imghr: "https://i.imgur.com/UqtynQz.jpg"},
      { id: 402, name: "Meat Spaghetti or Macaroni", price: 10.99, desc: "Spaghetti or macaroni served with special Zara meat sauce and Italian bread rolls", imghr: "https://i.imgur.com/u34DSjg.jpeg"},
      { id: 403, name: "Cotoletta", price: 12.99, desc: "Tender breaded meat served with fresh salad and Italian bread rolls", imghr: "https://i.imgur.com/KWkUAyP.jpeg"}
    ]
  },
  {
    id: 5,
    category: "Sandwiches",
    items: [
      { id: 501, name: "Steak Sandwich", price: 8.99, desc: "Grilled steak, onions, tomatoes, swiss cheese, lettuce, ranch dressing on a hoagie roll", imghr: "https://www.eatthis.com/wp-content/uploads/sites/4/2019/03/subway-steak-and-cheese-sub.jpg?quality=82&strip=1"},
      { id: 502, name: "Chicken Sandwich", price: 8.99, desc: "Grilled chicken, onions, tomatoes, swiss cheese, lettuce, ranch dressing on a hoagie roll", imghr: "https://i.imgur.com/PPGCVst.jpg"},
      { id: 503, name: "Fish Sandwich", price: 8.99, desc: "Grilled fish, onions, tomatoes, swiss cheese, lettuce, ranch dressing on a hoagie roll", imghr: "https://i0.wp.com/spainonafork.com/wp-content/uploads/2020/06/image4-12-11.png?fit=750%2C750&ssl=1"},
    ]
  },
  {
    id: 6,
    category: "Kids",
    items: [
      { id: 601, name: "Meat Strips & Side", price: 4.99, desc: "Grilled meat strips served with a side of vegetables and French fries", imghr: "https://i.imgur.com/ysmUarH.jpg"},
      { id: 602, name: "Spaghetti or Macaroni", price: 4.99, desc: "Pasta served with a choice of meat or marinara sauce and Italian bread rolls", imghr: "https://i.imgur.com/eBBXcJP.jpg"}
    ]
  },
  {
    id: 7,
    category: "Drinks",
    items: [
      { id: 701, name: "Juices", price: 2.99, desc: "Your favorite fruit juices available in various flavors. Served cold to your delight", imghr: "https://www.thatsitfruit.com/cdn/shop/articles/0d159290a5ec60e6918ce61b59d420ca_4882x.jpg?v=1638405556"},
      { id: 702, name: "Sodas", price: 2.99, desc: "A variety of carbonated drinks, including cola and lemon-lime. Served cold", imghr: "https://www.reagent.co.uk/wp-content/uploads/2022/09/three-glasses-of-fizzy-drinks.jpg"},
      { id: 703, name: "Hot Tea or Coffee", price: 2.99, desc: "Freshly brewed coffee or tea served hot with optional milk and sugar", imghr: "https://npr.brightspotcdn.com/dims4/default/b1e4781/2147483647/strip/true/crop/1000x563+0+52/resize/1200x675!/quality/90/?url=http%3A%2F%2Fnpr-brightspot.s3.amazonaws.com%2F4d%2Fb6%2F7110375d4b718ca9bf0c930505b0%2Fcoffee-tea.jpg"},
      { id: 704, name: "Macchiato", price: 4.99, desc: "Espresso with a small amount of foamed milk, served hot with sugar", imghr: "https://i.imgur.com/LS5lwid.png"},
      { id: 705, name: "Cappuccino", price: 4.99, desc: "Espresso with steamed milk and foam, topped with cocoa powder to give you that extra energy for the day", imghr: "https://static01.nyt.com/images/2015/10/02/fashion/02CAPP3SUB/02CAPP3SUB-superJumbo.jpg"},
      { id: 706, name: "Espresso", price: 4.99, desc: "Strong, rich coffee brewed by forcing hot water through coffee beans", imghr: "https://neurosciencenews.com/files/2023/07/espresso-alzheimers-neuroscience.jpg"},
    ]
  },
   {
    id: 8,
    category: "Popular",
    items: [
      { id: 801, name: "Doro Wot", price: 12.99, desc: "Chicken legs stew simmered with spicy berbere sauce and served with boiled eggs and injera", imghr: "https://i.imgur.com/Xl8mrli.png"},
      { id: 802, name: "Tibsi", price: 12.99, desc: "Cubed tender beef, lamb, chicken or fish cooked with onions, jalapenos, tomatoes", imghr: "https://i.imgur.com/4My4Jzl.png"},
      { id: 803, name: "Derek Tibsi", price: 11.99, desc: "Bite-sized fresh beef cubes dry cooked with onions, jalapenos, and tomatoes", imghr: "https://i.imgur.com/cDP5z8X.jpg"},
      { id: 804, name: "Gored Gored", price: 11.99, desc: "Chunked beef lightly cooked with onions, jalapenos, tomatoes, and Ethiopian butter", imghr: "https://i.imgur.com/R2GM73E.jpeg"},
      { id: 805, name: "Quanta firfir", price: 11.99, desc: "Bite-sized fresh dried beef cooked with onions, jalapenos, garlic, mixed with injera", imghr: "https://i.ytimg.com/vi/EU5X3jjHm-E/maxresdefault.jpg"},
    ]
  },
]
export default menuData;
