import PageManager from "./page-manager";
import customGlobal from "./custom/its-global";
import { financingProduct } from "./custom/financing";
import Financing from "./custom/financing-new";
export default class CustomPage extends PageManager {
  onReady() {
    const body = this;
    console.log("body", body);
    const curPath = window.location.pathname;
    if (curPath.includes("financing")) {
      console.log("financing");
      //console.log(body.context);
      //financingProduct(body.context);
      Financing(body.context);
    } else {
      // not financing
    }
  }

  startGlobal() {
    customGlobal(body.context);
  }
}
