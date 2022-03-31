import React from "react";
import {PhoneInput} from "baseui/phone-input";
import {Button, SHAPE, SIZE} from "baseui/button";
import {Block} from "baseui/block";
import { Notification, KIND } from "baseui/notification";
import IconedText from "./IconedText";
import {MdOutlineError} from "react-icons/md";
import {PinCode} from "baseui/pin-code";
import {HeadingXSmall, ParagraphMedium, ParagraphSmall} from "baseui/typography";

import authAPI from './../API/auth'

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

    const validate = async () => {
        setLoadingState(true)
        if (!isInCodeConfirm){
            if (!/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im.test(text)){
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
            {isInCodeConfirm ? <Block>
                <HeadingXSmall marginBottom="0px"><strong>We sent you a pin code</strong></HeadingXSmall>
                <ParagraphSmall marginTop="0px">Please enter it below <u>I did not receive the code</u></ParagraphSmall>
                    <PinCode
                        values={values}
                        onChange={({ values }) => setValues(values)}
                        clearOnEscape
                    />
                </Block> :
                <PhoneInput
                    country={country}
                    onCountryChange={
                        // @ts-ignore
                        ({option}) => setCountry(option)}
                    text={text}
                    onTextChange={e => setText(e.currentTarget.value)}
                    size={SIZE.default}
                    placeholder="(999) 999-9999"
                />}
            <Block marginTop="25px" marginBottom="50px">
                <Button
                    onClick={() => {validate()}}
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