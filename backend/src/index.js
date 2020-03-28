const express = require('express');
const cors = require('cors');
const routes = require('./routes');
const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
app.listen(3333);
/**
 * Metodos Htto:
 * GET
 * POST
 * PUT
 * DELETE
 * 
 * Tipos de parametros:
 * 
 * Query Params: Parametros nomeados apos o ? usados para filtros,paginação
 * Route Params: Parametros para identificar recurssos
 * Request Body: Parametros do corpo da requisição, utilizado para criar ou alterar recursos
 * 
 */

 /**
  * SQL: MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Server
  * NoSQL: MongoDB, CouchDB, etc
  */

  /**
   * Driver: SELECT * FROM users
   * Query Builder: table('users').select
   */


