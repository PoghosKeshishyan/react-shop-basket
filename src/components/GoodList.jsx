import GoodItem from "./GoodItem";

const GoodList = ({ goods, addOrder }) => {
  return (
    <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4 mt-4">
      {
        goods.map(good => <GoodItem key={good.id} item={good} addOrder={addOrder} />)
      }
    </div>
  );
}

export default GoodList;