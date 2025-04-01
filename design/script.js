// Copyright (c) 2025 Adrina peighambarzadeh All rights reserved

//

// Created by: Adrina peighambarzadeh

// Created on: Mar 2025

// This file contains the JS functions for index.html

"use strict"

/**


* This function calculates the area of a triangle.


*/

function calculateVolumepyramid() {
  // input

  const lengthOfPyramid = parseFloat(
    document.getElementById("length-of-pyramid").value
  )

  const widthOfPyramid = parseFloat(
    document.getElementById("width-of-pyramid").value
  )

  const heightOfPyramid = parseFloat(
    document.getElementById("height-of-pyramid").value
  )

  // process

  const volumeOfPyramid =
    (lengthOfPyramid * widthOfPyramid * heightOfPyramid) / 3 

  // output

  document.getElementById("answer").innerHTML =
    "Volume is: " + volumeOfPyramid + " mm³"
}
