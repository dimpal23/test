import { Grid } from '@mui/material'
import React from 'react'
import About from './About'
import Description from './Description'
import Footer from './Footer'
import Header from './Header'
import LogoComponent from './LogoComponent'
import OurTeam from './OurTeam'

const Home = () => {
  return (
    <Grid container>
        <Header />
        <About />
        <OurTeam  />
        <Description />
        <LogoComponent />
        <Footer />

    </Grid>
  )
}

export default Home