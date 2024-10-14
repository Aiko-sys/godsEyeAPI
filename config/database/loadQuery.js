const fs = require('fs').promises;

let queries = null; 
const loadQueries = async () => {
  if (!queries) {
    try {
      const data = await fs.readFile('./config/database/queries.json', 'utf8');
      queries = JSON.parse(data); 
    } catch (error) {
      console.error('Erro ao ler o arquivo JSON:', error);
      throw error;
    }
  }
  return queries;
};

module.exports = { loadQueries };
