import styled from 'styled-components'

const SplitFlexItem = styled.div`
  flex: 1 1 auto;
  max-width: 49%;
  padding: 5px 15px;
  
  @media only screen and (max-width: 850px) {
    min-width: 98%;
  }
`
export default SplitFlexItem