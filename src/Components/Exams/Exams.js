import React from 'react';
import exam from '../../images/exam.jpg.jfif';
const Exams = () => {
    return (
        <div className="text-center">
            <h2>Exams</h2>
            <hr />
            <div className="card bg-info">
                <img className="card-img-top w-50 rounded mx-auto d-block" src={exam} alt="Card image cap" />
                <div className="card-body">
                    <h5 className="card-title">Mark Distribution</h5>
                    <p className="card-text">A candidate will face an exam which will consist of 4 rounds. Listening, Reading, Writing and Speaking. Each will contain 25 marks</p>
                    <a href="#" class="btn btn-secondary">Proceed to Mock Exam</a>
                    <hr />
                    <p className="text-white">Give a Mock Exam Now To Know Your Progress</p>
                </div>
            </div>
        </div>
    );
};

export default Exams;