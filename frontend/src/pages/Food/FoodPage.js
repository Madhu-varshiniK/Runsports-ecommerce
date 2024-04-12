import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Price from '../../components/Price/Price';
import StarRating from '../../components/StarRating/StarRating';
import Tags from '../../components/Tags/Tags';
import { useCart } from '../../hooks/useCart';
import { getById, getAllByTag } from '../../services/foodService';
import classes from './foodPage.module.css';
import NotFound from '../../components/NotFound/NotFound';
import Thumbnails from '../../components/Thumbnails/Thumbnails';

export default function FoodPage() {
  const [food, setFood] = useState({});
  const [relatedFoods, setRelatedFoods] = useState([]);
  const [selectedSize, setSelectedSize] = useState(null); 
  const [color, setColor] = useState(null); 

  const { id } = useParams();
  const { addToCart } = useCart();
  const navigate = useNavigate();

  // Load color from local storage on component mount
  useEffect(() => {
    const storedColor = localStorage.getItem('foodPageColor');
    if (storedColor) {
      setColor(storedColor);
    }
  }, []);
  useEffect(() => {
    if (color) {
      localStorage.setItem('foodPageColor', color);
    }
  }, [color]);

  const handleSizeClick = (size) => {
    setSelectedSize(size);
    setColor('#83b5eb');
  };

  const handleAddToCart = () => {
    if (selectedSize && food.tags.some(tag => ['Shoes', 'Jersey', 'Tracks'].includes(tag))) {
      addToCart({ ...food, size: selectedSize });
      navigate('/cart');
    } else if (food.tags.some(tag => ['Shoes', 'Jersey', 'Tracks'].includes(tag))) {
      alert('Please select a size');
    } else {
      addToCart({ ...food });
      navigate('/cart');
    }
  };

  useEffect(() => {
    getById(id).then(setFood);
  }, [id]);

  useEffect(() => {
    if (food.tags && food.tags.length > 0) {
      const fetchRelatedFoods = async () => {
        const relatedFoodsData = await Promise.all(
          food.tags.map(tag => getAllByTag(tag))
        );
        setRelatedFoods(relatedFoodsData.flat());
      };
      fetchRelatedFoods();
    }
  }, [food.tags]);

  const getSizeOptions = (tags) => {
    if (tags.includes('Shoes')) {
      return ['5', '6', '7', '8', '9' ,'10'];
    } else if (tags.includes('Jersey') || tags.includes('Tracks')) {
      return ['S', 'M', 'L', 'XL'];
    } else {
      return [];
    }
  };

  return (
    <>
      {!food ? (
        <NotFound message="Food Not Found!" linkText="Back To Homepage" />
      ) : (
        <div className={classes.container}>
          <img
            className={classes.image}
            src={food.imageUrl}
            alt={food.name}
            onClick={() => {
            }}
          />

          <div className={classes.details}>
            <div className={classes.header}>
              <span className={classes.name}>{food.name}</span>
            </div>
            <div className={classes.rating}>
              <StarRating stars={food.stars} size={25} />
            </div>
            <div className={classes.origins}>
              {food.origins?.map(origin => (
                <span key={origin}>{origin}</span>
              ))}
            </div>
            <div className={classes.tags}>
              {food.tags && (
                <Tags
                  tags={food.tags.map(tag => ({ name: tag }))}
                  forFoodPage={true}
                />
              )}
            </div>
            <div className={classes.cook_time}>
              <span>
                <strong>{food.cookTime}</strong>
              </span>
            </div>
            <div className={classes.price}>
              <Price price={food.price} />
              <span className={classes.gstText}>(including GST)</span>
            </div>
            <div className={classes.sizes}>
              {getSizeOptions(food.tags || []).map(size => (
                <button
                  key={size}
                  className={`${classes.size} ${
                    selectedSize === size ? classes.selectedSize : ''
                  }`}
                  onClick={() => handleSizeClick(size)}
                  style={{
                    backgroundColor: selectedSize === size ? color || 'transparent' : 'transparent',
                    color: selectedSize === size ? 'white' : 'black' 
                  }}
                >
                  {size}
                </button>
              ))}
            </div>
            <button onClick={handleAddToCart}>Add To Cart</button>
            <button onClick={handleAddToCart} className={classes.buynow}>
              Buynow
            </button>
          </div>
        </div>
      )}
      {relatedFoods.length > 0 && (
        <>
          <div>
            <h2 className={classes.relatedFoodsHeader}>Related Products</h2>
            <Thumbnails foods={relatedFoods} />
          </div>
        </>
      )}
    </>
  );
}
