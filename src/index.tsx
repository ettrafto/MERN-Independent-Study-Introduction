//client side rendering

import { createRoot } from "react-dom/client";
import App from "./components/app";
//import { API_SERVER_URL } from "./public-config";
import '../dist/style.css';
import React from 'react';
//import axios from "axios";



const container = document.getElementById("app");
const root = createRoot(container);

root.render(<App initialData={(window as any).initialData}/>);



{/*javascript promise */}

{/*
axios.get(`${ API_SERVER_URL}/contests`).then((resp) => {

  console.log(resp.data);
  //place root.render if we want data to load before site

});
*/}


