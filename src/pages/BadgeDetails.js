import React from 'react';
import confLogo from '../components/images/platziconf-logo.svg';
import '../components/styles/BadgeDetails.css';
import PageLoading from '../components/js/PageLoading.js';
import PageError from '../components/js/PageError.js';
import Badge from '../components/js/Badge.js';
import api from '../api.js';
import { Link } from 'react-router-dom';

class BadgeDetails extends React.Component {
    state = {
        loading: true,
        error: null,
        data: undefined
    }

    componentDidMount() {
        this.fetchData();
    }

    fetchData = async () => {
        this.setState({
            loading: true,
            error: null
        })

        try {
            const data = await api.badges.read(
                this.props.match.params.badgeId
            )
            this.setState({
                loading: false,
                data: data
            })
        } catch (error) {
            this.setState({
                loading: false,
                error: error
            })
        }
    }

    render() {
        if (this.state.loading) {
            return <PageLoading />
        }

        if (this.state.error) {
            return <PageError error={this.state.error} />
        }

        const badge = this.state.data;

        return (
            <div>
                <div className="BadgeDetails__hero">
                    <div className="container">
                        <div className="row">
                            <div className="col-6">
                                <img src={confLogo} alt="Logo de la conferencia" />
                            </div>
                            <div className="col-6" className="BadgeDetails__hero-attendant-name">
                                <h1>
                                    {badge.firstName}  {badge.lastName}
                                </h1>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <Badge
                                firstName={badge.firstName}
                                lastName={badge.lastName}
                                email={badge.email}
                                twitter={badge.twitter}
                                jobTitle={badge.jobTitle} />
                        </div>
                        <div className="col">
                            <h2>Action</h2>
                            <div>
                                <div>
                                    <Link  className="btn btn-primary mb-4" to={`/badges/${badge.id}/edit`}>
                                        Edit
                                    </Link>
                                </div>
                                <div>
                                    <button className="btn btn-danger">
                                        Delete
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default BadgeDetails;