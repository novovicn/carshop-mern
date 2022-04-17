import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import Form from "../components/Form";
import { reset } from "../features/cars/carSlice";
import "./AddCar.css";


function Sell() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const history = useHistory();
  const dispatch = useDispatch();

  const { user } = useSelector(state => state.auth);
  const { success } = useSelector(state => state.car);


  useEffect(() => {
    if(!user){
      history.push('/auth?redirect=sellcar');
    }else if(success){
      dispatch(reset());
      history.push('/cars');
    }
  }, [user, success])


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
