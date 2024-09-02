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
import Stack from "@mui/material/Stack";
import MKBox from "components/MKBox";
import SimpleInfoCard from "examples/Cards/InfoCards/SimpleInfoCard";

// import List from "@mui/material/List";
// import ListItem from "@mui/material/ListItem";
// import ListItemText from "@mui/material/ListItemText";
// import ListItemIcon from "@mui/material/ListItemIcon";
// import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import MKTypography from "components/MKTypography";


function Information() {
    return (
        <MKBox component="section" py={{ xs: 6, md: 12 }}>
            <Container>
                <MKTypography variant="h2" mb={3} sx={{ textAlign: 'center' }}>
                    Види послуг:
                </MKTypography>
                <Grid container item xs={12} justifyContent="center">
                    <Grid
                        item
                        xs={12}
                        md={4}
                        sx={{ ml: { xs: 0, md: "auto" }, mr: { xs: 0, md: 6 }, mb: { xs: 4, md: 0 } }}
                    >
                        <Stack spacing={{ xs: 4, md: 8 }}>
                            <SimpleInfoCard
                                icon="info"
                                title="Консультація онлайн - перший крок до змін!"
                                description={
                                    <div>
                                        <ul>
                                            <li>Деталізований розбір аналізів та харчових звичок</li>
                                            <li>Індивідуальні рекомендації з нутріціології та здорового способу життя</li>
                                            <li>Підбір вітамінів і харчових добавок для вашого організму при потребі</li>
                                            <li>PDF-інструкція та приклад одноденного меню</li>
                                        </ul>
                                    </div>
                                }
                            />
                            <SimpleInfoCard
                                icon="sentiment_satisfied"
                                title="Місячний супровід - шлях до довгострокових результатів"
                                description={
                                    <div>
                                        <ul>
                                            <li>Індивідуальна програма дій для досягнення ваших цілей</li>
                                            <li>Меню на 4 тижні з можливістю корекції</li>
                                            <li>Щоденне спілкування в текстовому форматі з відповідями на питання і контролем ситуації</li>
                                            <li>Щотижневі дзвінки у форматі міні-лекцій і відповідей на питання, підбір корисних матеріалів.</li>
                                            <li>Щотижневі дзвінки-лекції для поглиблення знань</li>
                                            <li>Доступ до корисних матеріалів з нутриціології</li>
                                        </ul>
                                    </div>
                                }
                            />
                        </Stack>
                    </Grid>
                    <Grid
                        item
                        xs={12}
                        md={4}
                        sx={{ mr: { xs: 0, md: "auto" }, ml: { xs: 0, md: 6 }, mb: { xs: 4, md: 0 } }}
                    >
                        <Stack spacing={{ xs: 4, md: 8 }}>
                            <SimpleInfoCard
                                icon="insights"
                                title="Комплексна програма &quot;Збалансоване меню&quot;"
                                description={
                                    <div>
                                        <ul>
                                            <li>Ретельний аналіз стану здоров&quot;я та потреб вашого тіла</li>
                                            <li>Розробка 7-денного раціону з урахуванням всіх вподобань</li>
                                            <li>Текстові рекомендації щодо оптимального харчування</li>
                                            <li>Підбір біологічно активних добавок при потребі</li>
                                        </ul>
                                    </div>
                                }
                            />
                            <MKBox
                                color="white"
                                // bgColor="#338737"
                                // variant="gradient"
                                borderRadius="lg"
                                shadow="lg"
                                opacity={1}
                                p={3}
                                sx={{ backgroundColor: "#FA8072" }}
                            >
                                Яку б програму ви не обрали - професійний супровід Віри забезпечить вашу впевненість на шляху до ідеального здоров&apos;я!

                            </MKBox>
                        </Stack>
                    </Grid>
                </Grid>
                {/* <MKTypography variant="body1" color="text" mt="35px" style={{ display: "flex", flexDirection: "columg", textAlign: 'Center' }}>
                    Яку б програму ви не обрали - професійний супровід Віри забезпечить вашу впевненість на шляху до ідеального здоров&apos;я!
                </MKTypography> */}
            </Container>
        </MKBox >
    );
}

export default Information;
