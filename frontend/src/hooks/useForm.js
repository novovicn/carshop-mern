import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { addCar } from '../features/cars/carSlice';

const useForm = (callback, validate) => {
  const dispatch = useDispatch();
  const [values, setValues] = useState({
    brand: '',
    model: '',
    year: '',
    image: '',
    mileage: '',
    price: '',
  });
  const history = useHistory();
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(validate(values));
    setIsSubmitting(true);

    if (errors) {
      console.log('Errors here');
    } else {
      console.log('no errors, ready for usage');
    }
  };

  useEffect(() => {
    console.log(Object.keys(errors));
    if (Object.keys(errors).length === 0 && isSubmitting) {
      let car = {
        ...values,
      };
      console.log(car);
      dispatch(addCar(car));
    }
  }, [errors]);

  return { handleChange, handleSubmit, values, errors };
};

export default useForm;
