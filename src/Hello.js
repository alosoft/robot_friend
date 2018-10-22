import React, {Component} from 'react';
import './Hello.css';

const Hello = (props) => {
    return (
        <div>
            <h1 className='f1 tc'>Hello, World!</h1>
            <p>Welcome to React</p>
            <p>{props.greeting}</p>
        </div>
    )
};
//
// class Hello extends Component {
//     render() {
//         return(
//             <div>
//                 <h1 className='f1 tc'>Hello, World!</h1>
//                 <p>Welcome to React</p>
//                 <p>{this.props.greeting}</p>
//             </div>
//         )
//     }
// }

export default Hello;