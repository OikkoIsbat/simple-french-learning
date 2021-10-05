import React, { useState, useEffect } from 'react';
import Card from '../Card/Card'

const Courses = () => {
    const [crs, setCourses] = useState([]);

    useEffect(() => {
        fetch('./tools.json')
            .then(res => res.json())
            .then(data => setCourses(data));
    }, [])

    return (
        <div className="course-container mt-4">
            <h2 className="text-primary text-center mb-4">Learn French from The Experts</h2>

            <div className="row row-cols-1 row-cols-md-3 g-3">

                {
                    crs.slice(0, 3).map(course => <Card course={course}></Card>)
                }
            </div>

        </div>
    );
};

export default Courses;