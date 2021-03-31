import { Container, Row, Col, Image, Button } from 'react-bootstrap';
import { useEffect, useState } from 'react'
import Head from 'next/head'

export default function Home() {
  const [profile, setProfile] = useState({})
  // const [language, setLanguage] = useState({})
  // const [email, setEmail] = useState({})

  // const logout = () => {
  //   liff.logout()
  // }

  useEffect(async () => {
    const liff = (await import('@line/liff')).default
    await liff.ready
    const profile = await liff.getProfile()
    const language = await liff.getLanguage()
    // const email = await liff.getDecodedIDToken().email
    console.log('language', language)
    // console.log('email', email)
    setProfile(profile)
    // setLanguage(language)
    // setEmail(email)
  }, [profile.userId])


  return (
    <Container fluid="md">
      <Head>
        <title>My Profile</title>
      </Head>
      
      <Row>
        <Col>
          <h1>Profile</h1>
        </Col>
      </Row>
      <Row>
        <Col xs={6} md={4}>
        {profile.pictureUrl && <Image src={profile.pictureUrl} thumbnail="true" roundedCircle />}
        </Col>
      </Row>
      <Row>
        <Col>
          <div>User ID: {profile.userId}</div>
          <div>Name: {profile.displayName}</div>
          <div>Picture: {profile.pictureUrl}</div>
          <div>Status: {profile.statusMessage}</div>
          {/* <div>Language: {language}</div> */}
          {/* <div>Email: {email}</div> */}
        </Col>
      </Row>
      {/* <Row>
        <Col>
          <Button variant="primary" onClick={logout}>Logout</Button>
        </Col>
      </Row> */}
    </Container>
  )
}
