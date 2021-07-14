// import React, { useContext, useState } from 'react'
// import { connect } from 'react-redux'
// import { FavContext } from '../../Context/Favcontext';
// import Newproduct from '../Products/Newproduct';
// import SingleItem from '../SingleItem/SingleItem';
// import Mappedfav from './Mappedfav'

// function Fav({products}) {
//     const [fav, setFav] = useContext(FavContext);
    
 
//     const addToCart=(product)=>{
//       setFav([...fav,{...product}])
//     }
//     let [fruits] = useState([
//         {
//           id: 1,
//           name: "Organic Bannas",
//         //   image: Bannas,
//           price: "$4.99",
//           description: "7pcs priceg",
//           inCart: false,
//         },
//         {
//           id: 2,
//           name: "Red Apple",
//         //   image: Apples,
//           price: "$4.99",
//           description: "7pcs priceg",
//           inCart: false,
//         },
//         {
//           id: 3,
//           name: "Red Apple",
//         //   image: Apples,
//           price: "$4.99",
//           description: "7pcs priceg",
//           inCart: false,
//         },
//         {
//           id: 4,
//           name: "Red Apple",
//         //   image: Apples,
//           price: "$4.99",
//           description: "7pcs priceg",
//           inCart: false,
//         },
//       ]);
//     return (
//         <div>
//          {fav.map((item) => {
//                 return <div >
//                          <Mappedfav  name={item.name}
//                          price={item.price}
//                                      addToCart={addToCart}
                
//                 >
//                 </Mappedfav>

//                 </div>
//             })}
            
//             </div>
        
//     )
// }
// const mapStateToProps= (state) =>{
//     return{
//       products:state.shop.products,
//       newProducts:state.shop.newProducts,
//       gorceries:state.shop.gorceries
//     }
//   }

// export default connect(mapStateToProps) (Fav)
