import React from 'react'
import { Button, Checkbox, Form, Input, Col, Row, Space } from 'antd';
import styles from '../styles/Home.module.css'

var obj;

//js functions
function powAndMod(G, a, p) {
  if (a == 1)
    return G;
  else
    return ((Math.pow(G, a)) % p);
}

function calculateGA() {
  let currentGenerator = obj.generator;
  let a = obj.alicekey;
  let currentPrime = obj.primenumber;
  let value = powAndMod(currentGenerator, a, currentPrime);
  document.getElementById("aliceGeneratedGA").value = value;
}

function sendA() {
  document.getElementById("gotfromA").value = document.getElementById("aliceGeneratedGA").value;
}

function calculateGAB() {
  let Gb = document.getElementById("gotfromB").value;
  let a = obj.alicekey;
  let currentPrime = obj.primenumber;
  let value = powAndMod(Gb, a, currentPrime);
  document.getElementById("putGAB").value = value;

}

function nextKeyB() {
  document.getElementById("keyB").value = Math.ceil((Math.random() * 1000000)) % primes[currentPrimeIndex];
}

function calculateGB() {


  let currentGenerator = obj.generator;
  let b = obj.bobkey;
  let currentPrime = obj.primenumber;
  let value = powAndMod(currentGenerator, b, currentPrime);
  document.getElementById("bobGeneratedGB").value = value
}

function sendB() {
  document.getElementById("gotfromB").value = document.getElementById("bobGeneratedGB").value;
}

function calculateGBA() {
  let Ga = document.getElementById("gotfromA").value;
  let b = obj.bobkey;
  let currentPrime = obj.primenumber;
  let value = powAndMod(Ga, b, currentPrime);
  document.getElementById("putGBA").value = value;
}

const onFinish = (values) => {
  console.log('Success:', values);
  obj = values;
};

const onFinishFailed = (errorInfo) => {
  console.log('Failed:', errorInfo);
};

const simulation = () => {
  return (
    <div className={styles.container}>
      <Form
        name="basic"
        labelCol={{ span: 10 }}
        wrapperCol={{ span: 5 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >


        <Form.Item
          label="Prime number"
          name="primenumber"
          rules={[{ required: true, message: 'input for prime no. is blank' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Generator G"
          name="generator"
          rules={[{ required: true, message: 'gen is empty' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Alice key, a"
          name="alicekey"
          rules={[{ required: true, message: 'alice key is blank' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Bob key, b"
          name="bobkey"
          rules={[{ required: true, message: 'Bob key is blank' }]}
        >
          <Input />
        </Form.Item>


        <Form.Item wrapperCol={{ offset: 11, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>

        <Row>
          <Col span={12}>
            <h2>Alice</h2>
            <Input.Group compact>
              <Input id="aliceGeneratedGA" style={{ width: 'calc(100% - 200px)' }} />
              <Button onClick={calculateGA} type="primary">Calculate R1</Button>
            </Input.Group>
            <br></br>
            <Button onClick={sendA}>Send R1 to Bob</Button>
            <br></br>
            <br></br>
            <label>Received</label>
            <Input id="gotfromB" />
            <br></br>
            <br></br>
            <Input.Group compact>
              <Button onClick={calculateGAB} type="primary">Calculate Ka</Button>
              <Input id="putGAB" style={{ width: 'calc(100% - 200px)' }} />

            </Input.Group>

          </Col>
          <Col span={12}>
            <h2>Bob</h2>
            <Input.Group compact>
              <Input id="bobGeneratedGB" style={{ width: 'calc(100% - 200px)' }} />
              <Button onClick={calculateGB} type="primary">Calculate R2</Button>
            </Input.Group>
            <br></br>
            <Button onClick={sendB}>Send R2 to Alice</Button>
            <br></br>
            <br></br>
            <label>Received</label>
            <Input id="gotfromA" />
            <br></br>
            <br></br>
            <Input.Group compact>
              <Button onClick={calculateGBA} type="primary">Calculate Kb</Button>
              <Input id="putGBA" style={{ width: 'calc(100% - 200px)' }} />

            </Input.Group>

          </Col>
        </Row>


      </Form>
    </div>
  )
}

export default simulation
