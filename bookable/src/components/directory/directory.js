// import React from 'react';
// import MenuItem from '../menu-item/menu-item.component';
// import './directory.styles.scss';

// //need class component to store state values of the menu items
// class Directory extends React.Component {
//     constructor() {
//         super(); //pulls in all the info needed from the directory class

//         this.state = {
//             sections: [{
//                 title: 'hats',
//                 imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
//                 id: 1,
//                 //linkUrl: 'shop/hats' 
//             },
//             {
//                 title: 'jackets',
//                 imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
//                 id: 2,
//                 //linkUrl: 'shop/jackets'
//               },
//               {
//                 title: 'sneakers',
//                 imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
//                 id: 3,
//                 //linkUrl: 'shop/sneakers'
//               },
//               {
//                 title: 'womens',
//                 imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
//                 size: 'large', //changes the size of the image, must be passed into the component
//                 id: 4,
//                 //linkUrl: 'shop/womens'
//               },
//               {
//                 title: 'mens',
//                 imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
//                 size: 'large',
//                 id: 5,
//                 //linkUrl: 'shop/mens'
//               }]
//         }
//     }
//     render(){
//         return (
//             <div className='directory-menu'>
//                 {
//                     this.state.sections.map(({title, imageUrl, id, size}) => (  //destructure to get all props from item
//                         <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} />
//                     ))
//                 }
//             </div>    
//         );
//     }
// }

// export default Directory;