/* eslint-disable prettier/prettier */

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 PRO React components
import MKBox from "components/MKBox";
import MKInput from "components/MKInput";
import MKButton from "components/MKButton";
import MKTypography from "components/MKTypography";

import TodayIcon from '@mui/icons-material/Today';

// calendly

// Images
import bgImage from "assets/images/examples/blog2.jpg";

function ContactUsTwo() {
    return (
        <MKBox component="section" py={{ xs: 0, lg: 6 }}>
            <Container id="contact">
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
                                <form name="inquiry" method="POST" data-netlify="true" data-netlify-honeypot="bot-field" action="/">
                                    <MKBox px={3} py={{ xs: 2, sm: 6 }}>
                                        <MKTypography variant="h2" mb={1}>
                                            Контакти
                                        </MKTypography>
                                        <MKTypography variant="body1" color="text" display="flex"
                                    gap="10px" alignItems="center">
                                            Напишіть своє повідомлення або
                                            <MKButton 
                                                variant="outlined" 
                                                color="success"
                                                component="a"  // Makes the button behave as a link
                                                href="https://calendly.com/olehsmlk/30min" 
                                                target="_blank" 
                                                rel="noopener noreferrer"
                                                >
                                                забронюйте консультацію <TodayIcon/>
                                            </MKButton>
                                        </MKTypography>
                                    </MKBox>
                                    <form name="inquiry" method="POST" data-netlify="true" data-netlify-honeypot="bot-field" action="/">
                                        <MKBox pt={0.5} pb={3} px={3}>
                                            <Grid container>
                                            <input type="hidden" name="form-name" value="inquiry" />
                                            <input type="hidden" name="bot-field" />
                                            
                                            <Grid item xs={12} pr={1} mb={3}>
                                                <MKInput
                                                variant="standard"
                                                label="Ім'я"
                                                placeholder="Моє ім'я"
                                                InputLabelProps={{ shrink: true }}
                                                fullWidth
                                                name="name"
                                                required
                                                />
                                            </Grid>
                                            <Grid item xs={12} pr={1} mb={3}>
                                                <MKInput
                                                variant="standard"
                                                label="Тема"
                                                placeholder="Звертаюся щодо..."
                                                InputLabelProps={{ shrink: true }}
                                                fullWidth
                                                name="subject"
                                                required
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
                                                name="message"
                                                required
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
                                            <MKButton variant="gradient" color="success" type="submit">
                                                Надіслати
                                            </MKButton>
                                            </Grid>
                                        </MKBox>
                                        </form>


                                </form>
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
                                                vira.boichuk@vbalance.food
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
                                                Online / Illinois, USA
                                            </MKTypography>
                                        </MKBox>
                                        {/* <MKBox mt={3}>
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
                                        </MKBox> */}
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