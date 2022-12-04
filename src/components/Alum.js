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
        url: 'https://www.coors.com/av?url=https://www.coors.com/',
        name: 'Coors',
        imagePath: 'companies/coors-logo.png',
      },
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
      {
        url: 'https://rivian.com/',
        name: 'Rivian',
        imagePath: 'companies/Rivian-logo.png',
      },
      {
        url: 'https://www2.deloitte.com/us/en.html',
        name: 'Deloitte',
        imagePath: 'companies/deloitte.png',
      },
      {
        url: 'https://www.generalmills.com/',
        name: 'General Mills',
        imagePath: 'companies/generalmills-logo.png',
      },
      {
        url: 'https://www.target.com/',
        name: 'Target',
        imagePath: 'companies/target-logo.png',
      },
      {
        url: 'jnj.com',
        name: 'Johnson and Johnson',
        imagePath: 'companies/JandJ.png',
      },
      {
        url: 'https://www.apple.com/',
        name: 'Apple',
        imagePath: 'companies/apple-logo.png',
      },
      {
        url: 'https://www.imc.com/us/',
        name: 'IMC',
        imagePath: 'companies/imc-logo.png',
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
        name: 'Dan Jensen', //role num: 2
        gradyear: '2001',
        major: 'Computer Engineering',
        company: 'USDA',
        companyurl: 'https://www.usda.gov/',
        position: 'Assistant Director',
        description: 'Game nerd trying hard to not grow up and failing hard',
        pc: 'Founder',
        alumImage: 'alumni/DanJensen.jpg',
      },
      {
        name: 'Philip Waligora', //role num: 24
        gradyear: '2001',
        major: 'Computer Engineering',
        company: 'Salesforce',
        companyurl: 'https://www.salesforce.com/',
        position: 'Software Engineer',
        description:
          'I grew up in Livonia and have lived in the Seattle area since 2001. My wife Suzanne is also a Theta Gamma alum. We have one son and two dogs.',
        pc: 'Beta',
        alumImage: 'alumni/PhilWaligora.JPG',
      },
      {
        name: 'Jonas Daunoravicius', //role num: 36
        gradyear: '2014',
        major: 'Computer Engineering',
        company: 'University of Michigan Ann Arbor',
        companyurl: 'https://umich.edu/',
        position: 'Head of Development within Business and Finance',
        description:
          'Handsome 6 foot introvert that enjoys tech, spending time with his 3 kids, trading, up north at the lake cottage, Michigan athletics, saltwater aquariums, photography, playing drums, and spending time with some great Theta Tau alumni.',
        pc: 'Epsilon',
        alumImage: 'alumni/JonasDaunoravicius.png',
      },
      {
        name: 'Reid Bronson', //role num: 37
        gradyear: '2004',
        major: 'Aerospace Engineering',
        company: 'Northrop Grumman',
        companyurl: 'https://www.northropgrumman.com/',
        position: 'Guidance, Navigation, and Control Lead',
        description:
          'Former Regent, Vice Regent, and Treasurer. Married to Shawna. Father to Collins and Logan. Proud Wolverine developing fly-by-wire control systems for manned aircraft. Part time professor',
        pc: 'Epsilon',
        alumImage: 'alumni/ReidBronson.jpg',
      },
      {
        name: 'Jeff Grimm', //role num: 63
        gradyear: '2007',
        major: 'Mechanical Engineering',
        company: 'BP',
        companyurl: 'https://www.bp.com/',
        position: 'Principal Reliability Engineer',
        description:
          "I live in Chicago with my wife and 2 kids (ages 4 and 2). I've worked for BP for the past 15 years, including a recent 3-year expat assignment at one of our locations in Germany.",
        pc: 'Iota',
        alumImage: 'alumni/JeffGrimm.png',
      },
      {
        name: 'Rosa Bushkuhl (Abani)', //role num: 88
        gradyear: '2008',
        major: 'Mechanical Engineering',
        company: 'CMS Energy',
        companyurl: 'https://www.cmsenergy.com/home/default.aspx',
        position: 'Director, Renewables Asset Performance ',
        description:
          'I moved to Ann Arbor the summer before 5th grade and have mostly stayed here since then! During my time at U of M I was very involved in Thera Tau and SWE. I currently work for CMS Energy’s non-utility subsidiary where I work on acquiring and developing utility scale renewable energy projects (wind and solar). I went back to U of M for an MBA 2019-2021 while working full time. I serve on the Board of Trustees for the Ann Arbor Hands on Museum and on the Scio Township Sustainability Task Force. I am married and have a daughter in 1st grade.',
        pc: 'Mu',
        alumImage: 'alumni/Rosa.jpeg',
      },
      {
        name: 'Chris Muhich', //role num: 111
        gradyear: '2009',
        major: 'Chemical Engineering',
        company: 'Arizona State University',
        companyurl: 'https://www.asu.edu/',
        position: 'Professor',
        description:
          "I'm a chemE Professor who uses quantum mechanical modeling to understand surface and thermodynamic phenomina for improved water remediation and renewable energy generation.",
        pc: 'Omicron',
        alumImage: 'alumni/ChrisMuhich.JPG',
      },

      {
        name: 'Brandon Sims', //role num: 213
        gradyear: '2014',
        major: 'Industrial and Operations Engineering',
        company: 'N/A',
        companyurl: '',
        position: 'Student',
        description:
          'In grad school to be a secondary math teacher after years working as an engineer.',
        pc: 'Gamma Beta',
        alumImage: 'alumni/BrandonSims.jpeg',
      },

      {
        name: 'Jim Glantz', //role num: 237
        gradyear: '2016',
        major: 'Materials Science and Engineering',
        company: 'Tesca USA',
        companyurl: 'https://www.tescagroup.com/en/map/tesca-usa/',
        position: 'Program Manager',
        description:
          'I am a husband, a dad to two wonderful kids, a lover of playing all sports, and an avid cheese enthusiast',
        pc: 'Epsilon Beta',
        alumImage: 'alumni/Glantz.png',
      },
      {
        name: 'Andrew McCaughna', //role num: 298
        gradyear: '2017',
        major: 'Aerospace Engineering',
        company: 'Northrop Grumman ',
        companyurl: 'https://www.northropgrumman.com/',
        position: 'Principal Systems Engineer',
        description:
          'I like to draw and mountain bike in my free time, but mostly, do anything with friends. Software was never the plan. I’m happy to wind up in a field with such broad reach because by senior year I realized I didn’t like my major! I’ll probably dip from engineering eventually. Follow ur dreams kiddos ',
        pc: 'Kappa Beta',
        alumImage: 'alumni/AndrewMcCaughna.jpeg',
      },
      {
        name: 'Vikas Venugopal', //role num: 305
        gradyear: '2017',
        major: 'Chemical Engineering',
        company: 'McKinsey & Co.',
        companyurl: 'https://www.mckinsey.com/',
        position: 'Associate',
        description:
          "Former Chemical and Computer Science engineer that joined the dark side and become a consultant after 3 years of engineering + an MBA. Does all of his current work in McKinsey's DnA (Digital & Analytics) practice",
        pc: 'Kappa Beta',
        alumImage: 'alumni/VikasVenugopal.jpg',
      },
      {
        name: 'Jiaming Yang', //role num: 357
        gradyear: '2020',
        major: 'Industrial and Operations Engineering',
        company: 'Bayview Asset Management',
        companyurl: 'https://bayview.com/',
        position: 'Quantitative Strategist',
        description:
          "I pledged as a junior in 2016. Graduated with a Master's degree in IOE in 2020. I have been working in the credit analysis/investment industry since then.",
        pc: '',
        alumImage: 'alumni/ JiamingYang.png',
      },
      {
        name: 'Misha Korolev', //role num: 468
        gradyear: '2022',
        major: 'Industrial and Operations Engineering',
        company: 'United Airlines',
        companyurl: 'https://www.united.com/en/us',
        position: 'Capacity Forecasting Analytics',
        description:
          'Originally from the great state of Minnesota- my high school is better than Hari’s. Third place finisher in the milk mile. I like making cocktails and watching Michigan hockey. Mug Monday enthusiast. I also like to hike and lift weights. Big Excel guy. Former Scribe, Academic Chair, and Alpha Pledge.',
        pc: 'Phi Beta',
        alumImage: 'alumni/Misha Korolev.jpeg',
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
        <div className="companyHeader">
          <h1 style={{ color: 'white' }}> Where We Work!</h1>
        </div>
        <div className="companies">{list}</div>
        <div className="aluminfo">
          <div className="alumHead">
            <h1 style={{ color: 'white' }}> Alumni Spotlights </h1>
          </div>
          <div className="thesealum"> {list2}</div>
        </div>
      </div>
      //hari
    )
  }
}

export default Alum
