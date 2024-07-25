/* eslint-disable prettier/prettier */

import React from 'react';
import { Card, CardContent, Typography, Avatar, Box, Grid } from '@mui/material';
// import { deepPurple } from '@mui/material/colors';

import ViraImg from "../../../assets/images/vira/IMG_3641.JPG"

const Biography = () => {
    return (
        <Card style={{ maxWidth: 1280, margin: 'auto', marginTop: 30, padding: 20, display: 'flex', flexDirection: 'row' }}>
            <CardContent>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <div style={{ display: 'flex', alignItems: 'center', marginBottom: 20 }}>
                            <Avatar sx={{ backgroundColor: "#e91e63", marginRight: 2 }} aria-label="recipe">
                                ВБ
                            </Avatar>
                            <Typography variant="h2" component="div">
                                Віра Бойчук
                            </Typography>
                        </div>
                        <Typography variant="subtitle1" color="primary" gutterBottom sx={{ fontWeight: "bold" }}>
                            Досвідчений лікар-терапевт, клінічний дієтолог та нутріціолог
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant="body2" component="p">
                            Здобула вищу медичну освіту в Івано-Франківському Національному Медичному Університеті, який закінчила у 2009 році. Після цього пройшла інтернатуру за фахом &quot;Внутрішні хвороби&quot;.
                            <br /><br />
                            Має багаторічний практичний досвід роботи. Спочатку працювала терапевтом у міській лікарні, а згодом - асистентом та доцентом кафедри сімейної медицини рідного університету. У 2016 році успішно захистила дисертацію на тему: &quot;Роль інтестинальних гормонів та пепсиногенів у розвитку гастроезофагеальної рефлюксної хвороби, що поєднується з ендемічним зобом в умовах йододефіциту та підходи до її диференційованої терапії&quot;.
                            <br /><br />
                            У 2020 році здобула спеціалізацію з клінічної дієтології в Національній медичній академії ім. П.Л. Шупика у Києві. Відтоді Віра Бойчук консультує пацієнтів як сертифікований дієтолог, нутріціолог та фахівець з профілактики старіння, працюючи в Україні, Європі та США.
                            <br /><br />
                            Нині також задіяна у клінічних дослідженнях з нутриціології та гастроентерології в Лойола Університеті Чикаго. Є членом Української та Американської асоціацій дієтологів, а також Асоціації нутріціологів США.
                            <br /><br />
                            Віра Бойчук пропагує індивідуальний підхід до кожного пацієнта та комплексне бачення здоров&apos;я як гармонії тіла і душі, комфортного самопочуття та позитивного способу життя.
                        </Typography>
                    </Grid>
                </Grid>
            </CardContent>
            <Box sx={{ minWidth: 300 }}>
                <img
                    src={ViraImg} // Replace 'path_to_image.jpg' with the actual path to the image
                    alt="Віра Бойчук"
                    style={{ width: '100%', height: 'auto', borderRadius: '4px' }}
                />
            </Box>
        </Card>
    );
};

export default Biography;
