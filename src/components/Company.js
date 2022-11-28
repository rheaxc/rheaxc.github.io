import React from 'react'

class Company extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <div>
        <div className="company">
          <h2> {this.props.name} </h2>
        </div>
        <div className="image">
          <a href={this.props.url}>
            <img src={this.props.image} height="100" />
          </a>
        </div>
      </div>
    )
  }
}

export default Company
