import cuid from 'cuid';
// export const cuidFn = cuid

export default function manageRestaurants(state = {
restaurants: [],
reviews: [],
}, action) {
    switch(action.type) {
        case 'ADD_RESTAURANT':
            const restaurant = {
                id: cuid(),
                text: action.text
            }
            
        return {
            
            ...state,
            restaurants: [...state.restaurants, restaurant]
        }
        case 'DELETE_RESTAURANT':
            // const rests = state.restaurants.filter(rest => rest.id !== action.id)
            // return {...state, rests}
            const restaurants = state.restaurants.filter(restaurant => restaurant.id !== action.id);
            return { ...state, restaurants }
        case 'ADD_REVIEW':
            const review = { text: action.review.text, restaurantId: action.review.restaurantId, id: cuid() };
            return {
                ...state,
                reviews: [...state.reviews, review]
            }
        case "DELETE_REVIEW":
            const reviews = state.reviews.filter(revie => revie.id !== action.id);
            return {...state, reviews}

        default: 
            return state
    }


}
