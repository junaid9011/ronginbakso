import React from 'react';
import CarouselSlider from '../../Componants/Carousel/Carousel';
import Committee from '../../Componants/Committee/Committee';
import Counter from '../../Componants/Counter/Counter';
import Footer from '../../Componants/Footer/Footer';
import Header from '../../Componants/Header/Header';
import Planning from '../../Componants/Planning/Planning';

const Home = () => {
    return (
        <div>
            <Header/>
            <CarouselSlider/>
            <Planning/>
            <Counter/>
            <Committee/>
            <Footer/>
        </div>
    );
};

export default Home;