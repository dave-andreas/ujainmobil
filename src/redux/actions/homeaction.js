import axios from 'axios';

export const listaction = () => {
    return async (dispatch) => {
        try {
            const res = await axios.get('https://developers.zomato.com/api/v2.1/search?start=1&count=10&sort=rating',{
                            headers:{
                                "user-key":"cbc7bdb926593efe33cae76457125f05"
                            }
                        })
            // console.log('masuk')
            console.log(res.data.restaurants[0].restaurant.name)
            console.log(res.data.restaurants[0].restaurant.featured_image)
            dispatch({
                type: 'GET_LIST',
                payload: res.data.restaurants
            })
        } catch (err) {
            console.log(err)
        }
    }
}