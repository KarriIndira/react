import './Catalogue.css';

const Catalogue = () => {
  const products = [
    { id: 1, name: 'Product 1', price: 999, image: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRFU_qwGqmJ-NeAOsLp-5Cf7xAGNQniANK5-TanCXkRmlQtJ3ifNr1ccCfVOkaj33nJmO-Tk5ZbaV0JWhf2m86GwqO7VfFE3ehTH6qjZIQL0B4n7YvcFUuv' },
    { id: 2, name: 'Product 2', price: 1499, image: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQKAVk1gSKkkPTAqQzge14cEtVUa2iOZtQw00pqAuzleMqPZytzHPr_Vwj-Trbv_VuN9CkGdtfjgCPpkMAKOvHcH3utVfpUQG5HJ9pmf8M' },
    { id: 3, name: 'Product 3', price: 5000, image: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTxAUHMrKoGsyV9a7fKcBp_CDp88Hnmir2NdK74Ys9sYsVvZnnIKgu-stpdO4bZh20kKii5bkWFB0kcgqpl2xZXSU4YcV89INfV869BlbxqTkhLxMpqg9hpwg' },
    // Add more products
  ];

  return (
    <div className="catalogue-container">
      <h1>New Arrivals</h1>
      <div className="product-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} className="product-image" />
            <h3 className="product-name">{product.name}</h3>
            <p className="product-price">₹{product.price}</p>
            <button className="add-to-cart">Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Catalogue;