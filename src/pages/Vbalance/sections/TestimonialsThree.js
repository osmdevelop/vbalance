/* eslint-disable prettier/prettier */
import React, { useState } from 'react';

import IconButton from '@mui/material/IconButton';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import Collapse from '@mui/material/Collapse';

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 PRO React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import MKBadge from "components/MKBadge";

// Material Kit 2 PRO React components
import SimpleReviewCard from "examples/Cards/ReviewCards/SimpleReviewCard";

// Images
// import bgPattern from "assets/images/shapes/pattern-lines.svg";
import bgRose from "assets/images/rose-petals.png"
// import bgAvocado from "assets/images/bGavocado.jpg"

import team2 from "assets/images/team-2.jpg";
import team3 from "assets/images/team-3.jpg";
import team4 from "assets/images/team-4.jpg";

function TestimonialsThree() {
    const [expanded, setExpanded] = useState(null);

    const handleExpandClick = (cardId) => {
        setExpanded(expanded === cardId ? null : cardId);
    };

    const cards = [
        { id: 'card1', image: team2, name: 'Ольга', username: '36 років', review: 'Як 36-річна мати трьох дітей і співачка, мій досвід роботи з дієтологом Вірою Бойчук був трансформаційним. Спочатку я втратила 5 кілограмів лише за два тижні. Але справжній тріумф прийшов протягом наступних 8 місяців, коли я продовжувала застосовувати вчення Віри і загалом втратила 15 кг. Тепер моя вага стабільна, і я почуваюся просто чудово. Вона надала безцінні поради щодо харчування, які підходять моєму насиченому способу життя, а мережа жіночої підтримки, яку вона створила, була особливо цінною. Результати та отримані знання настільки вражаючі, що я вже записалася на наступний проект Віри.' },
        { id: 'card2', image: team3, name: 'Oksana', username: '33 y.o.', review: 'Після народження дитини мені було важко повернутися до здорової ваги. Робота з Вірою Бойчук стала переломним моментом. Її цілісний підхід охоплював все: від прийому вітамінів та гідратації до правильного харчування та гігієни сну. Під керівництвом Віри я скинула 7 кг і повністю змінила своє ставлення до їжі.' },
        { id: 'card3', image: team4, name: 'Oleh', username: '29 years', review: 'As someone who struggled with high acidity, I was skeptical about changing my diet. It seemed easier to rely on medication like Omeprazole. However, working with Vira Boichuk transformed my approach to health. Initially, the transition was challenging - meal prep, frequent grocery trips, and making healthier choices felt overwhelming. But Vira`s guidance and constant support kept me motivated.' }
    ];

    return (
        <MKBox position="relative" variant="gradient" bgColor="dark" py={2} mx={-2}>
            <MKBox
                component="img"
                src={bgRose}
                alt="background-pattern"
                position="absolute"
                top={0}
                left={0}
                width="100%"
                opacity={0.8}
                display={{ xs: "none", md: "block" }}
                sx={{ backgroundSize: "cover" }}
            />
            <Container>
                <Grid
                    container
                    justifyContent="center"
                    sx={{ pt: 8, pb: 5, position: "relative", zIndex: 3 }}
                >
                    <Grid item xs={12} md={6} sx={{ textAlign: "center" }}>
                        <MKBadge
                            badgeContent="відгуки"
                            variant="contained"
                            color="white"
                            size="sm"
                            container
                            sx={{ mb: 1 }}
                        />
                        <MKTypography variant="h2" color="white" mb={1}>
                            Відгуки від моїх клієнтів
                        </MKTypography>
                        <MKTypography variant="body1" color="white" fontWeight="light">
                            If you&apos;re selected for them you&apos;ll also get three tickets, opportunity to
                            access Investor Office Hours and Mentor Hours and much more all for free.
                        </MKTypography>
                    </Grid>
                </Grid>
                <Grid container spacing={3} sx={{ mt: 10, mb: 6 }}>
                    {cards.map(card => (
                        <Grid item xs={12} md={4} key={card.id}>
                            <SimpleReviewCard
                                image={card.image}
                                name={card.name}
                                username={card.username}
                                review={
                                    <>
                                        <Collapse in={expanded === card.id} collapsedSize={100} sx={{ position: 'relative', overflow: 'hidden' }}>
                                            {card.review}
                                            {expanded !== card.id && <div style={{ position: 'absolute', bottom: 0, right: 0, padding: '0 20px 0 0', background: 'linear-gradient(to right, rgba(255,255,255,0) 0%, #fb8c00 75%)' }}>...</div>}
                                        </Collapse>
                                        <IconButton
                                            onClick={() => handleExpandClick(card.id)}
                                            aria-expanded={expanded === card.id}
                                            aria-label="show more"
                                            sx={{ transform: expanded === card.id ? 'rotate(0deg)' : 'rotate(0deg)', transition: 'transform 0.2s' }}
                                        >
                                            {expanded === card.id ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                                        </IconButton>
                                    </>
                                }
                            />
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </MKBox>
    );
}

export default TestimonialsThree;