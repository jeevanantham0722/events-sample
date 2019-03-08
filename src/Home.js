import React from "react";
import { Header } from "./header/header";
import { Form } from "./form/Form";
import Footer from "./Fotter/footer";
import { FormResults } from "./form/formResults";


const Home = () => (
  <div className="container">
   <Header/>
   <Form/>
   <FormResults/>
   <Footer/>
  </div>
);

export default Home;
