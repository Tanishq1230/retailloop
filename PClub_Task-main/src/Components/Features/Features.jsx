import React from "react";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import LocalOfferOutlinedIcon from "@mui/icons-material/LocalOfferOutlined";
import ShieldOutlinedIcon from "@mui/icons-material/ShieldOutlined";
import BeenhereOutlinedIcon from "@mui/icons-material/BeenhereOutlined";
import { Features_Card } from "./Features_Card";
const Features = () => {
  const featureList = [
    {
      text: "FREE DELIVERY",
      icon: ShoppingCartOutlinedIcon,
      description:
        "Snap Mart offers free delivery to make your shopping experience smoother and more affordable. No hidden fees—just straightforward, convenient shopping from the comfort of your home. With free delivery on all eligible orders, you can shop confidently, knowing that the price you see is the price you pay.",
    },
    {
      text: "QUALITY GUARANTEE",
      icon: BeenhereOutlinedIcon,
      description:
        "Snap Mart is dedicated to providing you with only the highest quality products, backed by our quality guarantee. Every item in our store is carefully selected and thoroughly checked to meet strict quality standards, ensuring that you receive exactly what you expect—products you can trust.",
    },
    {
      text: "DAILY OFFERS",
      icon: LocalOfferOutlinedIcon,
      description:
        "Discover new deals every day on our Snap Mart! With fresh offers on a wide range of products, there’s always something special waiting for you. From discounts on top brands to exclusive limited-time promotions, our daily offers bring you the best value across all categories.",
    },
    {
      text: "100% SECURE PAYMENT",
      icon: ShieldOutlinedIcon,
      description:
        "Shop with confidence on our Snap Mart, where we prioritize your safety with 100% secure payments. Our platform uses advanced encryption technology to ensure that all transactions are protected, safeguarding your personal and financial information.",
    },
  ];
  return (
    <>
      <div>
        <div className="">
          <div className="mx-auto mt-10">
            <div className="lora-400 text-center">
              <div className=" group w-fit mx-auto">
                <p className="text-3xl text">Why Choose Us</p>
                <div className="bg-amber-500 h-[2px] w-0 group-hover:w-full transition-all duration-500"></div>
                </div>
              <p className="text-subheading mt-2 mb-8">
              Experience shopping made easy: quality, security, and great deals—just for you!
              </p>
            </div>
            <ul className=" grid lg:grid-cols-4 md:grid-cols-2 gap-4">
              {featureList.map(({ text, icon: Icon, description }) => (
                <li key={text} className="hover:scale-[1.02] mb-4 transition-all duration-200">
                  <Features_Card
                    title={text}
                    icon={<Icon />}
                    desc={description}
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Features;
