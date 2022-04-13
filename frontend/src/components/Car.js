import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { deleteCar } from '../features/cars/carsSlice';
import './Car.css'

function Car(props) {
    const { user } = useSelector(state => state.auth);
    const dispatch = useDispatch();
    const history = useHistory();

    const mainButton = () => {
        if(props.owner === user._id){
            return <button onClick={handleDelete} className="car__mainBtn">DELETE</button>
        }else if(!props.user){
            return null
        }else if(!props.sold){
            return <button onClick={handleBuy} className="car__mainBtn">BUY</button>
        }else{
            return null
        }
    }

    const sold = props.sold? <div className='sold'>SOLD</div> : null;

    const handleDelete = () => {
        let confirm = window.confirm('Are you sure you want to delete?')
        if(confirm){
            dispatch(deleteCar(props.id));
        }
    }

    const handleBuy = () => {
        history.push('/checkout');
    }

    const handleMoreInfo = () => {
        history.push(`/cars/${props.id}`);
    }

    return (
        <div className="car">
            {sold}
            <img className="car__image" alt="" src={props.image}/>
            <div className="car__info">
                <h2 className="car__name">{props.brand} {props.model}</h2>
                <h3>€ {props.price}</h3>
            </div>
            <div className="car__buttons">
            <button className="car__buttons--seeMore" onClick={handleMoreInfo}>See more</button>
                {mainButton()}
            </div>
        </div>
    )
}

export default Car;
