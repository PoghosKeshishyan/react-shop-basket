

const Basket = ({orders, removeOrder, plusOrderQuantity, minusOrderQuantity}) => {

  const total = orders.reduce((sum, el) => sum+el.price*el.quantity, 0);

  return (
    <div className=" fixed right-4 bg-violet-400 p-20 text-white text-lg rounded-lg">
      {
        orders.map(el =><div className="m-2" key = {el.id}>
          <span>{el.title}</span>
          <button onClick={()=> minusOrderQuantity(el.id)} className=" bg-slate-300 text-violet-600 py-[0.5] px-4  rounded-xl m-1">-</button>
          <span>{el.quantity}</span>
          <button onClick={()=> plusOrderQuantity(el.id)} className=" bg-slate-300 text-violet-600 py-[0.5] px-4  rounded-xl m-1">+</button>
          =
          <span> {el.price * el.quantity}</span>
          <button onClick={()=>removeOrder(el.id)} className = "bg-slate-300 text-violet-600 py-[0.5] px-4  rounded-xl m-3">Delete</button>
        </div>)
      }

      <div className="total">Total: {total}</div>
    </div>
  );
}

export default Basket;