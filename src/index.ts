import restaurants from './restaurants.json'
import { createIssue } from './github-events'

function main() {
  const pickedRestaurantNumber = Math.floor(Math.random() * restaurants.length)
  const pickedRestaurant = restaurants[pickedRestaurantNumber] || [];
  const title = `오늘의 음식점 : ${pickedRestaurant.name}`
  const menus = pickedRestaurant.menus.map(({ name, price }) => `메뉴명 : ${name}, 가격 : ${price}`)
  const body = [`메뉴\n${menus.join('\n')}`, `위치 : ${pickedRestaurant.location}`].join('\n')
  createIssue(title, body)
}

main()
