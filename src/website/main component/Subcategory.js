import React from 'react'

const Subcategory = () => {
    const [sub, setsub] = useState([])
    fetch("https://vsmart.ajspire.com/api/subcategories/1").then(
        response => {
            return response.json();
        }
    ).then(
        data => {
            setsub(data.subcategories)
        }
    )
  return (
    <div>
{
    sub.map((el)=>
    {
        return (
            
            name=(el.subcategory_name);
        )

    })
}

    </div>
  )
}

export default Subcategory