import { apiKey as aliasApiKey } from "./util.js";
import * as utilObject from "./utilAsObject.js";
import myDefaultKey from "./utilDefault.js";

console.info(aliasApiKey);
console.info(myDefaultKey);
console.info(utilObject.apiKey, utilObject.addFunc(2, 3), utilObject.default(20, 5) );
