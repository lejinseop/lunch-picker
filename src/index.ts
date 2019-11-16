import restaurants from './restaurants.json'
import { createIssue } from './github-events'

function main() {
  const pickedRestaurantNumber = Math.floor(Math.random() * restaurants.length)
  const pickedRestaurant = restaurants[pickedRestaurantNumber] || [];
  const title = `오늘의 음식점 : ${pickedRestaurant.name}`
  const body = [`메뉴 : ${pickedRestaurant.menus.join(',')}`, `위치 : ${pickedRestaurant.location}`].join('\n')
  createIssue(title, body, ['lunch'])
}

main()
