import Header from "@/Components/Header/Header";
import Hero from "@/Components/Hero/Hero";
import FeaturedProduct from "@/Components/FeaturedProduct/FeaturedProduct";
import LatestProduct from "@/Components/LatestProduct/LatestProduct";
import ShopeOffer from "@/Components/ShopeOffer/ShopeOffer";
import Banner from "@/Components/banner/Banner";
import TrendingProducts from "@/Components/TrendingProducts/TrendingProducts";
import DiscountItems from "@/Components/DiscountItems/DiscountItems";
import TopCategories from "@/Components/TopCategories/TopCategories";
import Banner2 from "@/Components/banner2/Banner2";
import Brands from "@/Components/brands/Brands";
import Blog from "@/Components/Blog/Blog";

export default function Home() {
  return (
    <>
  <Header/>
    <Hero />
    <FeaturedProduct />
    <LatestProduct />
    <ShopeOffer />
    <Banner />
    <TrendingProducts />
    <DiscountItems />
    <TopCategories />
    <Banner2 />
    <Brands />
    <Blog />
    </>
  );
}
