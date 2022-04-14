import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import Form from "../components/Form";
import "./AddCar.css";


function Sell() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const history = useHistory();

  const { user } = useSelector(state => state.auth)


  useEffect(() => {
    if(!user){
      history.push('/auth?redirect=sellcar');
    }
  }, [user])


  function submitForm() {
    setIsSubmitted(true);
  }

  return (
    <div className="sell">
      <Form submitForm={submitForm} />
    </div>
  );
}

export default Sell;
