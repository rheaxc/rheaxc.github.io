import React from 'react'

class AlumInfo extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <div>
        <div className="Alum Name">
          <h2> {this.props.name}</h2>
          <img src={this.props.alumImage} height="400" />
          <h4> Grad Year: {this.props.gradyear}</h4>
          <h4> Pledge Class: {this.props.pc}</h4>
          <h4> Major: {this.props.major}</h4>
          <a href={this.props.companyurl}>
            <h4> Company: {this.props.company}</h4>
          </a>
          <h4> Position: {this.props.position}</h4>
          <h4>
            {' '}
            About {this.props.name}: {this.props.description}
          </h4>
        </div>
      </div>
    )
  }
}

export default AlumInfo
