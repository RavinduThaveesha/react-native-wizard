# react-native-wizard
A simple wizard for React Native

## example
![Image of Example](https://user-images.githubusercontent.com/5220867/72733432-d327e700-3bd2-11ea-8d5b-b8a5a6a03f7e.gif)

## how to use
```
import Wizard from './components/wizard';

 <Wizard onEnd={() => console.log('end')}>
    <Wizard.Step key={index}>
    </Wizard.Step>
    <Wizard.Step key={index}>
    </Wizard.Step>
</Wizard>
```

