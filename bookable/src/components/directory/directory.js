// import React from 'react';
// import MenuItem from '../../components/menu-item/menu-item.js';
// import './directory.styles.scss';

// //need class component to store state values of the menu items
// class Directory extends React.Component {
//     constructor() {
//         super(); //pulls in all the info needed from the directory class

//         this.state = {
//             sections: [{
//                 title: 'horror',
//                 image: '',
//                 id: 1,
//                 //linkUrl: 'show/horror' 
//             },
//             {
//                 title: 'suspense',
//                 image: '',
//                 id: 2,
//                 //linkUrl: 'show/suspense'
//               },
//               {
//                 title: 'mystery',
//                 image: '',
//                 id: 3,
//                 //linkUrl: 'show/mystery'
//               },
//               {
//                 title: 'thriller',
//                 image: '',
//                 size: 'large', //changes the size of the image, must be passed into the component
//                 id: 4,
//                 //linkUrl: 'show/thriller'
//               },
//               {
//                 title: 'romance',
//                 image: '',
//                 size: 'large',
//                 id: 5,
//                 //linkUrl: 'show/romance'
//               }]
//         }
//     }
//     render(){
//         return (
//             <div className='directory-menu'>
//                 {
//                     this.state.sections.map(({title, image, id, size}) => (  //destructure to get all props from item
//                         <MenuItem key={id} title={title} image={image} size={size} />
//                     ))
//                 }
//             </div>    
//         );
//     }
// }

// export default Directory;