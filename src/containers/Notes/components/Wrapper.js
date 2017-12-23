import styled from 'styled-components'

const Wrapper = styled.div`
  height: 95vh;
  display: flex;
  flex-wrap: wrap;

  @media only screen and (max-width: 850px) {
    flex-wrap: ${props => props.reverseWhenSmall ? 'wrap-reverse' : 'wrap'};
  }

`

export default Wrapper