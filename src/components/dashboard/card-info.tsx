import React, { FC } from "react";

type CardInfoProps = {
  title: string;
  value: number;
};
const CardInfo: FC<CardInfoProps> = ({
  title = "Doanh thu",
  value = 10000000,
}) => {
  const formatVND = (value: number): string => {
    const formatted = new Intl.NumberFormat("vi-VN", {
      style: "currency",
      currency: "VND",
    }).format(value);

    // Thay "₫" bằng "VNĐ" và "." thành ","
    return formatted.replace("₫", "VNĐ").replace(/\./g, ",");
  };
  return (
    <div className="mt-5 ml-5 border-[2px] border-solid rounded-lg border-gray-300 h-[110px] w-[310px] ">
      <div className="flex justify-between mt-2 items-center">
        <div className="text-base font-medium px-6 ">{title}</div>
        <div className="text-sm font-normal px-6 text-gray-500  ">VNĐ</div>
      </div>
      <div className="flex justify-start ml-2 mt-2 items-center">
        <svg
          className="self-baseline iconify iconify--noto "
          width="40px"
          height="40px"
          viewBox="0 0 128 128"
          xmlns="http://www.w3.org/2000/svg"
          // xmlns:xlink="http://www.w3.org/1999/xlink"
          aria-hidden="true"
          role="img"
          preserveAspectRatio="xMidYMid meet"
          fill="#000000"
        >
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            {" "}
            <g fill="none">
              {" "}
              <path
                d="M93.46 39.45c6.71-1.49 15.45-8.15 16.78-11.43c.78-1.92-3.11-4.92-4.15-6.13c-2.38-2.76-1.42-4.12-.5-7.41c1.05-3.74-1.44-7.87-4.97-9.49s-7.75-1.11-11.3.47c-3.55 1.58-6.58 4.12-9.55 6.62c-2.17-1.37-5.63-7.42-11.23-3.49c-3.87 2.71-4.22 8.61-3.72 13.32c1.17 10.87 3.85 16.51 8.9 18.03c6.38 1.92 13.44.91 19.74-.49z"
                fill="#FFCA28"
              >
                {" "}
              </path>{" "}
              <path
                d="M104.36 8.18c-.85 14.65-15.14 24.37-21.92 28.65l4.4 3.78s2.79.06 6.61-1.16c6.55-2.08 16.12-7.96 16.78-11.43c.97-5.05-4.21-3.95-5.38-7.94c-.61-2.11 2.97-6.1-.49-11.9zm-24.58 3.91s-2.55-2.61-4.44-3.8c-.94 1.77-1.61 3.69-1.94 5.67c-.59 3.48 0 8.42 1.39 12.1c.22.57 1.04.48 1.13-.12c1.2-7.91 3.86-13.85 3.86-13.85z"
                fill="#E2A610"
              >
                {" "}
              </path>{" "}
              <path
                d="M61.96 38.16S30.77 41.53 16.7 68.61c-14.07 27.08-2.11 43.5 10.55 49.48c12.66 5.98 44.56 8.09 65.31 3.17s25.94-15.12 24.97-24.97c-1.41-14.38-14.77-23.22-14.77-23.22s.53-17.76-13.25-29.29c-12.23-10.24-27.55-5.62-27.55-5.62z"
                fill="#FFCA28"
              >
                {" "}
              </path>{" "}
              <path
                d="M74.76 83.73c-6.69-8.44-14.59-9.57-17.12-12.6c-1.38-1.65-2.19-3.32-1.88-5.39c.33-2.2 2.88-3.72 4.86-4.09c2.31-.44 7.82-.21 12.45 4.2c1.1 1.04.7 2.66.67 4.11c-.08 3.11 4.37 6.13 7.97 3.53c3.61-2.61.84-8.42-1.49-11.24c-1.76-2.13-8.14-6.82-16.07-7.56c-2.23-.21-11.2-1.54-16.38 8.31c-1.49 2.83-2.04 9.67 5.76 15.45c1.63 1.21 10.09 5.51 12.44 8.3c4.07 4.83 1.28 9.08-1.9 9.64c-8.67 1.52-13.58-3.17-14.49-5.74c-.65-1.83.03-3.81-.81-5.53c-.86-1.77-2.62-2.47-4.48-1.88c-6.1 1.94-4.16 8.61-1.46 12.28c2.89 3.93 6.44 6.3 10.43 7.6c14.89 4.85 22.05-2.81 23.3-8.42c.92-4.11.82-7.67-1.8-10.97z"
                fill="#6B4B46"
              >
                {" "}
              </path>{" "}
              <path
                d="M71.16 48.99c-12.67 27.06-14.85 61.23-14.85 61.23"
                stroke="#6B4B46"
                stroke-width="5"
                stroke-miterlimit="10"
              >
                {" "}
              </path>{" "}
              <path
                d="M81.67 31.96c8.44 2.75 10.31 10.38 9.7 12.46c-.73 2.44-10.08-7.06-23.98-6.49c-4.86.2-3.45-2.78-1.2-4.5c2.97-2.27 7.96-3.91 15.48-1.47z"
                fill="#6D4C41"
              >
                {" "}
              </path>{" "}
              <path
                d="M81.67 31.96c8.44 2.75 10.31 10.38 9.7 12.46c-.73 2.44-10.08-7.06-23.98-6.49c-4.86.2-3.45-2.78-1.2-4.5c2.97-2.27 7.96-3.91 15.48-1.47z"
                fill="#6B4B46"
              >
                {" "}
              </path>{" "}
              <path
                d="M96.49 58.86c1.06-.73 4.62.53 5.62 7.5c.49 3.41.64 6.71.64 6.71s-4.2-3.77-5.59-6.42c-1.75-3.35-2.43-6.59-.67-7.79z"
                fill="#E2A610"
              >
                {" "}
              </path>{" "}
            </g>{" "}
          </g>
        </svg>
        <div className="text-2xl font-bold px-1 mt-2 text-center">
          {formatVND(value)}
        </div>
      </div>
    </div>
  );
};

export default CardInfo;
