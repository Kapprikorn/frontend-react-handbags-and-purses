import './App.css';
import Button from './components/button/Button.jsx';
import bag_1 from './assets/bag_1.png';
import bag_2 from './assets/bag_2.png';
import bag_3 from './assets/bag_3.png';
import bag_4 from './assets/bag_4.png';
import brand from './assets/brand.png';
import our_story from './assets/our_story.png';
import Product from './components/product/Product.jsx';
import Tile from './components/tile/Tile.jsx';

const buttonTexts = [
  'to the collection',
  'shop all bags',
  'pre-orders',
];
const bagNames = [
  'The handy bag',
  'The stylish bag',
  'The simple bag',
  'The trendy bag',
];
const prizes = [
  400,
  250,
  300,
  150,
];

function App () {

  return (
    <>
      <h1>Handbags & Purses</h1>
      <nav>
        <Button buttonText={buttonTexts[0]}/>
        <Button buttonText={buttonTexts[1]}/>
        <Button buttonText={buttonTexts[2]} isDisabled={true}/>
      </nav>
      <main>
        <Product tagName={'Best Seller'}
                 image={bag_1}
                 imageAlt='image of a bag'
                 name={bagNames[0]}
                 prize={prizes[0]}
        />
        <Product tagName={'Best Seller'}
                 image={bag_2}
                 imageAlt='image of a bag'
                 name={bagNames[1]}
                 prize={prizes[1]}
        />
        <Product tagName={'New Collection'}
                 image={bag_3}
                 imageAlt='image of a bag'
                 name={bagNames[2]}
                 prize={prizes[2]}
        />
        <Product tagName={'New Collection'}
                 image={bag_4}
                 imageAlt='image of a bag'
                 name={bagNames[3]}
                 prize={prizes[3]}
        />
      </main>
      <footer>
        <Tile header="The brand"
              paragraphs={[
                'Lorem ipsum dolor sit amet, consectetur adipisicing elit. At consectetur, ' +
                'cupiditate dignissimos illo modi odit optio possimus quia rem saepe?',
                'Lorem ipsum dolor sit amet, consectetur adipisicing elit. At consectetur, ' +
                'cupiditate dignissimos illo modi odit optio possimus quia rem saepe?',
              ]}
        />
        <Tile image={brand} imageAlt="Brand image" />
        <Tile image={our_story} imageAlt="image of two happy women hugging" />
        <Tile header="Our Story"
              paragraphs={[
                'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque earum eos fuga' +
                ' ipsum labore laudantium libero molestiae mollitia nulla, numquam, officia omnis' +
                ' perferendis perspiciatis quidem, quis recusandae repudiandae. Modi, voluptates!'
              ]}
        />
      </footer>
    </>
  );
}

export default App;
