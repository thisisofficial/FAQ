import React from 'react'
import { ContQuestion, ContAns} from './Particles/Containers.jsx';
import arrow from '/src/images/icon-arrow-down.svg';

export function Question(props) {

    const {toogle, index, opened, quest, ans} = props;

  return (
    <ContQuestion arrow={arrow} open={opened == index? true: false} onClick={() => toogle(index)}>
        {quest}
        <ContAns open={opened == index? true: false}>{ans}</ContAns>
    </ContQuestion>
  )
}
