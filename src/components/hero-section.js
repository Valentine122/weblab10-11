import {HeroContainer, HeroHeader, HeroInfo, HeroText, HeroButtonText, HeroButton} from '../styles/hero-section-styles'

function HeroSection() {
    return(
        <HeroContainer>
            <HeroInfo>
                <HeroHeader>Here should be text about Combine¯\_(ツ)_/¯!</HeroHeader>
                <HeroButtonText>
                    <a href = '/catalog'>
                        <HeroButton>Buy</HeroButton>
                    </a>
                    <HeroText>Online & In Store</HeroText>
                </HeroButtonText>       
            </HeroInfo>
        </HeroContainer>

    );
}

export default HeroSection;