const GoodItem = ({ item, addOrder }) => {
  return (
    <div className="">
        <img src={item.image} alt={item.title} />
        <h3>{item.title}</h3>
        <p>{item.descr}</p>
        <h4>{item.price}</h4>
        
        <button 
          onClick={() =>addOrder(item)} 
          className=" bg-slate-300 text-violet-600 p-3 rounded-xl">
          ADD TO CART
        </button>
    </div>
  )
}

export default GoodItem