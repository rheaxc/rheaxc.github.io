import React from 'react'

class Company extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <div className="image">
        <a href={this.props.url}>
          <img src={this.props.image} height="100" />
        </a>
      </div>
      //hari
    )
  }
}

export default Company
