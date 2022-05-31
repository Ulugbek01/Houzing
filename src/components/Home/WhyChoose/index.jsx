import React from 'react'
import { Container, Properties, WhyChooseUs } from './style';
import {ReactComponent as PersonEmoji} from '../../../assets/icons/person-emoji.svg';
import {ReactComponent as Home} from '../../../assets/icons/home.svg';
import {ReactComponent as Financing} from '../../../assets/icons/financing.svg';
import {ReactComponent as Map} from '../../../assets/icons/map.svg';

export const WhyChoose = () => {
  return (
    <WhyChooseUs>
        <Container>
            <h2 className='section-title text-center'>Why Choose Us?</h2>
            <p className='section-discription text-center'>Nulla quis curabitur velit volutpat auctor bibendum consectetur sit.</p>
            <Properties>
                <Properties.Item>
                    <PersonEmoji/>
                    <Properties.Item.Title>
                        Trusted By Thousands
                    </Properties.Item.Title>
                    <Properties.Item.Text>
                        With over 1 million+ homes for sale available on the website, Trulia can match you with a house you will want to call home.
                    </Properties.Item.Text>
                </Properties.Item>

                <Properties.Item>
                    <Home/>
                    <Properties.Item.Title>
                        Wide Renge Of Properties
                    </Properties.Item.Title>
                    <Properties.Item.Text>
                        With over 1 million+ homes for sale available on the website, Trulia can match you with a house you will want to call home.
                    </Properties.Item.Text>
                </Properties.Item>

                <Properties.Item>
                    <Financing/>
                    <Properties.Item.Title>
                        Financing Made Easy
                    </Properties.Item.Title>
                    <Properties.Item.Text>
                        With over 1 million+ homes for sale available on the website, Trulia can match you with a house you will want to call home.
                    </Properties.Item.Text>
                </Properties.Item>

                <Properties.Item>
                    <Map/>
                    <Properties.Item.Title>
                        See Neighborhoods
                    </Properties.Item.Title>
                    <Properties.Item.Text>
                        With over 1 million+ homes for sale available on the website, Trulia can match you with a house you will want to call home.
                    </Properties.Item.Text>
                </Properties.Item>
            </Properties>
        </Container>
    </WhyChooseUs>
  )
}

export default WhyChoose;