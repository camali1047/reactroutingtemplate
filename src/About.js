import axios from "axios";
import { useEffect, useState } from "react";


function About() {
const [info,setInfo]=useState({});

useEffect(()=>{
  axios.get('/info?id=5')
  .then(function (response) {
    setInfo(response.data);
  });
},[])


  return <h1>{info.name}</h1>;

}
export default About;