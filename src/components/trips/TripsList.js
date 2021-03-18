import React from "react";
import Trip from "./Trip";

const TripsList = ({ match, days }) => {
	const filter = match.params.filter;
	const trips = filter ? days.filter((trip) => trip.type === filter) : days;
	return (
		<div className="trips-list">
			<h3>{filter ? filter : "All"} Trips</h3>
			<table class="table">
				<thead>
					<tr>
						<th>Date</th>
						<th>Place</th>
					</tr>
				</thead>
				<tbody>
					{trips.map((trip, i) => (
						<Trip key={i} {...trip} />
					))}
				</tbody>
			</table>
		</div>
	);
};

export default TripsList;
