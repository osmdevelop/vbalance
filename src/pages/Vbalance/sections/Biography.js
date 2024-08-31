/* eslint-disable prettier/prettier */

import React from 'react';
import { Card, CardContent, Typography, Avatar, Box, Grid } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

// import { deepPurple } from '@mui/material/colors';

import ViraImg from "../../../assets/images/vira/IMG_3641.JPG"

const Biography = () => {

    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('md')); // 'md' for 768px

    return (
        <Card 
            style={{ 
                maxWidth: 1280, 
                margin: 'auto', 
                marginTop: 30, 
                padding: 20, 
                display: 'flex', 
                flexDirection: isSmallScreen ? 'column' : 'row', // Row on large screens, column on small screens
                alignItems: 'flex-start', 
            }}
        >
            <CardContent style={{ flex: isSmallScreen ? '1 1 auto' : '2 1 60%', paddingRight: isSmallScreen ? 0 : 20 }}>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <div style={{ 
                            display: 'flex', 
                            alignItems: 'center', 
                            marginBottom: 20,
                            justifyContent: isSmallScreen ? 'start' : 'center',
                        }}>
                            <Avatar 
                                sx={{ 
                                    backgroundColor: "#e91e63", 
                                    marginRight: 2,
                                }} 
                                aria-label="recipe"
                            >
                                ВБ
                            </Avatar>
                            <Typography 
                                variant={isSmallScreen ? "h4" : "h2"} 
                                component="div"
                            >
                                Віра Бойчук
                            </Typography>
                        </div>
                        <Typography 
                            variant="subtitle1" 
                            color="primary" 
                            gutterBottom 
                            sx={{ fontWeight: "bold", fontSize: isSmallScreen ? "1rem" : "inherit" }}
                        >
                            Досвідчений лікар-терапевт, клінічний дієтолог та нутріціолог
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography 
                            variant="body2" 
                            component="p" 
                            sx={{ fontSize: isSmallScreen ? "0.875rem" : "1rem" }}
                        >
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

            <Box 
                sx={{ 
                    minWidth: isSmallScreen ? '100%' : '35%', 
                    marginTop: isSmallScreen ? 20 : 0, 
                    flex: isSmallScreen ? '1 1 auto' : '1 1 35%', 
                }}
            >
                <img
                    src={ViraImg} // Replace with the actual path to the image
                    alt="Віра Бойчук"
                    style={{ 
                        width: '100%', 
                        height: 'auto', 
                        borderRadius: '4px' 
                    }}
                />
            </Box>
        </Card>
    );
};

export default Biography;
