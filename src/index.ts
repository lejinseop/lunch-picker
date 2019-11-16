import restaurants from './restaurants.json'
import { createIssue } from './github-events'

function main() {
  const pickedRestaurantNumber = Math.floor(Math.random() * restaurants.length)
  const pickedRestaurant = restaurants[pickedRestaurantNumber] || [];
  const title = `오늘 점심은 ${pickedRestaurant.name} 어때여?`
  const menus = pickedRestaurant.menus.map(({ name, price }) => `${name} / ${price}원`)
  const body = [`## 메뉴\n${menus.join('\n')}`, `## 위치\n${pickedRestaurant.location}`, `## 링크\n${pickedRestaurant.url}`].join('\n')
  createIssue(title, body, ['lunch'])
}

main()
