import React from "react"

import Header from "../components/header"
import staticdata from '../../staticdata.json'
import SEO from "../components/seo"
import Button from "../components/Button"
import styled from 'styled-components'

const NotFoundPageWrapper = styled.div `
`
const Group = styled.div `
  margin: auto;
  padding: 120px 20px 0 20px;
  height: 470px;
  position: relative;
  text-align: center;
  h1 {
    margin-block-start: 0;
    margin-block-end: 0;
    font-family: Merriweather;
    font-weight: bold;
    font-size: 150px;
  }
  div {
    margin: 40px auto;
  }

  @media (max-width: 640px) {
    height: 370px;
    h1 {
      font-size: 90px;
    }
  }
`
const Hands = styled.img `
  position: absolute;
  z-index: -1;
  left: 50%;
  top: 35%;
  transform:translate(-50%,-50%);
  @media (max-width: 640px) {
    width: 300px;
  }
`

const NotFoundPage = () => (
  <NotFoundPageWrapper>
    <Header siteTitle="Hermes"/>
    <SEO title="404: Not found :(" />
    <Group>
      <Hands src={require('../images/shrugged-hands.svg')} alt="srugged-hands"></Hands>
      <h1>404</h1>
      <h3>Page not found</h3>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
      <Button text="Go Home" link="/" />
    </Group>
    <footer>          
          <div className="SocialLinksGroup">
            {staticdata.cells.map(cell => (
              <a href={cell.url} target="_blank" className="SocialLinks" rel="noreferrer">{cell.title}</a>
            ))}
          </div>
          Built by Hermes © {new Date().getFullYear()}, with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
  </NotFoundPageWrapper>
)

export default NotFoundPage
