import React, { Component } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Jambotron from '../components/Jumbotron';
import './Home.css';

export default class Home extends Component {
  render() {

    const homeStyle = {
        // backgroundColor: 'gold',
    }
    return (
      <div>
        <Navbar />
        <Jambotron title='Home' subtitle='Home subtitle' />
        <div className='container ex1' style={homeStyle}>
                <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur venenatis sem eget euismod aliquet. Quisque consequat dolor diam, sed finibus purus sollicitudin ut. Nunc eleifend enim at ante bibendum mollis. Pellentesque sollicitudin, nisl nec ullamcorper venenatis, velit orci ultricies ante, vitae efficitur odio tortor vitae magna. Sed maximus, nunc non ultricies tincidunt, diam mi volutpat lacus, quis vestibulum neque est ut velit. Maecenas accumsan et erat non pellentesque. Maecenas vulputate, nisl ac sollicitudin pharetra, nisl nisi lacinia odio, ut elementum magna dolor eu mauris. Proin in nunc eget arcu varius luctus. Pellentesque pretium ultrices nulla, ac sodales mauris fringilla non.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur venenatis sem eget euismod aliquet. Quisque consequat dolor diam, sed finibus purus sollicitudin ut. Nunc eleifend enim at ante bibendum mollis. Pellentesque sollicitudin, nisl nec ullamcorper venenatis, velit orci ultricies ante, vitae efficitur odio tortor vitae magna. Sed maximus, nunc non ultricies tincidunt, diam mi volutpat lacus, quis vestibulum neque est ut velit. Maecenas accumsan et erat non pellentesque. Maecenas vulputate, nisl ac sollicitudin pharetra, nisl nisi lacinia odio, ut elementum magna dolor eu mauris. Proin in nunc eget arcu varius luctus. Pellentesque pretium ultrices nulla, ac sodales mauris fringilla non.
          </p>
        </div>

        <Footer />
      </div>
    )
  }
}
