import React from 'react'
import styled from 'styled-components'

const CasesSection = styled.div`
  margin: 30px auto;
  padding: 20px 50px;
  max-width: 1000px;
  margin-block-start: 0;
  h1 {
    font-weight: 900;
    font-size: 52px;
    line-height: 1.1;
    max-width: 780px;
    margin-top: 80px;
  }
  h2 {
    margin-top: 80px; 
    overflow: hidden;
    max-width: 700px;
    &:after {
        content:"";
        display: inline-block;
        height: 0.5em;
        vertical-align: bottom;
        width: 100%;
        margin-right: -100%;
        margin-left: 20px;
        border-top: 1px solid #C6ECFD;;
    }
  }
  h3 {margin-top: 50px;}
  p {
    font-family: Merriweather;
    font-style: normal;
    font-weight: 300;
    font-size: 1em;
    line-height: 1.7;
    max-width: 700px;
  }
  a {
    color: inherit;
    font-family: inherit;
    font-weight: inherit;
  }
  div { max-width: 700px; }
  img {
      max-width: 700px; 
      margin: 40px 0;
    }
  @media (max-width: 780px) {
    padding: 30px 20px;
    img { width: 100%; }
    h1 { line-height: 1.2; }
    p { line-height: 1.8;}
  }
  @media (max-width: 640px){
      h1 { font-size: 34px; }
  }
`


export default CasesSection