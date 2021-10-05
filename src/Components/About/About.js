import React from 'react';
import about from '../../images/class2.jfif';
import teacher1 from '../../images/jules hoffman.jpg';
import teacher2 from '../../images/photo_françoise barré sinoussi.jpg';
const About = () => {
    return (
        <div className="text-center">

            <h2>About Us</h2>
            <hr />
            <div class="card">
                <div class="card-body">

                    <h5 class="card-title">Shahbag French Academy</h5>
                    <h6 class="card-subtitle mb-2 text-muted">French For All</h6>
                    <img src={about} className="w-50" alt="" srcset="" />
                    <p class="card-text">Founded By Isbat in 2015 where the cofounders are Rakib Enam Anik And Sabbir Islam. Main goal of our academy is to provide quiality classess and contents  which can be beneficial to the people that wants to learn the French language.</p>

                </div>
            </div>
            <hr />
            <h2>Instructors</h2>
            <div class="row">
                <div class="col-sm-6">
                    <div class="card">
                        <div class="card-body">
                            <img src={teacher1} alt="" srcset="" />
                            <h5 class="card-title">Jules Hoffman </h5>
                            <p>(1941-present)</p>
                            <p class="card-text">
                                The biologist Jules Hoffmann is a professor at the Institute of Advanced Studies at the University of Strasbourg, and a research director at the CNRS. He was awarded the Nobel Prize in Medicine in 2011 for his research on innate immunity.
                            </p>

                        </div>
                    </div>
                </div>
                <div class="col-sm-6">
                    <div class="card">
                        <div class="card-body">
                            <img src={teacher2} alt="" srcset="" />
                            <h5 class="card-title">Cédric Villani </h5>
                            <p> (1973-present)</p>
                            <p class="card-text">Cédric Villani is mainly interested in kinetic theory and optimal transport and its applications. He graduated from the École Normale Supérieure (ENS) and wrote his thesis on the mathematical theory of Boltzmann's equation.</p>

                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default About;