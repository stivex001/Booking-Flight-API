const { Flights } = require("../models/Flight");
const { v4: uuid } = require("uuid");

// get all flights
exports.getFlights = async (req, res) => {
  try {
    const flights = Flights;
    res.status(200).json({
      message: flights,
    });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};
// get single flight
exports.getFlight = async (req, res) => {
  try {
    let id = req.params.id;
    Flights.find((flight) => {
      flight.id === id;
      res.status(200).json({ message: "Flight found", Flights });
    });
  } catch (error) {
    res.status(404).json({ message: error });
  }
};

// create/ Add new flights
exports.createFlight = async (req, res) => {
  try {
    const { title, time, price, date } = await req.body;

    const newFlight = {
      id: uuid(),
      title,
      time,
      price,
      date,
    };

    Flights.push(newFlight);

    res.status(201).json({ message: "flight booked succesfully", newFlight });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// update / edit flight
exports.updateFlight = async (req, res) => {
  try {
    let id = req.params.id;
    const bookFlight = Flights.find((flight) => flight.id === id);
    const {title, price, time, date} = await req.body;
    bookFlight.title = title,
    bookFlight.time = time,
    bookFlight.price = price,
    bookFlight.date = date;

    res.status(200).json({
      message: "flight updated",
      bookFlight,
    });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

// delete flight
exports.deleteFlight = async (req, res) => {
  try {
    let id = req.params.id;
    const bookFlight = Flights.find((flight) => flight.id === id);
    Flights.splice(Flights.indexOf(bookFlight), 1);
    res.status(200).json({
      message: "Flight Deleted successfully",
      bookFlight,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
