import React from 'react'

export default class App extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            isLoading: false,
            exists: false,
            notExists: false,
            user: ""
        }
    }

    handleUserChange(event) {
		this.setState({user: event.target.value})
	}

    handleSubmit(e) {
        e.preventDefault();
        this.setState({
            exists: false,
            notExists: false,
            isLoading: true,
        })
        const user = this.state.user.replace(/\s/g, "");
        setTimeout(() => {
            fetch(`https://api.github.com/users/${user}`)
                .then(data => data.json())
                .then(data => {
                    if (data.message === "Not Found") {
                        this.setState({
                            exists: false,
                            notExists: true,
                            isLoading: false
                        })
                    } else {
                        this.setState({
                            exists: true,
                            notExists: false,
                            isLoading: false
                        })
                    };
                })
                .catch(err => console.log(err));
        }, 500)
    };

    render() {
        return (
            <div className="container">
                <form onSubmit={this.handleSubmit.bind(this)} className="form">
                    <div className="title">Search for Github username availability!</div>
                    <input
                        type="text"
                        placeholder="Enter username"
                        required
                        value={this.state.user}
                        onChange={this.handleUserChange.bind(this)}
                    />
                    <button className="button">Search</button>
                </form>
                {this.state.isLoading ? <div className="message loading">Loading...</div> : null}
                {this.state.exists ? (
                    <div className="message">Username already exists!</div>
                ) : null}
                {this.state.notExists ? (
                    <div className="message">Username available.</div>
                ) : null}
            </div>
        )
    }
}
