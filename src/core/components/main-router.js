import React from "react";
import { Router, Switch, Route } from 'react-router-dom';

import { history } from '../services/history.service';

import { HomePage } from "../../pages/home-page";
import { LocationPage } from "../../pages/location";
import { SpecialsPage } from "../../pages/specials";

import { Header } from "../../components/header";
import { Footer } from "../../components/footer";

export default class MainRouter extends React.Component {

	render() {
		return (
            <Router history={history}>
                <div>                    
                    <Header />
                    <main id="main-content">
                        <Switch>
                            <Route exact path="/" component={HomePage} />
                            <Route path="/location" component={LocationPage} />
                            <Route path="/specials" component={SpecialsPage} />
                        </Switch>
                    </main>
                    <Footer />
                </div>
            </Router>
		)
	}
}