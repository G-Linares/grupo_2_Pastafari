import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';

const Dish = () => {

    const [dish, setDish] = useState([]);

    const url = "http://localhost:3001/";
    let{ id } = useParams();
    useEffect(() => {
        axios.get(`${url}menu/byId/${id}`).then((response) => {
            setDish(response.data);
        }).catch((error) => {
            console.log(error.respose);
        })
    },[])

  
    return (
    <> 
        <h1>{dish.item}</h1>
    </>
  )
}

export default Dish;