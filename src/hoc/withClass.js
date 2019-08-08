import React, {Component} from 'react';

// const withClass = (WrappedComponent, classes) => {
//     return (props)=>(
//         <div className={classes}>
//             <WrappedComponent {...props} />
//         </div>
//     );
// }

//Class Based HOC
const withClass = (WrappedComponent, classes) => {
    return class extends Component {// anonymous class.. class factory
        render() {
            return (
                <div className={classes}>
                    <WrappedComponent {...this.props} />
                </div>
            );
        }
    }
    
   
}

export default withClass;