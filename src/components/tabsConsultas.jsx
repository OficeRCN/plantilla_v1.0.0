import * as React from "react";

// COMPLEMENTS
import Stack from "@mui/material/Stack";
import Chip from "@mui/material/Chip";
import Button from "@mui/material/Button";

// TABS
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

// TABLE
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";

// FORM
import { Formik } from "formik";
import TextField from "@mui/material/TextField";

// ICONS
import SearchIcon from "@mui/icons-material/Search";

// API REQUEST
import {
  getClientsDetails,
  getInvoices,
  getInvoice,
  getDebts,
} from "../api/Consultas";

// CONFIGS
import {
  columnsConsultas,
  columnsListar,
  columnsDatos,
} from "../configs/configs";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export function ConsultTabs() {
  const [value, setValue] = React.useState(0);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [consultasRow, setConsultasRow] = React.useState([]);
  const [listarRow, setConsultasListarRow] = React.useState([]);
  const [datosRow, setConsultasDatosRow] = React.useState([]);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleSetConsultasRow = async (values) => {
    const data = await getDebts(values.cedula);
    setConsultasRow(data.data.facturas);
  };

  const handleSetListarRow = async (values) => {
    const id = await getClientsDetails(values.cedula);
    const listar = await getInvoices(id);
    setConsultasListarRow(listar.data.facturas);
  };

  const handleSetDatosRow = async (values) => {
    const data = await getInvoice(values.codigo);
    setConsultasDatosRow((prevArray) => [...prevArray, data.data.factura]);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Typography
        variant="h6"
        align="center"
        mt={6}
        mb={2}
        sx={{ fontSize: { xs: "1.3rem", sm: "2rem", md: "2rem" } }}
      >
        Tenga a la mano su número de cédula.
      </Typography>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          variant="scrollable"
          scrollButtons="auto"
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="Consultas Deuda (Facilito)" {...a11yProps(0)} />
          <Tab label="Listar facturas" {...a11yProps(1)} />
          <Tab label="Datos facturas" {...a11yProps(2)} />
        </Tabs>
      </Box>
      {/* TAB 1 */}
      <CustomTabPanel value={value} index={0}>
        {/* FORM */}
        <Formik
          initialValues={{ cedula: "" }}
          validate={(values) => {
            const errors = {};
            if (!values.cedula) {
              errors.cedula = (
                <Typography color="red" variant="subtitle">
                  *Cedula requerida*
                </Typography>
              );
            }
            return errors;
          }}
          onSubmit={(values, { setSubmitting }) => {
            handleSetConsultasRow(values);
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
          }) => (
            <form onSubmit={handleSubmit} style={{ height: "100%" }}>
              <Stack
                direction="column"
                spacing={2}
                justifyContent="center"
                alignItems="center"
                margin="auto"
                height="100%"
                width="60%"
              >
                <Stack direction="row" width="60%" gap={1}>
                  <TextField
                    type="text"
                    name="cedula"
                    placeholder="1209999999"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.cedula}
                    disabled={isSubmitting}
                    fullWidth
                  />
                  <Button
                    variant="outlined"
                    type="submit"
                    disabled={isSubmitting}
                    wid
                    startIcon={<SearchIcon />}
                    sx={{ fontSize: { xs: "0", sm: "0.6rem", md: "0.8rem" } }}
                  >
                    Buscar
                  </Button>
                </Stack>
                {errors.cedula && touched.cedula && errors.cedula}
              </Stack>
            </form>
          )}
        </Formik>
        {/* TABLE */}
        <Paper sx={{ width: "100%", overflow: "hidden" }}>
          <TableContainer sx={{ maxHeight: 440 }}>
            <Table stickyHeader aria-label="sticky table">
              <TableHead>
                <TableRow>
                  {columnsConsultas.map((column) => (
                    <TableCell
                      key={column.id}
                      align={column.align}
                      style={{ minWidth: column.minWidth }}
                    >
                      {column.label}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {consultasRow
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row) => {
                    // Extraer número de comprobante y fecha del detalle
                    const detalleSplit = row.detalle.split(" - ");
                    const numeroComprobanteMatch =
                      detalleSplit[0].match(/Nº (\d+)/);
                    const numeroComprobante = numeroComprobanteMatch
                      ? numeroComprobanteMatch[1]
                      : "";

                    const fechaVencimiento = new Date(
                      detalleSplit[1].split(": ")[1]
                    );

                    // Calcular si está vencido
                    const hoy = new Date();
                    const estaVencido = fechaVencimiento < hoy;
                    return (
                      <TableRow
                        hover
                        role="checkbox"
                        tabIndex={-1}
                        key={row.IDFactura}
                      >
                        {columnsConsultas.map((column) => {
                          let value;
                          if (column.id === "ncomprobante") {
                            value = numeroComprobante;
                          } else if (column.id === "status") {
                            value = estaVencido ? "Vencido" : "No sin deuda";
                          } else if (column.id === "vencimiento") {
                            value = detalleSplit[1].split(": ")[1];
                          } else {
                            value = row[column.id];
                          }
                          return (
                            <TableCell key={column.id} align={column.align}>
                              {column.format && typeof value === "number"
                                ? column.format(value)
                                : value}
                            </TableCell>
                          );
                        })}
                      </TableRow>
                    );
                  })}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[10, 25, 100]}
            component="div"
            count={consultasRow.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Paper>
      </CustomTabPanel>
      {/* TAB 2 */}
      <CustomTabPanel value={value} index={1}>
        {/* FORM */}
        <Formik
          initialValues={{ cedula: "" }}
          validate={(values) => {
            const errors = {};
            if (!values.cedula) {
              errors.cedula = (
                <Typography color="red" variant="subtitle">
                  *Cedula requerida*
                </Typography>
              );
            }
            return errors;
          }}
          onSubmit={(values, { setSubmitting }) => {
            handleSetListarRow(values);
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
          }) => (
            <form onSubmit={handleSubmit} style={{ height: "100%" }}>
              <Stack
                direction="column"
                spacing={2}
                justifyContent="center"
                alignItems="center"
                margin="auto"
                height="100%"
                width="60%"
              >
                <Stack direction="row" width="60%" gap={1}>
                  <TextField
                    type="text"
                    name="cedula"
                    placeholder="1209999999"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.cedula}
                    disabled={isSubmitting}
                    fullWidth
                  />
                  <Button
                    variant="outlined"
                    type="submit"
                    disabled={isSubmitting}
                    startIcon={<SearchIcon />}
                    sx={{ fontSize: { xs: "0", sm: "0.6rem", md: "0.8rem" } }}
                  >
                    Buscar
                  </Button>
                </Stack>
                {errors.cedula && touched.cedula && errors.cedula}
              </Stack>
            </form>
          )}
        </Formik>
        {/* TABLE */}
        <Paper sx={{ width: "100%", overflow: "hidden" }}>
          <TableContainer sx={{ maxHeight: 440 }}>
            <Table stickyHeader aria-label="sticky table">
              <TableHead>
                <TableRow>
                  {columnsListar.map((column) => (
                    <TableCell
                      key={column.id}
                      align={column.align}
                      style={{ minWidth: column.minWidth }}
                    >
                      {column.label}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {listarRow
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row, index) => {
                    return (
                      <TableRow hover role="checkbox" tabIndex={-1} key={index}>
                        {columnsListar.map((column) => {
                          let value;
                          if (column.id === "fecha_pago") {
                            value = row.fechapago;
                          } else if (column.id === "forma_pago") {
                            value = row.formapago;
                          } else {
                            value = row[column.id];
                          }
                          if (column.id === "pagado") {
                            value =
                              row.estado === "pagado" ? (
                                <Chip
                                  label="Pagado"
                                  color="green"
                                  variant="outlined"
                                />
                              ) : (
                                <Chip
                                  label="Vencido"
                                  color="red"
                                  variant="outlined"
                                />
                              );
                          }

                          return (
                            <TableCell key={column.id} align={column.align}>
                              {column.format && typeof value === "number"
                                ? column.format(value)
                                : value}
                            </TableCell>
                          );
                        })}
                      </TableRow>
                    );
                  })}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[10, 25, 100]}
            component="div"
            count={listarRow.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Paper>
      </CustomTabPanel>
      {/* TAB  */}
      <CustomTabPanel value={value} index={2}>
        {/* FORM */}
        <Formik
          initialValues={{ codigo: "" }}
          validate={(values) => {
            const errors = {};
            if (!values.codigo) {
              errors.codigo = (
                <Typography color="red" variant="subtitle">
                  *Código de factura requerido*
                </Typography>
              );
            }
            return errors;
          }}
          onSubmit={(values, { setSubmitting }) => {
            handleSetDatosRow(values);
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
          }) => (
            <form onSubmit={handleSubmit} style={{ height: "100%" }}>
              <Stack
                direction="column"
                spacing={2}
                justifyContent="center"
                alignItems="center"
                margin="auto"
                height="100%"
                width="60%"
              >
                <Stack direction="row" width="60%" gap={1}>
                  <TextField
                    type="text"
                    name="codigo"
                    placeholder="00000"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.codigo}
                    disabled={isSubmitting}
                    fullWidth
                  />
                  <Button
                    variant="outlined"
                    type="submit"
                    disabled={isSubmitting}
                    startIcon={<SearchIcon />}
                    sx={{ fontSize: { xs: "0", sm: "0.6rem", md: "0.8rem" } }}
                  >
                    Buscar
                  </Button>
                </Stack>
                {errors.cedula && touched.cedula && errors.cedula}
              </Stack>
            </form>
          )}
        </Formik>
        {/* TABLE */}
        <Paper sx={{ width: "100%", overflow: "hidden" }}>
          <TableContainer sx={{ maxHeight: 440 }}>
            <Table stickyHeader aria-label="sticky table">
              <TableHead>
                <TableRow>
                  {columnsDatos.map((column) => (
                    <TableCell
                      key={column.id}
                      align={column.align}
                      style={{ minWidth: column.minWidth }}
                    >
                      {column.label}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {datosRow.map((row, index) => {
                  console.log(row);
                  return (
                    <TableRow hover role="checkbox" tabIndex={-1} key={index}>
                      {columnsDatos.map((column) => {
                        let value;
                        if (column.id === "fecha_pago") {
                          value = row.fechapago;
                        } else if (column.id === "forma_pago") {
                          value = row.formapago;
                        } else {
                          value = row[column.id];
                        }
                        return (
                          <TableCell key={column.id} align={column.align}>
                            {column.format && typeof value === "number"
                              ? column.format(value)
                              : value}
                          </TableCell>
                        );
                      })}
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[10, 25, 100]}
            component="div"
            count={listarRow.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Paper>
      </CustomTabPanel>
    </Box>
  );
}
