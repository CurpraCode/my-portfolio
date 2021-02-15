import React from "react";
import styled from "styled-components";

function Footer (){
    return(
        <FooterPage>
                <FooterDiv>
                    <h2>CurtisDev</h2>
                    <p>Social Media Icons</p>
                <p>Design and Developed by Curtis</p>
                </FooterDiv>
        </FooterPage>
    )
}
export default Footer;

const FooterPage =styled.div`
height:30vh;
`
const FooterDiv =styled.div`
 max-width: 1240px;
 margin:0 auto;
 text-align: center;
 
`