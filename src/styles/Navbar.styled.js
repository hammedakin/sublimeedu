import styled from "styled-components";


export const StyledNavbar = styled.nav`

  transition: 0.5s ease !important;

  img {
    width: 120px;
  }

  button.navbar-toggler {
  background-color: none !important;
}

.navbar-toggler-icon {
  background: none !important;
}

  .nav-item {
    
    a {
      color: var(--pry-color) !important;
      font-size: 1rem;
      display: block;
      padding: 0.5rem 1rem;
      margin: 0 1rem;
      border-bottom: transparent solid 2px !important;
      width: fit-content;
      margin-left: auto;
      margin-right: auto;
      font-weight:600;
      
      
      :hover {
        border-bottom: var(--pry-color) solid 2px !important;
      border-width: 1px !important;
      transition: 0.1s ease !important;
      }
    }


}

`;
