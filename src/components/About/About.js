import Card from 'react-bootstrap/Card';

export const About = () => {
    return (
        <Card className="bg-dark text-white">
          <Card.ImgOverlay>
            <Card.Title>Atanas Dlagnekov Car Dealership</Card.Title>
            <Card.Text>Sofia, Bulgaria</Card.Text>
            <Card.Text>Several years in the industry. A trusted partner for finding your new car!</Card.Text>
          </Card.ImgOverlay>
        </Card>
      );
};