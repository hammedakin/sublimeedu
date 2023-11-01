import Styled from 'styled-components';


export const Button = Styled.button`
margin: 0 !important;
 background: ${ (props) => (
    props.pry ? 'var(--pry-color)'
      : props.sec ? 'var(--sec-color)'
        : props.light ? 'var(--light-color)'
          : props.dark ? 'var(--dark-bold-color)'

            : '') };
color: ${ (props) => (props.pry ? 'var(--light-color)'
    : props.sec ? 'var(--dark-color)'
      : props.light ? 'var(--pry-color)'
        : props.dark ? 'var(--light-color)'
          : '') };

:hover, :focus{
color: ${ (props) => (props.pry ? 'var(--light-color)'
    : props.sec ? 'var(--dark-color)'
      : props.light ? 'var(--pry-color)'
        : props.dark ? 'var(--light-color)'
          : '') };
}
`;

export const Form = Styled.form`

.toggle-eye {
  position: absolute;
 right: 5%;
  top: 5%;
  cursor: pointer;
  font-weight: bolder;
  font-size: 2rem;
}

.toggle-eye svg {
    font-size: 22px !important;
    color: var(--grey-bold-color);
}


/* Focus and Out focus*/
.css-t3ipsp-control, .css-13cymwt-control {
  width: 100%;
  padding: 7px 10px;
  margin: 8px 0;
  border: 1px solid var(--grey-bold-color);
  box-sizing: border-box;
  border-radius: 5px !important;
  font-size: 13px;
  line-height: 24px;
  color: var(--dark-color);
  box-shadow: none;
  margin-bottom: 1.5rem !important;

  :hover,:focus{
      border: 1px solid var(--pry-color) !important;
    }
    ::placeholder{
        color: var(--grey-bold-color);
    }  
}

{
  color: var(--dark-color) !important;
}
/* select field */
.css-1nmdiq5-menu{
  background-color: var(--light-color) !important;
}


/* Disabled */
.css-16xfy0z-control {
  width: 100%;
  padding: 7px 10px;
  margin: 8px 0;
  border: 1px solid var(--grey-bold-color);
  box-sizing: border-box;
  border-radius: 5px !important;
  font-size: 13px;
  line-height: 24px;
  color: var(--dark-color);
  box-shadow: none;
  margin-bottom: 1.5rem !important;
  background-color: var(--grey-color);

  :hover,:focus{
      border: 1px solid var(--pry-color) !important;
    }
    
    ::placeholder{
        color: var(--grey-bold-color);
    } 
}
`;

export const Input = Styled.input`
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid var(--grey-color);
  box-sizing: border-box;
  border-radius: 5px !important;
  font-size: 13px;
  line-height: 24px;
  color: var(--dark-color);
  box-shadow: none;
  margin-bottom: 1.5rem !important;
  background-color: var(--light-color);
  
  :hover,:focus{
      border: 1px solid var(--pry-color) !important;
    }
    
    ::placeholder{
        color: var(--grey-bold-color);
    } 
    :disabled{
        background-color: var(--light-bold-color);
    } 
    
    ::-webkit-outer-spin-button,
    ::-webkit-inner-spin-button {
      -webkit-appearance: none !important;
      appearance: none !important;
}
`;
export const Select = Styled.select`
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid var(--grey-color);
  box-sizing: border-box;
  border-radius: 5px !important;
  font-size: 13px;
  line-height: 24px;
  color: var(--dark-color);
  box-shadow: none;
  margin-bottom: 1.5rem !important;
  background-color: var(--light-color);
  
  
  :hover,:focus{
      border: 1px solid var(--pry-color) !important;
    }
    
    ::placeholder{
        color: var(--grey-bold-color);
    } 
    
    :disabled{
        background-color: var(--light-bold-color);
    } 

    ::-webkit-outer-spin-button,
  ::-webkit-inner-spin-button {
  -webkit-appearance: none !important;
  appearance: none !important;
}
`;

export const Textarea = Styled.textarea`
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid var(--grey-color);
  box-sizing: border-box;
  border-radius: 5px !important;
  font-size: 13px;
  line-height: 24px;
  color: var(--dark-color);
  box-shadow: none;
  margin-bottom: 1.5rem !important;
  
  :hover,:focus{
      border: 1px solid var(--pry-color) !important;
    }
    
    ::placeholder{
        color: var(--grey-bold-color);
    } 
  
  ::-webkit-outer-spin-button,
  ::-webkit-inner-spin-button {
  -webkit-appearance: none !important;
  appearance: none !important;
}
`;

export const Label = Styled.label`
margin:0;
color: var(--dark-color);
font-size:14px; 
font-weight: 600;
`;

export const StyledTab = Styled.div`
  background: var(--grey-color);
  display: flex;
  gap: 12px ;
  border-radius: 5px;
  padding: .4rem;
  width: fit-content;
  /* margin-left: auto ; */
  
  
  .links {
    transition: cubic-bezier(0.075, 0.82, 0.165, 1) 0.5s;
    border-radius: 3px;
    padding:0 .8rem;
    font-size: 14px;
    text-transform:capitalize;
    cursor:pointer;
  }
  .links.active{
    background: var(--light-color);
  }
  `;

export const ErrorPageMain = Styled.main`
    align-items: center;
    display: flex;
    flex-direction: column;
    height: 100vh;
    justify-content: center;
    overflow: hidden;
    color: var(--dark-color);
  `;

export const TextTitle = Styled.h1`

/* font-family: Work Sans; */
font-size: 42px;
line-height: 52px;
letter-spacing: 0em;
text-align:  ${ (props) => (
    props.center ? 'center'
      : props.left ? 'left'
        : '') };
color:  ${ (props) => (
    props.pry ? 'var(--pry-color)'
      : props.light ? 'var(--light-color)'
        : props.dark ? 'var(--dark-color)'
          : '') };

@media screen and (max-width: 580px){
  font-size: 32px;
  line-height: 31px;
  padding: 1rem 0;
}
`

