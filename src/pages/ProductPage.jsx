import { useState } from "react";
import { motion } from "framer-motion";
import { Heart, Shuffle, Truck, CreditCard, Smile } from "lucide-react";

// Import images from assets folder
import img1 from "../assets/product1.jpg";
import img2 from "../assets/product2.jpg";
import img3 from "../assets/product3.jpg";
import img4 from "../assets/product4.jpg";
import img5 from "../assets/product5.jpg";

const ProductDetails = () => {
  const product = {
    name: "Pearl & Gold Drop Earrings",
    brand: "Gordon",
    rating: 4.5,
    reviews: 5,
    price: 45.38,
    oldPrice: 239.21,
    discount: 81,
    stock: "in stock",
    description:
      "Iure ullam neque neque ducimus consequatur. Ut qui quibusdam est praesentium cupiditate. Adipisci ducimus maxime commodi culpa praesentium esse. Molestiae voluptas molestias libero et adipisci.",
    images: [img1, img2, img3, img4, img5],
  };

  const [mainImage, setMainImage] = useState(product.images[0]);
  const [isZoomed, setIsZoomed] = useState(false);
  const [zoomPosition, setZoomPosition] = useState({ x: 50, y: 50 });
  const [quantity, setQuantity] = useState(1);

  const handleMouseMove = (e) => {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const x = ((e.pageX - left) / width) * 100;
    const y = ((e.pageY - top) / height) * 100;
    setZoomPosition({ x, y });
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-10 grid md:grid-cols-2 gap-10">
      {/* Left Section - Images */}
      <div className="flex gap-4 md:gap-6 -ml-4 md:-ml-8">
        {/* Vertical Thumbnails */}
        <div className="flex flex-col gap-5 overflow-y-auto max-h-[500px] pr-2">
          {product.images.map((img, i) => (
            <motion.div
              key={i}
              className={`relative rounded-lg overflow-hidden border-2 cursor-pointer transition-all ${
                mainImage === img ? "border-amber-500" : "border-gray-200"
              }`}
              whileHover={{ scale: 1.07 }}
              onClick={() => setMainImage(img)}
            >
              <img src={img} alt={`thumb-${i}`} className="w-24 h-24 object-cover" />
              {mainImage === img && (
                <div className="absolute inset-0 border-2 border-amber-500 rounded-lg" />
              )}
            </motion.div>
          ))}
        </div>

        {/* Main Image with Zoom */}
        <div
          className="relative flex-[1.2] overflow-hidden rounded-xl border border-gray-200 cursor-zoom-in"
          onMouseMove={handleMouseMove}
          onMouseEnter={() => setIsZoomed(true)}
          onMouseLeave={() => setIsZoomed(false)}
        >
          <motion.img
            src={mainImage}
            alt="main"
            className="w-full h-auto object-cover transition-transform duration-300"
            style={{
              transformOrigin: `${zoomPosition.x}% ${zoomPosition.y}%`,
              transform: isZoomed ? "scale(2)" : "scale(1)",
            }}
          />
        </div>
      </div>

      {/* Right Section - Product Info */}
      <div className="flex flex-col gap-6">
        {/* Discount Badge */}
        <span className="bg-amber-500 text-white text-sm px-3 py-1 rounded-md w-fit">
          {product.discount}%
        </span>

        {/* Title */}
        <h1 className="text-2xl font-bold text-gray-900">{product.name}</h1>

        {/* Brand + Rating + Stock */}
        <div className="flex items-center gap-4 text-sm text-gray-600">
          <span>
            Brand: <span className="text-gray-900 font-medium">{product.brand}</span>
          </span>
          <span className="text-amber-500">★★★★★</span>
          <span>({product.reviews} reviews)</span>
          <span className="text-green-600">{product.stock}</span>
        </div>

        {/* Price */}
        <div className="flex items-center gap-3">
          <span className="text-2xl font-semibold text-gray-900">{product.price}$</span>
          <span className="text-gray-400 line-through text-lg">{product.oldPrice}$</span>
        </div>

        <hr />

        {/* Description */}
        <p className="text-gray-600 text-sm leading-relaxed">{product.description}</p>

        {/* Quantity + Buttons */}
        <div className="flex items-center gap-4">
          <div className="flex items-center border rounded-lg">
            <button
              className="px-3 py-2 text-lg"
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
            >
              -
            </button>
            <span className="px-4 py-2 text-sm">{quantity}</span>
            <button 
              className="px-3 py-2 text-lg"
              onClick={() => setQuantity(quantity + 1)}
            >
              +
            </button>
          </div>

          <button className="bg-gray-900 text-white px-5 py-2.5 rounded-md hover:bg-yellow-400 transition text-sm">
            Add to cart
          </button>

          <button className="flex items-center gap-2 text-gray-600 hover:text-gray-900 text-sm">
            <Heart size={16} /> Add To Wishlist
          </button>

          <button className="flex items-center gap-2 text-gray-600 hover:text-gray-900 text-sm">
            <Shuffle size={16} /> Compare
          </button>
        </div>

        {/* Buy Now */}
        <button className="border border-gray-900 px-5 py-2.5 rounded-md hover:bg-black hover:text-white hover:border-black transition text-sm">
          Buy It Now
        </button>

        {/* Extra Info */}
        <div className="text-xs text-gray-700 flex flex-col gap-2 mt-4">
          <p className="flex items-center gap-2">
            <Truck className="w-4 h-4 text-gray-500" /> Free Shipping & Exchanges
          </p>
          <p className="flex items-center gap-2">
            <CreditCard className="w-4 h-4 text-gray-500" /> Flexible and secure payment, pay on delivery
          </p>
          <p className="flex items-center gap-2">
            <Smile className="w-4 h-4 text-gray-500" /> 600,000 happy customers
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;

