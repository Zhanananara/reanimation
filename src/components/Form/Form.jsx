import React, { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Button, Input } from "@mui/material";
import { NavLink, useParams } from "react-router-dom";
import Checkbox from "@mui/material/Checkbox";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import "./Form.css";
import Stack from "@mui/material/Stack";

const initValues = {
  name: "",
  type: "",
  date: "",
  description: "",
  datehp: "",
  allergy: "",
  blood: "",
};

const Form = ({ saveValues, compForEdit, forEditVal, getOneProduct }) => {
  const [inpValues, setInpValues] = useState(initValues);
  const { id } = useParams();
  const [checked, setChecked] = React.useState(true);

  //todo ===> EDIT
  useEffect(() => {
    if (compForEdit) {
      getOneProduct(id);
    }
  }, []);
  useEffect(() => {
    if (compForEdit && forEditVal) {
      setInpValues(forEditVal);
    }
  }, [forEditVal]);

  //todo ===> END OF EDIT

  const handleChange = (e) => {
    let obj = {
      ...inpValues,
      [e.target.name]: e.target.value,
    };
    setInpValues(obj);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    let obj = {
      ...inpValues,
    };
    saveValues(obj);
  };

  const handleChangecheck = (event) => {
    setChecked(event.target.checked);
  };
  return (
    <div className="form-border">
      <form
        onSubmit={(e) => handleSubmit(e)}
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <TextField
          name="name"
          value={inpValues.name}
          onChange={(e) => handleChange(e)}
          id="standard-basic"
          label="ФИО"
          variant="standard"
          sx={{ color: "white" }}
          margin="normal"
        />
        <FormControl fullWidth margin="normal">
          <InputLabel id="demo-simple-select-label">Переведен</InputLabel>
          <Select
            labelId="demo-simple-select-standard-label"
            id="demo-simple-select-standard"
            name="type"
            value={inpValues.type}
            label="Type"
            onChange={(e) => handleChange(e)}
          >
            <MenuItem value={"Кардиология"}>Кардиология</MenuItem>
            <MenuItem value={"Неврология"}>Неврология</MenuItem>
            <MenuItem value={"Хирургия"}>Хирургия</MenuItem>
            <MenuItem value={"Терапия"}>Терапия</MenuItem>
          </Select>
        </FormControl>
        {/* <TextField
          type="number"
          name="date"
          value={inpValues.date}
          onChange={(e) => handleChange(e)}
          id="standard-basic"
          label="Дата рождения "
          variant="standard"
          margin="normal"
        /> */}
        <Stack component="form" noValidate spacing={3}>
          <TextField
            id="date"
            label="Дата рождения"
            type="date"
            defaultValue="2022-06-07"
            sx={{ width: 220 }}
            InputLabelProps={{
              shrink: true,
            }}
          />
        </Stack>
        <TextField
          name="allergy"
          value={inpValues.allergy}
          onChange={(e) => handleChange(e)}
          id="standard-basic"
          label="Аллергия"
          variant="standard"
        />
        <div className="blood">
          <TextField
            name="blood"
            value={inpValues.img}
            onChange={(e) => handleChange(e)}
            id="standard-basic"
            label="Резус фактор"
            variant="standard"
          />
          <FormGroup>
            <FormControlLabel
              control={
                <Checkbox
                  checked={checked}
                  onChange={handleChangecheck}
                  inputProps={{ "aria-label": "controlled" }}
                />
              }
              label="1"
            />
            <FormControlLabel control={<Checkbox defaultChecked />} label="2" />
            <FormControlLabel control={<Checkbox defaultChecked />} label="3" />
            <FormControlLabel control={<Checkbox defaultChecked />} label="4" />
          </FormGroup>
          <FormGroup>
            <FormControlLabel control={<Checkbox defaultChecked />} label="+" />
            <FormControlLabel control={<Checkbox defaultChecked />} label="-" />
          </FormGroup>
        </div>
        <FormControl fullWidth margin="normal">
          <InputLabel id="demo-simple-select-label">Состояние</InputLabel>
          <Select
            labelId="demo-simple-select-standard-label"
            id="demo-simple-select-standard"
            name="description"
            value={inpValues.description}
            label="Type"
            onChange={(e) => handleChange(e)}
          >
            <MenuItem value={"Удовлетворительное"}>Удовлетворительное</MenuItem>
            <MenuItem value={"Средней тяжести"}>Средней тяжести</MenuItem>
            <MenuItem value={"Тяжелое"}>Тяжелое</MenuItem>
            <MenuItem value={"Терминальное"}>Терминальное</MenuItem>
          </Select>
        </FormControl>

        {/* <TextField
          type="number"
          name="datehp"
          value={inpValues.datehp}
          onChange={(e) => handleChange(e)}
          id="standard-basic"
          label="Дата госпитализации"
          variant="standard"
          multiline
          rows={3}
          margin="normal"
        /> */}
        <Stack component="form" noValidate spacing={3}>
          <TextField
            id="datetime-local"
            label="Дата госпитализации"
            type="datetime-local"
            defaultValue="2017-05-24T10:30"
            sx={{ width: 250 }}
            InputLabelProps={{
              shrink: true,
            }}
          />
        </Stack>
        <FormControl fullWidth margin="normal">
          <InputLabel id="demo-simple-select-label">Лечащий врач</InputLabel>
          <Select
            labelId="demo-simple-select-standard-label"
            id="demo-simple-select-standard"
            name="doctor"
            value={inpValues.doctor}
            label="Type"
            onChange={(e) => handleChange(e)}
          >
            <MenuItem value={"Усеналиев Чолпонбек Эркинбекович"}>
              Усеналиев Чолпонбек Эркинбекович
            </MenuItem>
            <MenuItem value={"Матиев Ысакбек Рашидович"}>
              Матиев Ысакбек Рашидович
            </MenuItem>
            <MenuItem value={"Тынчтыкбеков Талант Тынчтыкбекович"}>
              Тынчтыкбеков Талант Тынчтыкбекович
            </MenuItem>
            <MenuItem value={"Исаева Айгерим Сапаргалиевна"}>
              Исаева Айгерим Сапаргалиевна
            </MenuItem>
            <MenuItem value={"Жаманкулова Фарида ахмеджановна"}>
              Жаманкулова Фарида Ахмеджановна
            </MenuItem>
          </Select>
        </FormControl>

        <NavLink to="/list">
          <Button
            type="submit"
            variant="contained"
            sx={{ backgroundColor: "black", marginBottom: "20px" }}
          >
            Добавить
          </Button>
        </NavLink>
      </form>
    </div>
  );
};

export default Form;
