import React from 'react';
import './chat.css';
import styled from 'styled-components';
import {ImCross} from 'react-icons/im';
import {MdModeEdit} from 'react-icons/md';

const Wrapper = styled.div`
  display:flex;
  flex-direction:column;
  height:550px;
  width:600px;
  border: 1px solid #50aeb0;
  margin:0px 0px 0px 200px;
`;
const TopBar = styled.div`
  display:grid;
  grid-template-columns: 1fr 40px;
  margin:10px;
`;
const TextProfile = styled.div`
  font-size:2rem;
  font-family: HelveticaNeue-Bold;
  color:#282a2b;
  padding-left:20px;
`;
const Body = styled.div`
  display:flex;
  flex-direction:column;
  align-items:center;
`;
const PImage = styled.img`
  height:120px;
  width:120px;
  border-radius:60px;
  margin:20px 0px 10px 0px;
`;

const PName = styled.div`
  font-family: HelveticaNeue-Med;
  color:#ff0058;
  font-size: 1.5rem;
  margin:1px;
`;

const PEmail = styled.div`
  font-family: HelveticaNeue-Med;
  color:#25637f;
  font-size: 1.2rem;
  margin:1px;
`;

const PAddress = styled.div`
  font-family: HelveticaNeue-Med;
  color:#5d5b5b;
  font-size: 1.5rem;
  margin:1px;
`;

const PGender = styled.div`
  font-family: HelveticaNeue-light;
  color:#25637f;
  font-size: 1.2rem;
  margin:1px;
`;

const PStatus = styled.p`
  font-family: HelveticaNeue-Med;
  width: 400px;
  color:#282a2b;
  font-size: 1.2rem;
  margin:15px;
  text-align:center;
`;

const EditProfile = styled.div`
  display:grid;
  grid-template-columns:1fr;
  justify-content:center;
  align-content:center;
  height:50px;
  width:50px;
  border: 1px solid #50aeb0;
  border-radius:25px;
  margin-top:30px;
  cursor: pointer;
`;

const EditPText = styled.div`
  font-family: HelveticaNeue-Med;
  color:#5d5b5b;
  font-size: 1rem;
  margin:2.5px;

`;




const ProfileWindow = () => {
    return (
            <Wrapper>
                <TopBar>
                    <TextProfile>
                        Profile
                    </TextProfile>
                    <ImCross/>
                </TopBar>
                <Body>  
                    <PImage src="https://placeimg.com/200/200/any" alt="avatar"/>
                    <PName>
                        John Doe
                    </PName>
                    <PEmail>
                        johndoe@gmail.com
                    </PEmail>
                    <PAddress>
                        Henry Street (Manhattan)
                    </PAddress>
                    <PGender>
                        Male
                    </PGender>
                    <PStatus>
                        There are many variations of passages of Lorem Ipsum available, but the 
                        majority have suffered alteration in some form, by injected humour, or 
                        randomised words which don’t look even slightly believable. 
                        If you are going to use a passage of Lorem Ipsum, you need to be sure 
                        there isn’t anything embarrassing hidden in the middle of text.
                    </PStatus>

                    <EditProfile>
                        <MdModeEdit className="pencil"/>
                    </EditProfile>
                    <EditPText>
                            Edit Profile
                    </EditPText>
                </Body>
            </Wrapper>
    )
}

export default ProfileWindow
