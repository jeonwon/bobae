export default function List() {
  let products = [
    { pName: `Tomatoes`, pPrice: 40 },
    { pName: `Pasta`, pPrice: 50 },
    { pName: `Coconut`, pPrice: 60 },
  ];
  return (
    <div>
      <img src="/next.svg" alt="그림" />
      {products.map((v, index) => {
        return (
          // eslint-disable-next-line react/jsx-key
          <div key={index} className="food">
            <h4>
              {v.pName}은 {v.pPrice}원 입니다.
            </h4>
          </div>
        );
      })}
    </div>
  );
}
