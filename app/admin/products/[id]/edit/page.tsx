import EditProductForm from "@/components/productos/EditProductForm"
import ProductForm from "@/components/productos/ProductForm"
import GoBackButton from "@/components/ui/GoBackButton"
import Heading from "@/components/ui/Heading"
import { prisma } from "@/src/lib/prisma"
import { notFound } from "next/navigation"

async function getProductsById(id: number) {
    const product = await prisma.product.findUnique({
        where: {
            id
        }
    })
    if(!product){
        notFound()
    }
    return product
}

export default async function EditProductsPage({params}: {params: {id: string}}) {

    const product = await getProductsById(+params.id)

  return (
    <>
        <Heading>Editar Producto: {product.name}</Heading>

        <GoBackButton/>

        <EditProductForm>
            <ProductForm
                product={product}
            />
        </EditProductForm>
    </>
  )
}
