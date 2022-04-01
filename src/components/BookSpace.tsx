import React, {useContext, useState} from "react";
import {HeadingMedium, ParagraphMedium, ParagraphSmall} from "baseui/typography";
import {Block} from "baseui/block";
import ViewMap from "./viewMap";
import {Button, KIND, SHAPE, SIZE} from "baseui/button";
import {LoginForm} from "./LoginForm";
import {ParkingLocationHeading} from "./ParkingLocationHeading";
import {CSSTransition} from "react-transition-group";
import {BookingSteps} from "./BookingSteps";
import IconedText from "./IconedText";
import {AiOutlineArrowRight} from "react-icons/ai";
import {StyledAction} from "baseui/card";
import {ListItemLabel} from "baseui/list";
import {CgOrganisation} from "react-icons/cg";
import {BiTimeFive} from "react-icons/bi";
import {IoLogoModelS} from "react-icons/io";
import {HiIdentification} from "react-icons/hi";
import {MdAddCircle} from "react-icons/md";
import {CarCard} from "./CarCard";
import {ProgressBar} from "baseui/progress-bar";
import {getCars} from "../API/cars"
import {AuthenticationContext} from "../Store";

async function makeCarCards(){
    let out = [];
    // @ts-ignore
    for(let car of await getCars()){
        out.push(<CarCard id={car.id} name={car.name} selectionFunction={(id) => {alert('selected car id: ' + id)}} artwork={(props: JSX.IntrinsicAttributes) => <ParagraphMedium color="primary"><BiTimeFive/></ParagraphMedium>}
                        endEnhancer={() => (
                            <ListItemLabel>{car.year}</ListItemLabel>
                        )} artwork1={(props: JSX.IntrinsicAttributes) => <ParagraphMedium
            color="primary"><CgOrganisation/></ParagraphMedium>} endEnhancer1={() => (
            <ListItemLabel>{car.make}</ListItemLabel>
        )} artwork2={(props: JSX.IntrinsicAttributes) => <ParagraphMedium
            color="primary"><IoLogoModelS/></ParagraphMedium>} endEnhancer2={() => (
            <ListItemLabel>{car.model}</ListItemLabel>
        )} artwork3={(props: JSX.IntrinsicAttributes) => <ParagraphMedium
            color="primary"><HiIdentification/></ParagraphMedium>} endEnhancer3={() => (
            <ListItemLabel>{car.plate}</ListItemLabel>
        )}/>)
    }
    return out;
}

export default function BookSpace(props: {
    theme: any
}) {
    const [step, setStepState] = React.useState(0)
    const [inProp, setInProp] = useState(false);
    const [cars, setCars] = useState([0])
    // @ts-ignore
    const [authUser, setAuthUser] = useContext(AuthenticationContext)
    const setStep = (stepNum: React.SetStateAction<number>) => {

        // Skip if login step and user is logged in
        if (stepNum === 1 && authUser !== undefined) {
            getCars()
            stepNum++;
        }
        setStepState(stepNum)
        setInProp(true)
    }
    const getCars = async () => {
        setCars([0])
        // @ts-ignore
        setCars(await makeCarCards())
    }
    const stepBack = () => {
        if (step === 2 && authUser !== undefined) {
            setStep(step-2)
        }else setStep(step-1)
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
                        <IconedText iconLast icon={<AiOutlineArrowRight/>} margin="8px">
                            Yep! Looks Right
                        </IconedText>
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
                        <img src={require('./../assets/img/handsMeetingShapes.png')} width="100%" alt="Friendly Hands" style={{
                            filter: "saturate(200%)"
                        }}/>
                    </Block>
                    <strong>

                        <HeadingMedium marginBottom="0px" paddingTop="15px" marginTop="0px"><strong>Let's get you logged in</strong></HeadingMedium></strong>
                    <ParagraphMedium marginTop="5px">In order for us to communicate with you about your car, such as your meter running low, tickets or other information, we need your phone number</ParagraphMedium>
                    <ParagraphSmall marginBottom="30px">We will <strong>never</strong> sell your phone number, or use it for promotional activities</ParagraphSmall>

                    <LoginForm onLogin={() => {setStep(2); getCars()}} />
                </>
            }
        },
        {
            step: {
                number: 3,
                name: 'Car',
                content: <>

                    <strong>

                        <HeadingMedium marginBottom="0px" paddingTop="15px" marginTop="0px"><strong>Select or add your
                            car</strong></HeadingMedium></strong>
                    <ParagraphMedium marginTop="5px">If you don't have a car added, you can add it now</ParagraphMedium>


                    {cars[0] == 0 ? <ProgressBar value={0} infinite /> : cars}

                    <Block marginTop="15px">
                        <StyledAction>
                            <Button
                                shape={SHAPE.pill}
                                size={SIZE.large}
                                overrides={{
                                    BaseButton: {
                                        style: ({$theme}) => ({
                                            width: "100%",
                                            backgroundColor: $theme.colors.accent
                                        })
                                    },

                                }}
                            >
                                <IconedText icon={<MdAddCircle/>}>Add a new car</IconedText>
                            </Button>
                        </StyledAction>
                    </Block>
                </>
            }
        },
    ]
    return <>
        <ParkingLocationHeading back={step !== 0} compact={step !== 0} backFunc={stepBack}/>
        <CSSTransition in={inProp}  timeout={300}
                       classNames="alert">
            <BookingSteps step={steps[step].step} />
        </CSSTransition>

    </>;
}