import React, {useState} from "react";
import {HeadingMedium, ParagraphMedium, ParagraphSmall} from "baseui/typography";
import {Block} from "baseui/block";
import ViewMap from "./viewMap";
import {ThemeContext} from "../Store";
import {Button, KIND, SHAPE, SIZE} from "baseui/button";
import {LoginForm} from "./LoginForm";
import {ParkingLocationHeading} from "./ParkingLocationHeading";
import {CSSTransition} from "react-transition-group";
import {BookingSteps} from "./BookingSteps";

export default function BookSpace(props: {
    theme: any
}) {
    const [step, setStepState] = React.useState(0)
    const [inProp, setInProp] = useState(false);
    const setStep = (stepNum: React.SetStateAction<number>) => {
        setStepState(stepNum)
        setInProp(true)
    }
    const stepBack = () => {
        setStep(step-1)
    }
    const steps = [
        {
            step: {
                number: 1,
                name: 'Verify',
                content: <><strong>

                    <HeadingMedium marginBottom="0px" paddingTop="15px" marginTop="0px"><strong>Is this the right
                        parking
                        location?</strong></HeadingMedium></strong>
                    <ParagraphMedium marginTop="0px">We don't want you to pay for the wrong spot</ParagraphMedium>
                    <Block marginTop="30px">
                        <ViewMap pinText="You should be here" badgeColor="purple" badgeText="JHB-747"
                                 latitude="34.8241533"
                                 longitude="-82.386209" theme={props.theme.name.includes('dark') ? 'dark' : 'light'}/>
                    </Block>
                    <Button
                        onClick={() => setStep(1)}
                        size={SIZE.default}
                        shape={SHAPE.pill}

                        overrides={{
                            BaseButton: {
                                style: ({$theme}) => ({
                                    width: "100%",
                                    backgroundColor: $theme.colors.accent
                                })
                            }
                        }}
                    >
                        Yep! Looks Right.
                    </Button>
                    <Block marginTop="10px" marginBottom="30px">
                        <Button
                            onClick={() => alert("click")}
                            size={SIZE.default}
                            shape={SHAPE.pill}
                            kind={KIND.minimal}
                            overrides={{
                                BaseButton: {
                                    style: ({$theme}) => ({
                                        width: "100%",
                                        backgroundColor: $theme.colors.backgroundTertiary
                                    })
                                }
                            }}
                        >
                            Nope. I need to update my location
                        </Button>
                    </Block></>
            }
        },
        {
            step: {
                number: 2,
                name: 'Login',
                content: <>

                    <Block marginTop="15px">
                        <img src={require('./../assets/img/handpeace.png')} width="50px" />
                    </Block>
                    <strong>

                        <HeadingMedium marginBottom="0px" paddingTop="15px" marginTop="0px"><strong>Let's get you logged in</strong></HeadingMedium></strong>
                    <ParagraphMedium marginTop="5px">In order for us to communicate with you about your car, such as your meter running low, tickets or other information, we need your phone number</ParagraphMedium>
                    <ParagraphSmall marginBottom="30px">We will <strong>never</strong> sell your phone number, or use it for promotional activities</ParagraphSmall>

                    <LoginForm onLogin={() => {setStep(1)}} />
                </>
            }
        },
    ]
    return <>
        <ParkingLocationHeading back={step !== 0} compact={step !== 0} backFunc={stepBack}/>
        <CSSTransition in={inProp}  timeout={300}
                       classNames="alert">
            <BookingSteps step={steps[step].step}/>
        </CSSTransition>

    </>;
}