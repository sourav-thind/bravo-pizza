
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './PizzaReviewSlider.css';
import StarRatings from 'react-star-ratings';
const PizzaReviewSlider = () => {
  const reviews = [
    {
      customer: "Sylvain Caron",
      review: "Order the monthly special (12in Meat Lover Pizza with 12in Cheese Garlic Fingers) for take out. Pizza was really good. Cooked just right, with plenty of cheese. :-) Service was friendly and prompt. Highly recommend!",
      rating: 5,
    },
    {
      customer: "Adam Binet",
      review: "My favourite pizza spot in Riverview, no question! New owners kept the exact crust recipe and prices continue to be reasonable.",
      rating: 5,
    },
    {
      customer: "Michele Gallant",
      review: "We had waited 6 months before going again. Let me tell you it's exactly the same pizza as before. The new owners were very nice and the service was excellent thank you",
      rating: 5,
    },
    {
      customer: "Fauve yeo",
      review: "Hands down best pizza in Riverview! The new owners are very friendly, take pride in the food they serve, very clean and the overall atmosphere is excellent! Absoloutely love the new hours ! Give Bravo a try you wont be dissapointed!",
      rating: 5,
    },
    {
      customer: "Michael Smith",
      review: "Best pizza in the world. The bacon is real sliced bacon cut into large pieces instead of that gross processed stuff you get everywhere else. Same with the hamburger, which is real fried ground beef instead of that gray balled stuff you get elsewhere. I live in NS and every time I come through, Bravo is a must. Mike makes the best",
      rating: 5,
    },
    {
      customer: "Matina K. Sergiadou",
      review: "Best pizza and lasagna in the Greater Moncton Area! Always fresh and quality ingredients, the best part is the handmade dough. The owners Mike and Helen are always welcoming and friendly. Highly recommended!",
      rating: 5,
    },
    {
      customer: "Trav Mc",
      review: "This is a diamond in the rough. We lived in Riverview for over 2 years before discovering this place. Home made pizza style. My wife, kids and myself all confessed this is one of the pizza's we have ever had. I love the Donair's. Excellent price. Great service. Can be hard to get through on the phone. This is due to the quality. Everyone wants this treat for supper.",
      rating: 5,
    },
    {
      customer: "Dave Prosser",
      review: "We got our order to go, the pizza was hot, fresh out of the oven, lot's of topping's an cheese, and were delicous, my wife and i enjoyed our meal very much😁",
      rating: 4,
    },
    {
      customer: "Tom Wright",
      review: "Excellent lasagna & pizza.  The taste is very close to Vito's which suits us perfectly. We also like their U-Bake service; just the right size for wife & I.  Best part Bravo is in Riverview.",
      rating: 4,
    },
    {
      customer: "Louise Steeves",
      review: "Bravo is THE BEST place to buy pizza in the greater Moncton area! They cook the same pizzas as when I was a kid. It's the sauce that makes it so great! Plus the crust is pretty damn good too!",
      rating: 5,
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      }
    ]
  };

  return (
    <div className="slider-container">
      <h2 className="slider-title">Customer Reviews</h2>
      <Slider {...settings}>
        {reviews.map((review, index) => (
          <div key={index} className="review-card">
            <div className="card-content">
              <h3>{review.customer}</h3>
              <p className="reviewText">{review.review}</p>
              <StarRatings
              className="ratings"
                rating={review.rating}
                starRatedColor="orange"
                starEmptyColor="gray"
                starDimension="30px"
                starSpacing="5px"
                numberOfStars={5}
                name='rating'
              />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default PizzaReviewSlider;
