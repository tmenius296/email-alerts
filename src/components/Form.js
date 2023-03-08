import React from 'react'
import FormBanner from './FormBanner'
import InputContainer from './InputContainer'
import OptionContainer from './OptionContainer'
import SubmitButton from './SubmitButton'
import './Form.css'

export default function Form() {
  return (

    <div>Form
        <form id="Form">
            <FormBanner></FormBanner>
            <InputContainer></InputContainer>
            <OptionContainer></OptionContainer>
            <SubmitButton></SubmitButton>
        </form>
    </div>
  )
}
