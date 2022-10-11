import * as React from 'react';
// import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useState } from "react";

const Data = [
    'spice food',
    'outlaw kitchens',
    'starbelly',
    "boudro's on the river walk",
    "jamie's place",
    'gold feather',
    'marufuku ramen',
    'krazy katsu',
    'the snug',
    'sangria on the burg',
    'spice food',
    'hathaway foods',
    'sugarbee kitchen',
    'pot a soup kitchen',
    'areachops',
    'ktm food kut'
]

export default function CardRandom() {

    const [name, setName] = useState(Data[0]);

    const getName = () => {
        let randomName = Math.floor(Math.random() * Data.length);
        if (randomName <= Data.length) {
            setName(Data[randomName]);
        }
    }
    return (
        <Card sx={{ minWidth: 275 }}>

            <CardContent>
                <Typography mb={4} sx={{ fontSize: 18 }, {fontWeight: "bold"}} color="text.secondary" gutterBottom>
                    RANDOM RESTAURANT GENERATOR
                </Typography>
                <Typography sx={{ fontSize: 14}} color="text.secondary" gutterBottom>
                    {name.toLocaleUpperCase()}
                </Typography>
            </CardContent>
            <CardActions>
                <Button onClick={getName}>Next</Button>
            </CardActions>
        </Card>
    );
}
