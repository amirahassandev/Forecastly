import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import CloudIcon from '@mui/icons-material/Cloud';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import seasons from "../assets/img/seasons.png";

import { useEffect, useState } from 'react';
import axios from "axios";
import moment from "moment";

import '../i18n';

import { useTranslation } from 'react-i18next';


import "moment/min/locales"


export default function SimpleContainer() {  

    // let cancelAxios;
    const cities = {
        Cairo: { lat: "30.0445", lon: "31.2388" },
        Aswan: { lat: "24.0889", lon: "32.8973" },
        Alex: { lat: "31.2001", lon: "29.9187" },
        Sharm: { lat: "27.9157", lon: "34.33" }
    };

    const { t, i18n } = useTranslation();
    const [lang, setLang] = useState("English")
    const [city, setCity] = useState("Cairo")
    

    const [weather, setWeather] = useState({
        temp : null,
        desc : "",
        max: null,
        min: null,
        icon: null,
    })

    const [dateAndTime, setDateAndTime] = useState("");
    const [locale, setLocal] = useState("ar");
    const [lonAndLat, setLonAndLat] = useState({
        lon: "",
        lat: ""
    });

    const handleChange = (event) => {
        let selectedCity = event.target.value
        setCity(selectedCity);
        setLonAndLat({
            lon: cities[selectedCity].lon,
            lat: cities[selectedCity].lat
        });
        console.log("city" + city)
    };


    function changeLanguageHandler(){
        if(locale === "ar"){
            setLocal("en")
            i18n.changeLanguage("en")
            moment.locale("en");
            setLang("Arabic")
        }
        else{
            setLocal("ar")
            i18n.changeLanguage("ar")
            moment.locale("ar");
            setLang("English")
        }
    }

    useEffect(() => {
        moment.locale(locale);
        setDateAndTime(moment().format('MMMM Do YYYY, h:mm:ss a'));
        i18n.changeLanguage(locale)
    }, [locale]);

    useEffect(()=>{
        moment.locale(locale);
        setDateAndTime(moment().format('MMMM Do YYYY, h:mm:ss a'));
        

        let ignore = false;

        function getData(){
            axios
            .get(
            `https://api.openweathermap.org/data/2.5/weather?lat=${lonAndLat.lat}&lon=${lonAndLat.lon}&appid=0709665bc0a413c44283438e449979cc`,
            // {
            //     cancelToken : new axios.CancelToken((c) => {
            //         cancelAxios = c
            //     }),
            // }
            )

            .then((response) => {
            if(!ignore){
                response = response.data
                const responseTemp = Math.round(response.main.temp - 272.15)
                const responseDesc = response.weather[0].description
                const responseIcon = response.weather[0].icon
                const responseMinTemp = Math.round(response.main.temp_min - 272.15)
                const responseMaxTemp = Math.round(response.main.temp_max - 272.15)

                setWeather({
                    temp: responseTemp, 
                    desc: responseDesc,
                    max: responseMaxTemp,
                    min: responseMinTemp,
                    icon: `https://openweathermap.org/payload/api/media/file/${responseIcon}.png`
                    })
                console.log("responseDesc : " + responseDesc)
            }
            })
            .catch((error) => {console.error(error)})
        }

        getData()

        // return () => {
        //     cancelAxios()
        // }
    }, [lonAndLat])


    return (
    <Container maxWidth="sm">
        {/* <OutlinedCard /> */}
        {/* Card Container */}
        <div style={{width: "100%", margin: "20px 0"}}>
           <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                 <InputLabel id="demo-select-small-label">City</InputLabel>
                 <Select
                   labelId="demo-select-small-label"
                   id="demo-select-small"
                   value={city}
                   label="City"
                   onChange={handleChange}
                   style={{color: "white", border: "1px solid white"}}
                 >
                   <MenuItem value="Cairo">Cairo</MenuItem>
                   <MenuItem value="Aswan">Aswan</MenuItem>
                   <MenuItem value="Sharm">Sharm</MenuItem>
                   <MenuItem value="Alex">Alex</MenuItem>
                 </Select>
               </FormControl>
        </div>

        <div style={{minHeight: "100vh", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column"}}>
            {/* -- Card -- */}
            <div style={{backgroundColor: "#ffffff26", width: "100%", color: "white", padding: "3%", borderRadius: "15px"}}
                 dir= {locale === "ar" ? "rtl": "ltr"}
                 >
                {/* Top */}
                <div 
                    style={{display: "flex", alignItems: "end", marginRight: "20px", justifyContent: "space-around"}} 
                    
                >
                    <Typography variant="h1" style={{fontSize: "5rem", fontWeight: "bold"}}> {t(city)} </Typography>                    
                    <Typography variant="h6" style={{margin: "0 15px", fontSize: "1rem"}}> {dateAndTime}</Typography>
                </div>
                <hr />
                {/* Top */}
                <div style={{display: "flex", justifyContent: "space-around", marginTop: "25px", alignItems: "center"}}>
                    {/* Left */}
                    <img src={seasons} style={{width: "30%", height: "30%", alignItems: "center"}} alt='seasons'></img>
                    
                    {/* Left */}
                    {/* Right */}
                    <div>
                        <div style={{display: "flex" , flexDirection: "row-reverse"}}>
                            <Typography variant="h1">{weather.temp}</Typography>
                            <div>
                                {weather.icon ? (
                                    <img src={weather.icon} alt='weather'/>
                                ) : (
                                    <CloudIcon style={{fontSize: "200px"}}/>
                                )}
                            </div>
                        </div>

                        <Typography variant="h6" style={{textAlign: "end", margin: "10px 0 18px"}}>{t(weather.desc)}</Typography>

                        <div>
                            <Typography variant="h6" style={{fontSize:"15px", textAlign: "end"}}> {t("Min")} : {weather.min}  |  {t("Max")} : {weather.max} </Typography>
                        </div>
                    </div>
                    {/* Right */}
                </div>
            </div>
            {/* -- Card -- */}

            {/* Btn */}
            <div style={{width: "100%", textAlign: "start"}}>
                <button
                    onClick={changeLanguageHandler}
                    style={{cursor: "pointer",color: "white", border: "none", borderRadius: "5px", padding: "10px 20px", backgroundColor: "#250707", fontFamily: 'IBM', fontWeight: "700"}}>
                        {lang}
                </button>
            </div>
            {/* Btn */}

        </div>
        {/* Card Container */}
    </Container>
  );
}
