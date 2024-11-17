/* eslint-disable @next/next/no-img-element */
import Button from "@/components/button/button";
import { ItemProps } from "@/components/item-card/item-card";
import ItemOrder from "@/components/item-order/item-order";
import "./payment-section.css";
const Payment = () => {
  const time = new Date("2022-01-01T12:00:00").toLocaleString("en-GB", {
    timeZone: "Asia/Ho_Chi_Minh",
  });
  const sampleItemInfo: ItemProps = {
    itemName: "Bánh Muffin",
    itemPrice: 28000, // Giá sản phẩm
    imagePath: "/imgs/bakery-images/muffinb.png",
  };

  // Define other props
  const sampleItemCount = 2; // Số lượng sản phẩm
  const sampleItemTopping = "Nho khô, hạnh nhân"; // Các loại topping
  const sampleClassName = "custom-class"; // Optional className for styling
  return (
    <div>
      <div className="text-3xl font-extrabold m-auto mb-10 mt-5 text-center">
        Thanh toán
      </div>
      <div className="flex">
        <div className="flex flex-col w-[50%] justify-center items-center ">
          <div className="font-semibold text-2xl mb-2">Thông tin đơn hàng</div>
          <div className="">
            <div className="list-order min-h-[450px] self-center flex flex-col p-5">
              <div className="">
                <ItemOrder
                  itemInfo={sampleItemInfo}
                  itemCount={sampleItemCount}
                  itemTopping={sampleItemTopping}
                />
              </div>

              <div className="">
                <ItemOrder
                  itemInfo={sampleItemInfo}
                  itemCount={sampleItemCount}
                  itemTopping={sampleItemTopping}
                />
              </div>

              <div className="">
                <ItemOrder
                  itemInfo={sampleItemInfo}
                  itemCount={sampleItemCount}
                  itemTopping={sampleItemTopping}
                />
              </div>

              <div className="">
                <ItemOrder
                  itemInfo={sampleItemInfo}
                  itemCount={sampleItemCount}
                  itemTopping={sampleItemTopping}
                />
              </div>

              <div className="">
                <ItemOrder
                  itemInfo={sampleItemInfo}
                  itemCount={sampleItemCount}
                  itemTopping={sampleItemTopping}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex-col mx-auto ">
          <div className="font-semibold text-2xl mb-2 text-center">
            Thông tin giao hàng
          </div>
          <div>
            <div className="flex justify-start items-center ml-[18%]">
              <div className="font-light text-lg mr-5">Nguyễn Văn Vũ</div>
              <div className="font-light text-lg">0327521953</div>
            </div>

            <div className="font-light text-lg text-left ml-[18%]">
              Số 1 Võ Văn Ngân,
            </div>
          </div>
          <div className="font-semibold text-2xl mb-2 mt-2 text-center">
            Chi tiết thanh toán
          </div>
          <div className="font-light text-lg ml-[18%]">
            Tổng tiền hàng: <span>789,000 VNĐ</span>
          </div>
          <div className="font-light text-lg ml-[18%]">
            Phí vận chuyển: <span>30,000 VNĐ</span>
          </div>
          <div className="font-light text-lg ml-[18%]">
            Tổng thanh toán: <span>819,000 VNĐ</span>
          </div>
          <div className="font-semibold text-2xl mb-2 mt-2 text-center">
            Chọn phương thức thanh toán
            <div className="flex justify-between mt-5">
              <div>
                <div className="flex items-baseline">
                  <label htmlFor="" className="font-normal text-lg mr-3  ">
                    VNPay
                  </label>
                  <input
                    type="radio"
                    className="w-4 h-4 mt-3"
                    id="vnpay"
                    name="payment"
                  />
                </div>
                <img
                  className="h-[8.5rem]"
                  src="/imgs/payment-method-icon/vnpay-logo-inkythuatso (2)-01.png"
                  alt=""
                />
              </div>
              <div>
                <div className="flex items-baseline">
                  <label htmlFor="" className="font-normal text-lg mr-3  ">
                    Paypal
                  </label>
                  <input
                    type="radio"
                    id="paypal"
                    name="payment"
                    className="w-4 h-4 mt-3"
                  />
                </div>
                <svg
                  className="mt-8"
                  width="64px"
                  height="64px"
                  viewBox="0 -9 58 58"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <rect
                      x="0.5"
                      y="0.5"
                      width="57"
                      height="39"
                      rx="3.5"
                      fill="white"
                      stroke="#F3F3F3"
                    ></rect>{" "}
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M26.4388 20.2562L26.6913 18.6477L26.1288 18.6346H23.4429L25.3095 6.76505C25.3153 6.72911 25.3341 6.69575 25.3616 6.67201C25.3892 6.64827 25.4243 6.63525 25.4611 6.63525H29.9901C31.4937 6.63525 32.5313 6.94897 33.073 7.56826C33.327 7.85879 33.4887 8.16246 33.567 8.49653C33.6491 8.84713 33.6505 9.26596 33.5704 9.77689L33.5646 9.81405V10.1415L33.8186 10.2858C34.0324 10.3996 34.2024 10.5298 34.3328 10.6788C34.55 10.9273 34.6905 11.2431 34.7499 11.6173C34.8113 12.0022 34.791 12.4604 34.6905 12.979C34.5746 13.5755 34.3873 14.0951 34.1343 14.5202C33.9016 14.9119 33.6052 15.2369 33.2531 15.4886C32.9171 15.7279 32.5178 15.9095 32.0664 16.0257C31.6288 16.1399 31.1301 16.1975 30.583 16.1975H30.2305C29.9786 16.1975 29.7338 16.2886 29.5416 16.4517C29.3489 16.6183 29.2215 16.8459 29.1824 17.0947L29.1558 17.2396L28.7096 20.0747L28.6894 20.1787C28.684 20.2117 28.6748 20.2281 28.6613 20.2392C28.6493 20.2494 28.632 20.2562 28.615 20.2562H26.4388"
                      fill="#28356A"
                    ></path>{" "}
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M34.0589 9.85181C34.0455 9.93848 34.03 10.027 34.0126 10.1181C33.4154 13.1934 31.372 14.2558 28.7623 14.2558H27.4335C27.1143 14.2558 26.8453 14.4881 26.7957 14.8038L25.9227 20.3573C25.8904 20.5647 26.0497 20.7514 26.2582 20.7514H28.615C28.894 20.7514 29.1311 20.5481 29.1751 20.2721L29.1982 20.1521L29.6419 17.3281L29.6705 17.1732C29.7139 16.8962 29.9515 16.6928 30.2305 16.6928H30.583C32.8663 16.6928 34.6538 15.7632 35.1763 13.0728C35.3944 11.9489 35.2815 11.0105 34.704 10.3505C34.5293 10.1516 34.3125 9.98635 34.0589 9.85181"
                      fill="#298FC2"
                    ></path>{" "}
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M33.4342 9.60206C33.3429 9.57534 33.2488 9.5512 33.1522 9.52936C33.0551 9.50807 32.9557 9.48922 32.8533 9.47267C32.4951 9.41462 32.1025 9.38708 31.682 9.38708H28.1322C28.0447 9.38708 27.9617 9.40689 27.8874 9.44269C27.7236 9.52163 27.602 9.67707 27.5726 9.86736L26.8174 14.6641L26.7957 14.8039C26.8454 14.4882 27.1144 14.2558 27.4335 14.2558H28.7623C31.372 14.2558 33.4154 13.1929 34.0127 10.1181C34.0305 10.0271 34.0455 9.93856 34.0589 9.85189C33.9078 9.77146 33.7442 9.7027 33.568 9.64411C33.5244 9.62959 33.4795 9.61562 33.4342 9.60206"
                      fill="#22284F"
                    ></path>{" "}
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M27.5726 9.86737C27.6021 9.67708 27.7236 9.52165 27.8874 9.44325C27.9622 9.40731 28.0447 9.38751 28.1322 9.38751H31.682C32.1025 9.38751 32.4951 9.41518 32.8534 9.47323C32.9557 9.48964 33.0551 9.50863 33.1522 9.52992C33.2488 9.55162 33.3429 9.5759 33.4342 9.60248C33.4795 9.61605 33.5244 9.63015 33.5684 9.64412C33.7446 9.70272 33.9084 9.77202 34.0595 9.85191C34.2372 8.71545 34.058 7.94168 33.4453 7.241C32.7698 6.46953 31.5507 6.1394 29.9906 6.1394H25.4615C25.1429 6.1394 24.8711 6.37174 24.8218 6.68803L22.9354 18.6796C22.8982 18.9168 23.0807 19.1309 23.3193 19.1309H26.1153L27.5726 9.86737"
                      fill="#28356A"
                    ></path>{" "}
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M13.0946 23.5209H9.79248C9.56648 23.5209 9.3743 23.6855 9.339 23.9093L8.00345 32.4009C7.97695 32.5686 8.10638 32.7195 8.27584 32.7195H9.85225C10.0782 32.7195 10.2704 32.555 10.3057 32.3308L10.6659 30.0404C10.7006 29.8162 10.8932 29.6516 11.1188 29.6516H12.1641C14.3393 29.6516 15.5946 28.5959 15.9226 26.5042C16.0703 25.589 15.9288 24.87 15.5014 24.3664C15.0321 23.8134 14.1997 23.5209 13.0946 23.5209ZM13.4755 26.6224C13.2949 27.8106 12.3896 27.8106 11.5143 27.8106H11.0159L11.3655 25.5914C11.3863 25.4573 11.5021 25.3585 11.6374 25.3585H11.8658C12.4621 25.3585 13.0246 25.3585 13.3152 25.6994C13.4886 25.9027 13.5416 26.2049 13.4755 26.6224Z"
                      fill="#28356A"
                    ></path>{" "}
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M23.0496 26.5199H21.4683C21.3336 26.5199 21.2171 26.6187 21.1964 26.7528L21.1264 27.1963L21.0159 27.0356C20.6736 26.5373 19.9101 26.3707 19.1483 26.3707C17.4008 26.3707 15.9084 27.698 15.6177 29.5598C15.4666 30.4885 15.6814 31.3766 16.2068 31.9959C16.6887 32.5653 17.3782 32.8026 18.1985 32.8026C19.6065 32.8026 20.3871 31.8947 20.3871 31.8947L20.3167 32.3354C20.2902 32.5038 20.4196 32.6549 20.5881 32.6549H22.0124C22.2389 32.6549 22.4301 32.4903 22.4659 32.2661L23.3205 26.8385C23.3475 26.6714 23.2185 26.5199 23.0496 26.5199ZM20.8453 29.6064C20.6928 30.5122 19.9759 31.1204 19.0613 31.1204C18.6022 31.1204 18.2353 30.9727 17.9995 30.6929C17.7658 30.415 17.6771 30.0194 17.7513 29.5787C17.8939 28.6805 18.6229 28.0524 19.5235 28.0524C19.9725 28.0524 20.3375 28.2022 20.578 28.4843C20.8188 28.7695 20.9145 29.1676 20.8453 29.6064Z"
                      fill="#28356A"
                    ></path>{" "}
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M31.3495 26.6556H29.7604C29.6088 26.6556 29.4664 26.7312 29.3805 26.8576L27.1888 30.095L26.2598 26.9839C26.2014 26.7892 26.0223 26.6556 25.8195 26.6556H24.2581C24.0682 26.6556 23.9365 26.8416 23.9968 27.0208L25.7471 32.1718L24.1016 34.5014C23.9722 34.6849 24.1025 34.9372 24.3261 34.9372H25.9132C26.0639 34.9372 26.2048 34.8635 26.2903 34.7397L31.5754 27.089C31.702 26.906 31.572 26.6556 31.3495 26.6556"
                      fill="#28356A"
                    ></path>{" "}
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M36.6469 23.5209H33.3444C33.1189 23.5209 32.9267 23.6855 32.8914 23.9093L31.5559 32.4009C31.5294 32.5686 31.6588 32.7195 31.8273 32.7195H33.5221C33.6794 32.7195 33.8141 32.6044 33.8387 32.4475L34.2178 30.0404C34.2525 29.8162 34.4453 29.6516 34.6707 29.6516H35.7156C37.8912 29.6516 39.1461 28.5959 39.4745 26.5042C39.6227 25.589 39.4803 24.87 39.0529 24.3664C38.584 23.8134 37.7521 23.5209 36.6469 23.5209ZM37.0279 26.6224C36.8478 27.8106 35.9424 27.8106 35.0666 27.8106H34.5689L34.9189 25.5914C34.9396 25.4573 35.0545 25.3585 35.1902 25.3585H35.4186C36.0144 25.3585 36.5774 25.3585 36.868 25.6994C37.0414 25.9027 37.094 26.2049 37.0279 26.6224Z"
                      fill="#298FC2"
                    ></path>{" "}
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M46.5999 26.5199H45.0195C44.8839 26.5199 44.7685 26.6187 44.7482 26.7528L44.6782 27.1963L44.5671 27.0356C44.2248 26.5373 43.4619 26.3707 42.6999 26.3707C40.9526 26.3707 39.4607 27.698 39.1701 29.5598C39.0194 30.4885 39.2332 31.3766 39.7585 31.9959C40.2415 32.5653 40.9299 32.8026 41.7503 32.8026C43.1582 32.8026 43.9389 31.8947 43.9389 31.8947L43.8685 32.3354C43.842 32.5038 43.9713 32.6549 44.1408 32.6549H45.5647C45.7902 32.6549 45.9823 32.4903 46.0176 32.2661L46.8727 26.8385C46.8988 26.6714 46.7693 26.5199 46.5999 26.5199ZM44.3958 29.6064C44.2442 30.5122 43.5262 31.1204 42.6116 31.1204C42.1534 31.1204 41.7856 30.9727 41.5498 30.6929C41.3163 30.415 41.2283 30.0194 41.3016 29.5787C41.4451 28.6805 42.1732 28.0524 43.0738 28.0524C43.5228 28.0524 43.8878 28.2022 44.1283 28.4843C44.3701 28.7695 44.4657 29.1676 44.3958 29.6064Z"
                      fill="#298FC2"
                    ></path>{" "}
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M48.3324 23.7543L46.9771 32.4013C46.9506 32.569 47.0799 32.7199 47.2484 32.7199H48.611C48.8375 32.7199 49.0296 32.5554 49.0643 32.3312L50.4008 23.84C50.4275 23.6724 50.298 23.5209 50.1295 23.5209H48.6038C48.4691 23.5213 48.3532 23.6202 48.3324 23.7543"
                      fill="#298FC2"
                    ></path>{" "}
                  </g>
                </svg>
              </div>
            </div>
          </div>
          <div>
            <Button className=" text-center w-[350px] h-10 bg-primary text-white font-bold rounded-2xl text-2xl p">
              Thanh toán
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;