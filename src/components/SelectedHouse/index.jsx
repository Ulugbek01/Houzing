import React, { useState } from 'react'
import { useQuery } from 'react-query';
import { AsideCard, Container, Hero, IconWrapper, ProductView } from './style';
import { ReactComponent as Bed } from "../../assets/icons/beds.svg";
import { ReactComponent as Bath } from "../../assets/icons/bath.svg";
import { ReactComponent as Car } from "../../assets/icons/car.svg";
import { ReactComponent as Ruler } from "../../assets/icons/ruler.svg";
import { ReactComponent as Calendar } from "../../assets/icons/calendar.svg";
import { ReactComponent as Share } from "../../assets/icons/share.svg";
import { ReactComponent as Heart } from "../../assets/icons/heart.svg";
import user from '../../assets/images/avatar1.png';
import product1 from '../../assets/images/product1.png'
import product2 from '../../assets/images/product2.png'
import product3 from '../../assets/images/product3.png'
import product4 from '../../assets/images/product4.png'
import product5 from '../../assets/images/product5.png'
import { Input } from '../Generic/Input';

export const SelectedHouse = () => {
    const [data, setData] = useState([]);
    const {REACT_APP_BASE_URL: url} = process.env;

    useQuery('getHouses', ()=> {return fetch(`${url}/v1/houses/list`).then((res) => res.json())}, {
        onSuccess: (res)=> {
            setData(res?.data || []);
        }
    })
  return (
    <ProductView>
        <Container>
            <Hero>
                <Hero.ImgWrapper>
                    <Hero.ImgWrapper.Left>
                        <img src={product1} alt="product img" />
                    </Hero.ImgWrapper.Left>
                    <Hero.ImgWrapper.Right>
                        <div>
                            <img className='img' src={product2} alt="product img" />
                            <img className='img' src={product3} alt="product img" />
                        </div>
                        <div>
                            <img className='img' src={product4} alt="product img" />
                            <img className='img' src={product5} alt="product img" />
                        </div>
                    </Hero.ImgWrapper.Right>
                </Hero.ImgWrapper>

                <Hero.Info>
                    <Hero.Info.Left>
                        <Hero.Info.Header>
                            <div>
                                <div>
                                    <Hero.Title className="title">Luxury Family Loft by Victoria Park</Hero.Title>
                                    <p className='text'>Quincy St, Brooklyn, NY, USA</p>
                                </div>
                                <Hero.Info.IconWrapper>
                                    <span><Bed/><span className='space'></span> 4 Beds</span>
                                    <span><Bath/><span className='space'></span> 5 Baths</span>
                                    <span><Car/><span className='space'></span> 1 Garage</span>
                                    <span><Ruler/><span className='space'></span> 1200 Sq Ft</span>
                                    <span><Calendar/><span className='space'></span> Year Built: 1800</span>
                                </Hero.Info.IconWrapper>
                            </div>
                            <div>
                                <Hero.Info.Header.Icons>
                                    <Hero.Info.Header.Icons.Share>
                                        <IconWrapper><Share/></IconWrapper><span className='left-space'></span> Share
                                    </Hero.Info.Header.Icons.Share>
                                    <Hero.Info.Header.Icons.Save>
                                        <IconWrapper><Heart/></IconWrapper><span className='left-space'></span> Save
                                    </Hero.Info.Header.Icons.Save>
                                </Hero.Info.Header.Icons>

                                <Hero.Info.Header.Price>
                                    <span className='line-through'>$2,800/mo</span>
                                    <span className='month-price'>$7,500/mo</span>
                                    <p>Est. Mortgage</p>
                                </Hero.Info.Header.Price>
                            </div>
                            <AsideCard>
                                <AsideCard.User>
                                    <img className='user-img' src={user} alt="user" />
                                    <div>
                                        <h4 className='user-name'>Darrel Steward</h4>
                                        <a className='tel' href="tel:(123)456-7890">(123)456-7890</a>
                                    </div>
                                </AsideCard.User>
                                <Input placeholder="Name"/>
                                <Input type="tel" placeholder="Phone"/>
                                <Input type="email" placeholder="Email"/>
                            </AsideCard>
                        </Hero.Info.Header>
                    </Hero.Info.Left>
                </Hero.Info>
            </Hero>
        </Container>
    </ProductView>
  )
}

export default SelectedHouse;