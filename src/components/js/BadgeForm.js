import React from 'react';

class BadgeForm extends React.Component {

    handleClick = (e) => {
        console.log('Button on click');
    };

    render() {
        return (
            <div>
                <h1>New attendant</h1>
                <form onSubmit={this.props.onSubmit}>
                    <div className="form-group">
                        <label >First name</label>
                        <input
                            value={this.props.formValues.firstName}
                            onChange={this.props.onChange}
                            className="form-control"
                            type="text"
                            name="firstName"></input>
                    </div>
                    <div className="form-group">
                        <label >Last name</label>
                        <input
                            value={this.props.formValues.lastName}
                            onChange={this.props.onChange}
                            className="form-control"
                            type="text"
                            name="lastName"></input>
                    </div>
                    <div className="form-group">
                        <label >Email</label>
                        <input
                            value={this.props.formValues.email}
                            onChange={this.props.onChange}
                            className="form-control"
                            type="email"
                            name="email" />
                    </div>
                    <div className="form-group">
                        <label >Twitter</label>
                        <input
                            value={this.props.formValues.twitter}
                            onChange={this.props.onChange}
                            className="form-control"
                            type="text"
                            name="twitter" />
                    </div>
                    <div className="form-group">
                        <label >Job</label>
                        <input
                            value={this.props.formValues.jobTitle}
                            onChange={this.props.onChange}
                            className="form-control"
                            type="text"
                            name="jobTitle" />
                    </div>
                    <div>
                        <button onClick={this.handleClick} className="btn btn-primary">Save</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default BadgeForm;