import HeaderNavigation from "./components/headerNavigation";
import {BaseProvider} from "baseui";
import React, {useContext} from "react";
import {SignInContext, ThemeContext} from "./Store";
import BookSpace from "./components/BookSpace";
import {Modal, ModalBody, ModalHeader, ROLE, SIZE} from "baseui/modal";
import {LoginForm} from "./components/LoginForm";
import {Block} from "baseui/block";
import {honorDeviceTheme} from "./HonorDeviceTheme";
import RoutingWrapper from "./RoutingWrapper";


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
          <RoutingWrapper></RoutingWrapper>
          </Block>
      </BaseProvider>
  )
}

export default AppContextualized