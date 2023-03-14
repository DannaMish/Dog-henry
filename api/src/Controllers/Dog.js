const { Dog } = require("../db");
const axios = require("axios");
const { API_KEY } = process.env;


const getApiInfo = async()=>{
const apiUrl= await axios.get(`https://api.thedogapi.com/v1/breeds?api_key=${API_KEY}`);
const apiInfo = await apiUrl.data.map(dog => {
    console.log(apiInfo);
            return ({
                id: dog.id,
                image: dog.image.url,
                name: dog.name,
                height: dog.height.metric,
                weight: dog.weight.metric,
                life_span: dog.life_span,
            });
            
        });
        return getApiInfo;
};

const getDbInfo = async ()=>{
    return await Dog.findAll({
        include:{
            attributes:["name"],
            througth:{
                attributes: [],
            },
        }
    })
}


