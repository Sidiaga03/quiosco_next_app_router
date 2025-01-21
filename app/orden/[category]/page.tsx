
import ProductCard from "@/components/productos/ProductCard";
import Heading from "@/components/ui/Heading";
import { prisma } from "@/src/lib/prisma"

async function getProducts(category: string){
  const products = await prisma.product.findMany({
    where: {
      category: {
        slug: category
      }
    }
  })
  return products
}

export default async function OrdenPage({params}: { params: { category: string}}) {
  const products = await getProducts(params.category)
  
  return (
    <>
      <Heading>
        Elige lo que quieres añadir a tu pedido a continuación
      </Heading>

      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-4 items-start">
        {products.map(product => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}
      </div>
    </>
  );
}