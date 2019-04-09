import styled, { css } from 'styled-components'

const BaseButton = styled.button`
  display: flex;
  justify-content: center;
  font-size: 13px;
  font-weight: 500;
  width: ${props => props.width || 'unset'};
  height: ${props => props.height || '36px'};
  line-height: ${props => props.height || '36px'};
  padding: 0 ${props => props.padding || '16px'};
  color: ${props => props.theme.primaryTextColor};
  background-color: ${props => props.theme.primaryBackground};
  border: solid 0.5px ${props => props.theme.primaryBackground};
  border-radius: ${props => (props.rounded ? '36px' : '4px')};
  cursor: pointer;
  outline: none;
  box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.3);
  transition: 0.2s;
  
  :hover {
    box-shadow: 0 0 4px 0 ${props => props.theme.primaryColorTrans};
    border: solid 0.5px ${props => props.theme.primaryColor};
  }

  :active {
    box-shadow: none;
    border: solid 0.5px ${props => props.theme.primaryColor};
  }

  .loading {
    width: 35px;
    height: 35px;
  }

  /* Override style if any props passed */
  /* Define Primary Button */
  ${props => props.primary
    && css`
    background-color: ${props.theme.primaryColor};
    border: solid 0.5px ${props.theme.primaryColor};

    &:hover {
      background-color: #33a0e1;
      box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.5);
    }

    &:active {
      background-color: ${props.theme.primaryColor};
      box-shadow: none;
    }
  `}

  /* Disabled button */
  ${props => props.disabled
    && css`
    &:disabled, &[disabled] {
      color: #aaaeb5;
      background-color: #2c3549;
      border: none;
      box-shadow: none;
      cursor: not-allowed;
    }
  `}
`

export default BaseButton
