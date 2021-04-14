import React from "react";
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import NaviBar from './Components/NavBar.js'
import {Card, Nav, Button, Form, Col} from "react-bootstrap";


import Footer from './Components/Footer'

import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";

// import {Home} from './Home.js';
// import {About} from './About.js';


class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            wikiSearchReturnValues: [],
            wikiSearchTerms: '',
            wikiSearchLanguage: ''
        }
    }

    useWikiSearchEngine = (e) => {
        e.preventDefault();

        this.setState({
            wikiSearchReturnValues: []
        });

        const pointerToThis = this;

        var url = "https://en.wikipedia.org/w/api.php";

        var params = {
            action: 'query',
            list: 'search',
            srsearch: this.state.WikiSearchTerms,
            format: 'json'
        };

        url = url + '?origin=*';
        Object.keys(params).forEach((key) => {
            url += "&" + key + "=" + params[key];
        });

        fetch(url)
            .then(
                function (response) {
                    return response.json();
                }
            )
            .then(
                function (response) {
                    console.log(response);

                    for (var key in response.query.search) {
                        pointerToThis.state.wikiSearchReturnValues.push({
                            queryResultPageFullURL: 'no link',
                            queryResultPageID: response.query.search[key].pageid,
                            queryResultPageTitle: response.query.search[key].title,
                            queryResultPageSnippet: response.query.search[key].snippet
                        });
                    }
                }
            )
            .then(
                function (response) {
                    for (var key2 in pointerToThis.state.wikiSearchReturnValues) {
                        console.log(pointerToThis.state.wikiSearchReturnValues);
                        let page = pointerToThis.state.wikiSearchReturnValues[key2];
                        let pageID = page.queryResultPageID;
                        let urlForRetrievingPageURLByPageID = `https://en.wikipedia.org/w/api.php?origin=*&action=query&prop=info&pageids=${pageID}&inprop=url&format=json`;

                        fetch(urlForRetrievingPageURLByPageID)
                            .then(
                                function (response) {
                                    return response.json();
                                }
                            )
                            .then(
                                function (response) {
                                    page.queryResultPageFullURL = response.query.pages[pageID].fullurl;

                                    pointerToThis.forceUpdate();
                                }
                            )
                    }
                }
            )
    }

    changeWikiSearchTerms = (e) => {
        this.setState({
            WikiSearchTerms: e.target.value
        });
    }

    render() {
        let wikiSearchResults = [];
        console.log(this.state.wikiSearchReturnValues);

        for (var key3 in this.state.wikiSearchReturnValues) {
            wikiSearchResults.push(
                <div className="searchResultDiv" key={key3}>


                    <Card>
                        <Card.Body>
                            <Card.Title>
                                <h3><a target="_blank"
                                       href={this.state.wikiSearchReturnValues[key3].queryResultPageFullURL}>{this.state.wikiSearchReturnValues[key3].queryResultPageTitle}</a>
                                </h3>
                            </Card.Title>
                            <Card.Text>
                                <p className="description"
                                   dangerouslySetInnerHTML={{__html: this.state.wikiSearchReturnValues[key3].queryResultPageSnippet}}></p>
                            </Card.Text>
                        </Card.Body>
                    </Card>

                </div>
            );
        }

        console.log(wikiSearchResults);
        localStorage.setItem('input', this.state.wikiSearchTerms)

        return (
            <div>
                <NaviBar/>
                <Form.Row className="align-items-center" style={{padding: '10px', top: '20x'}}>

                    <Col xs={2}>
                        <Form.Control autocomplete='on' type="text" value={this.state.WikiSearchTerms || ''}
                                      onChange={this.changeWikiSearchTerms} placeholder='Search Wikipedia Articles'/>
                    </Col>

                    <Col xs={'auto'}>
                        <Button variant="primary" type="submit" onClick={this.useWikiSearchEngine}> Submit </Button>
                    </Col>
                </Form.Row>

                {wikiSearchResults}

                <Footer/>

            </div>

        );
    }
}

export default App;
