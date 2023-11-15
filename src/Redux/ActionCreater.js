import axios from "axios";
import { AddRequest, RemoveRequest, UpdateRequest, getAllRequestFail, getAllRequestSuccess, getbycodeSuccess, makeRequest } from "./Action";
import { toast } from "react-toastify";

const BASE_URL = "https://company-server-4dek.onrender.com"; // Replace with your Render backend URL

export const GetAllCompanys = () => {
  return (dispatch) => {
    dispatch(makeRequest());
    setTimeout(() => {
      axios.get(`${BASE_URL}/company`)
        .then(res => {
          const _list = res.data;
          dispatch(getAllRequestSuccess(_list));
        })
        .catch(err => {
          dispatch(getAllRequestFail(err.message));
        });
    }, 1000);
  };
};

export const GetCompanybycode = (code) => {
  return (dispatch) => {
    axios.get(`${BASE_URL}/company/${code}`)
      .then(res => {
        const _obj = res.data;
        dispatch(getbycodeSuccess(_obj));
      })
      .catch(err => {
        toast.error('Failed to fetch the data');
      });
  };
};

export const CreateCompany = (data) => {
  return (dispatch) => {
    axios.post(`${BASE_URL}/company`, data)
      .then(res => {
        dispatch(AddRequest(data));
        toast.success('Company created successfully.');
      })
      .catch(err => {
        toast.error(`Failed to create company due to: ${err.message}`);
      });
  };
};

export const UpdateCompany = (data) => {
  return (dispatch) => {
    axios.put(`${BASE_URL}/company/${data.id}`, data)
      .then(res => {
        dispatch(UpdateRequest(data));
        toast.success('Company updated successfully.');
      })
      .catch(err => {
        toast.error(`Failed to update company due to: ${err.message}`);
      });
  };
};

export const RemoveCompany = (code) => {
  return (dispatch) => {
    axios.delete(`${BASE_URL}/company/${code}`)
      .then(res => {
        dispatch(RemoveRequest(code));
        toast.success('Company removed successfully.');
      })
      .catch(err => {
        toast.error(`Failed to remove company due to: ${err.message}`);
      });
  };
};
