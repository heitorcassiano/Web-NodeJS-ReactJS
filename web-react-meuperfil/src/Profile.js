import React, { Component } from 'react';
import './Profile.css';

class Profile extends Component {
    render() {
  
      let img = 'https://pbs.twimg.com/profile_images/1436489619672125440/VmmPH9Ig_400x400.jpg';

      return (
        <img src={img} width={250} height={250} />
      );
    }
  }

  export default Profile;