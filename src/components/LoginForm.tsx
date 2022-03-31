import React from "react";
import {PhoneInput} from "baseui/phone-input";
import {Button, SHAPE, SIZE} from "baseui/button";
import {Block} from "baseui/block";

export function LoginForm(props: {
    onLogin: () => void
}) {
    const [country, setCountry] = React.useState(undefined);
    const [text, setText] = React.useState("");

    return (
        <>
            <PhoneInput
                country={country}
                onCountryChange={
                    // @ts-ignore
                    ({option}) => setCountry(option)}
                text={text}
                onTextChange={e => setText(e.currentTarget.value)}
                size={SIZE.default}
                placeholder="(999) 999-9999"
            />
            <Block marginTop="25px" marginBottom="50px">
                <Button
                    onClick={() => props.onLogin}
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
                    Continue
                </Button>
            </Block>
        </>

    );
}