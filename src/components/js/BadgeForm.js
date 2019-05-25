import React from 'react';

class BadgeForm extends React.Component {
    state={
        firstName:'',
        lastName:''
    };
    handleChange = (e) => {
        this.setState(
            {
                [e.target.name]: e.target.value
            })
    };

    handleClick = (e) => {
        console.log('Button on click');
    };

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state)
    };

    render() {
        return (
            <div>
                <h1>New attendant</h1>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label >First name</label>
                        <input
                            value={this.state.firstName}
                            onChange={this.handleChange}
                            className="form-control"
                            type="text"
                            name="firstName"></input>
                    </div>
                    <div className="form-group">
                        <label >Last name</label>
                        <input
                            value={this.state.lastName}
                            onChange={this.handleChange}
                            className="form-control"
                            type="text"
                            name="lastName"></input>
                    </div>
                    <div className="form-group">
                        <label >Email</label>
                        <input
                            value={this.state.email}
                            onChange={this.handleChange}
                            className="form-control"
                            type="email"
                            name="email" />
                    </div>
                    <div className="form-group">
                        <label >Twitter</label>
                        <input
                            value={this.state.twitter}
                            onChange={this.handleChange}
                            className="form-control"
                            type="text"
                            name="twitter" />
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