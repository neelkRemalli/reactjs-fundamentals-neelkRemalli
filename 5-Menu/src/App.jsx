import { useState } from "react"
import Categories from "./Categories"
import items from './data'
import Menu from "./Menu"
import Title from "./Title"

const allCategories = ['all', ...new Set(items.map(item => item.category))]

function App() {
  const [menuItem, setMenuItem] = useState(items)
  const [categories, setCategories] = useState(allCategories)

  const filterItems = (category) =>{
    if(category === 'all'){
      return setMenuItem(items)
    }
  const newItem =   items.filter(item => item.category === category)
  setMenuItem(newItem)
  }
  return (
  <main>
    <section>
      <Title  text='Our Menu' />
      <Categories  categories={categories} filterItems={filterItems}/>
      <Menu items={menuItem} />
    </section>
  </main>
  )
}

export default App
