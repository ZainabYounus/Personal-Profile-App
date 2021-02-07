import React from "react";
import './Profile.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

export default function Profile() {
    return (
        <div id="container">

            <header>
                <div className="quoteoftheday">Profile</div>
                <div className="name">Shah.</div>
            </header>

            <article>

                <div className="quote">
                    <h1>A Coders Life: Problematic but Charismatic.</h1>
                </div>

                <div className="quoteby">
                    <h4>Shahzaib Khan</h4>
                </div>

            </article>

            <footer>

                <div className="skills">
                    <h6>Menu</h6>
                    <ul>
                        <li>Education</li>
                        <li>Professional Experience</li>
                        <li>Contact</li>
                    </ul>
                </div>

                <div className="content">
                    <p>A technologist &amp; entrepreneur, specialized in using cutting-edge web technologies &amp; social-media strategies to bring products &amp; campaigns from concept to a reality. By profession a Computer &amp; Information System Engineer, who has been building &amp; implementing Information Systems for the last 10 years.</p>
                </div>

            </footer>
        </div>
    );
}
