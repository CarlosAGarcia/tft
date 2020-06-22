import styled from 'styled-components'

export const StylingWrapper = styled.div`
  .App{
    min-height: 100vh;
    min-width: 100vw;
    background-color: ${props => props.theme.primaryBGLight};
    
  }
  .header{
    height: 6rem;
    width: 100%;
    background-color: ${props => props.theme.primaryBG};
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 2rem;
    color: white;
    font-weight: 200;
  }
  .body{
    display: flex;
    width: 100%;
  }
  .margin5{
    margin: 0 .5rem;
  }
`;