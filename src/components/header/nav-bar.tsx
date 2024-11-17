import React, { FC } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
type NavBarProps = {
  className?: string;
};
const NavBar: FC<NavBarProps> = ({ className = "", ...restProps }) => {
  const router = useRouter();

  return (
    <div>
      <nav
        className={`navigation flex items-center justify-between w-full h-auto left-0 top-0 transition-all duration-600 ease-linear mt-[0] z-[1] shadow-[0px_28px_43px_6px_#00000024]   ${className}`}
        {...restProps}
      >
        <div className="flex justify-start items-center content-start">
          <img
            src="/imgs/real-logo-removebg-preview.png"
            className="logo w-[100px] h-[80px] object-cover cursor-pointer"
            alt="Logo"
            onClick={() => router.push("/home")}
          />
        </div>
        <div className=" menu-bar flex justify-start items-center mr-[3%] p-3">
          <a
            href="/admin/manage-product"
            className="menu text-[#f5f5f5] font-medium   text-[18px] ml-[30px]"
          >
            Admin
          </a>
          <a
            href="/home#home"
            className="menu text-[#f5f5f5] font-medium   text-[18px] ml-[30px]"
          >
            Trang chủ
          </a>
          <a
            href="/home#menu"
            className="menu text-[#f5f5f5] font-medium   text-[18px] ml-[30px]"
          >
            Thực đơn
          </a>
          <a
            href="#footer"
            className="menu text-[#f5f5f5] font-medium   text-[18px] ml-[30px]"
          >
            Liên hệ
          </a>
          <Link
            href="/order-tracking"
            className="menu text-[#f5f5f5] font-medium font- text-[18px] ml-[30px]"
          >
            Tra cứu đơn hàng
          </Link>
          <svg
            onClick={() => router.push("/shopping-cart")}
            className="menu logo p-0 object-cover cursor-pointer ml-[30px]"
            width="55px"
            height="50px"
            viewBox="0 -0.5 25 25"
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
                fillRule="evenodd"
                clipRule="evenodd"
                d="M5.50063 16.1407C5.46273 18.2335 7.1278 19.9613 9.22063 20.0007H15.7806C17.8735 19.9613 19.5385 18.2335 19.5006 16.1407L19.0636 11.4527C18.9527 9.68529 17.716 8.19053 16.0006 7.75065C15.6432 7.64667 15.2729 7.59348 14.9006 7.59265H10.1006C9.72837 7.59348 9.35808 7.64667 9.00063 7.75065C7.28636 8.19067 6.05026 9.68433 5.93863 11.4507L5.50063 16.1407Z"
                stroke="#ffffff"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>{" "}
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M10.0056 14.1216C9.33164 13.371 9.33164 12.2332 10.0056 11.4826C10.3288 11.155 10.7775 10.9824 11.237 11.009C11.6965 11.0356 12.1223 11.2588 12.4056 11.6216C12.429 11.6466 12.4618 11.6608 12.4961 11.6608C12.5304 11.6608 12.5631 11.6466 12.5866 11.6216C12.8699 11.2588 13.2956 11.0356 13.7551 11.009C14.2146 10.9824 14.6633 11.155 14.9866 11.4826C15.6605 12.2332 15.6605 13.371 14.9866 14.1216L13.7536 15.4626C13.4275 15.8061 12.9747 16.0006 12.5011 16.0006C12.0275 16.0006 11.5747 15.8061 11.2486 15.4626L10.0056 14.1216Z"
                stroke="#ffffff"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>{" "}
              <path
                d="M16.0006 9.38862V7.36762C15.9629 5.4718 14.3965 3.96493 12.5006 4.00062C10.6047 3.96493 9.03835 5.4718 9.00061 7.36762V9.38762"
                stroke="#ffffff"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>{" "}
            </g>
          </svg>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
