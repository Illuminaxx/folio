import React, {Component} from 'react';
import PropTypes from 'prop-types';


class Item extends Component {
    render() {
        return(
            <div >
                <img className="image" src={this.props.details.link}
                     alt={this.props.details.title}/>
                <p>{this.props.details.title}</p>
            </div>

        )
    }

    static propTypes = {
        details: PropTypes.object.isRequired
    }
}

export default Item;
