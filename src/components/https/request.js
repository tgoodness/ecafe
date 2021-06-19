import accessToken from "./accessToken";
import { url, adminUrl } from "./url";
import axios from "axios";


const requests = {
  formData(accessToken) {
    return {
      Authorization: "Bearer " + accessToken,
      "content-type": "multipart/form-data",
    };
  },

  authHeader(accessToken) {
    return {
      Authorization: "Bearer " + accessToken,
    };
  },

  async login(email, password) {
    const params = {
      email: email,
      password: password,
    };

    const token = await accessToken.generateToken();
    return await axios.post(adminUrl + "login", params, {
      headers: this.authHeader(token.data.data.token),
    });
  },

  async systemAnalysis() {
    const token = await accessToken.generateToken();
    return await axios.post(url + "student/students", null, {
      headers: this.authHeader(token.data.data.token),
    });
  },

  async accountSummary() {
    const token = await accessToken.generateToken();
    return await axios.post(url + "student/balance", null, {
      headers: this.authHeader(token.data.data.token),
    });
  },

  async registration() {
    const token = await accessToken.generateToken();
    return await axios.post(url + "student/students", null, {
      headers: this.authHeader(token.data.data.token),
    });
  },

  async markAsDone(formData) {
    const token = await accessToken.generateToken();
    return await axios.post(url + "student/mark-as-done", formData, {
      headers: this.formData(token.data.data.token),
    });
  },

  async declineTransaction(formData) {
    const token = await accessToken.generateToken();
    return await axios.post(url + "student/mark-as-done", formData, {
      headers: this.formData(token.data.data.token),
    });
  },

  bankList(token) {
    return axios.post(url + "student/banks", null, {
      headers: this.authHeader(token),
    });
  },

  async accountBalance() {
    const token = await accessToken.generateToken();

    const balance = await axios.post(url + "student/balance", null, {
      headers: this.authHeader(token.data.data.token),
    });

    const banks = await this.bankList(token.data.data.token);
    return { balance: balance, banks: banks };
  },

  async verifyAccountNumber(accountNumber, bankCode) {
    const params = {
      accountNumber: accountNumber,
      bankCode: bankCode,
    };
    const token = await accessToken.generateToken();
    return await axios.post(url + "student/resolve-account", params, {
      headers: this.authHeader(token.data.data.token),
    });
  },

  async transferFund(
    paymentReference,
    registrationId,
    accountNumber,
    bankCode
  ) {
    const params = {
      paymentReference: paymentReference,
      registrationId: registrationId,
      accountNumber: accountNumber,
      bankCode: bankCode,
    };
    const token = await accessToken.generateToken();
    return await axios.post(url + "student/refund", params, {
      headers: this.authHeader(token.data.data.token),
    });
  },

  async changePassword(oldPassword, newPassword, registrationId) {
    const params = {
      oPassword: oldPassword,
      nPassword: newPassword,
    };
    const token = await accessToken.generateToken();
    return await axios.patch(adminUrl + registrationId, params, {
      headers: this.authHeader(token.data.data.token),
    });
  },

  async changePin(oldPin, newPin, registrationId) {
    const params = {
      oldPin: oldPin,
      newPin: newPin,
    };
    const token = await accessToken.generateToken();
    return await axios.patch(adminUrl + registrationId, params, {
      headers: this.authHeader(token.data.data.token),
    });
  },

  async addSchool(schoolName) {
    const params = {
      schoolName: schoolName,
    };
    const token = await accessToken.generateToken();
    return await axios.post(url + "school/add", params, {
      headers: this.authHeader(token.data.data.token),
    });
  },

  async editSchool(schoolId, schoolName) {
    const params = {
      schoolId: schoolId,
      schoolName: schoolName,
    };
  
    const token = await accessToken.generateToken();
    return await axios.post(url + "school/edit", params, {
      headers: this.authHeader(token.data.data.token),
    });
  },

  async deleteSchool(schoolId) {
    const params = {
      schoolId: schoolId,
    };
    const token = await accessToken.generateToken();
    return await axios.post(url + "school/remove", params, {
      headers: this.authHeader(token.data.data.token),
    });
  },

  async schoolList() {
    const token = await accessToken.generateToken();
    return await axios.post(url + "school/schools", null, {
      headers: this.authHeader(token.data.data.token),
    });
  },

  async addPayment(paymentType, amount, charges, schoolId) {
    const params = {
      paymentType: paymentType,
      amount: amount,
      charges: charges,
      schoolId: schoolId,
    };
    const token = await accessToken.generateToken();
    return await axios.post(url + "price/add", params, {
      headers: this.authHeader(token.data.data.token),
    });
  },

  async editPayment(paymentType, amount, charges, id) {
    const params = {
      paymentType: paymentType,
      amount: amount,
      charges: charges,
      id: id,
    };
    const token = await accessToken.generateToken();
    return await axios.post(url + "price/edit", params, {
      headers: this.authHeader(token.data.data.token),
    });
  },

  async deletePayment(id) {
    const params = {
      id: id,
    };
    const token = await accessToken.generateToken();
    return await axios.post(url + "price/remove", params, {
      headers: this.authHeader(token.data.data.token),
    });
  },

  async paymentList() {
    const token = await accessToken.generateToken();
    return await axios.post(url + "price/prices", null, {
      headers: this.authHeader(token.data.data.token),
    });
  },
};

export default requests;
