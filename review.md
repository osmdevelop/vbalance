<Collapse in={expanded} collapsedSize={100} sx={{ position: 'relative', overflow: 'hidden' }}>
                                        {"Як 36-річна мати трьох дітей і співачка, мій досвід роботи з дієтологом Вірою Бойчук був трансформаційним. Спочатку я втратила 5 кілограмів лише за два тижні. Але справжній тріумф прийшов протягом наступних 8 місяців, коли я продовжувала застосовувати вчення Віри і загалом втратила 15 кг. Тепер моя вага стабільна, і я почуваюся просто чудово. Вона надала безцінні поради щодо харчування, які підходять моєму насиченому способу життя, а мережа жіночої підтримки, яку вона створила, була особливо цінною. Результати та отримані знання настільки вражаючі, що я вже записалася на наступний проект Віри."}
                                        {!expanded && <div style={{ position: 'absolute', bottom: 0, right: 0, padding: '0 20px 0 0', background: 'linear-gradient(to right, rgba(255,255,255,0) 0%, #000 75%)' }}>...</div>}
                                    </Collapse>
                                    <IconButton
                                        onClick={handleExpandClick}
                                        aria-expanded={expanded}
                                        aria-label="show more"
                                        sx={{ transform: expanded ? 'rotate(0deg)' : 'rotate(0deg)', transition: 'transform 0.2s' }}
                                    >
                                        {expanded ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                                    </IconButton>
                                </>
                            }
                        />
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <SimpleReviewCard
                            image={team3}
                            name="Oksana"
                            username="33 y.o."
                            review={
                                <>
                                    <Collapse in={expanded} collapsedSize={100} sx={{ position: 'relative', overflow: 'hidden' }}>
                                        {"Після народження дитини мені було важко повернутися до здорової ваги. Робота з Вірою Бойчук стала переломним моментом. Її цілісний підхід охоплював все: від прийому вітамінів та гідратації до правильного харчування та гігієни сну. Під керівництвом Віри я скинула 7 кг і повністю змінила своє ставлення до їжі."}
                                        {!expanded && <div style={{ position: 'absolute', bottom: 0, right: 0, padding: '0 20px 0 0', background: 'linear-gradient(to right, rgba(255,255,255,0) 0%, #000 75%)' }}>...</div>}
                                    </Collapse>
                                    <IconButton
                                        onClick={handleExpandClick}
                                        aria-expanded={expanded}
                                        aria-label="show more"
                                        sx={{ transform: expanded ? 'rotate(0deg)' : 'rotate(0deg)', transition: 'transform 0.2s' }}
                                    >
                                        {expanded ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                                    </IconButton>
                                </>
                            }
                        />
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <SimpleReviewCard
                            image={team4}
                            name="Oleh"
                            username="29 years"
                            review={
                                <>
                                    <Collapse in={expanded} collapsedSize={100} sx={{ position: 'relative', overflow: 'hidden' }}>
                                        {"As someone who struggled with high acidity, I was skeptical about changing my diet. It seemed easier to rely on medication like Omeprazole. However, working with Vira Boichuk transformed my approach to health. Initially, the transition was challenging - meal prep, frequent grocery trips, and making healthier choices felt overwhelming. But Vira's guidance and constant support kept me motivated."}
                                        {!expanded && <div style={{ position: 'absolute', bottom: 0, right: 0, padding: '0 20px 0 0', background: 'linear-gradient(to right, rgba(255,255,255,0) 0%, #000 75%)' }}>...</div>}
                                    </Collapse>
                                    <IconButton
                                        onClick={handleExpandClick}
                                        aria-expanded={expanded}
                                        aria-label="show more"
                                        sx={{ transform: expanded ? 'rotate(0deg)' : 'rotate(0deg)', transition: 'transform 0.2s' }}
                                    >
                                        {expanded ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                                    </IconButton>
                                </>