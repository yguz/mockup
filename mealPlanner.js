const mealData = {
  "1500": {
    omnivore: {
      day1: [
        {
          title: "BREAKFAST",
          name: "Egg and Avocado Toast",
          image: "https://cdn.pixabay.com/photo/2017/08/23/18/02/food-2673724_1280.jpg",
          ingredients: "2 slices whole wheat toast, 1 avocado, 1 boiled egg",
          nutrition: "Est. 350 Cal",
          cost: "$2.50",
          time: "10 min"
        },
        {
          title: "LUNCH",
          name: "Grilled Chicken Salad",
          image: "https://cdn.pixabay.com/photo/2018/05/18/19/58/rice-3411995_1280.jpg",
          ingredients: "Grilled chicken breast, mixed greens, cherry tomatoes, vinaigrette",
          nutrition: "Est. 400 Cal",
          cost: "$4.00",
          time: "15 min"
        },
        {
          title: "DINNER",
          name: "Beef Stir Fry with Rice",
          image: "https://cdn.pixabay.com/photo/2019/09/05/01/08/food-4452837_1280.jpg",
          ingredients: "Sliced beef, mixed vegetables, soy sauce, garlic, ½ cup cooked rice",
          nutrition: "Est. 450 Cal",
          cost: "$4.50",
          time: "20 min"
        }
      ],
      day2: [
        {
          title: "BREAKFAST",
          name: "Greek Yogurt with Berries and Granola",
          image: "https://cdn.pixabay.com/photo/2016/11/21/15/53/berries-1846085_1280.jpg",
          ingredients: "1 cup Greek yogurt, ½ cup berries, ¼ cup granola",
          nutrition: "Est. 360 Cal",
          cost: "$2.75",
          time: "5 min"
        },
        {
          title: "LUNCH",
          name: "Turkey Sandwich",
          image: "https://cdn.pixabay.com/photo/2017/05/31/02/56/food-photography-2358904_1280.jpg",
          ingredients: "Whole wheat bread, turkey slices, lettuce, tomato, mustard",
          nutrition: "Est. 400 Cal",
          cost: "$3.50",
          time: "10 min"
        },
        {
          title: "DINNER",
          name: "Grilled Salmon with Quinoa",
          image: "https://cdn.pixabay.com/photo/2021/06/21/15/03/salmon-6353898_1280.jpg",
          ingredients: "Grilled salmon, ½ cup cooked quinoa, steamed broccoli",
          nutrition: "Est. 460 Cal",
          cost: "$5.50",
          time: "20 min"
        }
      ],
      day3: [
        {
          title: "BREAKFAST",
          name: "Veggie Omelette",
          image: "https://cdn.pixabay.com/photo/2014/02/20/12/31/omelette-270498_1280.jpg",
          ingredients: "2 eggs, bell peppers, onion, spinach, cheese",
          nutrition: "Est. 370 Cal",
          cost: "$2.25",
          time: "10 min"
        },
        {
          title: "LUNCH",
          name: "Chicken Burrito Bowl",
          image: "https://feelgoodfoodie.net/wp-content/uploads/2017/03/Chicken-Burrito-Bowl-06.jpg",
          ingredients: "Grilled chicken, brown rice, black beans, corn, salsa",
          nutrition: "Est. 430 Cal",
          cost: "$4.50",
          time: "15 min"
        },
        {
          title: "DINNER",
          name: "Spaghetti Bolognese",
          image: "https://www.recipetineats.com/tachyon/2018/07/Spaghetti-Bolognese.jpg?resize=900%2C1260&zoom=1",
          ingredients: "Ground beef, tomato sauce, spaghetti, herbs",
          nutrition: "Est. 470 Cal",
          cost: "$5.00",
          time: "25 min"
        }
      ]
    },
      "vegan": {
        "day1": [
          {
            title: "BREAKFAST",
            name: "Peanut Butter Banana Toast",
            image: "https://cdn.pixabay.com/photo/2023/04/04/14/36/toast-7899468_1280.jpg",
            ingredients: "2 slices whole wheat bread, 1 tbsp peanut butter, 1 banana",
            nutrition: "Est. 350 Cal",
            cost: "$2.00",
            time: "5 min"
          },
          {
            title: "LUNCH",
            name: "Vegan Chickpea Salad Sandwich",
            image: "https://www.noracooks.com/wp-content/uploads/2022/07/chickpea-salad-6.jpg",
            ingredients: "½ cup canned chickpeas, 2 slices whole wheat bread, 1 tbsp vegan mayo, 1 tbsp Dijon mustard, lettuce, tomato slices",
            nutrition: "Est. 400 Cal",
            cost: "$3.50",
            time: "10 min"
          },
          {
            title: "DINNER",
            name: "Vegan Stir-Fry with Tofu",
            image: "https://www.bitesofberi.com/wp-content/uploads/2020/12/veggie-tofu-stir-fry-1.jpg",
            ingredients: "½ block firm tofu, 1 cup mixed vegetables, 2 tbsp soy sauce, 1 tsp sesame oil, 1 tsp garlic powder, ½ cup cooked rice",
            nutrition: "Est. 450 Cal",
            cost: "$4.00",
            time: "15 min"
          }
        ],
        "day2": [
          {
            title: "BREAKFAST",
            name: "Oatmeal with Chia Seeds and Almond Butter",
            image: "https://aladygoeswest.com/wp-content/uploads/2018/01/The-creamiest-peanut-butter-oatmeal-by-A-Lady-Goes-West-1-500x500.jpg",
            ingredients: "½ cup rolled oats, 1 tbsp chia seeds, 1 tbsp almond butter, 1 tbsp maple syrup, 1 cup almond milk",
            nutrition: "Est. 370 Cal",
            cost: "$2.50",
            time: "10 min"
          },
          {
            title: "LUNCH",
            name: "Avocado and Hummus Wrap",
            image: "https://www.thespruceeats.com/thmb/r1CDYX5z5qflVShrcbXIvbXdOj0=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/vegan-avocado-wrap-sandwich-with-hummus-3377621-hero-01-6945a100b88d4271b0debb161dc7350a.jpg",
            ingredients: "1 whole wheat tortilla, ½ avocado, 2 tbsp hummus, ¼ cup shredded carrots, ¼ cup spinach",
            nutrition: "Est. 350 Cal",
            cost: "$3.00",
            time: "5 min"
          },
          {
            title: "DINNER",
            name: "Spaghetti with Marinara and Vegan Meatballs",
            image: "https://www.whitneyerd.com/wp-content/uploads/2017/10/Vegan-Spaghetti-and-Meatballs-Recipe.jpg",
            ingredients: "1 cup cooked spaghetti, ½ cup marinara sauce, 3-4 vegan meatballs, 1 tbsp olive oil, 1 tsp Italian seasoning",
            nutrition: "Est. 460 Cal",
            cost: "$4.00",
            time: "15 min"
          }
        ],
        "day3": [
          {
            title: "BREAKFAST",
            name: "Vegan Smoothie Bowl",
            image: "https://cdn.pixabay.com/photo/2024/01/07/17/48/smoothie-8493725_1280.jpg",
            ingredients: "Frozen berries, banana, almond milk, chia seeds, granola",
            nutrition: "Est. 360 Cal",
            cost: "$3.00",
            time: "10 min"
          },
          {
            title: "LUNCH",
            name: "Lentil and Quinoa Salad",
            image: "https://cdn.pixabay.com/photo/2016/11/17/22/57/pan-1832926_1280.jpg",
            ingredients: "Cooked lentils, cooked quinoa, cherry tomatoes, cucumber, lemon vinaigrette",
            nutrition: "Est. 420 Cal",
            cost: "$4.00",
            time: "15 min"
          },
          {
            title: "DINNER",
            name: "Stuffed Bell Peppers with Rice and Black Beans",
            image: "https://cdn.pixabay.com/photo/2017/04/24/10/13/stuffed-pepper-2255998_1280.jpg",
            ingredients: "Bell peppers, rice, black beans, corn, tomato sauce, spices",
            nutrition: "Est. 460 Cal",
            cost: "$4.50",
            time: "30 min"
          }
        ]
      },
      "glutenFree": {
        "day1": [
          {
            title: "BREAKFAST",
            name: "Gluten-Free Avocado Toast",
            image: "https://www.cathysglutenfree.com/wp-content/uploads/2018/06/avocado-toast-p2.jpg",
            ingredients: "2 slices gluten-free bread, ½ avocado, salt, pepper, chili flakes",
            nutrition: "Est. 320 Cal",
            cost: "$3.00",
            time: "5 min"
          },
          {
            title: "LUNCH",
            name: "Chickpea Salad with Avocado",
            image: "https://www.noracooks.com/wp-content/uploads/2022/07/chickpea-salad-6.jpg",
            ingredients: "½ cup canned chickpeas, ½ avocado, 1 tbsp olive oil, 1 tbsp lemon juice, salt, pepper, mixed herbs",
            nutrition: "Est. 400 Cal",
            cost: "$3.00",
            time: "10 min"
          },
          {
            title: "DINNER",
            name: "Vegan Stir-Fry with Tofu (Gluten-Free)",
            image: "https://www.bitesofberi.com/wp-content/uploads/2020/12/veggie-tofu-stir-fry-1.jpg",
            ingredients: "½ block firm tofu, 1 cup mixed vegetables, 2 tbsp gluten-free soy sauce, 1 tsp sesame oil, 1 tsp garlic powder, ½ cup cooked rice",
            nutrition: "Est. 450 Cal",
            cost: "$4.00",
            time: "15 min"
          }
        ],
        "day2": [
          {
            title: "BREAKFAST",
            name: "Gluten-Free Tofu Scramble",
            image: "https://minimalistbaker.com/wp-content/uploads/2014/08/Easy-Southwest-Tofu-Scramble-10-ingredients-simple-preparation-and-SO-delicious-vegan-glutenfree.jpg",
            ingredients: "Tofu, bell peppers, onions, turmeric, salt, pepper, olive oil",
            nutrition: "Est. 350 Cal",
            cost: "$3.50",
            time: "15 min"
          }
        ],
        "day3": [
          {
            title: "BREAKFAST",
            name: "Gluten-Free Overnight Oats",
            image: "https://cdn.pixabay.com/photo/2018/03/29/12/19/oats-3272113_1280.jpg",
            ingredients: "Gluten-free oats, almond milk, chia seeds, berries, maple syrup",
            nutrition: "Est. 340 Cal",
            cost: "$2.50",
            time: "5 min (prep night before)"
          },
          {
            title: "LUNCH",
            name: "Turkey Lettuce Wraps",
            image: "https://thecozyapron.com/wp-content/uploads/2012/04/chicken-lettuce-wraps_thecozyapron_1.jpg",
            ingredients: "Ground turkey, lettuce leaves, gluten-free soy sauce, carrots, green onion",
            nutrition: "Est. 410 Cal",
            cost: "$4.50",
            time: "20 min"
          },
          {
            title: "DINNER",
            name: "Baked Sweet Potato with Chickpeas",
            image: "https://www.orchidsandsweettea.com/wp-content/uploads/2022/04/Stuffed-Sweet-Potatoes-4-of-7.jpg",
            ingredients: "Sweet potato, roasted chickpeas, tahini, spinach",
            nutrition: "Est. 450 Cal",
            cost: "$4.00",
            time: "30 min"
          }
        ]
      }
    }
};

function generateMeals() {
  const calories = document.getElementById('calories').value;
  const days = document.getElementById('days').value;
  const dietType = document.getElementById('diet').value;

  if (!calories || !days || !dietType) {
    alert('Please select calories, number of days, and diet type.');
    return;
  }

  let mealHTML = '';

  for (let i = 1; i <= days; i++) {
    const dayKey = `day${i}`;
    let dayMeals = [];

    if (dietType === 'vegan' || dietType === 'glutenFree' || dietType === 'omnivore') {
      dayMeals = mealData[calories]?.[dietType]?.[dayKey] || [];
    } else {
      alert("Invalid diet type selected.");
      return;
    }

    if (dayMeals.length === 0) continue;

    mealHTML += `<div class="day-section">
                  <h2 class="day-title">Day ${i}</h2>
                  <div class="meal-card-container">`;

    dayMeals.forEach(meal => {
      mealHTML += `
        <div class="meal-card">
          <img src="${meal.image}" alt="${meal.name}" />
          <h3>${meal.title}: ${meal.name}</h3>
          <p><strong>Ingredients:</strong> ${meal.ingredients}</p>
          <p><strong>Nutrition:</strong> ${meal.nutrition}</p>
          <p><strong>Cost:</strong> ${meal.cost}</p>
          <p><strong>Time:</strong> ${meal.time}</p>
        </div>
      `;
    });

    mealHTML += '</div></div>';
  }

  document.getElementById('mealContainer').innerHTML = mealHTML;
}
