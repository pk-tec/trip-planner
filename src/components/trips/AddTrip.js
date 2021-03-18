import React from "react";

const AddTrip = ({ newTrip }) => {
	let date, place;
	const submit = (e) => {
		e.preventDefault();
		newTrip({
			date: date.value,
			place: place.value,
		});
		date.value = place.value = "";
	};

	return (
		<div className="form-container">
			<form onSubmit={submit} className="form-date-container">
				<label>
					<h3>Add a trip</h3>
				</label>
				<label>
					Date: <br />
					<input
						id="date"
						type="date"
						required
						ref={(input) => (date = input)}
					/>
				</label>
				<label>
					Place: <br />
					<input
						id="date"
						type="text"
						required
						ref={(input) => (place = input)}
					/>
				</label>

				<input type="submit" value="SUBMIT" />
				
			</form>
		</div>
	);
};

export default AddTrip;
