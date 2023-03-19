import DogCard from "./DogCard";
import style from "./DogGrid.module.css"

export default function DogGrid(){
   
    const currentDogs= [ {image:"https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/Dobermann_handling.jpg/1200px-Dobermann_handling.jpg",
                        name:"Doberman",
                        temperaments:"20 - 23",
                        weight: 55},
                        {image:"http://c.files.bbci.co.uk/48DD/production/_107435681_perro1.jpg",
                        name:"Doberman",
                        temperaments:"20 - 23",
                        weight: 55},
                        {image:"https://cdn.onemars.net/sites/nutro_es_NkyIN_B9cV/image/10_1615903151158.jpeg",
                        name:"Doberman",
                        temperaments:"20 - 23",
                        weight: 55} ,
                        {image:"https://www.lavanguardia.com/files/image_449_253/uploads/2022/02/21/621391080a714.jpeg",
                        name:"Doberman",
                        temperaments:"20 - 23",
                        weight: 55} ,
                        {image:"https://imagenes.20minutos.es/files/og_thumbnail/uploads/imagenes/2023/03/10/640b22403a39e.jpeg",
                        name:"Doberman",
                        temperaments:"20 - 23",
                        weight: 55} ,
                        {image:"https://images.ecestaticos.com/6sBfqVAafBgDnRSzgexcXrntPxs=/0x0:1254x836/1200x900/filters:fill(white):format(jpg)/f.elconfidencial.com%2Foriginal%2Fad9%2F5c2%2F36b%2Fad95c236b7d6ce4df06290141f7fa00a.jpg",
                        name:"Doberman",
                        temperaments:"20 - 23",
                        weight: 55} ,
                        {image:"https://cvfaunia.com/wp-content/uploads/2020/11/123004876_3609155692482412_2049794398247296546_n.jpg",
                        name:"Doberman",
                        temperaments:"20 - 23",
                        weight: 55} ,
                        {image:"https://images.ecestaticos.com/h34TvzTFVdrau9Un4Wdmwhed_e4=/0x115:2265x1390/1200x900/filters:fill(white):format(jpg)/f.elconfidencial.com%2Foriginal%2F8ec%2F08c%2F85c%2F8ec08c85c866ccb70c4f1c36492d890f.jpg",
                        name:"Doberman",
                        temperaments:"20 - 23",
                        weight: 55}]
   
   
   
    return(
    <ul className={style.container}>
        {currentDogs.map((dog)=>
       
       <li key={dog.name}>

            <DogCard
            image={dog.image}
            name={dog.name}
            temperaments={dog.temperaments}
            weight={dog.weight}
            />
        </li>
        )}
    
    </ul>
   )
}