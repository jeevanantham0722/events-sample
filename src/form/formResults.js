import React from "react";
import { Link } from "react-router-dom";
import "./formResults.css";
// import { url } from "inspector";

const eventList = [
  {
    name: "Aalam Yoga Class",
    venue: "Kalapatti",
    imgUrl: "https://image.tmdb.org/t/p/w300//xRWht48C2V8XNfzvPehyClOvDni.jpg"
  },
  {
    name: "Cooking workshop",
    venue: "Hopes",
    imgUrl: "https://image.tmdb.org/t/p/w300//xRWht48C2V8XNfzvPehyClOvDni.jpg"
  },
  {
    name: "College Day",
    venue: "Sitra",
    imgUrl: "https://image.tmdb.org/t/p/w300//xRWht48C2V8XNfzvPehyClOvDni.jpg"
  },
  {
    name: "Cultural Event",
    venue: "Ganapathy",
    imgUrl: "https://image.tmdb.org/t/p/w300//xRWht48C2V8XNfzvPehyClOvDni.jpg"
  },
  {
    name: "Chennai Silks Opening",
    venue: "Gandhipuram",
    imgUrl: "https://image.tmdb.org/t/p/w300//xRWht48C2V8XNfzvPehyClOvDni.jpg"
  },
  {
    name: "Subway Meetup",
    venue: "RS Puram",
    imgUrl: "https://image.tmdb.org/t/p/w300//xRWht48C2V8XNfzvPehyClOvDni.jpg"
  },
  {
    name: "Luxury Expo",
    venue: "Race Course",
    imgUrl: "https://image.tmdb.org/t/p/w300//xRWht48C2V8XNfzvPehyClOvDni.jpg"
  },
  {
    name: "Discount Sales",
    venue: "Town Hall",
    imgUrl: "https://image.tmdb.org/t/p/w300//xRWht48C2V8XNfzvPehyClOvDni.jpg"
  },
  {
    name: "Environmental Awareness workshop",
    venue: "Kovaiputhur",
    imgUrl: "https://image.tmdb.org/t/p/w300//xRWht48C2V8XNfzvPehyClOvDni.jpg"
  }
];

export const FormResults = () => (
  <section>
    <h2>Events</h2>
    <div className="newEvents">
      {eventList.map((element, index) => {
        return (
          <Link to="/" href="#" key={index} className="eventLink">
            <img
              src={
                eventList[index].imgUrl === ""
                  ? "http://via.placeholder.com/300x450"
                  : `${eventList[index].imgUrl}`
              }
              alt={`${eventList[index].name} poster`}
              className="imgResponsive"
            />
            <div className="eventInfo">
              <h3>{eventList[index].name}</h3>
              <p>{eventList[index].venue}</p>
            </div>
          </Link>
        );
      })}
    </div>
  </section>
);
