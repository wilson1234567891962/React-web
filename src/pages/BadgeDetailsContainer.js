import React from 'react';
import PageLoading from '../components/js/PageLoading.js';
import PageError from '../components/js/PageError.js';
import api from '../api.js';
import BadgeDetails from './BadgeDetail.js';


class BadgeDetailsContainer extends React.Component {
    state = {
        loading: true,
        error: null,
        data: undefined,
        modalIsOpen: false
    }

    handleCloseModal = e => {
        this.setState({ modalIsOpen: false })
    }

    handleDeleteBadge = async e => {
        this.setState({
            loading: true,
            error: null
        })

        try {
            const data = await api.badges.remove(
                this.props.match.params.badgeId
            )
            this.setState({
                loading: false
            })
            this.props.history.push('/badges/new');
        } catch (error) {
            this.setState({
                loading: false,
                error: error
            })
        }
    }

    handleOpenModal = e => {
        this.setState({ modalIsOpen: true })
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

        return (
            <BadgeDetails
                onCloseModal={this.handleCloseModal}
                onOpenModal={this.handleOpenModal}
                modalIsOpen={this.state.modalIsOpen}
                onDeleteBadge={this.handleDeleteBadge}
                badge={this.state.data} />
        );

    }
}

export default BadgeDetailsContainer;