function Details({selected}){
  return <div>
  Item: {selected.name} <br />
  Price: {selected.price} <br />
  Stock: {selected.stock}
</div>
}

export default Details