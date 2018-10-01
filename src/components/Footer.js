import React, {Component} from 'react'
import './Footer.css';

export default class footer extends Component {
    render() {
        return (
            <div>
                <footer className="footer">
                    <div className="container">
                        <span className="text-muted">&copy; Louis 2018</span>
                    </div>
                </footer>
            </div>
        )
    }
}
