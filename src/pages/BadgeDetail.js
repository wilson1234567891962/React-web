import React from 'react';
import confLogo from '../components/images/platziconf-logo.svg';
import '../components/styles/BadgeDetails.css';
import { Link } from 'react-router-dom';
import Badge from '../components/js/Badge.js';
import DeleteBadgeModal from '../components/js/DeleteBadgeModal.js';

function useIncreaseCount(max) {
    const [count, setCount] = React.useState(0);
    if (count > max) {
        setCount(0)
    }
    return [count, setCount];
}

function BadgeDetails(props) {
    const [count, setCount] = useIncreaseCount(5)
    const badge = props.badge;
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
                                <Link className="btn btn-primary mb-4" to={`/badges/${badge.id}/edit`}>
                                    Edit
                                </Link>
                            </div>
                            <div>
                                <button onClick={props.onOpenModal} className="btn btn-danger">
                                    Delete
                                </button>

                                <DeleteBadgeModal
                                    onDeleteBadge={props.onDeleteBadge}
                                    isOpen={props.modalIsOpen}
                                    onClose={props.onCloseModal} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BadgeDetails;