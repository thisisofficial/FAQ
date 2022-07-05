import styled from "styled-components";

export const App = styled.div`
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    background: linear-gradient(180deg, #B068E9 0%, #6463E7 100%);

`;

export const Cont =  styled.div`
width: 60%;
height: 70%;
display: flex;
justify-content: flex-start;
align-items: center;
background: #FFFFFF;
background-image: url(${props=>props.bg});
background-size: cover;
background-repeat: no-repeat;
background-position: -550px 60%;
box-shadow: 0px 50px 50px -20px rgba(53, 18, 122, 0.497159);
border-radius: 23px;
@media (max-width: 800px){
    display: block;
    width: 85%;
    height: 70%;
    justify-content: center;
    align-items: center; 
    background-image: url(${props=>props.bgmobile});
    background-size: 40%;
    background-repeat: no-repeat;
    background-position: center top;
}
@media (max-width: 400px){
    background-size: 65%;
}

`;

export const ContLeft =  styled.div`
width: 50%;
height: 100%;
background: url(${props => props.bgmobile});
background-repeat:no-repeat; 
background-size: contain;
background-position:center;
margin-left: -10%;
@media (max-width: 800px){
    display: block;
    height: 40%;
    width: 100%;
    background: url(${props => props.bgmobile});
    margin-left: 0%;
    background-repeat:no-repeat; 
    background-size: contain;
    background-position:center top;
    margin-top: -13%;
    margin-bottom: 0%;
}
@media (max-width: 400px){
    height: 30%;
    margin-top: -30%;
}

`;
export const ContRight =  styled.div`
width: calc(60% - 70px);
height: calc(100% - 60px);
padding-top: 60px;
margin-left: 70px;
    align-items: start;
    transition: all 0.5s ;

    @media (max-width: 800px){
        width: calc(100% - 48px);
        padding-left: 24px;
        padding-right: 24px;
        height: 80%;
        margin-left: 0px;
        padding-top: 20px;
        justify-content: center;
    }
    @media (max-width: 400px){
        margin-top: 20px;
    }
`;

export const ContQuestion = styled.div`
    width: 80%;
    min-height: 40px;
    margin-top: 15px;
    margin-bottom: 10px;
	padding-bottom: 5px;
    transition: all 0.5s;
    font-size: 16px;
    color: #4B4C5F;
    font-weight: ${props=> props.open? "700": "400"};
    font-family: 'Kumbh Sans';
    font-style: normal;
    position:relative;
    border-bottom-style: solid;
    border-bottom-width: medium;
    border-bottom-color: #E8E8EA;

    @media (max-width: 800px){
        margin-top: 0;
        width: 100%;
        font-size: 13px;
        line-height: 16px;
        padding-bottom: 0;
    }

    &::after{
    content: "";
    position: absolute;
	left: 100%;
    top: 25%;
	transform: translateY(-50%) rotate(${props=> props.open? "180deg":"0deg"});
	width: 15px;
	height: 15px;
    background-image: url(${props => props.arrow});
	background-position: center;
	background-size: contain;
	background-repeat: no-repeat;
	transition: all 0.5s ;
    }
`;

export const ContAns = styled.div`
    opacity: ${props=> props.open?"1": '0'};
    max-height: ${props=> props.open?"1000px": '0px'};
    overflow-y: hidden;
    transition: all 0.5s ;
    font-family: 'Kumbh Sans';
    font-style: normal;
    font-weight: 300;
    font-size: 14px;
    line-height: 18px;
    color: #787887;
`;

export const Title = styled.div`
    font-family: 'Kumbh Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    line-height: 40px;


    color: #1E1F36;
    @media (max-width: 800px){
        text-align: center;
    }


`;