import { useState } from 'react'
import Header from './components/header'

const DEFAULT_FOODS=[
  {id:1,name:"Hamburger",price:"34",img:"hamburger.png",time:2,description:"Made with fresh meat and avariety of sauces and fresh vegtable"},
  {id:2,name:"Veggie Burger",price:"34",img:"veggieburger.png",time:"2",description:" A plant-based burger made with a blend of legumes and vegetables, perfect for vegetarians"},
  {id:3,name:"Cheeseburger",price:"35",img:"cheeseburger.png",time:"3",description:"A classic cheeseburger with melted cheese, sauces, and fresh vegetables"},
  {id:4,name:"Fried chicken",price:"23",img:"chicken.png",time:"2",description:"Crispy and tasty fried chicken, seasoned with delightful spices."},
  {id:5,name:"Pepperoni Pizza ",price:"35",img:"pepperoni.png",time:"3",description:"classic pizza topped with pepperonimand mozzarella cheese "},
  {id:6,name:"Vegtable Pizza",price:"31",img:"veggiepizza",time:"2",description:"Topped with fresh veggies like bell peppers and mushrooms with mozzarella cheese"},
  {id:7,name:"Tuna sandwich",price:"20",img:"tunasandwich.png",time:"1",description:"A tuna sandwich filled with a mix of vegetables and mayonnaise on fresh bread."},
  {id:8,name:"Hot dog",price:"24",img:"hotdog.png",time:"2",description:"Grilled sausage served in a soft bun, topped with various sauces and fried onions."},
  {id:9,name:"Taco",price:"14",img:"taco.png",time:"1",description:"Tacos filled with ground meat or vegetables, topped with salad and delicious sauces"},
  {id:10,name:"Veggie burger:",price:"24",img:"veggieburger.png",time:"2",description:"A plant-based burger made with a blend of legumes and vegetables, perfect for vegetarians"},
  {id:11,name:"Grilled sandwich",price:"13",img:"grilsandwich.png",time:"2",description:" A grilled sandwich with melted cheese and desired fillings, served warm."},
  {id:12,name:"Pasta with Alfredo sauce",price:"13",img:"pasta.png",time:"2",description:" Soft pasta served with creamy Alfredo sauce and Parmesan cheese."},
  {id:13,name:"Caesar salad",price:"15",img:"caesarsalad",time:"2",description:" Fresh Caesar salad with lettuce, special dressing, and croutons."},
  {id:14,name:"Chicken and vegetable rolls",price:"20",img:"rolls.png",time:"2",description:"Rolls filled with chicken and vegetables, wrapped in soft bread."},
  {id:15,name:"French fries",price:"15",img:"frenchfries.png",time:"1",description:" Crispy, golden fried potatoes, perfect as a side dish for main meals."},
  {id:16,name:"Simple sushi rolls",price:"40",img:"sushis.png",time:"3",description:"Simple sushi rolls made with rice and fresh fish, served with soy sauce"},
  {id:17,name:"Large Sprite ",price:"7",img:"sprite.png",time:"1",description:" A refreshing lemon-lime soda that cools you down"},
  {id:18,name:"Small Sprite ",price:"3",img:"smallsprite.png",time:"1",description:" A refreshing lemon-lime soda that cools you down."},
  {id:19,name:"Large CucaCola",price:"8",img:"largecola.png",time:"1",description:"Classic cola soda with a sweet and fizzy taste that completes any meal"},
  {id:20,name:"Small CucaCola ",price:"3",img:"smallcola.png",time:"1",description:"Classic cola soda with a sweet and fizzy taste that completes any meal"},
  {id:21,name:"CucaCola Zero",price:"4",img:"smallzero.png",time:"1",description:"Sugar-free cola soda, perfect for those looking for a healthier option"},
  {id:21,name:"Small Fanta",price:"3",img:"fanta.png",time:"1",description:"Fanta Orange Drink 33cl can"},




]



function App() {

  return (
<div className='bg-orange-600	 w-screen h-screen	'>
  <Header/>
</div> 
 )
}

export default App
