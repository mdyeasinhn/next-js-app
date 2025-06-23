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
        <div className="flex flex-col items-center justify-center h-screen">
            <h1 className="text-2xl text-red-600 font-semibold mb-4">Something went wrong</h1>
            <p className="text-gray-700 mb-6 text-center max-w-xl">
                {error.message || "An unexpected error occurred."}
            </p>
            <button
                onClick={() => reset()}
                className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
            >
                Try Again
            </button>
        </div>
    );
};

export default ProductPage;