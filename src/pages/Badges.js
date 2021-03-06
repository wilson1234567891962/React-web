import React from 'react';
import '../components/styles/Badges.css'
import confLogo from '../components/images/badge-header.svg'
import BadgesList from '../components/js/BadgesList'
import { Link } from 'react-router-dom'
import api from '../api.js';
import PageLoading from '../components/js/PageLoading.js';
import PageError from '../components/js/PageError.js';
import MiniLoader from '../components/js/MiniLoader';

class Badges extends React.Component {
    state = {
        loading: true,
        error: null,
        data: undefined,
    };

    componentDidMount() {
        this.fetchData();
        this.intervalId = setInterval(this.fetchData, 5000)
    }

    fetchData = async () => {
        this.setState({ loading: true, error: null });

        try {
            const data = await api.badges.list();
            this.setState({ loading: false, data: data });
        } catch (error) {
            this.setState({ loading: false, error: error });
        }
    };

    componentDidUpdate(prevProps, prevState) {
        console.log('5. componentDidUpdate()');
        console.log({
            prevProps: prevProps,
            prevState: prevState,
        });

        console.log({
            props: this.props,
            state: this.state,
        });
    }

    componentWillUnmount() {
        console.log('6. componentWillUnmount');
        clearTimeout(this.timeoutId);
        clearInterval(this.intervalId);
    }

    render() {
        if (this.state.loading === true && !this.state.data) {
            return <PageLoading />;
        }
        if (this.state.error) {
            return <PageError error={this.state.error} />;
        }

        return (
            <React.Fragment>
                <div className="Badges">
                    <div className="Badges__hero">
                        <div className="Badges__container">
                            <img
                                className="Badges_conf-logo"
                                src={confLogo}
                                alt="Conf Logo"
                            />
                        </div>
                    </div>
                </div>

                <div className="Badges__container">
                    <div className="Badges__buttons">
                        <Link to="/badges" className="btn btn-primary">
                            New Badge
              </Link>
                    </div>
                    <BadgesList badges={this.state.data} />
                    {this.state.loading && <MiniLoader />}
                </div>
            </React.Fragment>
        );
    }
}

export default Badges;