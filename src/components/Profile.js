import React from "react";
import './Profile.css';
import Education from './education';
import Experience from './Experience';
import Contact from './contact';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

export default function Profile() {
    return (
        <Router>
            <div id="container">

                <header>
                    <div className="quoteoftheday">Profile</div>
                    <div className="name">Zainab Khan.</div>
                </header>

                <article>

                    <div className="quote">
                        <h1>A Learner Eager to Take Learning Based Challenges.</h1>
                    </div>

                    <div className="quoteby">
                        <h4>Zainab Khan</h4>
                    </div>

                </article>

                <footer>

                    <div className="skills">
                        <h6>Menu</h6>
                        <ul>
                            <li> <Link to="/">Introduction</Link></li>
                            <li><Link to="/education">Education</Link></li>
                            <li><Link to="/experience">Experience</Link></li>
                            <li><Link to="/contact">Contact</Link></li>
                        </ul>
                    </div>

                    <Switch>
                        <Route exact path="/">
                            <div className="content">
                                <p>A Fresh Graduate with a demonstrated history of working as intern in the fields of mobile development, Technical Documentation, etc, along with the voluntary experience with various non-profit organizations. Skilled in Android Development, Firebase, Web Development, Manual and Automated testing,  Microsoft Office, Java, PHP, JS, Python, HTML, CSS, etc. Strong communication, project planning, and time management skills with a Bachelor of Engineering - BE focused in Software Engineering from Mehran University Of Engineering and Technology, Jamshoro. </p>
                            </div>
                        </Route>

                        <Route exact path="/education">
                            <Education/>
                        </Route>

                        <Route exact path="/experience">
                            <Experience/>
                        </Route>

                        <Route exact path="/contact">
                            <Contact/>
                        </Route>

                    </Switch>

                </footer>
            </div>
        </Router>
    );
}
