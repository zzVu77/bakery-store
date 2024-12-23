"use client";
import Footer from "@/components/Footer/footer";
import NavBar from "@/components/header/nav-bar";
import CartItem, {
  ProductAttribute,
} from "@/components/section/detail-product-section/detail-product-section";

const ProductDetail = () => {
  const Item: ProductAttribute = {
    imagePath: "",
    itemName: "Bánh Pizza Margherita",
    itemPrice: "150000",
    toppings: [
      { toppingId: "topping1", toppingName: "Nấm", toppingPrice: "20000" },
      { toppingId: "topping3", toppingName: "Nấm", toppingPrice: "20000" },
      {
        toppingId: "topping2",
        toppingName: "Ớt chuông",
        toppingPrice: "15000",
      },
    ],
    itemDescription:
      "Pizza truyền thống với sốt cà chua, phô mai và húng quế tươi.",
    relatedProduct: [
      {
        imagePath: "",
        itemName: "Bánh Muffin Trái Cây",
        itemPrice: 25000,
      },
      {
        imagePath: "",
        itemName: "Bánh Quy Bơ",
        itemPrice: 25000,
      },
      {
        imagePath: "",
        itemName: "Bánh Quy Bơ",
        itemPrice: 25000,
      },
    ],
  };
  return (
    <div>
      <div className="flex flex-col min-h-screen">
        <NavBar className="bg-black" />
        <CartItem product={Item}></CartItem>
        <div className="mt-[35px]">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
