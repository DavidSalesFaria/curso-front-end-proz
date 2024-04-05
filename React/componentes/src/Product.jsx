import style from "./productCard.module.css"

function Product({name, price, stock, setSelected}){
  return <>
    <article className={`
    ${style.card}
    ${!stock ? style.nothing : ''}
    `}
    onClick={()=> {
      if (!stock){
        return;
      }
      setSelected({
        name,
        price,
        stock
      })
    }}
    >
      <h2>{name}</h2>
      <p>Price: R${price}</p>
      <p>Stock: {stock > 0 ? `${stock} item(s)` : 'nothing' }</p>
    </article>
  </>
}

export default Product
