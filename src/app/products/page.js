import ProductCard from "@/components/Products/ProductCard";


const ProductPage = async () => {
    const res = await fetch("http://localhost:5000/products", {
        next: {
            revalidate: 5,
        }
    });
     const products = await res.json();
 console.log(products)
    return (
        <div>
            <h1 className="text-4xl text-center">All Products</h1>
            <div className='grid grid-cols-4 gap-8 w-[90%] mx-auto my-10'>
                {products.map((product) =>
                    <ProductCard key={product} product={product} />)}
            </div>
        </div>
    );
};

export default ProductPage;