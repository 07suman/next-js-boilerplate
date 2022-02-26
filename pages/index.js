import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
const Homepage = () => (
  <Container>
    <Stack sx={{ width: '100%' }} spacing={2}>
      <Alert severity="error">This is an error alert — check it out!</Alert>
      <Alert severity="warning">This is a warning alert — check it out!</Alert>
      <Alert severity="info">This is an info alert — check it out!</Alert>
      <Alert severity="success">This is a success alert — check it out!</Alert>
    </Stack>
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Word of the Day
        </Typography>
        <Typography variant="h5" component="div">
          hi
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          adjective
        </Typography>
        <Typography variant="body2">
          well meaning and kindly.
          <br />a benevolent smile
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
    <Typography
      mt={2}
      sx={{
        fontSize: {
          lg: 40,
          md: 20,
          sm: 15,
          xs: 10,
        },
      }}
      variant="h1"
      gutterBottom
    >
      h1. Heading
    </Typography>
    <Button>Primary</Button>

    <Typography variant="h2" gutterBottom>
      h2. Heading
    </Typography>
    <Typography variant="h3" gutterBottom>
      h2. Heading
    </Typography>
    <Typography variant="h3" gutterBottom>
      h3. Heading
    </Typography>
    <Button
      variant="contained"
      color="secondary"
      sx={{
        textTransform: 'capitalize',
        fontSize: 15,
        fontWeight: 600,
      }}
    >
      Get OTP
    </Button>

    <Typography variant="h4" gutterBottom>
      h4. Heading
    </Typography>
    <Typography variant="h5" gutterBottom>
      Try something new
    </Typography>
    <Typography variant="h5" gutterBottom>
      Try something new
    </Typography>
    <Typography variant="h5" gutterBottom>
      h6. Heading
    </Typography>
    <Typography variant="subtitle1" gutterBottom component="div">
      subtitle1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
      blanditiis tenetur
    </Typography>
    <Typography variant="subtitle2" gutterBottom component="div">
      subtitle2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
      blanditiis tenetur
    </Typography>
    <Typography variant="body1" gutterBottom>
      body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
      blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur,
      neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti?
      Eum quasi quidem quibusdam.
    </Typography>
    <Typography variant="body2" gutterBottom>
      body2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
      blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur,
      neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti?
      Eum quasi quidem quibusdam.
    </Typography>
    <Typography variant="button" display="block" gutterBottom>
      button text
    </Typography>
    <Typography variant="caption" display="block" gutterBottom>
      caption text
    </Typography>
    <Typography variant="overline" display="block" gutterBottom>
      overline text
    </Typography>
    <h1>Home Page</h1>
    <p>lorem*15</p>
  </Container>
);

export default Homepage;
