import { useEffect, useState } from "react";

const BestSeller = () => {
  const [sellers, setSellers] = useState([]);

  // fetch the best seller data from json

  useEffect(() => {
    fetch("bestSeller.json")
      .then((res) => res.json())
      .then((data) => setSellers(data));
  }, []);

  const handleToggle = (id) => {
    setSellers((prevSellers) =>
      prevSellers.map((seller) =>
        seller.id === id
          ? { ...seller, isExpanded: !seller.isExpanded }
          : seller
      )
    );
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center bg-[#F3F3F3] rounded-2xl mb-10">
        <h2 className="font-bold text-4xl p-6">
          Best Seller of the 21st Book Fair
        </h2>
      </div>
      <div className="grid lg:grid-cols-3 gap-6">
        {sellers.map((seller) => (
          <div key={seller.id}>
            <div className="card  bg-gray-100 shadow-xl">
              <div className="avatar">
                <div className="w-24 rounded-full ring ring-[#23BE0A] ring-offset-base-100 ring-offset-2 mx-auto mt-6">
                  <img src={seller.image} alt={seller.name} />
                </div>
              </div>
              <div className="card-body items-center text-center">
                <h2 className="card-title">{seller.name}</h2>
                <div className="">
                  <span>{seller.description}</span>
                  <section
                    className={seller.isExpanded ? "" : "hidden"} 
                  >
                    {seller.show}
                  </section>
                </div>
                <div className="card-actions">
                  <button
                    className="btn bg-[#23BE0A] text-white"
                    onClick={() => handleToggle(seller.id)} 
                  >
                    {seller.isExpanded ? "Read Less" : "Read More"}
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BestSeller;
