/** @jsx jsx */
import { jsx } from 'theme-ui'
import React from "react"
import {Container, Card, Flex, Heading } from 'theme-ui'

const IndexPage = () => {
  const handleScroll = (e) => e.preventDefault()
  React.useEffect(() => {
    document.addEventListener('scroll', handleScroll, { passive: false });
    document.addEventListener('wheel', handleScroll, { passive: false });
    document.addEventListener('touchmove', handleScroll, { passive: false });
     if(typeof window !== 'undefined' && window.document) {
      require('../bg.js')
    // Your script here...
 }
    }

  )
  return (
    <Container sx={{ width: '100%', height: '100vh'}}>
    <canvas id="stars" width="300" height="300" style={{position: 'absolute'}}></canvas>
      <Flex sx={{ height: '100vh' }}>
      <Card sx={{m: 'auto', background: 'hsla(0,0%,0%,70%)', border: 'hsla(0,0%,100%,80%) solid 1px', padding: 30}}>
        <Heading>rizome.io</Heading>
    </Card>
    </Flex>
    </Container>
  )
}

export default IndexPage
