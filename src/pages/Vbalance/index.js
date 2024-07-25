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
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Stack from "@mui/material/Stack";

// Material Kit 2 PRO React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import MKButton from "components/MKButton";

// Material Kit 2 PRO React examples
// import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import DefaultFooter from "examples/Footers/DefaultFooter";
import NavBar from "./components/NavBar"

// Coworking page sections
import Summary from "./sections/Summary"
import Biography from "./sections/Biography"
import Information from "./sections/Information";
import TestimonialsThree from "./sections/TestimonialsThree";
// import Testimonials from "pages/LandingPages/Coworking/sections/Testimonials";
// import AboutUs from "pages/LandingPages/Coworking/sections/AboutUs";
import Places from "pages/LandingPages/Coworking/sections/Places";
import Contact from "./sections/Contact"

// Routes
// import routes from "routes";
import footerRoutes from "footer.routes";

// Images
import bgImage from "assets/images/bg_vb/bgbalance1.png";

function Home() {
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
                minHeight="80vh"
                width="100%"
                sx={{
                    backgroundImage: ({ functions: { linearGradient, rgba }, palette: { gradients } }) =>
                        `${linearGradient(
                            rgba(gradients.dark.main, 0.1),
                            rgba(gradients.dark.state, 0.1)
                        )}, url(${bgImage})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    display: "grid",
                    placeItems: "center",
                }}
            >
                <NavBar />
                <MKBox />

                <Container>
                    <Grid
                        container
                        item
                        xs={12}
                        md={7}
                        justifyContent={{ xs: "center", md: "start" }}
                        sx={{ textAlign: { xs: "center", md: "left" } }}
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
                            variant="h4"
                            color="white"
                            mt={1}
                            pr={{ md: 12, lg: 24, xl: 46 }}
                            opacity={0.8}
                        >
                            Nutritionist, Nutrition Coach, Prevent Age Specialist
                        </MKTypography>
                        <Stack direction="row" spacing={1} mt={6} mb={3}>
                            <MKButton variant="gradient" color="warning">
                                explore
                            </MKButton>
                            <MKButton variant="text" color="white">
                                contact me
                            </MKButton>
                        </Stack>
                    </Grid>
                </Container>
                <MKBox />
            </MKBox>
            <MKBox
                display="flex"
                alignItems="center"
                minHeight="100vh"
                sx={{
                    backgroundImage: ({ palette: { gradients }, functions: { linearGradient, rgba } }) => `${linearGradient(rgba(gradients.dark.main, 0.4), rgba(gradients.dark.state, 0.4))}, url(${bgImage})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            >
                <Container>
                    <Grid
                        container
                        item
                        xs={12}
                        lg={6}
                        flexDirection="column"
                        justifyContent="center"
                        alignItems="center"
                        textAlign="center"
                        mx="auto"
                    >
                        <MKTypography
                            variant="h1"
                            color="white"
                            sx={({ breakpoints, typography: { size } }) => ({
                                [breakpoints.down("md")]: {
                                    fontSize: size["3xl"],
                                },
                            })}
                            mb={3}
                        >
                            Work with an amazing
                        </MKTypography>
                        <MKTypography variant="body1" color="white" mt={1} mb={{ xs: 3, sm: 8 }} px={3}>
                            We&apos;re constantly trying to express ourselves and actualize our dreams. If you
                            have the opportunity to play this game. If you have the opportunity to play this game.
                        </MKTypography>
                        <MKTypography variant="h6" color="white" textTransform="uppercase" mb={3}>
                            connect with us on:
                        </MKTypography>
                        <Stack direction="row" spacing={6} mx="auto">
                            <MKTypography
                                component={""}
                                href="#"
                                variant="body2"
                                onClick={(e) => e.preventDefault()}
                            >
                                <MKBox component="i" color="white" className="fab fa-facebook" />
                            </MKTypography>
                            <MKTypography
                                component={""}
                                href="#"
                                variant="body2"
                                onClick={(e) => e.preventDefault()}
                            >
                                <MKBox component="i" color="white" className="fab fa-instagram" />
                            </MKTypography>
                            <MKTypography
                                component={""}
                                href="#"
                                variant="body2"
                                onClick={(e) => e.preventDefault()}
                            >
                                <MKBox component="i" color="white" className="fab fa-twitter" />
                            </MKTypography>
                            <MKTypography
                                component={""}
                                href="#"
                                variant="body2"
                                onClick={(e) => e.preventDefault()}
                            >
                                <MKBox component="i" color="white" className="fab fa-google-plus" />
                            </MKTypography>
                        </Stack>
                    </Grid>
                </Container>
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
                <Places />
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
                                "url(https://img.freepik.com/free-photo/top-view-green-vegetables-with-copy-space_23-2148853317.jpg?t=st=1721494320~exp=1721497920~hmac=1fad721f1a709f147ad9f04dea41f75237d99b50246a44238daf25586a191f31&w=1380)",
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
                                    <MKButton variant="gradient" color="warning" fullWidth sx={{ boxShadow: "none" }}>
                                        Забронювати консультацію
                                    </MKButton>
                                </MKBox>
                            </Grid>
                        </Grid>
                    </MKBox>
                </Container>
                <Contact />
            </Card>
            <MKBox pt={6} px={1} mt={6}>
                <DefaultFooter content={footerRoutes} />
            </MKBox>
        </>
    );
}

export default Home;
