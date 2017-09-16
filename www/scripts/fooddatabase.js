//source: fatsecret.ch, salt=natrium [mg]
//fruits
var pineapple = { "name": "pineapple", "kcal": 79, "protein": 1.06, "carbohydrates": 20.42, "sugar": 18.45, "fat": 0.22, "saturatedFat": 0.02, "fiber": 2, "salt": 2 };
var apple = { "name": "apple", "kcal": 72, "protein": 0.36, "carbohydrates": 19.06, "sugar": 14.34, "fat": 0.23, "saturatedFat": 0.04, "fiber": 3.33, "salt": 1 };
var avocado = { "name": "avocado", "kcal": 322, "protein": 4.02, "carbohydrates": 17.15, "sugar": 1.33, "fat": 29.47, "saturatedFat": 4.27, "fiber": 13.5, "salt": 14 };
var banana = { "name": "banana", "kcal": 105, "protein": 1.29, "carbohydrates": 26.95, "sugar": 14.43, "fat": 0.39, "saturatedFat": 0.13, "fiber": 3.1, "salt": 1 };
var pear = { "name": "pear", "kcal": 96, "protein": 0.63, "carbohydrates": 25.66, "sugar": 16.27, "fat": 0.2, "saturatedFat": 0.01, "fiber": 5.1, "salt": 2 };
var strawberry = { "name": "strawberry", "kcal": 46, "protein": 0.96, "carbohydrates": 11.06, "sugar": 6.71, "fat": 0.43, "saturatedFat": 0.02, "fiber": 2.9, "salt": 1 };
var grapefruit = { "name": "grapefruit", "kcal": 41, "protein": 0.81, "carbohydrates": 10.34, "sugar": 8.93, "fat": 0.13, "saturatedFat": 0.02, "fiber": 1.4, "salt": 0 };
var kiwi = { "name": "kiwi", "kcal": 46, "protein": 0.87, "carbohydrates": 11.14, "sugar": 6.83, "fat": 0.4, "saturatedFat": 0.02, "fiber": 2.3, "salt": 2 };
var watermelon = { "name": "watermelon", "kcal": 46, "protein": 0.93, "carbohydrates": 11.48, "sugar": 9.42, "fat": 0.23, "saturatedFat": 0.02, "fiber": 0.6, "salt": 2 };
var orange = { "name": "orange", "kcal": 62, "protein": 1.23, "carbohydrates": 15.39, "sugar": 12.25, "fat": 0.16, "saturatedFat": 0.02, "fiber": 3.1, "salt": 0 };

var fruits = [];
[pineapple, apple, avocado, banana, pear, strawberry, grapefruit, kiwi, watermelon, orange]
    .forEach(function (entry) {
        fruits[entry.name] = entry;
    });

//vegetables
var aubergine = { "name": "aubergine", "kcal": 33, "protein": 0.39, "carbohydrates": 4.16, "sugar": 1.51, "fat": 1.92, "saturatedFat": 0.36, "fiber": 1.2, "salt": 244 };
var cauliflower = { "name": "cauliflower", "kcal": 25, "protein": 1.98, "carbohydrates": 5.3, "sugar": 2.4, "fat": 0.1, "saturatedFat": 0.03, "fiber": 2.5, "salt": 30 };
var brokkoli = { "name": "brokkoli", "kcal": 31, "protein": 2.57, "carbohydrates": 6.04, "sugar": 1.55, "fat": 0.34, "saturatedFat": 0.04, "fiber": 2.4, "salt": 30 };
var peas = { "name": "peas", "kcal": 117, "protein": 7.86, "carbohydrates": 20.97, "sugar": 8.22, "fat": 0.58, "saturatedFat": 0.1, "fiber": 7.4, "salt": 7 };
var cucuber = { "name": "cucumber", "kcal": 7, "protein": 0.35, "carbohydrates": 1.3, "sugar": 0.83, "fat": 0.1, "saturatedFat": 0.01, "fiber": 0.4, "salt": 1 };
var carrot = { "name": "carrot", "kcal": 25, "protein": 0.57, "carbohydrates": 5.84, "sugar": 2.77, "fat": 0.15, "saturatedFat": 0.02, "fiber": 1.7, "salt": 42 };
var corn = { "name": "corn", "kcal": 132, "protein": 4.96, "carbohydrates": 29.29, "sugar": 4.96, "fat": 1.82, "saturatedFat": 0.3, "fiber": 4.2, "salt": 23 };
var olives = { "name": "olives", "kcal": 27, "protein": 0.21, "carbohydrates": 1.24, "sugar": 0.04, "fat": 2.59, "saturatedFat": 0.34, "fiber": 0.7, "salt": 249 };
var paprika = { "name": "paprika", "kcal": 19, "protein": 0.73, "carbohydrates": 4.46, "sugar": 3.11, "fat": 0.22, "saturatedFat": 0.04, "fiber": 1.5, "salt": 1 };
var mushrooms = { "name": "mushroom", "kcal": 8, "protein": 1.08, "carbohydrates": 1.15, "sugar": 0.58, "fat": 0.12, "saturatedFat": 0.02, "fiber": 0.4, "salt": 2 };
var salad = { "name": "salad", "kcal": 8, "protein": 0.5, "carbohydrates": 1.63, "sugar": 0.97, "fat": 0.08, "saturatedFat": 0.01, "fiber": 0.07, "salt": 6 };
var spinach = { "name": "spinach", "kcal": 7, "protein": 0.86, "carbohydrates": 1.09, "sugar": 0.13, "fat": 0.12, "saturatedFat": 0.02, "fiber": 0.7, "salt": 24 };
var tomato = { "name": "tomato", "kcal": 22, "protein": 1.08, "carbohydrates": 4.82, "sugar": 3.23, "fat": 0.25, "saturatedFat": 0.06, "fiber": 1.5, "salt": 6 };
var zucchini = { "name": "zucchini", "kcal": 18, "protein": 1.37, "carbohydrates": 3.79, "sugar": 1.95, "fat": 0.2, "saturatedFat": 0.04, "fiber": 1.2, "salt": 11 };
var onion = { "name": "onion", "kcal": 25, "protein": 0.55, "carbohydrates": 6.07, "sugar": 2.57, "fat": 0.05, "saturatedFat": 0.02, "fiber": 0.8, "salt": 2 };

var vegetables = [];
[aubergine, cauliflower, brokkoli, peas, cucumber, carrot, corn, olives, paprika, mushrooms, salad, spinach, tomato, zucchini, onion]
    .forEach(function (entry) {
        vegetables[entry.name] = entry;
    });

//meats
var groundBeef = { "name": "groundBeef", "kcal": 235, "protein": 21.55, "carbohydrates": 0, "sugar": 0, "fat": , "saturatedFat": , "fiber": , "salt":  };
var chicken = { "name": "chicken", "kcal": 302, "protein": 45.8, "carbohydrates": 0, "sugar": 0, "fat": 11.97, "saturatedFat": 3.37, "fiber": 0, "salt": 609 };
var lamb = { "name": "lamb", "kcal": 391, "protein": 32.59, "carbohydrates": 0, "sugar": 0, "fat": 27.83, "saturatedFat": 11.73, "fiber": 0, "salt": 528 };
var beef = { "name": "beef", "kcal": 358, "protein": 34.72, "carbohydrates": 0, "sugar": 0, "fat": 23.21, "saturatedFat": 9.13, "fiber": 0, "salt": 291 };
var pork = { "name": "pork", "kcal": 363, "protein": 36.64, "carbohydrates": 0, "sugar": 0, "fat": 22.83, "saturatedFat": 8.27, "fiber": 0, "salt": 515 };
var bratwurst = { "name": "bratwurst", "kcal": 283, "protein": 11.66, "carbohydrates": 2.42, "sugar": 0, "fat": 24.8, "saturatedFat": 8.6, "fiber": 0, "salt": 719 };
var sausage = { "name": "sausage", "kcal": 91, "protein": 9.3, "carbohydrates": 2.14, "sugar": 0, "fat": 4.82, "saturatedFat": 1.64, "fiber": 0.7, "salt": 730 };
var friedFish = { "name": "friedFish", "kcal": 249, "protein": 11.04, "carbohydrates": 21.18, "sugar": 2.5, "fat": 13.25, "saturatedFat": 1.99, "fiber": 1.4, "salt": 421 };
var cookedFish = { "name": "cookedFish", "kcal": 171, "protein": 29.84, "carbohydrates": 0.45, "sugar": 0.11, "fat": 4.68, "saturatedFat": 0.92, "fiber": 0, "salt": 484 };
var smokedFish = { "name": "smokedFish", "kcal": 99, "protein": 15.54, "carbohydrates": 0, "sugar": 0, "fat": 3.67, "saturatedFat": 0.79, "fiber": 0, "salt": 666 };

var burger = { "name": "burger", "kcal": 351, "protein": 18.01, "carbohydrates": 35.74, "sugar": 8.79, "fat": 14.81, "saturatedFat": 6.24, "fiber": 1.8, "salt": 785 };
var pizza = { "name": "pizza", "kcal": 1773, "protein": 71.21, "carbohydrates": 185.24, "sugar": 11.84, "fat": 81.28, "saturatedFat": 32.34, "fiber": 9.4, "salt": 4082 };
var fries = { "name": "fries", "kcal": 319, "protein": 3.76, "carbohydrates": 37.53, "sugar": 0.68, "fat": 17.03, "saturatedFat": 4.03, "fiber": 3.5, "salt": 193 };
var nuggets = { "name": "nuggets", "kcal": 297, "protein": 15.59, "carbohydrates": 16.32, "sugar": 0.88, "fat": 18.82, "saturatedFat": 4.02, "fiber": 0.9, "salt": 574 };
var meats = [];
[groundBeef, chicken, lamb, beef, pork, bratwurst, sausage, friedFish, cookedFish, smokedFish, burger, pizza, fries, nuggets]
    .forEach(function (entry) {
        meats[entry.name] = entry;
    });

//milk products
var butter = { "name": "butter", "kcal": 36, "protein": 0.04, "carbohydrates": 0, "sugar": 0, "fat": 4.06, "saturatedFat": 2.57, "fiber": 0, "salt": 1 };
var cheese = { "name": "cheese", "kcal": 101, "protein": 7.08, "carbohydrates": 0.47, "sugar": 0.47, "fat": 7.85, "saturatedFat": 4.99, "fiber": 0, "salt": 261 };
var creamCheese = { "name": "creamCheese", "kcal": 51, "protein": 1.09, "carbohydrates": 0.39, "sugar": 0.03, "fat": 5.06, "saturatedFat": 3.19, "fiber": 0, "salt": 43 };
var joghurt = { "name": "joghurt", "kcal": 250, "protein": 10.71, "carbohydrates": 46.67, "sugar": 46.67, "fat": 2.65, "saturatedFat": 1.71, "fiber": 0, "salt": 142 };
var cream = { "name": "cream", "kcal": 104, "protein": 0.62, "carbohydrates": 0.84, "sugar": 0.03, "fat": 11.1, "saturatedFat": 6.91, "fiber": 0, "salt": 11 };
var egg = { "name": "egg", "kcal": 74, "protein": 6.29, "carbohydrates": 0.38, "sugar": 0.38, "fat": 4.97, "saturatedFat": 1.55, "fiber": 0, "salt": 70 };

var milkProducts = [];
[butter, cheese, creamCheese, joghurt, cream, egg]
    .forEach(function (entry) {
        milkProducts[entry.name] = entry;
    });

//corn products
var bread = { "name": "bread", "kcal": 78, "protein": 2.74, "carbohydrates": 14.14, "sugar": 1.65, "fat": 1.23, "saturatedFat": 0.27, "fiber": 1.3, "salt": 159 };
var toast = { "name": "toast", "kcal": 64, "protein": 1.98, "carbohydrates": 11.97, "sugar": 1.04, "fat": 0.88, "saturatedFat": 0.13, "fiber": 0.6, "salt": 130 };
var oatmeal = { "name": "oatmeal", "kcal": 62, "protein": 2.59, "carbohydrates": 10.84, "sugar": 0.24, "fat": 1.02, "saturatedFat": 0.18, "fiber": 1.6, "salt": 119 };
var potato = { "name": "potato", "kcal": 149, "protein": 3.58, "carbohydrates": 33.46, "sugar": 2.45, "fat": 0.21, "saturatedFat": 0.06, "fiber": 5.1, "salt": 13 };
var rice = { "name": "rice", "kcal": 191, "protein": 3.56, "carbohydrates": 41.04, "sugar": 0, "fat": 0.83, "saturatedFat": 0.03, "fiber": 1, "salt": 582 };
var noodles = { "name": "noodles", "kcal": 220, "protein": 8.06, "carbohydrates": 42.95, "sugar": 0.78, "fat": 1.29, "saturatedFat": 0.25, "fiber": 2.5, "salt": 325 };

var cornProducts = []
[bread, toast, oatmeal, potato, rice, noodles]
    .forEach(function (entry) {
        cornProducts[entry.name] = entry;
    });

//sweets
var icecream = { "name": "icecream", "kcal": 133, "protein": 2.32, "carbohydrates": 16.1, "sugar": 14.72, "fat": 7.08, "saturatedFat": 4.37, "fiber": 0.5, "salt": 49 };
var cookie = { "name": "cookie", "kcal": 49, "protein": 0.54, "carbohydrates": 6.9, "sugar": 2.76, "fat": 2.14, "saturatedFat": 0.48, "fiber": 0.2, "salt": 33 };
var cake = { "name": "cake", "kcal": 257, "protein": 4.4, "carbohydrates": 20.4, "sugar": 10, "fat": 18, "saturatedFat": 7.93, "fiber": 0.3, "salt": 166 };
var pancake = { "name": "pancake", "kcal": 175, "protein": 4.93, "carbohydrates": 21.79, "sugar": 4, "fat": 7.47, "saturatedFat": 1.63, "fiber": 0.9, "salt": 300 };
var pudding = { "name": "pudding", "kcal": 197, "protein": 3.83, "carbohydrates": 32.66, "sugar": 25.35, "fat": 5.68, "saturatedFat": 1.01, "fiber": 1.4, "salt": 183 };
var chocolate = { "name": "chocolate", "kcal": 207, "protein": 1.6, "carbohydrates": 24.44, "sugar": 21.11, "fat": 14.02, "saturatedFat": 8.23, "fiber": 2.3, "salt": 7 };
var bonbons = { "name": "bonbons", "kcal": 112, "protein": 0, "carbohydrates": 27.78, "sugar": 17.83, "fat": 0.06, "saturatedFat": 0, "fiber": 0, "salt": 11 };
var gummibears = { "name": "gummibears", "kcal": 143, "protein": 0, "carbohydrates": 35.6, "sugar": 21.23, "fat": 0, "saturatedFat": 0, "fiber": 0, "salt": 16 };

var sweets = [];
[icecream, cookie, cake, pancake, pudding, chocolate, bonbons, gummibears]
    .forEach(function (entry) {
        sweets[entry.name] = entry;
    });

//drinks
var water = { "name": "water", "kcal": 0, "protein": 0, "carbohydrates": 0, "sugar": 0, "fat": 0, "saturatedFat": 0, "fiber": 0, "salt": 0 };
var juice = { "name": "juice", "kcal": 117, "protein": 0.15, "carbohydrates": 28.97, "sugar": 27.03, "fat": 0.27, "saturatedFat": 0.05, "fiber": 0.2, "salt": 7 };
var milk = { "name": "milk", "kcal": 122, "protein": 8.03, "carbohydrates": 11.49, "sugar": 12.59, "fat": 4.88, "saturatedFat": 2.97, "fiber": 0, "salt": 100 };
var coffee = { "name": "coffee", "kcal": 2, "protein": 0.28, "carbohydrates": 0.09, "sugar": 0, "fat": 0.05, "saturatedFat": 0.01, "fiber": 0, "salt": 5 }; 
var tea = { "name": "tea", "kcal": 2, "protein": 0, "carbohydrates": 0.71, "sugar": 0, "fat": 0, "saturatedFat": 0, "fiber": 0, "salt": 7 };
var lemonade = { "name": "lemonade", "kcal": 136, "protein": 0.26, "carbohydrates": 35.18, "sugar": 33.01, "fat": 0.07, "saturatedFat": 0, "fiber": 0, "salt": 15 };
var energyDrink = { "name": "energyDrink", "kcal": 108, "protein": 0.6, "carbohydrates": 26.26, "sugar": 24.14, "fat": 0.19, "saturatedFat": 0, "fiber": 0, "salt": 202 };
var beer = { "name": "beer", "kcal": 220, "protein": 2.35, "carbohydrates": 18, "sugar": 0, "fat": 0, "saturatedFat": 0, "fiber": 0, "salt": 20 };
var wine = { "name": "wine", "kcal": 213, "protein": 0.16, "carbohydrates": 6.25, "sugar": 1.6, "fat": 0, "saturatedFat": 0, "fiber": 0, "salt": 10 };

var drinks = []
[water, juice, milk, coffee, tea, lemonade, energyDrink, beer, wine]
    .forEach(function (entry) {
        drinks[entry.name] = entry;
    });
