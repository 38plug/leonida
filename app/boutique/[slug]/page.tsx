import type { Metadata } from "next";
import Link from "next/link";
import { getBoutiqueBySlug, BOUTIQUE } from "@/lib/catalog";
import { ProductDetail } from "@/components/shop/ProductDetail";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return BOUTIQUE.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = getBoutiqueBySlug(slug);
  if (!product) {
    return { title: "Product not found · Leonida" };
  }
  const title = product.seoTitle || `${product.name} · Leonida Boutique`;
  const description = product.seoDescription || product.description;
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: product.image ? [{ url: product.image }] : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: product.image ? [product.image] : undefined,
    },
  };
}

export default async function ProductDetailPage({ params }: Props) {
  const { slug } = await params;
  const product = getBoutiqueBySlug(slug);

  if (!product) {
    return (
      <div className="bg-void px-6 pt-32 text-mist">
        <p>Product not found.</p>
        <Link href="/boutique" className="mt-4 inline-block text-champagne">
          Back to boutique
        </Link>
      </div>
    );
  }

  return <ProductDetail product={product} />;
}
