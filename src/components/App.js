import React, {Component} from 'react';
import Item from './Item';
import images from '../listeImages';

class App extends Component {
    state = {
        ...images
    }

    render() {
        const images = Object
            .keys(this.state)
            .map(image => {
              return <Item key={image} details={this.state[image]}/>
            }
        );
        return(
            <div className="container">
                { images }
            </div>

        )
    }
}

export default App;
