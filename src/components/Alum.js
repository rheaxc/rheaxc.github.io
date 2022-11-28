import React from 'react'
import Company from './Company'
import AlumInfo from './AlumInfo'

class Alum extends React.Component {
  constructor() {
    super()
    this.state = {}
  }

  render() {
    const data = [
      {
        url: 'https://www.meta.com/',
        name: 'Meta',
        imagePath: 'companies/meta-logo.png',
      },
      {
        url: 'https://www.microsoft.com/en-us/?ql=4',
        name: 'Microsoft',
        imagePath: 'companies/microsoft-logo.png',
      },
      {
        url: 'https://www.youtube.com/',
        name: 'Youtube',
        imagePath: 'companies/youtube-logo.png',
      },
      {
        url: 'https://www.stryker.com/',
        name: 'Stryker',
        imagePath: 'companies/stryker-logo.png',
      },
      {
        url: 'https://www.subaru.com/index.html',
        name: 'Subaru',
        imagePath: 'companies/subaru-logo.png',
      },
      {
        url: 'https://www.spacex.com/',
        name: 'SpaceX',
        imagePath: 'companies/spacex-logo.jpeg',
      },
      {
        url: 'https://www.capitalone.com/',
        name: 'Capital One',
        imagePath: 'companies/capitalone-logo.png',
      },
    ]

    const list = data.map((company) => (
      <Company
        url={company.url}
        image={company.imagePath}
        name={company.name}
        key={company.name}
      />
    ))
    const data2 = [
      {
        name: 'name',
        gradyear: '2021',
        major: 'CS',
        company: 'company',
        companyurl: 'https://www.meta.com/',
        position: 'position',
        description: 'description',
        pc: 'pc name',
        alumImage: 'alumni/Hari.JPG',
      },
      {
        name: 'name2',
        gradyear: '2021',
        major: 'CS',
        company: 'company',
        companyurl: 'https://www.meta.com/',
        position: 'position',
        description: 'description',
        pc: 'pc name',
        alumImage: 'alumni/Hari.JPG',
      },
    ]
    const list2 = data2.map((alumni) => (
      <AlumInfo
        name={alumni.name}
        gradyear={alumni.gradyear}
        major={alumni.major}
        company={alumni.company}
        companyurl={alumni.companyurl}
        position={alumni.position}
        description={alumni.description}
        pc={alumni.pc}
        alumImage={alumni.alumImage}
      />
    ))

    return (
      <div className="alum">
        <h1> Where We've Gone!</h1>
        <div className="companies">{list}</div>

        <div className="aluminfo">
          <h1> Our ALUM SPOTLIGHTS</h1>
          <div className="alum"> {list2}</div>
        </div>
      </div>
    )
  }
}

export default Alum
