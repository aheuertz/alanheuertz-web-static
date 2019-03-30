import React, { useEffect, useState, ChangeEvent, FormEvent } from 'react';
import Container from 'reactstrap/lib/Container';
import Row from 'reactstrap/lib/Row';
import Card from 'reactstrap/lib/Card';
import CardBody from 'reactstrap/lib/CardBody';
import Button from 'reactstrap/lib/Button';
import Col from 'reactstrap/lib/Col';
import FormGroup from 'reactstrap/lib/FormGroup';
import Input from 'reactstrap/lib/Input';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Form from 'reactstrap/lib/Form';
import Nav from 'reactstrap/lib/Nav';
import NavItem from 'reactstrap/lib/NavItem';
import NavLink from 'reactstrap/lib/NavLink';
import { logIn, LogInError } from '../services/auth/LoginService';
import { CognitoUser } from '@aws-amplify/auth';
import { isNullOrUndefined } from 'util';

export const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorCode, setErrorCode] = useState<string|null>(null);
  const [shouldSubmit, setShouldSubmit] = useState(false);

  useEffect(() => {
    if (!shouldSubmit) {
      console.log('Tried to shouldSubmit but value is false.');
      return;
    }

    setShouldSubmit(false);
    console.log('Submitting login', username, password);

    logIn(username, password)
      .then((user: CognitoUser) => {
        const signInUserSession = user.getSignInUserSession();
        if (isNullOrUndefined(signInUserSession)) return;

        sessionStorage.setItem('accessToken', signInUserSession.getAccessToken().getJwtToken());
        window.location.href = '/';
      })
      .catch((error: LogInError) => {
        console.error('LoginPage', `Failed to log in with user: ${username}`);
        setErrorCode(error.code);
      });
  }, [shouldSubmit]);

  function onSignUpButtonKeyPress(event: React.KeyboardEvent<HTMLAnchorElement>) {
    if (event.charCode !== 13) return;

    event.preventDefault();
    event.stopPropagation();

    console.log('Sign Up button "enter".');
    onSignUp();
  }

  function onSignUp() {
    console.log('Submitting sign up');
  }

  function onCancelButtonKeyPress(event: React.KeyboardEvent<HTMLButtonElement>) {
    if (event.charCode !== 13) return;

    event.preventDefault();
    event.stopPropagation();

    console.log('Cancel button "enter".');
    onCancel();
  }

  function onCancel() {
    console.log('Submitting cancel');
  }

  return (
    <Container className='mt-3 mb-3'>
      <Row className='justify-content-center align-items-center'>
        <Col md='6'>
          <Col md='12'>
            <Card>
              <CardBody>
                <Nav className="justify-content-center">
                  <NavItem>
                    <NavLink href="#" disabled><FontAwesomeIcon className="mr-2" icon="user" />Log In</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="#" onClick={onSignUp} onKeyPress={onSignUpButtonKeyPress}>Sign Up</NavLink>
                  </NavItem>
                </Nav>
                <Form onSubmit={(event: FormEvent) => {
                  event.stopPropagation();
                  event.preventDefault();
                  console.log('Form submitted.');
                  setShouldSubmit(true);
                }}>
                  <div className='text-left m-4'>
                    <FormGroup>
                      <Input
                        id="username"
                        type="text"
                        placeholder="Username"
                        value={username}
                        onChange={(event: ChangeEvent<HTMLInputElement>) => {
                          event.stopPropagation();
                          setUsername(event.target.value);
                        }} />
                    </FormGroup>
                    <FormGroup>
                      <Input
                        id="password"
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(event: ChangeEvent<HTMLInputElement>) => {
                          event.stopPropagation();
                          setPassword(event.target.value);
                        }} />
                    </FormGroup>
                    {!isNullOrUndefined(errorCode) && <div style={{color: 'red'}}>{errorCode}</div>}
                  </div>
                  <div className="text-right">
                    <Button onClick={onCancel} onKeyPress={onCancelButtonKeyPress}>Cancel</Button>
                    <Button type="submit" color="primary">Submit</Button>
                  </div>
                </Form>
              </CardBody>
            </Card>
          </Col>
        </Col>
      </Row>
    </Container>
  );
}
