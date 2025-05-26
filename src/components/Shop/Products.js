import ProductItem from './ProductItem';
import classes from './Products.module.css';

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        <ProductItem
          title='Big Apple'
          price={6}
          description='This is a first product - amazing!'
        />
        <ProductItem
          title='Gadget Pro'
          price={29}
          description='A high-tech gadget for your daily needs.'
        />
        <ProductItem
          title='Super Mug'
          price={12}
          description='Keeps your drinks hot or cold for hours.'
        />
        <ProductItem
          title='Notebook Deluxe'
          price={8}
          description='A premium notebook for all your notes and sketches.'
        />
      </ul>
    </section>
  );
};

export default Products;
