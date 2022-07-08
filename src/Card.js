import React from 'react'
import { Card, CardBody, CardHeader, CardText, CardTitle } from 'reactstrap'
import {motion} from 'framer-motion'

function Bootstrap() {
  return (
    <div className='d-flex position-relative align-items-center justify-content-center main'>

    <motion.div className='' animate={{y: 0 }} initial={{y:200}} transition={{ease: 'easeIn', duration: .8}}>
        <Card style={{maxWidth:"250px", backgroundColor:'lavender', height: "450px"}}  className="m-4 card-styl"> 
            <CardBody>
                <CardHeader className="pop ">Another Head in card</CardHeader>
                <CardBody>This is a sample text </CardBody>

            </CardBody>
        </Card>
        </motion.div>
        <motion.div className='' animate={{y: 0 }} initial={{y:200}} transition={{ease: 'easeIn', duration: .8, delay: .1}}>
        <Card style={{maxWidth:"250px", backgroundColor:'lavender', height: "450px"}} className="m-4 card-styl"> 
           
            <CardBody>
            <CardHeader className="pop ">Another Head in card
            </CardHeader>
                <CardBody>This is a sample text </CardBody>
            </CardBody>
            
        </Card>
        </motion.div>
   
    </div>
  )
}

export default Bootstrap