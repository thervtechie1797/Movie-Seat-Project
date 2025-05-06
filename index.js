// //Create you project here from scratch
// const moviesList = [
//   { movieName: "Flash", price: 7 },
//   { movieName: "Spiderman", price: 5 },
//   { movieName: "Batman", price: 4 },
// ];

// const selectedSeats = [];
// let currentMoviePrice = moviesList[0].price;
// //Select HTML Elements

// const selectMovie = document.getElementById("selectMovie");
// const movieNameElement = document.getElementById("movieName");
// const moviePriceElement = document.getElementById("moviePrice");
// const totalPriceElement = document.getElementById("totalPrice");
// const seatContainerElement = document.querySelectorAll(
//   "#seatCont .seatRowCont .row  .seat:not(.occupied)"
// );
// const selectedSeatsHolder = document.getElementById("selectedSeatsHolder");
// const numberOfSeat = document.getElementById("numberOfSeat");
// const proceedButton = document.getElementById("proceedBtn");
// const cancelButton = document.getElementById("cancelBtn");

// // Use moviesList array for displaing the Name in the dropdown menu
// //DropDown Populate:
// function movieDrop() {
//   moviesList.forEach((movie, index) => {
//     const option = document.createElement("option");
//     option.value = index;
//     option.textContent = movie.movieName;
//     if (index === 0) option.selected = true;
//     selectMovie.appendChild(option);
//   });
// }

// function updateMovieDetails(index) {
//   const movie = moviesList[index];
//   movieNameElement.textContent = movie.movieName;
//   moviePriceElement.textContent = `$${movie.price}`;
//   currentMoviePrice = movie.price;

//   updateTotalPrice();
// }

// //Select/Deselect Seat

// function selectDeselectSeat(seat) {
//   seat.classList.toggle("selected");
//   const seatIndex = selectedSeats.indexOf(seat);
//   if (seat.classList.contains("selected") && seatIndex === -1) {
//     selectedSeats.push(seat);
//   } else if (!seat.classList.contains("selected") && seatIndex !== -1) {
//     selectedSeats.splice(seatIndex, 1);
//   }

//   updateSelectedSeats();
//   updateTotalPrice();
// }

// //Update Selected Seats

// function updateSelectedSeats() {
//   selectedSeatsHolder.innerHTML = "";
//   if (selectedSeats.length === 0) {
//     selectedSeatsHolder.innerHTML = "<span>No seat Selected</span>";
//   } else {
//     selectedSeats.forEach((_, i) => {
//       const seatSpan = document.createElement("span");
//       seatSpan.textContent = `${i}`;
//       selectedSeatsHolder.appendChild(seatSpan);
//     });
//   }
//   numberOfSeat.textContent = selectedSeats.length;
// }

// //Update Price

// function updateTotalPrice() {
//   const totalSeatsPrice = selectedSeats.length * currentMoviePrice;
//   totalPriceElement.textContent = `$${totalSeatsPrice}`;
// }

// //Attach Seat Listner:
// seatContainerElement.forEach((seat) => {
//   seat.addEventListener("click", () => selectDeselectSeat(seat));
// });

// //Handle Movie Change:
// selectMovie.addEventListener("change", (m) => {
//   const index = m.target.value;
//   updateMovieDetails(index);
//   updateTotalPrice();
// });

// //Proceed Button:
// proceedButton.addEventListener("click", () => {
//   if (selectedSeats.length === 0) {
//     alert("Oops no seat selected");
//     return;
//   }
//   alert("Yayy! Your Seats have been booked!");

//   selectedSeats.forEach((seat) => {
//     seat.classList.remove("selected");
//     seat.classList.add("occupied");
//   });

//   selectedSeats = [];
//   updateSelectedSeats();
//   updateTotalPrice();
// });

// cancelButton.addEventListener("click", () => {
//   if (selectedSeats.length === 0) return;
//   const confirmCancel = confirm(
//     "Do you really want to cancel all selected seats?"
//   );
//   if (!confirmCancel) return;

//   selectedSeats.forEach((seat) => seat.classList.remove("selected"));
//   selectedSeats = [];
//   updateMovieDetails();
//   updateTotalPrice();
// });

// movieDrop();

//Add eventLister to each unoccupied seat
//Add eventLsiter to continue Button
//Add eventListerner to Cancel Button

function outer(greet, punctuation) {
  let x = 0;
  return greet + ", " + this.name + punctuation;
}

let y = { name: "Rohit" };
console.log(outer.call(y, "hello", "!"));
