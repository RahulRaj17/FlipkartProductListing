import { productJSON, footerJson } from "./assets/data.js";
import { createHeader } from "./components/header.js";
import { createProduct } from "./components/products.js";

createHeader();
createProduct(productJSON);

