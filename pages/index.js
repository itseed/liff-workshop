import { Container, Row, Col, Image, Button, Form } from 'react-bootstrap';
import { useEffect, useState } from 'react'
import Head from 'next/head'

export default function Home() {
  const [profile, setProfile] = useState({})

  useEffect(async () => {
    const liff = (await import('@line/liff')).default
    await liff.ready
    const profile = await liff.getProfile()
    setProfile(profile)

  }, [profile.userId])

  return (
    <Container fluid style={{padding: '20px'}}>
      <Head>
        <title>My Profile</title>
      </Head>

      <Row className="justify-content-md-center">
        <Col style={{textAlign: 'center'}}>
          <h1>Register</h1>
        </Col>
      </Row>
      <Row className="justify-content-md-center">
        <Col style={{textAlign: 'center'}}>
          {profile.pictureUrl && <Image width={128} src={profile.pictureUrl} thumbnail="true" roundedCircle />}
        </Col>
      </Row>
      <Row>
        <Col style={{fontSize: '12px'}}>
          <div>User ID: {profile.userId}</div>
          <div>Name: {profile.displayName}</div>
          <div>Picture: {profile.pictureUrl}</div>
          <div>Status: {profile.statusMessage}</div>
        </Col>
      </Row>
      <Row className="justify-content-md-center">
        <Col xs={12} sm={12} md={6} lg={6}>
          <hr/>
          <Form>
            <Form.Group controlId="formBasicName">
              <Form.Label>Full Name</Form.Label>
              <Form.Control type="text" placeholder="Enter your name" />
              <Form.Text className="text-muted">
                Please enter fullname
              </Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
              <Form.Text className="text-muted">
                Please enter email
              </Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasicName">
              <Form.Label>Mobile Phone</Form.Label>
              <Form.Control type="text" placeholder="Enter your mobile phone" />
              <Form.Text className="text-muted">
                Please enter mobile phone
              </Form.Text>
            </Form.Group>

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  )
}
