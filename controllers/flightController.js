const { Flights } = require("../models/Flight");
const { v4: uuid } = require("uuid")

// get all flights
exports.getFlights = async (req, res) => {
  try {
    const flights = Flights;
    res.status(200).json({
        message: flights
    });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};
// get single flight
exports.getFlight = async (req, res) => {
 try {
    let id = req.params.id
    Flights.find((flight) => {
        flight.id === id
        res.status(200).json({message: "Flight found", Flights})
    })
 } catch (error) {
    res.status(404).json({message: error})
 }
}

// create/ Add new flights
exports.createFlight = async (req, res) => {
  try {
    const bookFlight = await req.body

    bookFlight.id = uuid()

    Flights.push(bookFlight);

    res.status(201).json({ message: "flight booked succesfully", bookFlight });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// update / edit flight
exports.updateFlight = async (req, res) => {
    try {
        let id = req.params.id
        const flight = Flights.find((flight) => flight.id === id)
        const bookFlight = await req.body
        bookFlight.title
        bookFlight.time
        bookFlight.price
        bookFlight.date

        res.status(200).json({
            message: "flight updated",
            flight
        })
    } catch (error) {
        res.status(500).json({message: error})
    }
}

// delete flight
exports.deleteFlight = async (req, res) => {
    try {
        let id = req.params.id
        const bookFlight = Flights.find((flight) => flight.id === id)
        Flights.splice(Flights.indexOf(bookFlight), 1);
        res.status(200).json({
            message: "Flight Deleted successfully",
            bookFlight
        })
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}