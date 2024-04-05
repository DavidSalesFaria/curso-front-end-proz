import {useState} from 'react'
import Product from "./Product"
import Details from "./Details"
import SearchBar from "./SearchBar"


function App() {
  let [selected, setSelected] = useState({
    name: '',
    price: '',
    stock: ''
  })
  let [searching, setSearching] = useState('abc')


  const listaProdutos = [
    {name: 'pokeball', price: 25.0, stock: 100},
    {name: 'greatball', price: 50.0, stock: 100},
    {name: 'superball', price: 75.0, stock: 0},
    {name: 'ultraball', price: 1.0, stock: 22},
  ] 
  return <>
    <h1>Componentes</h1>
    <SearchBar searching={searching} setSearching={setSearching}/>
    <Details selected={selected}/>

    {
      listaProdutos
        .filter((element) => element.name.includes(searching))
        .map((element, index) => {
            return <Product
                setSelected={setSelected}
                key={index}
                name={element.name} 
                price={element.price} 
                stock={element.stock}
              />
        })
    }
</>
}

export default App
