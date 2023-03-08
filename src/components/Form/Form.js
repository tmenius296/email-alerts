import React from 'react'
import FormBanner from './FormBanner'
import InputContainer from '../Inputs/InputContainer'
import OptionContainer from '../Inputs/OptionContainer'
import SubmitButton from '../Inputs/SubmitButton'
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
