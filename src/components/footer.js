import {FooterContainer, FooterContent, FooterText, FooterMedia, FooterCopyright} from '../styles/footer-styles'
import {Logo, Links} from './utils'

function Footer() {
    return(
        <FooterContainer>
            <FooterContent>
                <FooterText>
                    <h2>IMPORTANT!</h2>
                    <p>Please wear mask to protect yourself</p>
                </FooterText>
                <Logo height = '30px' width = '300px' />
                <FooterMedia>
                    <Links />
                </FooterMedia>
            </FooterContent>
            <FooterCopyright>
             ©2020 Valentine All Rights Reserved.
            </FooterCopyright>
        </FooterContainer>
    );
}

export default Footer;