import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./styles/App.css";
// Components
import TripsCount from "./trips/TripsCount";
import Nav from "./Nav";
import Error404 from "./Error404";
import AddTrip from "./trips/AddTrip";
import TripsList from "./trips/TripsList";

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			allTrips: [
				{
					place: "Turkey",
					date: "2021-03-25",
				},
				{
					place: "Russia",
					date: "2021-04-1",
				},
				{
					place: "Malaysia",
					date: "2021-04-10",
				},
				{
					place: "China",
					date: "2021-04-15",
				},
				{
					place: "India",
					date: "2021-04-20",
				},
				{
					place: "Italy",
					date: "2021-04-25",
				},
				{
					place: "Japan",
					date: "2021-04-30",
				},
				{
					place: "Dubai",
					date: "2021-04-10",
				},
			],
		};
		this.addTrip = this.addTrip.bind(this);
	}

	addTrip(newTrip) {
		this.setState((prevState) => {
			return {
				allTrips: [...prevState.allTrips, newTrip],
			};
		});
	}

	countDays(filter) {
		const { allTrips } = this.state;
		return allTrips.filter((trip) => (filter ? trip.type === filter : trip))
			.length;
	}

	// Switch goes to first matching route
	render() {
		return (
			<div className="app">
				<Router>
					<div className="route-container">
						<Nav />
						<Switch>
							<Route
								exact
								path="/"
								render={(props) => (
									<TripsCount
										{...props}
										total={this.countDays()}
									/>
								)}
							></Route>
							<Route
								path="/list/:filter"
								render={(props) => (
									<TripsList
										{...props}
										days={this.state.allTrips}
									/>
								)}
							/>
							<Route
								path="/list"
								render={(props) => (
									<TripsList
										{...props}
										days={this.state.allTrips}
									/>
								)}
							/>
							<Route
								path="/add"
								render={(props) => (
									<AddTrip
										{...props}
										newTrip={this.addTrip}
									/>
								)}
							/>
							<Route component={Error404} />
						</Switch>
					</div>
				</Router>
			</div>
		);
	}
}

export default App;
