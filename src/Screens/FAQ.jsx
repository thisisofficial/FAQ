import React, { useState } from 'react'
import { App, Cont , ContLeft, ContRight, Title} from './Molecules/Particles/Containers';
import womandesk from '/src/images/illustration-woman-online-desktop.svg';
import womanmobile from '/src/images/illustration-woman-online-mobile.svg';
import box from '/src/images/bg-pattern-desktop.svg';
import boxmobile from '/src/images/bg-pattern-mobile.svg';
import { Question } from './Molecules/Question';

export function FAQ() {
    const [opened, setOpened] = useState(0);

    const toogleOpened = index => {
        if(opened == index){
            setOpened(0);
        }
        else{
            setOpened(index);
        }
    }

  return (
    <App>
        <Cont bg={box} bgmobile={boxmobile}>
            <ContLeft bg={womandesk} bgmobile={womanmobile}>
                
            </ContLeft>
            <ContRight>
                <Title>FAQ</Title>
                <Question 
                toogle={toogleOpened} 
                index={1}
                opened={opened}
                quest="How many team members can I invite?"
                ans="Like 2, idk. You probably dont have enough friends to fill a whole room still. Lol."/>

                <Question 
                toogle={toogleOpened} 
                index={2}
                opened={opened}
                quest="What is the maximum file upload size?"
                ans="No more than 2GB. All files in your account must fit your allotted storage space."/>

                <Question 
                toogle={toogleOpened} 
                index={3}
                opened={opened}
                quest="How do I reset my password?"
                ans="Contact support at 1-800-eatmyassyoucant or visit our suppor page at: www.myass.eatit/youcant"/>
                
                <Question 
                toogle={toogleOpened} 
                index={4}
                opened={opened}
                quest="Can I cancel my subscription?"
                ans="Uh...no, why would you anyway? How do you think we make money?. You our bitch now, so open wide."/>
                
                <Question 
                toogle={toogleOpened} 
                index={5}
                opened={opened}
                quest="Do you provide additional support?"
                ans="Yes! You may contact our support staff by sending an email to support@meetpage.com. We will reply ASAP."/>
            </ContRight>
        </Cont>
    </App>
  )
}
