import api from './axios';

//-------------------
// Main catergoires
//-------------------

export async function MainCategories (){
    try{
        const response = await api.get('/category/main/categories');
        return response.data
    }catch(error){
        throw error.response?.data || {
        message: "Something went wrong",
        status: "error"
    };
    }
}
/**
 * the api is to get the array of all the categories we have
 * the endpoint is ('category/main/categories')
 */