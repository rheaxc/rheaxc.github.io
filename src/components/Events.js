import React, { useState, useEffect } from 'react';
import poster from '../images/events/PG.png';
import '../style/events.css';
import EventTile from './events/EventTile';

export default function Events() {

    const eventData = [
        {
            Time: '2023-09-06T22:17:00',
            Image: poster,
            Link: 'https://us.pg.com/',
            Majors: ['Chem E', 'IOE', 'Mech E'],
            EdLvl: ['Junior', 'Senior'],
            Industry: ['Manufacturing', 'Health'],
            EmployType: ['Internship'],
        },
    ];


    const [selectedMajors, setSelectedMajors] = useState([]);
    const [selectedEdLvl, setSelectedEdLvl] = useState([]);
    const [selectedIndustry, setSelectedIndustry] = useState([]);
    const [selectedEmployType, setSelectedEmployType] = useState([]);
    const [isMajorsDropdownVisible, setIsMajorsDropdownVisible] = useState(false);
    const [isEdLvlDropdownVisible, setIsEdLvlDropdownVisible] = useState(false);
    const [isIndustryDropdownVisible, setIsIndustryDropdownVisible] = useState(false);
    const [isEmployTypeDropdownVisible, setIsEmployTypeDropdownVisible] = useState(false);

    const filterOptions = {
        majors: ['CS', 'IOE', 'CE', 'Mech E', 'Areo', 'Chem E', 'BME'],
        edLvl: ['Freshman', 'Sophomore', 'Junior', 'Senior'],
        industry: ['Big Tech', 'Health', 'Manufacturing', 'Consulting'],
        employType: ['Internship', 'Co-op', 'Full-Time'],
    };

    useEffect(() => {
        console.log('Selected Majors After Update:', selectedMajors);
    }, [selectedMajors]);

    const toggleDropdown = (dropdownStateSetter) => {
        dropdownStateSetter(prevState => !prevState);
    };

    const handleCheckboxChange = (category, value, setSelectedState) => {
        setSelectedState(prevState => {
            console.log(`handleCheckboxChange - Category: ${category}, Value: ${value}`);
            const updatedState = prevState.includes(value)
                ? prevState.filter(item => item !== value)
                : [...prevState, value];
            console.log(`Updated ${category}:`, updatedState);
            return updatedState;
        });
    };

    const renderDropdown = (category, selected, options, isVisible, toggleFunction, setSelectedState) => (
        <div className='dropdown-wrapper'>
            <div className='checkbox-container'>
                <div className='dropdown-header' onClick={() => toggleDropdown(toggleFunction)}>
                    <h3>{category} {isVisible ? 'v' : '>'}</h3>
                </div>
                {isVisible && (
                    <div className='dropdown'>
                        {options.map(option => (
                            <label key={option}>
                                <input
                                    type='checkbox'
                                    value={option}
                                    checked={selected.includes(option)}
                                    onChange={() => handleCheckboxChange(category, option, setSelectedState)}
                                />
                                {option}
                            </label>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );

    const filteredEvents = eventData.filter(event => {
        const majorsMatch = selectedMajors.length === 0 || selectedMajors.some(major => event.Majors.includes(major));
        const edLvlMatch = selectedEdLvl.length === 0 || selectedEdLvl.some(edlvl => event.EdLvl.includes(edlvl));
        const industryMatch = selectedIndustry.length === 0 || selectedIndustry.some(industry => event.Industry.includes(industry));
        const employTypeMatch = selectedEmployType.length === 0 || selectedEmployType.some(employType => event.EmployType.includes(employType));

        return majorsMatch && edLvlMatch && industryMatch && employTypeMatch;
    });

    return (
        <div className='event-page'>
            <h1 className='events-title'>Corporate Recruiting Events</h1>
            <div className='main'>
                <div className='filter-box'>
                    <h1 className='search'>Job Search</h1>
                    <hr className='break'></hr>
                    {renderDropdown('Majors', selectedMajors, filterOptions.majors, isMajorsDropdownVisible, setIsMajorsDropdownVisible, setSelectedMajors)}
                    {renderDropdown('Education Level', selectedEdLvl, filterOptions.edLvl, isEdLvlDropdownVisible, setIsEdLvlDropdownVisible, setSelectedEdLvl)}
                    {renderDropdown('Industry', selectedIndustry, filterOptions.industry, isIndustryDropdownVisible, setIsIndustryDropdownVisible, setSelectedIndustry)}
                    {renderDropdown('Employment Type', selectedEmployType, filterOptions.employType, isEmployTypeDropdownVisible, setIsEmployTypeDropdownVisible, setSelectedEmployType)}
                </div>
                <div className='events-container'>
                    {filteredEvents.map(event => (
                        <EventTile
                            key={event.Time}
                            Time={event.Time}
                            Image={event.Image}
                            Link={event.Link}
                            Majors={event.Majors}
                            EdLvl={event.EdLvl}
                            Industry={event.Industry}
                            EmployType={event.EmployType}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
