import React from 'react'
import * as Icon from 'react-feather';
import { Button } from 'reactstrap';


export const Footer = () => {
    return (
        <div className="text-center py-1">
            <p>Created By: Ian De Jesus</p>
            
            <Button color="link" size="sm" >
                <Icon.GitHub size={20}/>
            </Button>
            <Button color="link" size="sm">
            <Icon.Linkedin size={20}/>
            </Button> 
            <Button color="link" size="sm">
            <Icon.Mail size={20}/>
            </Button> 
        </div>
    )
}
