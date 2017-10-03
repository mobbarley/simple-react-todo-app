import React from 'react';
import FaBeer from 'react-icons/fa/beer';
import css from './css/list-item.css';

class ListItem extends React.Component {
    constructor(props) {
        super(props);
    }
    // Handle Event
    deleteItem() {
        this.props.onDelete(this.props.item);
    }
    render() {
        return(
            <li>
                <div className="todo-item">
                    <span className="item-name">{this.props.item}</span>
                    <span className="item-delete" onClick={this.deleteItem}><FaBeer /></span>
                </div>
            </li>
        );
    }
}

export default ListItem;
