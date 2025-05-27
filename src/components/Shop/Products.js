import ProductItem from './ProductItem';
import classes from './Products.module.css';

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        <ProductItem
          id="940h89ay0"
          title="Big Apple"
          price={6}
          description="This is a first product - amazing!"
        />
        <ProductItem
          id="qxw3rhzk5"
          title="Gadget Pro"
          price={29}
          description="A high-tech gadget for your daily needs."
        />
        <ProductItem
          id="dqrabth5a"
          title="Super Mug"
          price={12}
          description="Keeps your drinks hot or cold for hours."
        />
        <ProductItem
          id="n06d9f67i"
          title="Notebook Deluxe"
          price={8}
          description="A premium notebook for all your notes and sketches."
        />
      </ul>
    </section>
  );
};

export default Products;
