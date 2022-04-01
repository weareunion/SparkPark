import React, {useContext} from "react";
import {PhoneInput} from "baseui/phone-input";
import {Button, SHAPE, SIZE} from "baseui/button";
import {Block} from "baseui/block";
import { Notification, KIND } from "baseui/notification";
import IconedText from "./IconedText";
import {MdOutlineError} from "react-icons/md";
import {PinCode} from "baseui/pin-code";
import {HeadingXSmall, ParagraphSmall} from "baseui/typography";

import authAPI from './../API/auth'
import {AuthenticationContext} from "../Store";

export function LoginForm(props: {
    onLogin: () => void
}) {

    const [country, setCountry] = React.useState(undefined);
    const [text, setText] = React.useState("");
    const [errorMsg, setErrorMsg] = React.useState('')
    const [values, setValues] = React.useState([
        "",
        "",
        "",
        ""
    ]);
    const [loadingState, setLoadingState] = React.useState(false)
    const [isInCodeConfirm, setCodeConfirm] = React.useState(false)
    // @ts-ignore
    const [authedUser, setAuthedUser] = useContext(AuthenticationContext)

    const validate = async () => {
        if (authedUser !== undefined) {
            props.onLogin()
            return
        }
        setLoadingState(true)
        if (!isInCodeConfirm){
            if (!/^[]?[(]?[0-9]{3}[)]?[-\s]?[0-9]{3}[-\s]?[0-9]{4,6}$/im.test(text)){
                setErrorMsg('This phone number is invalid.')
                setTimeout(() => {setErrorMsg('')}, 5000)
                setLoadingState(false)
            }else{
                if (await authAPI.sendSMS(text)){
                    setLoadingState(false)
                    setCodeConfirm(true)
                }else{
                    setErrorMsg('The code could not be sent')
                    setLoadingState(false)
                }

            }
        }else{
            if (await authAPI.verifyCode(values.concat())){
                setAuthedUser(await authAPI.getCurrentlyAuthedUser())
                setLoadingState(false)
                props.onLogin()
            }else{
                setErrorMsg('Incorrect code.')
                setLoadingState(false)
            }
        }
    }

    return (
        <>
            {errorMsg === '' ? '' :
                <Notification
                    kind={KIND.warning}
                    autoHideDuration={4500}
                >
                    <IconedText icon={<MdOutlineError/>}>{errorMsg}</IconedText>
                </Notification>
            }

            {isInCodeConfirm && authedUser === undefined ? <Block>
                <HeadingXSmall marginBottom="0px"><strong>{loadingState ? "Confirming your pin code..." : "We sent you a pin code"}</strong></HeadingXSmall>
                <ParagraphSmall marginTop="0px">{loadingState ? "One moment" : "Please enter it below "}<u>I did not receive the code</u></ParagraphSmall>
                    <PinCode
                        values={values}
                        onChange={({ values }) => {
                            setValues(values)
                            if (values[values.length-1] != "") validate().then(r => (r))
                        }
                        }
                        clearOnEscape
                    />
                </Block> :
                (authedUser === undefined ? <PhoneInput
                    country={country}
                    onCountryChange={
                        // @ts-ignore
                        ({option}) => setCountry(option)}
                    text={text}
                    onKeyUp={(e) => {
                        if (e.key === 'Enter'){
                            validate().then(e => {return e})
                        }
                    }
                    }
                    onTextChange={e => setText(e.currentTarget.value)}
                    size={SIZE.default}
                    placeholder="(999) 999-9999"
                /> : <Notification>
                    {() => (
                        <>
                            <strong>You are already logged in.</strong>{" "}
                            <span>
            {" "}
                                Click the button below to continue.{" "}
          </span>
                        </>
                    )}
                </Notification>)}
            <Block marginTop="25px" marginBottom="50px">
                <Button
                    onClick={() => {validate().then(e => {return e})}}
                    size={SIZE.default}
                    shape={SHAPE.pill}
                    isLoading={loadingState}
                    overrides={{
                        BaseButton: {
                            style: ({$theme}) => ({
                                width: "100%",
                                backgroundColor: $theme.colors.accent
                            })
                        }
                    }}
                >
                    Continue
                </Button>
            </Block>
        </>

    );
}