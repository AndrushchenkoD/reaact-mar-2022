import React, {Component} from 'react';

class Comment extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const {name, body, id} = this.props.comment;
        return (
            <div>
                {id}--{name}--{body}
            </div>
        );
    }
}

export {Comment};