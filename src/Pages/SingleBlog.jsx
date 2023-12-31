import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { FaClock,FaUser } from 'react-icons/fa';
import {useEffect,useState} from 'react'

const SingleBlog = () => {
   
    const[data,setBlogs]=useState([]);
   
    
    useEffect(()=>{
        fetch('generated.json'
       
        )
          .then(function(response){
            
            return response.json();
          })
          .then(function(myJson) {
           
            setBlogs(myJson)
          }),[]})
        
   
   
    return (
        <div className='py-40 p-9'>
        
         <div className=''>
                        <img src={data[0].image} alt="" className='w-full rounded' />
                    </div>
                    <h3 className='mt-4 mb-2 font-bold hover:text-blue-700 cursor-pointer' id='name'>{data[0].title}</h3>
                    <p className='mb-2 text-sm text-gray-500'><FaUser className='inline-flex items-center mr-2'></FaUser>{data[0].author}</p>
                    <p className='text-sm text-gray-500'>Published: {data[0].published_date}</p>
                    <p className='text-sm text-gray-500'><FaClock className='inline-flex items-center mr-2'></FaClock>{data[0].reading_time}</p>
                    <p className='text-sm text-gray-500 mt-5'>{data[0].content} Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate earum culpa error minus atque accusamus et minima iste exercitationem ex adipisci eveniet ipsa, assumenda voluptatum dolorum veniam inventore laudantium sapiente, dignissimos voluptas at doloremque soluta! Possimus excepturi voluptatum minus recusandae iusto perferendis, aspernatur minima doloribus error aliquid quia unde voluptas fugiat corrupti porro! Placeat delectus fugiat maiores voluptates nostrum non quod earum eaque suscipit expedita, error ad vitae nesciunt veritatis nihil aperiam maxime aliquid similique. Repellat, quod nam id voluptate eum ducimus eaque debitis molestiae suscipit, aliquam soluta! Laborum atque necessitatibus odio facere non rem quam accusantium eos sequi, unde dolorum praesentium ipsum ex! Molestiae ducimus voluptatum iure odit corrupti optio, quos blanditiis impedit? Dignissimos, neque facilis voluptatem dolor necessitatibus id suscipit sequi quasi harum doloremque recusandae! Quo, corrupti cupiditate ut ipsum beatae voluptate, nobis dolore eum omnis reprehenderit aut consequatur veritatis doloremque inventore impedit quis dolorem illo tempora facere nam eaque fugit. Odit unde repellendus temporibus! Aspernatur, ullam! Id dolorum possimus, aperiam officiis, voluptatibus repudiandae officia ullam molestiae unde, commodi doloribus tempora corporis veniam nemo aut cumque? Quidem adipisci nisi praesentium error voluptatum dicta, perferendis in nesciunt architecto quo ipsa et id optio itaque aliquid? Optio vero fugiat quasi vitae architecto quos nulla, corrupti magni, sequi porro amet distinctio necessitatibus alias doloribus ut. Blanditiis labore vitae eos excepturi laboriosam cum officiis modi incidunt, assumenda aspernatur molestias natus magnam impedit optio, asperiores sed voluptates et temporibus praesentium? Maiores facilis quos modi eaque debitis natus molestias tempora! Aspernatur sequi adipisci, ea expedita deserunt quas. Repudiandae, dignissimos fuga impedit praesentium libero doloremque natus, neque sit corrupti placeat rerum vitae dolor ratione consequuntur harum cupiditate unde? Odit ratione iusto ipsum cumque rem tenetur suscipit natus at iure magni! Quia cupiditate animi neque provident hic perspiciatis sed nobis aliquam natus nam voluptate ipsum enim, placeat dolorum consectetur beatae consequuntur dolorem distinctio, qui fugit harum? Assumenda quisquam nostrum praesentium ad <br /> <br></br> Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe laudantium illo commodi soluta sunt! Nisi ab assumenda laboriosam tempora, ut non est dolore quos illo ipsum voluptatibus modi eligendi beatae soluta enim sit repudiandae totam reiciendis. Fugit, architecto! Dolore, voluptatum! Iure dicta eligendi repellendus optio doloremque magnam dolorum ad quae aliquid. Qui earum nemo nulla voluptates fugiat minima doloremque commodi vero dolorem, beatae repellendus ipsa, asperiores dolor nobis voluptate ipsam nesciunt tempore consequatur vitae, natus culpa animi? Inventore itaque porro sapiente id perspiciatis libero labore voluptatem qui quibusdam praesentium consequuntur quo pariatur, ex minima laborum quas eligendi modi necessitatibus autem doloremque, laudantium architecto. Distinctio eaque velit eveniet vel optio quam, ratione soluta, deserunt numquam quos quasi impedit officia, odio laboriosam nulla eos saepe totam quas modi debitis amet eligendi perferendis! Alias in perspiciatis corrupti doloribus? Molestias corporis magni mollitia quos minus, culpa corrupti voluptates architecto quasi ipsa, nobis qui. Expedita magni dolorem qui sequi doloribus incidunt assumenda, impedit ad fuga asperiores natus corrupti optio voluptatum perferendis reiciendis minima repellat odio unde veniam ipsam placeat quasi. Laboriosam, cumque esse ducimus sit expedita, sed repellendus aliquid quis facilis mollitia iste. Architecto error quidem possimus totam veritatis animi nisi, provident labore minus quis!</p>

        </div>
    );
};

export default SingleBlog;