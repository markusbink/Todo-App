import React from 'react'
import styled from 'styled-components'

/**
 * Styled Checkbox from https://medium.com/@colebemis/building-a-checkbox-component-with-react-and-styled-components-8d3aa1d826dd
 */

const SwitchContainer = styled.div`
  display: inline-block;
  vertical-align: middle;
  cursor: pointer;
  float: right;
`

// Hide checkbox visually but remain accessible to screen readers.
// Source: https://polished.js.org/docs/#hidevisually
const HiddenSwitch = styled.input.attrs({ type: 'checkbox' })`
  border: 0;
  clip: rect(0 0 0 0);
  clippath: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`

const StyledToggle = styled.div`
  height: 21px;
  width: 21px;
  border-radius: 50%;
  background: ${props => (props.checked ? '#fff' : '#ffe390')};
  position: absolute;
  transition: all 150ms;
  margin: 2px;
  right: 0px;
  transition: all 150ms;
`

const StyledSwitch = styled.div`
  display: inline-block;
  width: 50px;
  height: 25px;
  background: ${props => (props.checked ? '#5a4fff' : '#f2f2f2')};
  border: ${props => props.checked ? '2px solid transparent' : '2px solid transparent'};
  border-radius: 3px;
  transition: all 150ms;
  border-radius: 50px;
  position: relative;

  ${StyledToggle} {
    right: ${props => (props.checked ? '0px' : 'initial')}
  }
`

const Switch = ({ className, checked, ...props }) => (
  <SwitchContainer className={className}>
    <HiddenSwitch checked={checked} {...props} />
    <StyledSwitch checked={checked}>
      <StyledToggle checked={checked}/>
    </StyledSwitch>
  </SwitchContainer>
)

export default Switch;