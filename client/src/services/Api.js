/**
 * file: src/services/Api.js
 * data: 01/03/2023
 * description: file responsible for initializing 'axios' and
 * HTTP base url requests
 * author: Glaucia Lemos <twitter: @glaucia_lemos86>
 */

import axios from "axios";

export default () =>
  axios.create({
    // ==> ASWA request (development/production)
    baseURL: "/data-api/rest",
  });
