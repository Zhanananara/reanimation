import React from "react";
import CardContent from "@mui/material/CardContent";
import { Button, Grid, Typography } from "@mui/material";
import Card from "@mui/material/Card";
import { Link, NavLink } from "react-router-dom";
import "./Home.scss";
const Home = () => {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div className="content">
        <div className="text-content">
          <div className="title">«Реанимация — это прежде всего команда»</div>
          <div className="text-p">
            <p>ОЛЬГА ЦИПЕНЮК</p>
          </div>
          <img
            width="80%"
            src="https://medik.kg/static/img/minified-svg/line.svg"
            alt=""
          />
        </div>
        <div className="main-content">
          <Grid
            container
            spacing={0}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContext: "center",
              textAlign: "center",
              backgroundColor: " white",
            }}
          >
            <Grid item xs={12} md={6}>
              <Typography
                placement="bottom"
                variant="body1"
                component="div"
                color="white"
                my="10px"
                p="0 40px"
                sx={{
                  height: "100%",
                  fontSize: "23px",
                  color: "black",
                }}
              >
                <Typography
                  style={{
                    fontWeight: "bold",
                    fontSize: "30px",
                    fontFamily: "Modern Antiqua",
                  }}
                >
                  Отделение реанимации иссык-кульской областной больницы
                </Typography>
                <Typography
                  style={{
                    fontSize: "23px",
                    margin: "10px",
                    fontFamily: "Modern Antiqua",
                  }}
                >
                  Реанимация — это комплекс процедур, направленных на
                  возвращение человека к жизни или поддержание жизненных функций
                  организма больного. Пограничное состояние между жизнью и
                  смертью, при котором необходимо проводить реанимацию в
                  медицинской практике носит названием терминальное состояние.
                  Реанимационные мероприятия направлены на выведения человека из
                  терминального состояния.
                </Typography>
              </Typography>
            </Grid>
            <Grid
              item
              xs={12}
              md={6}
              sx={{
                display: "flex",
              }}
            >
              <img
                width="100%"
                src="https://pro-palliativ.ru/wp-content/uploads/2020/11/Depositphotos_13547674_l-2015-1024x681.jpg"
                alt=""
              />
            </Grid>
          </Grid>
          <Grid
            container
            spacing={0}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContext: "center",
              textAlign: "center",
            }}
          >
            <Grid
              item
              xs={12}
              md={6}
              sx={{
                display: "flex",
              }}
            >
              <img
                width="100%"
                src="https://aussiedlerbote.de/wp-content/uploads/2021/11/reanimaciya.jpg"
                alt=""
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography
                placement="bottom"
                variant="body1"
                component="div"
                color="white"
                my="10px"
                p="0 40px"
                sx={{
                  height: "100%",
                  fontSize: "23px",
                  color: "black",
                }}
              >
                <Typography
                  style={{
                    fontWeight: "bold",
                    fontSize: "30px",
                    fontFamily: "Modern Antiqua",
                  }}
                >
                  Реанимация{" "}
                </Typography>
                <Typography
                  style={{
                    fontSize: "23px",
                    margin: "10px",
                    fontFamily: "Modern Antiqua",
                  }}
                >
                  К реанимационным относятся не только мероприятия, направленные
                  на восстановление сердечной деятельности и дыхания у больных и
                  пострадавших, находящихся в состоянии клинической смерти, но и
                  меры, направленные на профилактику клинической смерти, а также
                  искусственное управление, иногда весьма длительное, функциями
                  дыхания, сердца, деятельностью мозга, метаболическими
                  процессами и др.
                </Typography>
              </Typography>
            </Grid>
          </Grid>
        </div>
        <div className="information">
          <Card className="card-info" sx={{ minWidth: 275 }}>
            <CardContent>
              <Typography variant="h5" component="div">
                Реанимация
              </Typography>
              <Typography
                sx={{ fontSize: 14 }}
                color="text.secondary"
                gutterBottom
              >
                Иссык-Кульская обьединенная областная больница
              </Typography>

              <Typography variant="body2">
                Отделение было открыто в 1974 году с открытием ИООБ в городе
                Каракол
              </Typography>
            </CardContent>
          </Card>
          <Card className="card-info" sx={{ minWidth: 275 }}>
            <CardContent>
              <Typography variant="h5" component="div">
                Койки
              </Typography>
              <Typography
                sx={{ fontSize: 14 }}
                color="text.secondary"
                gutterBottom
              >
                Расчитано:12 коек
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                <li>Детские - 3 </li>
                <li>Взрослые- 9 </li>
              </Typography>
            </CardContent>
          </Card>
          <Card className="card-info" sx={{ minWidth: 275 }}>
            <CardContent>
              <Typography variant="h5" component="div">
                Реанимационная помощь осуществляется:
              </Typography>
              <Typography
                sx={{ fontSize: 14 }}
                color="text.secondary"
                gutterBottom
              >
                <li>в кардио</li>
                <li>в невро</li>
                <li>в хирурго</li>
                <li>в терапевческих направлениях</li>
                Так же для
                <li>лор</li>
                <li>травмо</li>
                <li>хирургических операций</li>
              </Typography>
            </CardContent>
          </Card>
          <Card className="card-info" sx={{ minWidth: 275 }}>
            <CardContent>
              <Typography variant="h5" component="div">
                Специалисты
              </Typography>
              <Typography
                sx={{ fontSize: 14 }}
                color="text.secondary"
                gutterBottom
              >
                <li>
                  Усеналиев Ч.Э <br />
                  Матиев Ы.Р <br /> Тынчтыкбеков Т.Т <br /> Жаманкулова Ф.{" "}
                  <br /> Исаева А.С <br /> Ишембиева Д.К <br /> Мусаев А.Д{" "}
                  <br /> Умиров Ч.Р <br /> Мамбетакунов Ж.А <br /> Урбаев Э.Э
                </li>
              </Typography>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Home;
