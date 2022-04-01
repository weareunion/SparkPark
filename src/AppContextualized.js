import HeaderNavigation from "./components/headerNavigation";
import {BaseProvider, DarkTheme, LightTheme} from "baseui";
import React, {useContext} from "react";
import {SignInContext, ThemeContext} from "./Store";
import BookSpace from "./components/BookSpace";
import {Modal, ModalBody, ModalButton, ModalFooter, ModalHeader, ROLE, SIZE} from "baseui/modal";
import { KIND as ButtonKind } from "baseui/button";
import {LoginForm} from "./components/LoginForm";
import {Block} from "baseui/block";


function honorDeviceTheme(setTheme) {
    const darkThemeMq = window.matchMedia("(prefers-color-scheme: dark)");

    function changeTheme() {
        if (darkThemeMq.matches) {
            setTheme(DarkTheme)
        } else {
            setTheme(LightTheme)
        }
    }

    darkThemeMq.addListener(e => {
        changeTheme();
    });

    changeTheme()
}
const SignInModal = (props) => {
    const [isOpen, setIsOpen] = React.useContext(SignInContext);
    return (
        <Modal
            onClose={() => setIsOpen(false)}
            closeable
            isOpen={isOpen}
            animate
            autoFocus
            size={SIZE.auto}
            role={ROLE.dialog}
        >
            <ModalHeader>Login and Sign Up</ModalHeader>
            <ModalBody>
                Go ahead and type in your phone number to either log in or sign up.
                <Block marginTop="20px">
                    <LoginForm onLogin={() => {setIsOpen(false)}}/>
                </Block>
            </ModalBody>
        </Modal>
    );
}
const AppContextualized = () => {
    const [theme, setTheme] = useContext(ThemeContext)
    honorDeviceTheme(setTheme);

    return (
      <BaseProvider theme={theme} >
          <Block style={{ height: '100%', position: 'absolute', left: '0px', width: '100%', overflow: 'show'}} backgroundColor="backgroundPrimary" >
          <SignInModal/>
          <HeaderNavigation setTheme={setTheme}/>
          <BookSpace theme={theme}/>
          </Block>
      </BaseProvider>
  )
}

export default AppContextualized