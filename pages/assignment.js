import React from 'react'
import { Divider, List, Typography } from 'antd';
import styles from '../styles/Home.module.css'

const data = [
  'Using Deffie-Hellman calculate value of symmetric key and value of R1, R2',
  '1. G = 7, P = 23, x = 3, y = 5',
  '2. G = 7, P = 23, x = 3, y = 6',
  '3. G = 7, P = 23, x = 5, y = 5',
  '4. G = 7, P = 53, x = 5, y = 5',
];

const assignment = () => {
  return(
  <>
    {/* <div className={styles.myImg}>
      
    </div> */}
    
    <Divider orientation="left" className={styles.myImg}>Questions</Divider>
    <List
      style={{ 
        // marginRight: 60,
        margin: 50,
        fontSize: 90,
      }}
        // wrapperCol={{ offset: 11, span: 16 }}
      size="large"
      // header={<div>Header</div>}
      // footer={<div>Footer</div>}
      bordered
      dataSource={data}
      renderItem={(item) => <List.Item>{item}</List.Item>}
    />
  </>
  )
}

export default assignment;