import React from 'react';
import header from '../components/images/platziconf-logo.svg';
import '../components/styles/BadgeNew.css';
import Badge from '../components/js/Badge';
import BadgeForm from '../components/js/BadgeForm';
import api from '../api.js';
import PageLoading from '../components/js/PageLoading.js';

class BadgeNew extends React.Component {
  state = {
    loading: false,
    error: null,
    form: {
      firstName: '',
      lastName: '',
      email: '',
      twitter: '',
      jobTitle: ''
    }
  };

  handleSubmit = async e => {
    e.preventDefault();
    this.setState({ loading: true, error: null })
    try {
      await api.badges.create(this.state.form);
      this.setState({ loading: false })
      this.props.history.push('/badges/new');
    } catch (error) {
      this.setState({ loading: false, error: error })
    }
  }

  handleChange = e => {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value,
      }
    })
  }

  render() {
    if (this.state.loading) {
      return <PageLoading />;
    }
    return (
      <React.Fragment>
        <div className="BadgeNew__hero">
          <img className="BadgeNew__hero-image img-fluid" src={header} alt="logo"></img>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-6">
              <Badge
                firstName={this.state.form.firstName || ''}
                lastName={this.state.form.lastName || ''}
                twitter={this.state.form.twitter || ''}
                jobTitle={this.state.form.jobTitle || ''}
                email={this.state.form.email || ''}
                avatarUrl="https://www.gravatar.com/avatar/21594ed15d68ace3965642162f8d2e84?d=identicon"
              />
            </div>
            <div className="col-6">
              <h1>New attendant</h1>
              <BadgeForm
                onChange={this.handleChange}
                onSubmit={this.handleSubmit}
                formValues={this.state.form}
                error={this.state.error} />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default BadgeNew;
