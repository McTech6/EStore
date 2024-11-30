import { products } from "@/utils/Product";
import Container from "./component/Container"
import HomeBanner from "./component/HomeBanner";
import { TruncateText } from "@/utils/TruncateText";
import ProductCart from "./component/product/ProductCart";

 

export default function Home() {
  return (
    <Container>
     <div className="p-8">
        <HomeBanner />
     </div>
     <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-8">
     {products?.map((product: any) => {
  return  <ProductCart key={product.id} data={product}/>;
})}
     </div>
     </Container>
  );
}
