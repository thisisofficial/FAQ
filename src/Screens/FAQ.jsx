import React, { useState } from 'react'
import { App, Cont , ContLeft, ContRight, Title} from './Molecules/Particles/Containers';
import womandesk from '/src/images/illustration-woman-online-desktop.svg';
import womanmobile from '/src/images/illustration-woman-online-mobile.svg';
import box from '/src/images/bg-pattern-desktop.svg';
import boxmobile from '/src/images/bg-pattern-mobile.svg';
import { Question } from './Molecules/Question';

export function FaqScreen() {
    const [opened, setOpened] = useState(null);

    const info =[
        {
            question: 'How many team members can I invite?',
            answer: "Like 2, idk. You probably dont have enough friends to fill a whole room still. Lol.",
        },
        {
            question: 'What is the maximum file upload size?',
            answer: "No more than 2GB. All files in your account must fit your allotted storage space.",
        },
        {
            question: 'How do I reset my password?',
            answer: "Contact support at 1-800-eatmyassyoucant or visit our suppor page at: www.myass.eatit/youcant",
        },
        {
            question: 'Can I cancel my subscription?',
            answer: "Uh...no, why would you anyway? How do you think we make money?. You our bitch now, so open wide.",
        },
        {
            question: 'Do you provide additional support?',
            answer: "Yes! You may contact our support staff by sending an email to support@meetpage.com. We will reply ASAP.",
        }
    ]

    const toogleOpened = index => {
        if(opened == index){
            setOpened(null);
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
                {info.map((info, i) => (
                                    <Question 
                                    toogle={toogleOpened} 
                                    index={i}
                                    opened={opened}
                                    quest={info.question}
                                    ans={info.answer}/>
                ))}
            </ContRight>
        </Cont>
    </App>
  )
}
