import React from 'react';
import { useState, useEffect } from 'react';
import Card from '../Card/Card'
const Services = () => {
    const [crs, setCourses] = useState([]);

    useEffect(() => {
        fetch('./tools.json')
            .then(res => res.json())
            .then(data => setCourses(data));
    }, [])
    return (
        <div className="course-container">
            <h2 className="text-primary text-center mb-4">Learn French from The Experts</h2>

            <div className="row row-cols-1 row-cols-md-3 g-3">

                {
                    crs.map(course => <Card course={course}></Card>)
                }
            </div>

        </div>
    );
};

export default Services;