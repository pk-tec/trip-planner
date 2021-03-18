import React from "react";

const Trip = ({ date, place }) => (
	<tr>
		<td>{date}</td>
		<td>{place}</td>
	</tr>
);

export default Trip;
