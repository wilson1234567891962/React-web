import React from 'react';
import header from '../components/images/badge-header.svg';
import NavBar from '../components/js/NavBar';
import '../components/styles/BadgeNew.css';
import Badge from '../components/js/Badge';
import BadgeForm from '../components/js/BadgeForm';

class BadgeNew extends React.Component {
  state = {
    form: {
      firstName: '',
      lastName: '',
      email: '',
      twitter: ''
    }
  };

  handleChange = e => {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value,
      }
    })
  }

  render() {
    return (
      <div>
        <NavBar />
        <div className="BadgeNew__hero">
          <img className="img-fluid" src={header} alt="logo"></img>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-6">
              <Badge
                firstName="Alejandro"
                lastName="Gonzalez"
                twitter="https://twitter.com/gittetitter?lang=es"
                jobTitle="Developer"
                avatarUrl="https://pbs.twimg.com/profile_images/1610425251/ikke_400x400.jpg"
              />
            </div>
            <div className="col-6">
              <BadgeForm onChange={this.handleChange} formValues={this.state.form} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BadgeNew;
