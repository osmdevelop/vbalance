/* eslint-disable prettier/prettier */
/*
=========================================================
* Material Kit 2 PRO React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-pro-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import React from 'react';
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import { useSpring, animated } from 'react-spring';

// import { motion} from 'framer-motion';
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
// import Stack from "@mui/material/Stack";

// Material Kit 2 PRO React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import MKButton from "components/MKButton";

// Material Kit 2 PRO React examples
// import DefaultNavbar from "examples/Navbars/DefaultNavbar";
// FOOTER
// import DefaultFooter from "examples/Footers/DefaultFooter";
import NavBar from "./components/NavBar"

// Coworking page sections
import Summary from "./sections/Summary"
import Biography from "./sections/Biography"
import Information from "./sections/Information";
import TestimonialsThree from "./sections/TestimonialsThree";
// import Testimonials from "pages/LandingPages/Coworking/sections/Testimonials";
// import AboutUs from "pages/LandingPages/Coworking/sections/AboutUs";
import Blog from "./sections/Blog";
import Formspree from "./sections/Formspree"

// Routes
// import routes from "routes";
// import footerRoutes from "footer.routes";

// Images
import bgImage from "assets/images/bg_vb/bgbalance1.png";
import bgCTA from "assets/images/bGavocado.jpg"

function Home() {
    const bounce = useSpring({
    from: { y: -20 },  // Start position
    to: { y: 0 },      // End position
    config: {
      mass: 1,
      stiffness: 200,
      damping: 10,
    },
    reset: true,       // Reset animation when the component is remounted
    loop: { reverse: true },  // Make it bounce back and forth
  });

    return (
        <>
        
            {/* <DefaultNavbar
                routes={routes}
                action={{
                    type: "external",
                    route: "https://www.creative-tim.com/product/material-kit-pro-react",
                    label: "buy now",
                    color: "info",
                }}
                transparent
                sticky
            /> */}
            {/* <NavBar /> */}
            <MKBox
                minHeight="90vh"
                width="100%"
                sx={{
                    backgroundImage: ({ functions: { linearGradient, rgba }, palette: { gradients } }) =>
                        `${linearGradient(
                            rgba(gradients.dark.main, 0.1),
                            rgba(gradients.dark.state, 0.1)
                        )}, url(${bgImage})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    placeItems: "center",
                }}
            >
                <NavBar />
                <MKBox />
                {/* glassmorphism */}
                <Container sx={{
                minHeight: '250px',
                minWidth: '100px',
                backgroundColor: 'rgba(34, 44, 0, 0.5)',
                backdropFilter: 'blur(10px)',
                borderRadius: '16px',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                paddingTop: '100px', // Consider adjusting or removing to improve centering
                marginTop: "150px",
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between', // Ensures vertical centering
                alignItems: 'center', // Ensures horizontal centering
                boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
                marginBottom: "-20px",
                }}>
      <Grid
        container
        item
        xs={12}
        md={7}
        justifyContent="center" // Centers content within the grid for all viewport sizes
        sx={{ textAlign: "center", width: '100%' }} // Ensures text alignment is centered
      >
        <MKTypography
          variant="h1"
          color="white"
          mt={-10}
          sx={({ breakpoints, typography: { size } }) => ({
            [breakpoints.down("md")]: {
              fontSize: size["3xl"],
            },
          })}
        >
          Vira Boichuk
        </MKTypography>
        <MKTypography
          variant="h3"
          color="white"
          mt={1}
        //   pr={{ md: 12, lg: 24, xl: 46 }}
          opacity={0.8}
        >
          Nutritionist, Nutrition Coach, Prevent Age Specialist
        </MKTypography>
        {/* <Stack direction="row" spacing={4} mt={6} mb={3}>
          <MKButton variant="gradient" size="large" color="primary">
            explore
          </MKButton>
          <MKButton variant="text" color="white">
            contact me
          </MKButton>
        </Stack> */}

      </Grid>
            <animated.div style={bounce}>
                <KeyboardDoubleArrowDownIcon sx={{ color: "#ffffff90", transform: "scale(2)" }} />
            </animated.div>
    </Container>
                <MKBox />
            </MKBox>
            <Card
                sx={{
                    p: 2,
                    mx: { xs: 2, lg: 3 },
                    mt: -8,
                    mb: 4,
                    backgroundColor: ({ palette: { white }, functions: { rgba } }) => rgba(white.main, 0.8),
                    backdropFilter: "saturate(200%) blur(30px)",
                    boxShadow: ({ boxShadows: { xxl } }) => xxl,
                }}
            >
                <Summary />
                <Biography />
                <Information />
                <TestimonialsThree />
                {/* <AboutUs /> */}
                <Blog />
                <Container>
                    <MKBox
                        display="flex"
                        justifyContent="space-between"
                        alignItems="center"
                        borderRadius="xl"
                        my={24}
                        p={6}
                        sx={{
                            backgroundImage:
                                `url(${bgCTA})`,
                                backgroundSize: 'cover',         // Ensure the image covers the entire area
        backgroundPosition: 'center', 
                        }}
                    >
                        <Grid container spacing={3} alignItems="center">
                            <Grid item xs={12} md={8} lg={5}>
                                <MKTypography variant="h5" color="white" fontWeight="bold" maxWidth="26em">
                                    Приєднуйтесь до сотень задоволених клієнтів Віри Бойчук! Запишіться на консультацію вже сьогодні і розпочніть свою трансформацію під керівництвом експерта з нутриціології та профілактики старіння.
                                </MKTypography>
                            </Grid>
                            <Grid item xs={12} lg={6} sx={{ ml: "auto" }}>
                                <MKBox width="12rem" ml="auto">
                                    <MKButton variant="gradient" color="warning" fullWidth sx={{ boxShadow: "none" }} href="#contact">
                                        Забронювати консультацію
                                    </MKButton>
                                </MKBox>
                            </Grid>
                        </Grid>
                    </MKBox>
                </Container>
                <Formspree />
            </Card>
            {/* <MKBox pt={6} px={1} mt={6}>
                <DefaultFooter content={footerRoutes} />
            </MKBox> */}
        </>
    );
}

export default Home;
