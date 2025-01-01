import { type } from "os";

 export const bookSchema =
{

    name:"book",
    title:"Book",
    type:"document",
    fields:[

        {name:"name",
            title:"Book Name",
          type:"string"
        },
        {name:"description",
            title:"Book description",
            type:"string"

        },
        {
            name:"price",
            title:"Book Price",
            type :"number"
        },

        {name:"thumbnail",
            title:"Book thumbnail",
            type:"array",
           of:[{
            type:"image"
           }]

        } ,{
            name:"genre",
            title:"Book Type",
           type:"reference",
           to:[{
            type:"genre"
           }]
        },
        {
            name:"slug",
            title:"Slug",
            type :"slug",
            options:{
                source:"name",
                maxLength:96
            }
        },
    ]
}