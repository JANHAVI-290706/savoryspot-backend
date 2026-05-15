const mongoose = require('mongoose');

const Restaurant =
  require('./models/Restaurant');

mongoose.connect(
  'mongodb://127.0.0.1:27017/foodapp'
)
.then(() => {

  console.log('✅ MongoDB Connected');

})
.catch((err) => {

  console.log(err);

});

const restaurants = [

  {
    name: 'Truffles',

    image:
      'https://images.unsplash.com/photo-1568901346375-23c9450c58cd',

    rating: 4.5,

    reviews: 12450,

    cuisine:
      'Burgers, American, Italian',

    city: 'Bangalore',

    address:
      '18, 1st Main Rd, 5th Block, Koramangala, Bengaluru, Karnataka 560095',

    description:
      'Popular for burgers and desserts',

    priceRange: '₹₹',

    vegType: 'Both',

    review1:
      'Best burgers in Bangalore',

    review2:
      'Affordable and tasty food',

    review3:
      'Always crowded on weekends',
  },

  {
    name: 'Empire Restaurant',

    image:
      'https://images.unsplash.com/photo-1633945274405-b6c8069047b0',

    rating: 4.3,

    reviews: 18200,

    cuisine:
      'Biryani, North Indian, Chinese',

    city: 'Bangalore',

    address:
      '80 Feet Rd, Koramangala 4th Block, Bengaluru, Karnataka 560034',

    description:
      'Famous for biryani and kebabs',

    priceRange: '₹₹',

    vegType: 'Both',

    review1:
      'Great late night food',

    review2:
      'Chicken kebabs are amazing',

    review3:
      'Very fast service',
  },

  {
    name: 'Vidyarthi Bhavan',

    image:
      'https://images.unsplash.com/photo-1668236543090-82eba5ee5976',

    rating: 4.7,

    reviews: 25400,

    cuisine:
      'South Indian',

    city: 'Bangalore',

    address:
      '32, Gandhi Bazaar Main Rd, Basavanagudi, Bengaluru, Karnataka 560004',

    description:
      'Legendary crispy benne dosa spot',

    priceRange: '₹',

    vegType: 'Veg',

    review1:
      'Best dosa in Bangalore',

    review2:
      'Authentic old Bangalore taste',

    review3:
      'Worth the waiting time',
  },

  {
    name: 'CTR',

    image:
      'https://images.unsplash.com/photo-1630383249896-424e482df921',

    rating: 4.6,

    reviews: 17600,

    cuisine:
      'South Indian',

    city: 'Bangalore',

    address:
      '7th Cross Rd, Malleshwaram, Bengaluru, Karnataka 560003',

    description:
      'Known for benne masala dosa',

    priceRange: '₹',

    vegType: 'Veg',

    review1:
      'Soft dosa and tasty chutney',

    review2:
      'Classic Bangalore breakfast',

    review3:
      'Iconic restaurant',
  },

  {
    name: 'Toit',

    image:
      'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4',

    rating: 4.5,

    reviews: 22100,

    cuisine:
      'Continental, Italian, Asian',

    city: 'Bangalore',

    address:
      '298, 100 Feet Rd, Indiranagar, Bengaluru, Karnataka 560038',

    description:
      'Famous brewery and pub',

    priceRange: '₹₹₹',

    vegType: 'Both',

    review1:
      'Amazing ambience',

    review2:
      'Good pizzas and drinks',

    review3:
      'Perfect weekend place',
  },

  {
    name: 'MTR',

    image:
      'https://images.unsplash.com/photo-1606491956689-2ea866880c84',

    rating: 4.6,

    reviews: 19400,

    cuisine:
      'South Indian',

    city: 'Bangalore',

    address:
      '14, Lalbagh Rd, Mavalli, Bengaluru, Karnataka 560004',

    description:
      'Historic South Indian restaurant',

    priceRange: '₹₹',

    vegType: 'Veg',

    review1:
      'Authentic meals and dosa',

    review2:
      'Rich Bangalore history',

    review3:
      'Excellent filter coffee',
  },

  {
    name: 'Meghana Foods',

    image:
      'https://images.unsplash.com/photo-1563379091339-03246963d29a',

    rating: 4.4,

    reviews: 28700,

    cuisine:
      'Andhra, Biryani, Chinese',

    city: 'Bangalore',

    address:
      '57, Residency Rd, Bengaluru, Karnataka 560025',

    description:
      'Popular spicy Andhra biryani',

    priceRange: '₹₹',

    vegType: 'Both',

    review1:
      'Best biryani in Bangalore',

    review2:
      'Huge quantity',

    review3:
      'Very flavorful food',
  },

  {
    name: 'Rameshwaram Cafe',

    image:
      'https://images.unsplash.com/photo-1626074353765-517a681e40be',

    rating: 4.6,

    reviews: 34800,

    cuisine:
      'South Indian',

    city: 'Bangalore',

    address:
      'JP Nagar, Bengaluru, Karnataka 560078',

    description:
      'Famous for dosa and filter coffee',

    priceRange: '₹₹',

    vegType: 'Veg',

    review1:
      'Very tasty dosa',

    review2:
      'Long queues but worth it',

    review3:
      'Authentic South Indian food',
  },

  {
    name: 'Chianti',

    image:
      'https://images.unsplash.com/photo-1513104890138-7c749659a591',

    rating: 4.4,

    reviews: 9700,

    cuisine:
      'Italian, Pizza, Pasta',

    city: 'Bangalore',

    address:
      '12th Main Rd, Indiranagar, Bengaluru, Karnataka 560038',

    description:
      'Popular Italian restaurant',

    priceRange: '₹₹₹',

    vegType: 'Both',

    review1:
      'Excellent wood fired pizzas',

    review2:
      'Fresh pasta and desserts',

    review3:
      'Beautiful ambience',
  },

  {
    name: 'Leon Grill',

    image:
      'https://images.unsplash.com/photo-1550547660-d9450f859349',

    rating: 4.3,

    reviews: 12400,

    cuisine:
      'Fast Food, Burgers, Wraps',

    city: 'Bangalore',

    address:
      'Koramangala 5th Block, Bengaluru, Karnataka 560095',

    description:
      'Popular fast food and burger chain',

    priceRange: '₹₹',

    vegType: 'Both',

    review1:
      'Great peri peri chicken',

    review2:
      'Affordable burgers',

    review3:
      'Quick service',
  },

  {
    name: 'Cafe Noir',

    image:
      'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085',

    rating: 4.3,

    reviews: 7400,

    cuisine:
      'French, Cafe, Desserts',

    city: 'Bangalore',

    address:
      'UB City Mall, Vittal Mallya Rd, Bengaluru, Karnataka 560001',

    description:
      'Elegant French style cafe',

    priceRange: '₹₹₹',

    vegType: 'Both',

    review1:
      'Lovely desserts',

    review2:
      'Beautiful ambience',

    review3:
      'Perfect coffee dates',
  },

  {
    name: 'Brahmin’s Coffee Bar',

    image:
      'https://images.unsplash.com/photo-1610192244261-3f33de3f55e4',

    rating: 4.5,

    reviews: 9990,

    cuisine:
      'South Indian',

    city: 'Bangalore',

    address:
      'Ranga Rao Rd, Shankarapura, Bengaluru, Karnataka 560004',

    description:
      'Iconic South Indian breakfast spot',

    priceRange: '₹',

    vegType: 'Veg',

    review1:
      'Soft idlis and crispy vadas',

    review2:
      'Authentic Bangalore breakfast',

    review3:
      'Filter coffee is amazing',
  },

  {
    name: 'Olive Beach',

    image:
      'https://images.unsplash.com/photo-1559847844-5315695dadae',

    rating: 4.5,

    reviews: 8069,

    cuisine:
      'Mediterranean, Italian',

    city: 'Bangalore',

    address:
      '16, Wood St, Ashok Nagar, Bengaluru, Karnataka 560025',

    description:
      'Luxury fine dining restaurant',

    priceRange: '₹₹₹₹',

    vegType: 'Both',

    review1:
      'Amazing ambience and pasta',

    review2:
      'Perfect for dinner dates',

    review3:
      'Premium dining experience',
  },

  {
    name: 'Shivaji Military Hotel',

    image:
      'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398',

    rating: 4.4,

    reviews: 13600,

    cuisine:
      'Biryani, Karnataka Style',

    city: 'Bangalore',

    address:
      '124, JC Rd, Kalasipalya, Bengaluru, Karnataka 560002',

    description:
      'Traditional military style meals',

    priceRange: '₹₹',

    vegType: 'Non-Veg',

    review1:
      'Authentic Donne biryani',

    review2:
      'Spicy and flavorful',

    review3:
      'Classic Bangalore food',
  },

  {
    name: 'Dyu Art Cafe',

    image:
      'https://images.unsplash.com/photo-1509042239860-f550ce710b93',

    rating: 4.4,

    reviews: 20828,

    cuisine:
      'Cafe, Desserts, Coffee',

    city: 'Bangalore',

    address:
      'Koramangala 8th Block, Bengaluru, Karnataka 560095',

    description:
      'Artistic cafe with rooftop seating',

    priceRange: '₹₹',

    vegType: 'Veg',

    review1:
      'Lovely cheesecake',

    review2:
      'Calm and aesthetic place',

    review3:
      'Best cafe for work and coffee',
  },
  {
  name: 'Burger Junction',

  image:
    'https://images.unsplash.com/photo-1550547660-d9450f859349',

  rating: 2.8,

  reviews: 1420,

  cuisine:
    'Fast Food, Burgers',

  city: 'Bangalore',

  address:
    '24, HSR Layout Sector 2, Bengaluru, Karnataka 560102',

  description:
    'Budget burger and fries outlet',

  priceRange: '₹₹',

  vegType: 'Both',

  review1:
    'Burgers are decent for the price',

  review2:
    'Fries were not crispy',

  review3:
    'Late night delivery is useful',
},

{
  name: 'Taco Bell Street',

  image:
    'https://images.unsplash.com/photo-1565299585323-38174c4a6471',

  rating: 2.7,

  reviews: 980,

  cuisine:
    'Mexican, Fast Food',

  city: 'Bangalore',

  address:
    'Indiranagar 100 Feet Rd, Bengaluru, Karnataka 560038',

  description:
    'Mexican wraps and tacos restaurant',

  priceRange: '₹₹',

  vegType: 'Both',

  review1:
    'Tacos were average',

  review2:
    'Nachos tasted fresh',

  review3:
    'Good ambience but slow service',
},

{
  name: 'Dosa Corner',

  image:
    'https://images.unsplash.com/photo-1668236543090-82eba5ee5976',

  rating: 2.9,

  reviews: 3100,

  cuisine:
    'South Indian',

  city: 'Bangalore',

  address:
    'Banashankari Stage 2, Bengaluru, Karnataka 560070',

  description:
    'Small South Indian breakfast place',

  priceRange: '₹',

  vegType: 'Veg',

  review1:
    'Masala dosa was crispy',

  review2:
    'Chutney quality changes sometimes',

  review3:
    'Budget friendly spot',
},

{
  name: 'Grill Factory',

  image:
    'https://images.unsplash.com/photo-1529193591184-b1d58069ecdd',

  rating: 2.6,

  reviews: 2210,

  cuisine:
    'Barbecue, Grill, Kebabs',

  city: 'Bangalore',

  address:
    'BTM Layout 2nd Stage, Bengaluru, Karnataka 560076',

  description:
    'Casual grill and barbecue restaurant',

  priceRange: '₹₹₹',

  vegType: 'Non-Veg',

  review1:
    'Kebabs were flavorful',

  review2:
    'Service was delayed',

  review3:
    'Good place for groups',
},

{
  name: 'Cafe Mist',

  image:
    'https://images.unsplash.com/photo-1509042239860-f550ce710b93',

  rating: 2.5,

  reviews: 740,

  cuisine:
    'Cafe, Coffee, Desserts',

  city: 'Bangalore',

  address:
    'Church Street, Bengaluru, Karnataka 560001',

  description:
    'Small cozy cafe with desserts',

  priceRange: '₹₹',

  vegType: 'Both',

  review1:
    'Coffee tastes good',

  review2:
    'Desserts were overpriced',

  review3:
    'Nice interiors for photos',
},

{
  name: 'Punjabi Rasoi',

  image:
    'https://images.unsplash.com/photo-1546833999-b9f581a1996d',

  rating: 2.8,

  reviews: 1980,

  cuisine:
    'North Indian, Punjabi',

  city: 'Bangalore',

  address:
    'Marathahalli Outer Ring Rd, Bengaluru, Karnataka 560037',

  description:
    'Punjabi curries and tandoori dishes',

  priceRange: '₹₹',

  vegType: 'Both',

  review1:
    'Butter chicken was decent',

  review2:
    'Naan was too chewy',

  review3:
    'Average family restaurant',
},

{
  name: 'Pasta Street',

  image:
    'https://images.unsplash.com/photo-1473093295043-cdd812d0e601',

  rating: 2.7,

  reviews: 860,

  cuisine:
    'Italian, Pasta, Pizza',

  city: 'Bangalore',

  address:
    'Whitefield Main Rd, Bengaluru, Karnataka 560066',

  description:
    'Italian restaurant with pasta specials',

  priceRange: '₹₹₹',

  vegType: 'Both',

  review1:
    'Pasta sauce was creamy',

  review2:
    'Pizza base felt dry',

  review3:
    'Good ambience',
},

{
  name: 'Chicken Hub',

  image:
    'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398',

  rating: 2.9,

  reviews: 2650,

  cuisine:
    'Biryani, Fried Chicken',

  city: 'Bangalore',

  address:
    'Frazer Town, Bengaluru, Karnataka 560005',

  description:
    'Budget non veg food spot',

  priceRange: '₹₹',

  vegType: 'Non-Veg',

  review1:
    'Chicken wings were spicy',

  review2:
    'Biryani quantity was less',

  review3:
    'Affordable meals',
},

{
  name: 'Brew Room Express',

  image:
    'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4',

  rating: 2.6,

  reviews: 1200,

  cuisine:
    'Cafe, Brewery, Continental',

  city: 'Bangalore',

  address:
    'Koramangala 6th Block, Bengaluru, Karnataka 560095',

  description:
    'Compact brewery style cafe',

  priceRange: '₹₹₹',

  vegType: 'Both',

  review1:
    'Mocktails were refreshing',

  review2:
    'Food took too long',

  review3:
    'Good music and ambience',
},

{
  name: 'Veggie Bowl',

  image:
    'https://images.unsplash.com/photo-1512621776951-a57141f2eefd',

  rating: 2.5,

  reviews: 690,

  cuisine:
    'Healthy Food, Salads, Veg',

  city: 'Bangalore',

  address:
    'Jayanagar 4th Block, Bengaluru, Karnataka 560011',

  description:
    'Healthy vegetarian meals and salads',

  priceRange: '₹₹',

  vegType: 'Veg',

  review1:
    'Fresh vegetables and salads',

  review2:
    'Portion size was small',

  review3:
    'Healthy but expensive',
},
{
  name: 'Nagarjuna',

  image:
    'https://images.unsplash.com/photo-1563379091339-03246963d29a',

  rating: 4.4,

  reviews: 21400,

  cuisine:
    'Andhra, Biryani, South Indian',

  city: 'Bangalore',

  address:
    'Residency Rd, Ashok Nagar, Bengaluru, Karnataka 560025',

  description:
    'Popular Andhra meals and biryani restaurant',

  priceRange: '₹₹',

  vegType: 'Both',

  review1:
    'Spicy Andhra meals are amazing',

  review2:
    'Very authentic flavors',

  review3:
    'Great biryani and curries',
},

{
  name: 'Corner House',

  image:
    'https://images.unsplash.com/photo-1563805042-7684c019e1cb',

  rating: 4.6,

  reviews: 28900,

  cuisine:
    'Desserts, Ice Cream',

  city: 'Bangalore',

  address:
    'Jayanagar 4th Block, Bengaluru, Karnataka 560011',

  description:
    'Famous Bangalore dessert and ice cream spot',

  priceRange: '₹₹',

  vegType: 'Veg',

  review1:
    'Death By Chocolate is legendary',

  review2:
    'Best dessert place in Bangalore',

  review3:
    'Always crowded in evenings',
},

{
  name: 'Burma Burma',

  image:
    'https://images.unsplash.com/photo-1515003197210-e0cd71810b5f',

  rating: 4.5,

  reviews: 9800,

  cuisine:
    'Burmese, Asian',

  city: 'Bangalore',

  address:
    '1 MG Mall, MG Road, Bengaluru, Karnataka 560001',

  description:
    'Premium Burmese cuisine restaurant',

  priceRange: '₹₹₹₹',

  vegType: 'Veg',

  review1:
    'Unique Burmese dishes',

  review2:
    'Very peaceful ambience',

  review3:
    'Tea leaf salad is excellent',
},

{
  name: 'A2B Adyar Ananda Bhavan',

  image:
    'https://images.unsplash.com/photo-1589302168068-964664d93dc0',

  rating: 4.2,

  reviews: 17200,

  cuisine:
    'South Indian, Sweets',

  city: 'Bangalore',

  address:
    'BTM Layout, Bengaluru, Karnataka 560076',

  description:
    'Popular vegetarian South Indian chain',

  priceRange: '₹',

  vegType: 'Veg',

  review1:
    'Meals are affordable and tasty',

  review2:
    'Excellent sweets and snacks',

  review3:
    'Fast service',
},

{
  name: 'Anand Sweets & Savouries',

  image:
    'https://images.unsplash.com/photo-1601050690597-df0568f70950',

  rating: 4.4,

  reviews: 13200,

  cuisine:
    'Sweets, North Indian, Snacks',

  city: 'Bangalore',

  address:
    'Commercial Street, Bengaluru, Karnataka 560001',

  description:
    'Premium Indian sweets and snacks shop',

  priceRange: '₹₹',

  vegType: 'Veg',

  review1:
    'Fresh sweets every day',

  review2:
    'Chaat items are excellent',

  review3:
    'Very hygienic place',
},

{
  name: 'Barbeque Nation',

  image:
    'https://images.unsplash.com/photo-1529193591184-b1d58069ecdd',

  rating: 4.3,

  reviews: 30100,

  cuisine:
    'Barbecue, North Indian',

  city: 'Bangalore',

  address:
    'Koramangala 7th Block, Bengaluru, Karnataka 560095',

  description:
    'Popular buffet barbecue restaurant',

  priceRange: '₹₹₹',

  vegType: 'Both',

  review1:
    'Unlimited starters are amazing',

  review2:
    'Great family dining experience',

  review3:
    'Desserts section is very good',
},

{
  name: 'Punjab Grill',

  image:
    'https://images.unsplash.com/photo-1546833999-b9f581a1996d',

  rating: 4.3,

  reviews: 7400,

  cuisine:
    'North Indian, Punjabi',

  city: 'Bangalore',

  address:
    'Orion Mall, Rajajinagar, Bengaluru, Karnataka 560055',

  description:
    'Premium Punjabi dining restaurant',

  priceRange: '₹₹₹₹',

  vegType: 'Both',

  review1:
    'Butter chicken is delicious',

  review2:
    'Luxury ambience and service',

  review3:
    'Perfect for family dinners',
},

{
  name: 'The Pizza Bakery',

  image:
    'https://images.unsplash.com/photo-1513104890138-7c749659a591',

  rating: 4.5,

  reviews: 18400,

  cuisine:
    'Pizza, Italian',

  city: 'Bangalore',

  address:
    'Church Street, Bengaluru, Karnataka 560001',

  description:
    'Popular artisanal pizza restaurant',

  priceRange: '₹₹₹',

  vegType: 'Both',

  review1:
    'Wood fired pizzas are amazing',

  review2:
    'Fresh ingredients and cheese',

  review3:
    'Excellent crust texture',
},

{
  name: 'Smoor',

  image:
    'https://images.unsplash.com/photo-1551024601-bec78aea704b',

  rating: 4.4,

  reviews: 9200,

  cuisine:
    'Desserts, Bakery, Cafe',

  city: 'Bangalore',

  address:
    'Lavelle Rd, Bengaluru, Karnataka 560001',

  description:
    'Luxury dessert and chocolate cafe',

  priceRange: '₹₹₹',

  vegType: 'Veg',

  review1:
    'Premium chocolates and cakes',

  review2:
    'Beautiful dessert presentation',

  review3:
    'Great cafe ambience',
},

{
  name: 'Onesta',

  image:
    'https://images.unsplash.com/photo-1513104890138-7c749659a591',

  rating: 4.1,

  reviews: 15800,

  cuisine:
    'Italian, Pizza, Cafe',

  city: 'Bangalore',

  address:
    'HSR Layout, Bengaluru, Karnataka 560102',

  description:
    'Affordable unlimited pizza restaurant',

  priceRange: '₹₹',

  vegType: 'Both',

  review1:
    'Unlimited pizza is worth it',

  review2:
    'Very colorful ambience',

  review3:
    'Good place for groups',
},

{
  name: 'Fenny’s Lounge & Kitchen',

  image:
    'https://images.unsplash.com/photo-1552566626-52f8b828add9',

  rating: 4.2,

  reviews: 8900,

  cuisine:
    'Continental, Asian',

  city: 'Bangalore',

  address:
    'Koramangala, Bengaluru, Karnataka 560095',

  description:
    'Stylish rooftop lounge and dining',

  priceRange: '₹₹₹',

  vegType: 'Both',

  review1:
    'Great rooftop vibe',

  review2:
    'Food and cocktails are nice',

  review3:
    'Perfect weekend hangout',
},

{
  name: 'Imperio Restaurant',

  image:
    'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398',

  rating: 4.1,

  reviews: 7600,

  cuisine:
    'Biryani, Mughlai, North Indian',

  city: 'Bangalore',

  address:
    'Frazer Town, Bengaluru, Karnataka 560005',

  description:
    'Popular Mughlai and biryani restaurant',

  priceRange: '₹₹',

  vegType: 'Non-Veg',

  review1:
    'Mutton biryani tastes excellent',

  review2:
    'Large portions and good service',

  review3:
    'Nice family dining place',
},

{
  name: 'California Burrito',

  image:
    'https://images.unsplash.com/photo-1565299585323-38174c4a6471',

  rating: 4.2,

  reviews: 11300,

  cuisine:
    'Mexican, Fast Food',

  city: 'Bangalore',

  address:
    'Indiranagar, Bengaluru, Karnataka 560038',

  description:
    'Popular Mexican burrito chain',

  priceRange: '₹₹',

  vegType: 'Both',

  review1:
    'Fresh burrito bowls',

  review2:
    'Healthy and filling meals',

  review3:
    'Quick service',
},

{
  name: 'Keventers',

  image:
    'https://images.unsplash.com/photo-1579954115545-a95591f28bfc',

  rating: 4.0,

  reviews: 6700,

  cuisine:
    'Milkshakes, Desserts, Beverages',

  city: 'Bangalore',

  address:
    'Brigade Road, Bengaluru, Karnataka 560001',

  description:
    'Popular thick shake and dessert outlet',

  priceRange: '₹₹',

  vegType: 'Veg',

  review1:
    'Chocolate shake is excellent',

  review2:
    'Very creamy beverages',

  review3:
    'Good dessert stop',
},

{
  name: 'Smoke House Deli',

  image:
    'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4',

  rating: 4.4,

  reviews: 12500,

  cuisine:
    'European, Italian, Continental',

  city: 'Bangalore',

  address:
    'Lavelle Road, Bengaluru, Karnataka 560001',

  description:
    'Luxury European style cafe and restaurant',

  priceRange: '₹₹₹₹',

  vegType: 'Both',

  review1:
    'Very aesthetic interiors',

  review2:
    'Excellent pasta and desserts',

  review3:
    'Premium dining experience',
},
  {
  name: 'Cafe Azzure',

  image:
    'https://images.unsplash.com/photo-1504674900247-0877df9cc836',

  rating: 2.9,

  reviews: 8650,

  cuisine:
    'Cafe, Continental, Italian',

  city: 'Bangalore',

  address:
    '52, MG Road, Shivaji Nagar, Bengaluru, Karnataka 560001',

  description:
    'Casual rooftop cafe with continental dishes',

  priceRange: '₹₹₹',

  vegType: 'Both',

  review1:
    'Ambience is nice but service is slow',

  review2:
    'Pasta was average',

  review3:
    'Good rooftop seating',
},

{
  name: 'Cafe Nosh',

  image:
    'https://images.unsplash.com/photo-1521017432531-fbd92d768814',

  rating: 2.8,

  reviews: 3314,

  cuisine:
    'Cafe, Fast Food, Desserts',

  city: 'Bangalore',

  address:
    'Canara Bank Layout, Kodigehalli, Bengaluru, Karnataka 560092',

  description:
    'Budget friendly cafe with snacks and desserts',

  priceRange: '₹₹',

  vegType: 'Both',

  review1:
    'Desserts are decent',

  review2:
    'Food quality could improve',

  review3:
    'Affordable cafe',
},

{
  name: 'Bistro Claytopia',

  image:
    'https://images.unsplash.com/photo-1509042239860-f550ce710b93',

  rating: 2.7,

  reviews: 8218,

  cuisine:
    'Cafe, Continental',

  city: 'Bangalore',

  address:
    '80 Feet Rd, Koramangala, Bengaluru, Karnataka 560034',

  description:
    'Cafe combined with pottery activities',

  priceRange: '₹₹₹',

  vegType: 'Both',

  review1:
    'Creative concept but expensive',

  review2:
    'Coffee was average',

  review3:
    'Nice place for photos',
},

{
  name: 'Burnout Cafe',

  image:
    'https://images.unsplash.com/photo-1550547660-d9450f859349',

  rating: 2.6,

  reviews: 1450,

  cuisine:
    'Fast Food, Burgers',

  city: 'Bangalore',

  address:
    'HSR Layout, Bengaluru, Karnataka 560102',

  description:
    'Bike themed fast food cafe',

  priceRange: '₹₹',

  vegType: 'Both',

  review1:
    'Burgers were okay',

  review2:
    'Slow service during weekends',

  review3:
    'Good bike ambience',
},

{
  name: 'Romeo Cafe',

  image:
    'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085',

  rating: 2.5,

  reviews: 980,

  cuisine:
    'Cafe, Italian',

  city: 'Bangalore',

  address:
    'BTM Layout, Bengaluru, Karnataka 560076',

  description:
    'Small cafe with coffee and pasta',

  priceRange: '₹₹',

  vegType: 'Both',

  review1:
    'Coffee is decent',

  review2:
    'Place is too crowded',

  review3:
    'Affordable menu',
},

{
  name: 'Food Garage',

  image:
    'https://images.unsplash.com/photo-1568901346375-23c9450c58cd',

  rating: 2.9,

  reviews: 2100,

  cuisine:
    'Fast Food, Burgers, Wraps',

  city: 'Bangalore',

  address:
    'Electronic City, Bengaluru, Karnataka 560100',

  description:
    'Late night fast food spot',

  priceRange: '₹₹',

  vegType: 'Both',

  review1:
    'Wraps are good',

  review2:
    'Burger buns felt stale',

  review3:
    'Good for midnight cravings',
},

{
  name: 'Mexi Town',

  image:
    'https://images.unsplash.com/photo-1565299585323-38174c4a6471',

  rating: 2.7,

  reviews: 730,

  cuisine:
    'Mexican, Fast Food',

  city: 'Bangalore',

  address:
    'Indiranagar, Bengaluru, Karnataka 560038',

  description:
    'Mexican themed restaurant',

  priceRange: '₹₹₹',

  vegType: 'Both',

  review1:
    'Nachos were good',

  review2:
    'Tacos lacked flavor',

  review3:
    'Nice interiors',
},

{
  name: 'Spice Route Kitchen',

  image:
    'https://images.unsplash.com/photo-1546833999-b9f581a1996d',

  rating: 2.8,

  reviews: 1650,

  cuisine:
    'North Indian, Chinese',

  city: 'Bangalore',

  address:
    'Marathahalli, Bengaluru, Karnataka 560037',

  description:
    'North Indian family restaurant',

  priceRange: '₹₹',

  vegType: 'Both',

  review1:
    'Butter naan was soft',

  review2:
    'Curries were too oily',

  review3:
    'Average dining experience',
},

{
  name: 'South Spice Diner',

  image:
    'https://images.unsplash.com/photo-1589302168068-964664d93dc0',

  rating: 2.6,

  reviews: 1900,

  cuisine:
    'South Indian',

  city: 'Bangalore',

  address:
    'Rajajinagar, Bengaluru, Karnataka 560010',

  description:
    'Budget South Indian meals restaurant',

  priceRange: '₹',

  vegType: 'Veg',

  review1:
    'Idli was soft',

  review2:
    'Sambar lacked taste',

  review3:
    'Affordable meals',
},

{
  name: 'BBQ Street',

  image:
    'https://images.unsplash.com/photo-1529193591184-b1d58069ecdd',

  rating: 2.9,

  reviews: 2500,

  cuisine:
    'Barbecue, Grill, Non Veg',

  city: 'Bangalore',

  address:
    'Koramangala, Bengaluru, Karnataka 560095',

  description:
    'Casual barbecue restaurant',

  priceRange: '₹₹₹',

  vegType: 'Non-Veg',

  review1:
    'Chicken grill was tasty',

  review2:
    'Service needs improvement',

  review3:
    'Good for groups',
},


];

const seedData = async () => {

  try {

    await Restaurant.deleteMany();

    await Restaurant.insertMany(
      restaurants,
    );

    console.log(
      '✅ Restaurants Added Successfully'
    );

    process.exit();

  } catch (error) {

    console.log(error);

    process.exit();
  }
};

seedData();