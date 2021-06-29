import * as S from './styled';
import { motion } from 'framer-motion';
import ProductCard from '../ProductCard/ProductCard';

function ProductList({ cards }) {
  return (
    <S.StyledProductList>
      <div
        className="items__grid"
        initial="hidden"
        animate="show"
        exit="hidden"
        variants={{
          hidden: {
            transition: {
              staggerChildren: 0.1,
            },
          },
          show: {
            transition: {
              staggerChildren: 0.1,
            },
          },
        }}
      >
        {cards.map((card) => (
          <motion.div
            variants={{
              hidden: { scale: 0.9, opacity: 0 },
              show: { scale: 1, opacity: 1 },
            }}
            key={card.title}
          >
            <ProductCard
              variants={{
                hidden: { scale: 1, opacity: 0 },
                show: { scale: 1, opacity: 1 },
              }}
              key={card.title}
              title={card.title}
              likes={card.likes}
              rate={card.rate}
            />
          </motion.div>
        ))}
      </div>
    </S.StyledProductList>
  );
}

export default ProductList;