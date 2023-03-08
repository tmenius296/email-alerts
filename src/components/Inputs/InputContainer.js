import React from 'react'
import "./InputContainer.css"
import "./TypedInput"
import TypedInput from './TypedInput'

export default function InputContainer() {
  return (
    <div>This contains stylable inputs<br></br>
    <div class="InputContainer">
    <TypedInput></TypedInput>
    <TypedInput></TypedInput>
    <TypedInput></TypedInput>
        </div>
    </div>
  )
}
