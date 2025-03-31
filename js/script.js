// Copyright (c) 2025 Adrina peighambarzadeh All rights reserved

//

// Created by: Adrina peighambarzadeh

// Created on: Mar 2025

// This file contains the JS functions for index.html

"use strict"

/**


* This function calculates the area of a triangle.


*/

function calculateAreaOfTriangle() {
  // input

  const aBaseOfTrapezoid = parseFloat(
    document.getElementById("a-base-of-trapezoid").value
  )

  const bBaseOfTrapezoid = parseFloat(
    document.getElementById("b-base-of-trapezoid").value
  )

  const heightOfTrapezoid = parseFloat(
    document.getElementById("height-of-trapezoid").value
  )

  // process

  const areaOfTrapezoid =
    ((aBaseOfTrapezoid + bBaseOfTrapezoid) / 2) * heightOfTrapezoid

  // output

  document.getElementById("answer").innerHTML =
    "Area of your Trapezoid is: " + areaOfTrapezoid + " mm²"
}
