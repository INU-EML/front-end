import React from 'react';
import styled from 'styled-components';

const PageContainer = styled.div`
  padding: 1rem 0;
`;

const PageHeader = styled.div`
  margin-bottom: 2rem;
`;

const Title = styled.h1`
  font-size: 2rem;
  color: #333;
  margin-bottom: 1rem;
`;

const ContactSection = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  
  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
`;

const ContactInfo = styled.div`
  padding: 1.5rem;
  background-color: #f8f9fa;
  border-radius: 8px;
`;

const InfoTitle = styled.h2`
  font-size: 1.5rem;
  color: #333;
  margin-bottom: 1.5rem;
`;

const InfoItem = styled.div`
  margin-bottom: 1.5rem;
`;

const InfoLabel = styled.h3`
  font-size: 1.1rem;
  color: #444;
  margin-bottom: 0.5rem;
`;

const InfoText = styled.p`
  font-size: 1rem;
  color: #666;
  line-height: 1.5;
`;

const ContactForm = styled.form`
  padding: 1.5rem;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`;

const FormTitle = styled.h2`
  font-size: 1.5rem;
  color: #333;
  margin-bottom: 1.5rem;
`;

const FormGroup = styled.div`
  margin-bottom: 1.5rem;
`;

const Label = styled.label`
  display: block;
  font-size: 1rem;
  color: #444;
  margin-bottom: 0.5rem;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.75rem;
  font-size: 1rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  
  &:focus {
    outline: none;
    border-color: #0066cc;
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 0.75rem;
  font-size: 1rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  min-height: 150px;
  resize: vertical;
  
  &:focus {
    outline: none;
    border-color: #0066cc;
  }
`;

const SubmitButton = styled.button`
  background-color: #0066cc;
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  font-weight: 500;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  
  &:hover {
    background-color: #0055aa;
  }
`;

const MapContainer = styled.div`
  margin-top: 2rem;
  height: 400px;
  background-color: #f0f0f0;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #666;
`;

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real application, this would handle form submission
    alert('This form submission is just a placeholder. In a real application, it would send the data to a server.');
  };

  return (
    <PageContainer>
      <PageHeader>
        <Title>Contact Us</Title>
        <p>Get in touch with our laboratory for inquiries, collaboration opportunities, or visits.</p>
      </PageHeader>

      <ContactSection>
        <ContactInfo>
          <InfoTitle>Contact Information</InfoTitle>
          
          <InfoItem>
            <InfoLabel>Address</InfoLabel>
            <InfoText>
              Electrochemical Materials Laboratory<br />
              Department of Chemical Engineering<br />
              University Science Building, Room 301<br />
              123 University Avenue<br />
              City, State 12345
            </InfoText>
          </InfoItem>
          
          <InfoItem>
            <InfoLabel>Email</InfoLabel>
            <InfoText>eml.lab@university.edu</InfoText>
          </InfoItem>
          
          <InfoItem>
            <InfoLabel>Phone</InfoLabel>
            <InfoText>+1 (234) 567-8900</InfoText>
          </InfoItem>
          
          <InfoItem>
            <InfoLabel>Office Hours</InfoLabel>
            <InfoText>Monday - Friday: 9:00 AM - 5:00 PM</InfoText>
          </InfoItem>
        </ContactInfo>
        
        <ContactForm onSubmit={handleSubmit}>
          <FormTitle>Send us a Message</FormTitle>
          
          <FormGroup>
            <Label htmlFor="name">Name</Label>
            <Input type="text" id="name" placeholder="Your Name" required />
          </FormGroup>
          
          <FormGroup>
            <Label htmlFor="email">Email</Label>
            <Input type="email" id="email" placeholder="Your Email" required />
          </FormGroup>
          
          <FormGroup>
            <Label htmlFor="subject">Subject</Label>
            <Input type="text" id="subject" placeholder="Subject" required />
          </FormGroup>
          
          <FormGroup>
            <Label htmlFor="message">Message</Label>
            <TextArea id="message" placeholder="Your Message" required />
          </FormGroup>
          
          <SubmitButton type="submit">Send Message</SubmitButton>
        </ContactForm>
      </ContactSection>
      
      <MapContainer>
        Map Placeholder - In a real application, this would be a Google Map or similar
      </MapContainer>
    </PageContainer>
  );
};

export default Contact;
