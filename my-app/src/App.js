import React, { Fragment } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// I removed Layout stuff from this line
import Home from './pages/Home';
import About from './pages/About';
import Privacy from './pages/Privacy';
import TOS from './pages/TOS';
import Login from './pages/Login';
import Callback from './pages/Callback';
import Header from './components/Header';
import Footer from './components/Footer';
import { GlobalStyle, Wrapper } from './theme/GlobalStyles';
import { Body } from './theme/BodyElements';
import { PageContainer, ContentWrap, Bottom } from './theme/FooterElements';


function App() {
  return (
    <Router>
      <div>
        <PageContainer>
          <Fragment>
            <GlobalStyle />
            <Wrapper>
              <Header />
              <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/privacy" element={<Privacy />} />
                <Route path="/terms-of-service" element={<TOS />} />
                <Route path="/login" element={<Login />} />
                <Route path="/callback" element={<Callback />} />
              </Routes>
            </Wrapper>
          </Fragment>
          <Wrapper>
            <Bottom>
              <Footer />
            </Bottom>
          </Wrapper>

        </PageContainer>
      </div>
    </Router>
  );
}

export default App;
