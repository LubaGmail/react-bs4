import React, {Component} from 'react'
import './Jumbotron.css';

export default class Jumbotron extends Component {
    render() {
        return (
            <div>
                <div className="jumbotron jumbotron-fluid">
                    <div className="container">
                        <h2>{this.props.title}</h2>
                        <h3>{this.props.subtitle}</h3>
                    </div>
                </div>
            </div>
        )
    }
}
