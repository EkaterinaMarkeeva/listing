import './App.css'
import { Listing } from "./components/listing/Listing";
import etsy from "./data/etsy.json";
import { ItemType } from './types/ItemType';

const data: ItemType[] = etsy.filter(etsy => etsy.state !== 'removed');

function App() {
  return (
    <Listing items={data} />
  )
}

export default App
