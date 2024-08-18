import React, { useEffect, useState } from "react";
import axios from "axios";

const Home = () => {
    const [price, setPrice] = useState(0);
    const [products, setProducts] = useState([]);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [loading, setLoading] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('');
    const [selectedBrand, setSelectedBrand] = useState('');
    const [sortOption, setSortOption] = useState(''); // State for sorting

    const categories = [
        "Electronics",
        "Furniture",
        "Footwear",
        "Groceries"
    ];
    
    const brands = [
        "ViewMaster",
        "SoundWave",
        "TechTime",
        "PowerPC",
        "ComfortPlus",
        "ElegantWood",
        "WorkSmart",
        "RelaxHome",
        "SleepEasy",
        "FitLife",
        "StyleWalk",
        "StepAhead",
        "ClassyFeet",
        "ActiveGear",
        "PureLeaf",
        "HealthyBite",
        "NutriSpread",
        "GreenFresh",
        "FruitFarm",
        "TechNova",
        "SafeHome",
        "UltraVision",
        "CoolBreeze",
        "ChicHome",
        "SleepWell",
        "HomeComfort",
        "ReadMore",
        "OutdoorsPro",
        "WarmStep",
        "UrbanWalk",
        "EasyWear",
        "AdventureGear",
        "NatureBites",
        "FruitBlend",
        "DairyFresh",
        "BrewMasters",
        "EcoMilk"
    ];

    useEffect(() => {
        const fetchProducts = async () => {
            setLoading(true);
            try {
                const response = await axios.get(`${import.meta.env.VITE_API_SECRET}/products`, {
                    params: {
                        page,
                        limit: 10,
                        search: searchTerm,
                        price,
                        category: selectedCategory,
                        brand: selectedBrand,
                        sort: sortOption // Send sorting option
                    }
                });
                console.log("Fetched data:", response.data);
                setProducts(response.data.products);
                setTotalPages(response.data.totalPages);
            } catch (error) {
                console.error("Error fetching products:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, [page, price, searchTerm, selectedCategory, selectedBrand, sortOption]);

    const handlePageChange = (newPage) => {
        if (newPage > 0 && newPage <= totalPages) {
            setPage(newPage);
        }
    };

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
        setPage(1);
    };

    const handleSearch = () => {
        setPage(1);
    };

    const handleFilterChange = () => {
        setPage(1);
    };

    return (
        <div className="container mx-auto px-4">
            {/* Search Box */}
            <div className="flex flex-col md:flex-row gap-4 justify-center mt-16">
                <input
                    type="text"
                    placeholder="Type here"
                    className="input input-bordered input-primary w-full max-w-xs"
                    value={searchTerm}
                    onChange={handleSearchChange}
                />
                <button
                    className="btn btn-secondary"
                    onClick={handleSearch}
                >
                    Search
                </button>
            </div>

            {/* Filter and Sort Box */}
            <div className="flex flex-col lg:flex-row gap-6 mt-10">
                <div className="flex flex-col lg:flex-row gap-6 w-full">
                    <div className="w-full md:w-1/2">
                        <select
                            className="select select-primary w-full"
                            value={selectedBrand}
                            onChange={(e) => setSelectedBrand(e.target.value)}
                        >
                            <option value="">Choose brand name</option>
                            {brands.map((brand) => (
                                <option key={brand} value={brand}>
                                    {brand}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div className="w-full md:w-1/2">
                        <select
                            className="select select-primary w-full"
                            value={selectedCategory}
                            onChange={(e) => setSelectedCategory(e.target.value)}
                        >
                            <option value="">Choose category</option>
                            {categories.map((category) => (
                                <option key={category} value={category}>
                                    {category}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>

                <div className="w-full">
                    <h1>Price: ${price}</h1>
                    <input
                        onChange={(e) => setPrice(e.target.value)}
                        type="range"
                        min={0}
                        max="500"
                        value={price}
                        className="range range-error w-full"
                    />
                </div>

                <div className="w-full mt-4 lg:mt-0">
                    <select
                        className="select select-primary w-full"
                        value={sortOption}
                        onChange={(e) => setSortOption(e.target.value)}
                    >
                        <option value="">Sort by</option>
                        <option value="priceAsc">Price: Low to High</option>
                        <option value="priceDesc">Price: High to Low</option>
                        <option value="dateDesc">Date Added: Newest First</option>
                    </select>
                </div>
            </div>

            {/* Products Display */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 mt-6">
                {loading ? (
                    <div>Loading...</div>
                ) : (
                    products.map((product) => (
                        <div key={product._id} className="p-4 border-2 rounded-lg shadow-lg">
                            <h2 className="text-xl font-bold mb-2">{product.productName}</h2>
                            <p>{product.brandName}</p>
                            <p>{product.categoryName}</p>
                            <p className="mt-2 text-gray-500">${product.price}</p>
                        </div>
                    ))
                )}
            </div>

            {/* Pagination Controls */}
            <div className="pagination mt-8 flex justify-center gap-4">
                <button
                    onClick={() => handlePageChange(page - 1)}
                    className="btn btn-secondary"
                    disabled={page === 1}
                >
                    Previous
                </button>
                <span>Page {page} of {totalPages}</span>
                <button
                    onClick={() => handlePageChange(page + 1)}
                    className="btn btn-secondary"
                    disabled={page === totalPages}
                >
                    Next
                </button>
            </div>
        </div>
    );
};

export default Home;
