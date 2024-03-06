import axios from "axios";

export const getClientsDetails = async (cedula) => {
  try {
    const data = await axios.post(
      "/api/v1/GetClientsDetails",
      {
        token: "SWJlQUR0b28zT3ZjQlAzRCt6VjlaQT09",
        cedula: "1900274034001",
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return data.data.datos[0].id;
  } catch (error) {
    return error instanceof Error ? error.message : error;
  }
};

export const getInvoices = async (client_id) => {
  try {
    const data = await axios.post(
      "/api/v1/GetInvoices",
      {
        token: "SWJlQUR0b28zT3ZjQlAzRCt6VjlaQT09",
        idcliente: client_id,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return data;
  } catch (error) {
    return error instanceof Error ? error.message : error;
  }
};

export const getInvoice = async (bill_id) => {
  try {
    const data = await axios.post(
      "/api/v1/GetInvoice",
      {
        token: "SWJlQUR0b28zT3ZjQlAzRCt6VjlaQT09",
        idfactura: bill_id,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return data;
  } catch (error) {
    return error instanceof Error ? error.message : error;
  }
};

export const getDebts = async (cedula) => {
  try {
    const data = await axios.post(
      "/facilito/consultadeuda/",
      {
        token: "SWJlQUR0b28zT3ZjQlAzRCt6VjlaQT09",
        cedula: cedula,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return data;
  } catch (error) {
    return error instanceof Error ? error.message : error;
  }
};
