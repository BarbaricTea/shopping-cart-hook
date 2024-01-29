import ProductDetails from 'components/elements/ProductDetails';
import * as Constants from '../../../data/constants';

export default function PDP({ params }: { params: { id: string } }) {
  const { id } = params;
  const productData = Constants.products.find((x) => x.id.toString() === id);

  return <ProductDetails product={productData} />;
}
