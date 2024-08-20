/* eslint-disable prettier/prettier */

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 PRO React components
import MKBox from "components/MKBox";
import MKInput from "components/MKInput";
import MKButton from "components/MKButton";
import MKTypography from "components/MKTypography";

// calendly

// Images
import bgImage from "assets/images/examples/blog2.jpg";

function ContactUsTwo() {
    return (
        <MKBox component="section" py={{ xs: 0, lg: 6 }}>
            <Container>
                <Grid container item px={6}>
                    <MKBox
                        width="100%"
                        bgColor="white"
                        borderRadius="xl"
                        shadow="xl"
                        mb={6}
                        sx={{ overflow: "hidden" }}
                    >
                        <Grid container spacing={3}>
                            <Grid item xs={12} lg={7}>
                                <MKBox component="form" p={2} method="post">
                                    <MKBox px={3} py={{ xs: 2, sm: 6 }}>
                                        <MKTypography variant="h2" mb={1}>
                                            Контакти
                                        </MKTypography>
                                        <MKTypography variant="body1" color="text" mb={2}>
                                            Напишіть своє повідомлення
                                        </MKTypography>
                                    </MKBox>
                                    <MKBox pt={0.5} pb={3} px={3}>
                                        <Grid container>
                                            <Grid item xs={12} pr={1} mb={3}>
                                                <MKInput
                                                    variant="standard"
                                                    label="Ім'я"
                                                    placeholder="Моє ім'я"
                                                    InputLabelProps={{ shrink: true }}
                                                    fullWidth
                                                />
                                            </Grid>
                                            <Grid item xs={12} pr={1} mb={3}>
                                                <MKInput
                                                    variant="standard"
                                                    label="Тема"
                                                    placeholder="Звертаюся щодо..."
                                                    InputLabelProps={{ shrink: true }}
                                                    fullWidth
                                                />
                                            </Grid>
                                            <Grid item xs={12} pr={1} mb={3}>
                                                <MKInput
                                                    variant="standard"
                                                    label="Ваше повідомлення"
                                                    placeholder="Хочу написати про..."
                                                    InputLabelProps={{ shrink: true }}
                                                    fullWidth
                                                    multiline
                                                    rows={6}
                                                />
                                            </Grid>
                                        </Grid>
                                        <Grid
                                            container
                                            item
                                            xs={12}
                                            md={6}
                                            justifyContent="flex-end"
                                            textAlign="right"
                                            ml="auto"
                                        >
                                            <MKButton variant="gradient" color="success">
                                                Надіслати
                                            </MKButton>
                                        </Grid>
                                    </MKBox>
                                </MKBox>
                            </Grid>
                            <Grid
                                item
                                xs={12}
                                lg={5}
                                position="relative"
                                px={0}
                                sx={{
                                    backgroundImage: ({
                                        palette: { gradients },
                                        functions: { rgba, linearGradient },
                                    }) => `${linearGradient(rgba(gradients.warning.main, 0.8), rgba(gradients.success.state, 0.8))}, url(${bgImage})`,
                                    backgroundSize: "cover",
                                }}
                            >
                                <MKBox
                                    display="flex"
                                    justifyContent="center"
                                    alignItems="center"
                                    width="100%"
                                    height="100%"
                                >
                                    <MKBox py={6} pl={6} pr={{ xs: 6, sm: 12 }} my="auto">
                                        <MKTypography variant="h3" color="white" mb={1}>
                                            Контактна інформація
                                        </MKTypography>
                                        <MKTypography variant="body2" color="white" opacity={0.8} mb={3}>
                                            Заповніть форму...
                                        </MKTypography>
                                        <MKBox display="flex" p={1}>
                                            <MKTypography variant="button" color="white">
                                                <i className="fas fa-phone" />
                                            </MKTypography>
                                            <MKTypography
                                                component="span"
                                                variant="button"
                                                color="white"
                                                opacity={0.8}
                                                ml={2}
                                                fontWeight="regular"
                                            >
                                                000-000-0000
                                            </MKTypography>
                                        </MKBox>
                                        <MKBox display="flex" color="white" p={1}>
                                            <MKTypography variant="button" color="white">
                                                <i className="fas fa-envelope" />
                                            </MKTypography>
                                            <MKTypography
                                                component="span"
                                                variant="button"
                                                color="white"
                                                opacity={0.8}
                                                ml={2}
                                                fontWeight="regular"
                                            >
                                                vira@vbalance.food
                                            </MKTypography>
                                        </MKBox>
                                        <MKBox display="flex" color="white" p={1}>
                                            <MKTypography variant="button" color="white">
                                                <i className="fas fa-map-marker-alt" />
                                            </MKTypography>
                                            <MKTypography
                                                component="span"
                                                variant="button"
                                                color="white"
                                                opacity={0.8}
                                                ml={2}
                                                fontWeight="regular"
                                            >
                                                Online
                                            </MKTypography>
                                        </MKBox>
                                        <MKBox mt={3}>
                                            <MKButton variant="text" color="white" size="large" iconOnly>
                                                <i className="fab fa-facebook" style={{ fontSize: "1.25rem" }} />
                                            </MKButton>
                                            <MKButton variant="text" color="white" size="large" iconOnly>
                                                <i className="fab fa-twitter" style={{ fontSize: "1.25rem" }} />
                                            </MKButton>
                                            <MKButton variant="text" color="white" size="large" iconOnly>
                                                <i className="fab fa-youtube" style={{ fontSize: "1.25rem" }} />
                                            </MKButton>
                                            <MKButton variant="text" color="white" size="large" iconOnly>
                                                <i className="fab fa-instagram" style={{ fontSize: "1.25rem" }} />
                                            </MKButton>
                                        </MKBox>
                                    </MKBox>
                                </MKBox>
                            </Grid>
                        </Grid>
                    </MKBox>
                </Grid>
            </Container>
        </MKBox>

    );
}

export default ContactUsTwo;