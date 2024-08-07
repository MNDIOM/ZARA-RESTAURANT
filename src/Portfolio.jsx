import React, { useState } from "react";
import menuData from "./menuData";

const Portfolio = () => {
  const [categoryId, setCategoryId] = useState();
  const [categoryName, setCategoryName] = useState("initial");
  const initialMenu = menuData[8].items;

  return (
    <>
      <section className="pt-20 pb-12 lg:pt-[120px] lg:pb-[90px] dark:bg-dark">
        <div className="container mx-auto">
          <div className="flex flex-wrap -mx-4">
            <div className="w-full px-4">
              <div className="mx-auto mb-[60px] max-w-[510px] text-center">

                <h2 className="text-dark mb-3 text-3xl leading-[1.208] font-bold sm:text-4xl md:text-[60px]">
                  Our Menu
                </h2>

              </div>
            </div>
          </div>

          <div className="w-full flex flex-wrap justify-center -mx-4">
            <div className="w-full px-4">
              <ul className="flex flex-wrap justify-center mb-12 space-x-1">
                {
                  menuData && menuData.map(menuDataItem => {
                    return (<li key={menuDataItem.id} className="mb-1">
                      <button
                        key={menuDataItem.id - 1}
                        onClick={(e) => {
                          setCategoryId(menuDataItem.id)
                          setCategoryName(menuDataItem.category)
                        }}
                        className={`inline-block rounded-lg py-2 px-5 text-center text-base font-semibold transition md:py-3 lg:px-8 ${categoryId === menuDataItem.id ? "activeClasses bg-red-600 text-white"
                          : "inactiveClasses text-body-color dark:text-dark-6 hover:bg-red-600 hover:text-white"
                          }`}
                      >
                        {menuDataItem.category}
                      </button>
                    </li>)
                  })
                }
              </ul>
            </div>
          </div>
          <div className="flex flex-wrap -mx-4">
            {
              categoryName === "initial" ? initialMenu.map(menuDataItem => {
                      return (
                      <PortfolioCard
                        key={menuDataItem.id}
                        ImageHref= {menuDataItem.imghr}
                        category={menuDataItem.category}
                        title={menuDataItem.name}
                        price={menuDataItem.price}
                        description={menuDataItem.desc}
                      />
                    )
              }) : menuData.filter(categoryObject => categoryObject.id === categoryId).map(menuDataItem => {
                return (
                  menuDataItem.items.map(menuItem => {
                    return (
                      <PortfolioCard
                        key={menuItem.id}
                        ImageHref={menuItem.imghr}
                        category={menuItem.category}
                        title={menuItem.name}
                        price={menuItem.price}
                        description={menuItem.desc}
                      />
                    )
                  })
                )
              })
            }
          </div>
        </div>
      </section>
    </>
  );
};

export default Portfolio;

const PortfolioCard = ({
  category,
  ImageHref,
  title,
  price,
  description
}) => {
  return (
    <>
      <div
        className={"w-full px-4 md:w-1/2 xl:w-1/3"}
      >
        <div className="relative mb-12">
          <div className="overflow-hidden rounded-[10px]">
            <img src={ImageHref} alt="portfolio" className="w-full h-72 border border-solid	border-3" />
          </div>
          <div className="relative z-10 mx-5 -mt-20 rounded-lg bg-white dark:bg-dark-2 py-[34px] px-3 text-center shadow-portfolio dark:shadow-box-dark">
            <h3 className="text-dark dark:text-white mb-5 text-xl font-bold">{title}</h3>
            <h4 className="text-dark dark:text-white text-xl ">{price}</h4>
            <h4 className="text-dark dark:text-white text-md p-7 ">{description}</h4>
          </div>
        </div>
      </div>
    </>
  );
};