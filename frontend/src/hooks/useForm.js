import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

const useForm = (callback, validate) => {
  const [values, setValues] = useState({
    brand: '',
    model: '',
    year: '',
    imageURL: '',
    mileage: '',
    vin: '',
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
      const jwt_token = sessionStorage.getItem('cs_access_token');
      console.log(jwt_token);
      fetch('/cars', {
        headers: {
          'accepts': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${jwt_token}`
        },
        method: 'POST',
        body: JSON.stringify(car),
      }).then((response) => console.log(response));
      console.log('done');
      //history.replace('/findcar');
    }
  }, [errors]);

  return { handleChange, handleSubmit, values, errors };
};

export default useForm;
