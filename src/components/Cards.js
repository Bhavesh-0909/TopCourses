import React from "react";
import Card from "./Card";

function Cards({ courses }) {
  // Remove the unnecessary console.log(courses);

  // Flatten the courses array using flat() or concat.apply()
  const allCourses = [].concat.apply([], courses); // Using concat.apply() for older browser compatibility

  console.log(allCourses);

  return (
    <div>
      {
        allCourses.map((course) => (
          <Card key={course.id} course={course} />
        ))
      }
    </div>
  );
}

export default Cards;
