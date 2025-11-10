import React from "react";

function Education() {
  return (
    <section className="education">
      <h2>Education</h2>
      <table>
        <thead>
          <tr>
            <th>Degree</th>
            <th>Institution</th>
            <th>Year</th>
            <th>Grade</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Bachelor of Computer Engineering</td>
            <td>UET Taxila</td>
            <td>2023 - 2025</td>
            <td>3.8 CGPA</td>
          </tr>
          <tr>
            <td>Intermediate (Pre-Engineering)</td>
            <td>Punjab College</td>
            <td>2019 - 2021</td>
            <td>94%</td>
          </tr>
          <tr>
            <td>Matriculation (Science)</td>
            <td>Beaconhouse School</td>
            <td>2017 - 2019</td>
            <td>92%</td>
          </tr>
        </tbody>
      </table>
    </section>
  );
}

export default Education;
