/* eslint-disable prettier/prettier */

import React from 'react';
import { Container, Typography } from '@mui/material';

const Summary = () => {
    return (
        <Container id="summary" maxWidth="md" style={{ marginTop: '20px', marginBottom: '20px' }}>
            <Typography variant="h2" component="h1" gutterBottom>
                Відкрийте шлях до гармонії тіла і душі
            </Typography>
            <Typography variant="body1">
                Ви унікальні, і ваше здоров&apos;я - безцінний скарб. Разом ми створимо індивідуальну дорожню карту до комфортного самопочуття, природної форми та життєвої наснаги.
                Досвід, розуміння, персоналізований підхід - ось що чекає на вас в світі здорового харчування. Зробіть перший крок назустріч до кращої версії себе - сповненого енергії та впевненості у собі.
                Почніть змінюватися сьогодні - вага вже не матиме значення. Головне - це любов до себе та задоволення від кожної миті життя!
            </Typography>
        </Container>
    );
};

export default Summary;
