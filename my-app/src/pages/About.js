// About.js

import React from 'react';
import { Body, Paragraph } from '../theme/BodyElements';
import { Wrapper } from '../theme/GlobalStyles';

function About() {
    return (
        <div>
            <Wrapper>
                <Body>
                    <h1>ABOUT</h1>
                </Body>
            </Wrapper>

            <Wrapper>
                <Paragraph>
                    <p>This is the about page for our application.</p>
                </Paragraph>
            </Wrapper>
        </div>
    );
}

export default About;
