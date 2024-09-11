export const allProductsData = [
    {
      id: 'souvlaki-dinner',
      ItemName: 'Souvlaki Dinner',
      ItemIngredients: 'Chicken served with Greek salad, rice, garlic toast',
      Category: 'Greek',
      attributes: [
        {
          id: 'portion-size',
          name: 'Portion Size',
          attributeOptions: [
            { id: 'regular', value: 'Regular' },
            { id: 'large', value: 'Large' },
          ],
        },
      ],
    },
    {
      id: 'baklava',
      ItemName: 'Baklava',
      ItemIngredients: 'Layered pastry with honey and nuts',
      Category: 'Dessert',
      attributes: [],
    },
    {
      id: 'a-taste-of-greece',
      ItemName: 'A Taste of Greece',
      ItemIngredients: 'A selection of Greek specialties',
      Category: 'Greek',
      attributes: [],
    },
    {
      id: 'super-donair',
      ItemName: 'Super Donair',
      ItemIngredients: 'Donair meat, tomatoes, onions, sweet sauce',
      Category: 'Donair',
      attributes: [
        {
          id: 'size',
          name: 'Size',
          attributeOptions: [
            { id: 'small', value: 'Small' },
            { id: 'large', value: 'Large' },
          ],
        },
      ],
    },
    {
      id: 'regular-donair',
      ItemName: 'Regular Donair',
      ItemIngredients: 'Donair meat, tomatoes, onions, sweet sauce',
      Category: 'Donair',
      attributes: [],
    },
    {
      id: 'greek-donair',
      ItemName: 'Greek Donair',
      ItemIngredients: 'Donair with Greek flavors',
      Category: 'Donair',
      attributes: [],
    },
    {
      id: 'delicious-donairs',
      ItemName: 'Delicious Donairs',
      ItemIngredients: 'Donair meat, tomatoes, onions, and sauce',
      Category: 'Donair',
      attributes: [],
    },
    {
      id: 'greek-salad',
      ItemName: 'Greek Salad',
      ItemIngredients: 'Tomatoes, cucumbers, olives, feta cheese, olive oil',
      Category: 'Salads',
      attributes: [],
    },
    {
      id: 'caesar-salad',
      ItemName: 'Caesar Salad',
      ItemIngredients: 'Romaine lettuce, croutons, Parmesan cheese, Caesar dressing',
      Category: 'Salads',
      attributes: [],
    },
    {
      id: 'cheese-pizza',
      ItemName: 'Cheese Pizza',
      ItemIngredients: 'Pizza dough, pizza sauce, mozzarella cheese',
      Category: 'Pizza',
      attributes: [
        {
          id: 'size',
          name: 'Size',
          attributeOptions: [
            { id: 'small', value: 'Small', slices: '6' },
            { id: 'medium', value: 'Medium', slices: '8' },
            { id: 'large', value: 'Large', slices: '10' },
          ],
        },
      ],
    },
    {
      id: 'one-topping-pizza',
      ItemName: 'One Topping Pizza',
      ItemIngredients: 'Pizza dough, pizza sauce, one topping of your choice',
      Category: 'Pizza',
      attributes: [
        {
          id: 'topping',
          name: 'Topping',
          attributeOptions: [
            { id: 'pepperoni', value: 'Pepperoni' },
            { id: 'mushroom', value: 'Mushroom' },
            { id: 'olives', value: 'Olives' },
          ],
        },
      ],
    },
    {
      id: 'lasagna',
      ItemName: 'Lasagna',
      ItemIngredients: 'Layers of pasta, meat sauce, mozzarella cheese',
      Category: 'Pasta',
      attributes: [
        {
          id: 'size',
          name: 'Size',
          attributeOptions: [
            { id: 'regular', value: 'Regular' },
            { id: 'family', value: 'Family Size' },
          ],
        },
      ],
    },
    {
      id: 'spaghetti-with-meat-sauce',
      ItemName: 'Spaghetti with Meat Sauce',
      ItemIngredients: 'Spaghetti pasta with homemade meat sauce',
      Category: 'Pasta',
      attributes: [],
    },
    {
      id: 'gnocchi-with-cheese',
      ItemName: 'Gnocchi with Cheese',
      ItemIngredients: 'Gnocchi pasta with cheese sauce',
      Category: 'Pasta',
      attributes: [],
    },
    {
      id: 'garlic-cheese-fingers',
      ItemName: 'Garlic Cheese Fingers',
      ItemIngredients: 'Garlic bread topped with mozzarella cheese',
      Category: 'Sides',
      attributes: [],
    },
    {
      id: 'famous-garlic-fingers',
      ItemName: 'Famous Garlic Fingers',
      ItemIngredients: 'Garlic bread with bacon bits and mozzarella cheese',
      Category: 'Sides',
      attributes: [],
    },
    // Add more products here following the same structure...
  ];
  