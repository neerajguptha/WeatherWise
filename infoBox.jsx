import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css";
// import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
export default function InfoBox({ info }) {
    const INIT_URL = "https://images.unsplash.com/photo-1628525805785-cc1d20e7be74?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGR1c3R5JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D";


    const HOT_URL = "https://images.unsplash.com/photo-1524594081293-190a2fe0baae?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const COLD_URL = "https://images.unsplash.com/photo-1612208695882-02f2322b7fee?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const RAIN_URL = "https://images.unsplash.com/photo-1475116127127-e3ce09ee84e1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

    return (<div className="InfoBox">
        {/* <h1>WeatherInfo-{info.weather}</h1> */}
        <div></div>
        <Card sx={{ maxWidth: 345 }}>
            <CardMedia
                sx={{ height: 140 }}
                image={info.humidity > 80 ? RAIN_URL : info.temp > 15 ? HOT_URL : COLD_URL}
                title="green iguana"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {info.city}

                </Typography>
                <Typography variant="body2" color="text.secondary" component={"span"} >
                    <p>
                        Temperature={info.temp}&deg;C</p>
                    <p>Humidity={info.humidity}</p>
                    <p>Min temp={info.tempMin}&deg;C</p>
                    <p>Max temp={info.tempMax}&deg;C</p>
                    <p>The weather can be described as<i> {info.weather}</i> and feels like{info.feeslike}&deg;C</p>

                </Typography>
            </CardContent>
        </Card>
    </div>);
}