"use client";
import IngredientDetail from "@/components/admin/manage-ingredient-detail";
import Topping, {
  ToppingDetail,
} from "@/components/admin/manage-topping-detail";
import Button from "@/components/button/button";
import SearchBar from "@/components/search-bar/search-bar";
import SidebarAdmin from "@/components/sidebar-admin/sidebarAdmin";

const ManageTopping = () => {
  const pseudoToppings: ToppingDetail[] = [
    {
      iD: "T001",
      toppingName: "Chocolate Chip",
      toppingPrice: "5000",
    },
    {
      iD: "T002",
      toppingName: "Strawberry Syrup",
      toppingPrice: "7000",
    },
    {
      iD: "T003",
      toppingName: "Whipped Cream",
      toppingPrice: "6000",
    },
    {
      iD: "T004",
      toppingName: "Caramel Drizzle",
      toppingPrice: "8000",
    },
    {
      iD: "T004",
      toppingName: "Caramel Drizzle",
      toppingPrice: "8000",
    },
    {
      iD: "T004",
      toppingName: "Caramel Drizzle",
      toppingPrice: "8000",
    },
    {
      iD: "T004",
      toppingName: "Caramel Drizzle",
      toppingPrice: "8000",
    },
    {
      iD: "T004",
      toppingName: "Caramel Drizzle",
      toppingPrice: "8000",
    },
    {
      iD: "T004",
      toppingName: "Caramel Drizzle",
      toppingPrice: "8000",
    },
    {
      iD: "T004",
      toppingName: "Caramel Drizzle",
      toppingPrice: "8000",
    },
    {
      iD: "T004",
      toppingName: "Caramel Drizzle",
      toppingPrice: "8000",
    },
    {
      iD: "T004",
      toppingName: "Caramel Drizzle",
      toppingPrice: "8000",
    },
    {
      iD: "T004",
      toppingName: "Caramel Drizzle",
      toppingPrice: "8000",
    },
    {
      iD: "T004",
      toppingName: "Caramel Drizzle",
      toppingPrice: "8000",
    },
    {
      iD: "T004",
      toppingName: "Caramel Drizzle",
      toppingPrice: "8000",
    },
    {
      iD: "T004",
      toppingName: "Caramel Drizzle",
      toppingPrice: "8000",
    },
    {
      iD: "T004",
      toppingName: "Caramel Drizzle",
      toppingPrice: "8000",
    },
    {
      iD: "T004",
      toppingName: "Caramel Drizzle",
      toppingPrice: "8000",
    },
    {
      iD: "T004",
      toppingName: "Caramel Drizzle",
      toppingPrice: "8000",
    },
    {
      iD: "T004",
      toppingName: "Caramel Drizzle",
      toppingPrice: "8000",
    },
    {
      iD: "T004",
      toppingName: "Caramel Drizzle",
      toppingPrice: "8000",
    },
    {
      iD: "T004",
      toppingName: "Caramel Drizzle",
      toppingPrice: "8000",
    },
  ];
  const pseudoIngredientData: IngredientDetail[] = [
    {
      iD: "001",
      ingredientName: "Chocolate Chip",
      quantity: "200",
      unit: "g",
      ingredientPrice: "20000",
    },
    {
      iD: "002",
      ingredientName: "Vanilla Extract",
      quantity: "50",
      unit: "ml",
      ingredientPrice: "15000",
    },
    {
      iD: "003",
      ingredientName: "Strawberry Jam",
      quantity: "100",
      unit: "g",
      ingredientPrice: "25000",
    },
    {
      iD: "004",
      ingredientName: "Whipped Cream",
      quantity: "150",
      unit: "g",
      ingredientPrice: "18000",
    },
    {
      iD: "005",
      ingredientName: "Sprinkles",
      quantity: "50",
      unit: "g",
      ingredientPrice: "12000",
    },
    {
      iD: "005",
      ingredientName: "Sprinkles",
      quantity: "50",
      unit: "g",
      ingredientPrice: "12000",
    },
    {
      iD: "005",
      ingredientName: "Sprinkles",
      quantity: "50",
      unit: "g",
      ingredientPrice: "12000",
    },
    {
      iD: "005",
      ingredientName: "Sprinkles",
      quantity: "50",
      unit: "g",
      ingredientPrice: "12000",
    },
    {
      iD: "005",
      ingredientName: "Sprinkles",
      quantity: "50",
      unit: "g",
      ingredientPrice: "12000",
    },
    {
      iD: "005",
      ingredientName: "Sprinkles",
      quantity: "50",
      unit: "g",
      ingredientPrice: "12000",
    },
    {
      iD: "005",
      ingredientName: "Sprinkles",
      quantity: "50",
      unit: "g",
      ingredientPrice: "12000",
    },
    {
      iD: "005",
      ingredientName: "Sprinkles",
      quantity: "50",
      unit: "g",
      ingredientPrice: "12000",
    },
    {
      iD: "005",
      ingredientName: "Sprinkles",
      quantity: "50",
      unit: "g",
      ingredientPrice: "12000",
    },
    {
      iD: "005",
      ingredientName: "Sprinkles",
      quantity: "50",
      unit: "g",
      ingredientPrice: "12000",
    },
    {
      iD: "005",
      ingredientName: "Sprinkles",
      quantity: "50",
      unit: "g",
      ingredientPrice: "12000",
    },
    {
      iD: "005",
      ingredientName: "Sprinkles",
      quantity: "50",
      unit: "g",
      ingredientPrice: "12000",
    },
    {
      iD: "005",
      ingredientName: "Sprinkles",
      quantity: "50",
      unit: "g",
      ingredientPrice: "12000",
    },
  ];
  return (
    <div className=" ml-[250px] mt-3 pl-[10px] ">
      <SidebarAdmin></SidebarAdmin>
      <div>
        <SearchBar isShow={true}></SearchBar>
        <div className=" mt-2 flex items-center justify-between mr-4">
          <div className="font-bold text-[22px] w-[60%] ">Quản lý Toppings</div>
          <a href="/admin/add-topping">
            <Button
              className="bg-green-400 rounded-[30px] h-10 w-[110px] px-2 text-center"
              type="button"
            >
              <div className="flex justify-content-center ">
                <svg
                  className="mr-2"
                  width="25px"
                  height="25px"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <path
                      opacity="0.1"
                      d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
                      fill="#ffffff"
                    ></path>{" "}
                    <path
                      d="M9 12H15"
                      stroke="#ffffff"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>{" "}
                    <path
                      d="M12 9L12 15"
                      stroke="#ffffff"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>{" "}
                    <path
                      d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
                      stroke="#ffffff"
                      strokeWidth="2"
                    ></path>{" "}
                  </g>
                </svg>
                <span className="ml-1 text-white">Thêm</span>
              </div>
            </Button>
          </a>
        </div>
      </div>
      <div className="overflow-y-auto max-h-[550px] scrollbar-hidden ">
        <Topping toppings={pseudoToppings}></Topping>
      </div>
    </div>
  );
};

export default ManageTopping;
