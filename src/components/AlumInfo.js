import React from 'react'

class AlumInfo extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <div>
        <div className="AlumInfo">
          <h2> {this.props.name}</h2>
          <img src={this.props.alumImage} height="300" />
          <p> Grad Year: {this.props.gradyear}</p>
          <p> Pledge Class: {this.props.pc}</p>
          <p> Major: {this.props.major}</p>
          <a href={this.props.companyurl}>
            <p> Company: {this.props.company}</p>
          </a>
          <p> Position: {this.props.position}</p>
          <p>
            {' '}
            About {this.props.name}: {this.props.description}
          </p>
        </div>
      </div>
      //hari
    )
  }
}





export default AlumInfo
