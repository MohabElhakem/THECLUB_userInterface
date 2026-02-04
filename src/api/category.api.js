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
        message: "Something went wrong on the MainCategory",
        status: "error"
    };
    }
}
/**
 * the api is to get the array of all the categories we have
 * the endpoint is ('category/main/categories')
 */


//--------------------
// New Category
//--------------------

export async function NewCategory(info){
    try{
        const response = await api.post('/category/new/category',info)
        return response.data
    }
    catch(error){
        throw error.response?.data ||{
            message: "Something went wrong on the newCategory",
            status: error
        }
    }
}


//---------------------
// Featch a Category
//---------------------
export async function FetchCategory(id) {
    try{
        const response = await api.get(`/category/${id}`);
        return response.data
    }catch(error){
        throw error.response?.data||{
            message: "somthing went wrong on featch teh category",
            status: error
        }
    }
}