import React from 'react';
import header from '../components/images/badge-header.svg';
import NavBar from '../components/js/NavBar';
import '../components/styles/BadgeNew.css';
import Badge from '../components/js/Badge';

class BadgeNew extends React.Component {
  render() {
    return (
      <div>
        <NavBar />
        <div className="BadgeNew__hero">
          <img className="img-fluid" src={header} alt="logo"></img>
        </div>
        <div className="container">
          <div className="row">
            <div className="col">
              <Badge
                firstName="Alejandro"
                lastName="Gonzalez"
                twitter="https://twitter.com/gittetitter?lang=es"
                jobTitle="Developer"
                avatarUrl="https://pbs.twimg.com/profile_images/1610425251/ikke_400x400.jpg"
             />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BadgeNew;
